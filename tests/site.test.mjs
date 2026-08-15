import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";

const siteDir = resolve(process.env.SITE_DIR || "public");

function readSiteFile(path) {
  const fullPath = resolve(siteDir, path);
  assert.ok(existsSync(fullPath), `missing rendered file: ${path}`);
  return readFileSync(fullPath, "utf8");
}

function metaContent(html, attribute, value) {
  const escaped = value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = html.match(
    new RegExp(
      `<meta\\s+${attribute}=(?:"${escaped}"|'${escaped}'|${escaped})\\s+content=(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`,
    ),
  );
  assert.ok(match, `missing meta ${attribute}=${value}`);
  return match[1] ?? match[2] ?? match[3];
}

function jsonLd(html) {
  return [...html.matchAll(/<script type=(?:"application\/ld\+json"|application\/ld\+json)>\s*([\s\S]*?)\s*<\/script>/g)]
    .map((match) => JSON.parse(match[1]));
}

const home = readSiteFile("index.html");
const sitemap = readSiteFile("sitemap.xml");
const robots = readSiteFile("robots.txt");
const llms = readSiteFile("llms.txt");
const description = metaContent(home, "name", "description");

test("homepage metadata describes current work", () => {
  const title = "Danny On The Air — Security Engineer in Vietnam";

  assert.match(home, /<html lang=(?:"en-US"|en-US)/);
  assert.match(home, new RegExp(`<title>${title}</title>`));
  assert.match(description, /Rust and Go/);
  assert.match(description, /regulatory research, compliance/);
  assert.match(description, /Go SDKs/);
  assert.ok(description.length <= 160, "meta description exceeds 160 characters");
  assert.equal(metaContent(home, "property", "og:title"), title);
  assert.equal(metaContent(home, "property", "og:description"), description);
  assert.equal(metaContent(home, "name", "twitter:title"), title);
  assert.equal(metaContent(home, "name", "twitter:description"), description);
  assert.equal(metaContent(home, "property", "og:locale"), "en_US");
});

test("homepage has section navigation and compact catalogs", () => {
  assert.match(home, /<nav class=(?:"directory"|directory) aria-label="Page sections">/);
  for (const id of [
    "security-as-code",
    "regulatory-ai",
    "compliance-ai",
    "security-research",
    "open-source",
  ]) {
    assert.match(home, new RegExp(`href=(?:"#${id}"|#${id})`));
    assert.match(
      home,
      new RegExp(`<section class=(?:"entry"|entry) id=(?:"${id}"|${id})>`),
    );
  }

  assert.doesNotMatch(home, /href=(?:"#go-sdks"|#go-sdks)/);
  assert.doesNotMatch(home, /id=(?:"go-sdks"|go-sdks)/);

  const openSource = home.match(
    /<section class=(?:"entry"|entry) id=(?:"open-source"|open-source)>([\s\S]*?)<\/section>/,
  )?.[1];
  assert.ok(openSource, "missing Open Source section");

  const [visibleProjects, sdkCatalog] = openSource.split(
    /<details class=(?:"catalog"|catalog)>/,
  );
  assert.match(visibleProjects, /onnxruntime\/go/);
  assert.match(sdkCatalog, /show 8 Go SDKs and platforms/);
  assert.match(sdkCatalog, /href=(?:"\/s1"|\/s1)/);
  assert.match(sdkCatalog, /href=(?:"\/kaggle"|\/kaggle)/);

  assert.equal((home.match(/<details class=(?:"catalog"|catalog)>/g) || []).length, 2);
  assert.equal((home.match(/id=(?:"theme-toggle"|theme-toggle)/g) || []).length, 1);
});

test("directory uses accessible icon-only controls", () => {
  const directory = home.match(/<nav class=(?:"directory"|directory)[^>]*>([\s\S]*?)<\/nav>/)?.[1];
  assert.ok(directory, "missing page directory");
  assert.doesNotMatch(directory, /index:/i);
  assert.doesNotMatch(directory, />\s*github\s*</i);
  assert.doesNotMatch(directory, />\s*theme(?:=(?:light|dark))?\s*</i);
  assert.match(directory, /aria-label="GitHub profile"/);
  assert.match(directory, /aria-label="toggle theme"/);
  assert.match(directory, /class="icon icon-github"/);
  assert.match(directory, /class="icon icon-sun"/);
  assert.match(directory, /class="icon icon-moon"/);

  for (const name of ["github", "sun", "moon"]) {
    assert.match(readSiteFile(`icons/${name}.svg`), /^<svg /);
  }
});

test("homepage markup complies with the strict style policy", () => {
  assert.doesNotMatch(home, /\sstyle=/);
  assert.doesNotMatch(home, /Last login:/);
  assert.doesNotMatch(home, /<span class=(?:"sr-only"|sr-only)>GitHub<\/span>/);

  const icon = home.match(
    /<link rel=(?:"icon"|icon) href=(?:"([^"]+)"|([^\s>]+))>/,
  );
  assert.ok(icon, "missing favicon");
  assert.equal(icon[1] ?? icon[2], "/favicon.svg");
  assert.match(readSiteFile("favicon.svg"), /^<svg /);
});

test("JSON-LD is parseable and accurate", () => {
  const documents = jsonLd(home);
  assert.equal(documents.length, 1);

  const graph = documents[0]["@graph"];
  assert.ok(Array.isArray(graph));

  const website = graph.find((value) => value["@type"] === "WebSite");
  const person = graph.find((value) => value["@type"] === "Person");
  const projects = graph.find((value) => value["@type"] === "ItemList");
  assert.ok(website, "missing WebSite node");
  assert.ok(person, "missing Person node");
  assert.ok(projects, "missing ItemList node");
  assert.equal(website.name, "Danny On The Air");
  assert.deepEqual(website.alternateName, ["danny.vn"]);
  assert.equal(person.description, description);
  assert.deepEqual(person.sameAs, ["https://github.com/dannyota"]);
  assert.ok(person.knowsAbout.includes("Rust programming language"));
  assert.equal(person.image, undefined);

  const projectNames = projects.itemListElement.map((entry) => entry.item.name);
  assert.deepEqual(projectNames, [
    "elasticctl",
    "splunkctl",
    "s1ctl",
    "secopsctl",
    "compliary",
    "offthebook",
  ]);
});

test("machine-readable discovery files match indexing policy", () => {
  const locations = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(
    (match) => match[1],
  );
  assert.deepEqual(locations, ["https://danny.vn/"]);
  assert.match(robots, /User-agent: OAI-SearchBot\s+Allow: \//);
  assert.match(robots, /User-agent: GPTBot\s+Disallow: \//);
  assert.match(llms, /\[elasticctl\]\(https:\/\/github\.com\/dannyota\/elasticctl\)/);
  assert.match(llms, /written in Rust/);
  assert.match(llms, /MCP server is planned/);
});

test("homepage visible content includes Rust and elasticctl", () => {
  assert.match(home, /Rust, Go, C, and Python/);
  assert.match(home, /href=(?:"https:\/\/github\.com\/dannyota\/elasticctl"|https:\/\/github\.com\/dannyota\/elasticctl)/);
  assert.match(home, /MCP after its CLI surface is stable/);
});

const vanityPages = readdirSync(resolve("content"), { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => {
    const source = readFileSync(resolve("content", entry.name, "_index.md"), "utf8");
    const importPrefix = source.match(/^import_prefix:\s*(.+)$/m)?.[1];
    const repository = source.match(/^repo:\s*(.+)$/m)?.[1];
    assert.ok(importPrefix, `missing import_prefix for ${entry.name}`);
    assert.ok(repository, `missing repo for ${entry.name}`);
    return { directory: entry.name, importPrefix, repository };
  });

test("Go vanity pages keep import discovery while staying out of search", () => {
  assert.equal(vanityPages.length, 9);

  for (const { directory, importPrefix, repository } of vanityPages) {
    const page = readSiteFile(`${directory}/index.html`);
    assert.match(page, /<meta name=(?:"robots"|robots) content="noindex, nofollow">/);
    assert.match(
      page,
      new RegExp(
        `<meta name=(?:"go-import"|go-import) content="${importPrefix} git ${repository}">`,
      ),
    );
    assert.match(
      page,
      new RegExp(`<meta name=(?:"go-source"|go-source) content="${importPrefix} ${repository}`),
    );
    assert.match(
      page,
      new RegExp(`url=https://pkg.go.dev/${importPrefix}`),
    );
  }
});
