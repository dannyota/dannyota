---
title: "Danny"
hero:
  cmd: "whoami"
  greeting: "Hey, I'm Danny 👋"
  intro: |
    Security engineer in Vietnam. I build tools that run security platforms as code, products people use every day, and the occasional deep dive into how things work. Mostly Rust, Go, C, and Python.
sections:
  - id: "security-as-code"
    cmd: "ls ~/security-as-code/"
    title: "Security as Code"
    body: |
      Security operations should be reviewable like code. I build CLIs that pull live platform state into files, show meaningful diffs, and push approved changes back:

      - [`splunkctl`](https://splunkctl.danny.vn) — Splunk Enterprise, Enterprise Security, and Splunk SOAR — search, detection rules as YAML, notable triage, SOAR cases and playbooks, and configuration drift with change reports; Python, on PyPI
      - [`s1ctl`](https://github.com/dannyota/s1ctl) — SentinelOne Singularity — configuration across 11 surfaces, drift detection for CI, agents, threats, remote operations, xSPM, marketplace, and Data Lake queries
      - [`secopsctl`](https://github.com/dannyota/secops) — Google SecOps (Chronicle SIEM and Siemplify SOAR) — detection rules, parsers, dashboards, and SOAR playbooks
      - [`elasticctl`](https://github.com/dannyota/elasticctl) — Elastic Security detection rules as code across self-managed, Elastic Cloud Hosted, and Serverless deployments; written in Rust

      All four preview remote changes and apply them only with `--yes`. Each ships a Model Context Protocol (MCP) server so AI agents use the same commands; `elasticctl` exposes read-only inspection tools.
  - id: "building"
    cmd: "ls ~/building/"
    title: "Building"
    body: |
      - [`aboutme`](https://aboutme.vn) — a free, open-source resume builder for Vietnamese and English. Write a resume, publish it at its own link, and export a PDF. Go, Nuxt, and PostgreSQL; live since October 2026. [Source](https://github.com/dannyota/aboutme)
      - [`trachuan`](https://github.com/dannyota/trachuan) — a citable corpus of Vietnamese law for AI agents (over MCP) and people. Evidence only: verbatim provisions with citations, validity, and amendment context. In early development.

      Earlier regulatory and compliance work, now archived: [`banhmi`](https://github.com/dannyota/banhmi) (ASEAN banking regulation over MCP), [`compliary`](https://github.com/dannyota/compliary) (security framework citations), and [`mise`](https://github.com/dannyota/mise) (regulatory intelligence for banks).
  - id: "open-source"
    cmd: "ls ~/tools/"
    title: "Open Source"
    intro: |
      I publish tools I use and contribute upstream when the work belongs in a shared project.

      - [`onnxruntime/go`](https://github.com/microsoft/onnxruntime/pull/29615) — official Go bindings for the ONNX Runtime C API via CGO, merged into `microsoft/onnxruntime`; covers sessions, tensor I/O, I/O binding, and execution providers
      - [`splunk-sdk-python`](https://github.com/dannyota/splunk-sdk-python) — Splunk SDK for Python
      - [`flowcvcli`](https://github.com/dannyota/flowcvcli) — controls a FlowCV resume from the command line or Python, including content, design, templates, avatar, publishing, and PDF export
    summary: "show 7 Go SDKs and platforms"
    body: |

      | Package | Platform |
      |---------|----------|
      | [`s1`](/s1) | SentinelOne Singularity — agents, policies, threats, remote shell |
      | [`secops`](/secops) | Google SecOps — Chronicle SIEM + Siemplify SOAR |
      | [`vngcloud`](/vngcloud) | GreenNode (formerly VNG Cloud) — SDK and AWS-style CLI |
      | [`fortigate`](/fortigate) | FortiGate firewall REST API |
      | [`fortimgr`](/fortimgr) | FortiManager FlatUI API |
      | [`nessus`](/nessus) | Tenable Nessus scanner (read-only) |
      | [`kaggle`](/kaggle) | Kaggle API — kernels, datasets, token introspection |
---
