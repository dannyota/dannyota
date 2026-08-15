---
title: "Danny On The Air"
hero:
  cmd: "whoami"
  greeting: "Hey, I'm Danny 👋"
  intro: |
    I'm a security engineer in Vietnam. I build tools for security operations, regulatory research, and systems work—mostly in Rust, Go, C, and Python. When something I build could help others, I open-source it.
sections:
  - id: "security-as-code"
    cmd: "ls ~/security-as-code/"
    title: "Security as Code"
    body: |
      Security operations should be reviewable like code. I build CLIs that pull live platform state into files, show meaningful diffs, and push approved changes back:

      - [`splunkctl`](https://github.com/dannyota/splunkctl) — Splunk Enterprise SIEM and Splunk SOAR — rules, parsers, macros, lookups, dashboards, SOAR playbooks, incident review, and SIEM-to-SOAR ingest
      - [`s1ctl`](https://github.com/dannyota/s1ctl) — SentinelOne Singularity — configuration across 11 surfaces, drift detection for CI, agents, threats, remote operations, xSPM, marketplace, and Data Lake queries
      - [`secopsctl`](https://github.com/dannyota/secops) — Google SecOps (Chronicle SIEM and Siemplify SOAR) — detection rules, parsers, dashboards, and SOAR playbooks
      - [`elasticctl`](https://github.com/dannyota/elasticctl) — Elastic Security detection rules as code across self-managed, Elastic Cloud Hosted, and Serverless deployments; written in Rust

      All four preview remote mutations and require `--yes` to apply them. The three Go CLIs include built-in Model Context Protocol (MCP) servers, machine-readable command trees, and embedded agent guides. `elasticctl` plans MCP after its CLI surface is stable.
  - id: "regulatory-ai"
    cmd: "cat regulatory-ai.md"
    title: "Regulatory AI"
    body: |
      Regulatory answers should point back to the law. These retrieval-augmented generation (RAG) and MCP servers find exact provisions in official sources and link each result to the source text:

      | Server | Jurisdiction | Official sources |
      |--------|--------------|------------------|
      | [`banhmi`](https://banhmi.danny.vn) | 🇻🇳 Vietnam | State Bank of Vietnam · Ministry of Justice |
      | [`laksa`](https://laksa.danny.vn) | 🇲🇾 Malaysia | Bank Negara Malaysia · Securities Commission |
      | [`rendang`](https://rendang.danny.vn) | 🇮🇩 Indonesia | OJK · Bank Indonesia · BPK JDIH |
      | [`kaya`](https://kaya.danny.vn) | 🇸🇬 Singapore | MAS · PDPC · CSA |
      | [`tomyum`](https://tomyum.danny.vn) | 🇹🇭 Thailand | Bank of Thailand · SEC · ETDA |
      | [`amok`](https://amok.danny.vn) | 🇰🇭 Cambodia | National Bank of Cambodia |

      One codebase, one corpus per country, across six ASEAN jurisdictions. The public endpoints are free and require no signup.
  - id: "compliance-ai"
    cmd: "cat compliance-ai.md"
    title: "Compliance AI"
    intro: |
      [`compliary`](https://github.com/dannyota/compliary) applies the same approach to security and compliance frameworks. It returns exact control citations (`A.5.1`, `AC-2(3)`, `Req 8.3.6`), tracks version lineage so superseded text is not presented as current, and records the provenance of cross-framework mappings.
    summary: "show 15 frameworks and publishers"
    body: |

      | Framework | Covers | Publisher |
      |-----------|--------|-----------|
      | ISO/IEC 27001 | Information security management (ISMS) | ISO/IEC |
      | ISO/IEC 27002 | Information security controls | ISO/IEC |
      | ISO/IEC 27017 | Cloud security controls | ISO/IEC |
      | ISO/IEC 27018 | PII protection in public clouds | ISO/IEC |
      | ISO/IEC 27701 | Privacy information management | ISO/IEC |
      | ISO 22301 | Business continuity management | ISO |
      | ISO/IEC 42001 | AI management systems | ISO/IEC |
      | NIST CSF 2.0 | Cybersecurity risk framework | NIST |
      | NIST SP 800-53 r5 | Security & privacy control catalog | NIST |
      | SOC 2 | Service-organization trust criteria | AICPA |
      | PCI DSS v4.0.1 | Payment card data security | PCI SSC |
      | CIS Controls v8.1 | Prioritized defensive safeguards | CIS |
      | SWIFT CSCF v2026 | SWIFT member security controls | SWIFT |
      | CSA CCM v4.1 | Cloud controls matrix | CSA |
      | COBIT 2019 | IT governance & management | ISACA |

      Framework text is licensed. The repo ships code and metadata; each operator builds and runs a private corpus, so there is no shared public endpoint.
  - id: "security-research"
    cmd: "cat research/offthebook.txt"
    title: "Security Research"
    body: |
      I also work closer to the operating system when the problem calls for it.

      - [`offthebook`](https://github.com/dannyota/offthebook) — a memory-only Windows PE execution project. It reconstructs loader state and explores SMB-over-QUIC `SEC_IMAGE` loading, with position-independent shellcode in pure C (MSVC and Clang).
  - id: "open-source"
    cmd: "ls ~/tools/"
    title: "Open Source"
    intro: |
      I publish tools I use and contribute upstream when the work belongs in a shared project.

      - [`onnxruntime/go`](https://github.com/microsoft/onnxruntime/pull/29615) — official Go bindings for the ONNX Runtime C API via CGO, merged into `microsoft/onnxruntime`; covers sessions, tensor I/O, I/O binding, and execution providers
      - [`splunk-sdk-python`](https://github.com/dannyota/splunk-sdk-python) — Splunk SDK for Python; complements `splunkctl` for Python projects
      - [`flowcvcli`](https://github.com/dannyota/flowcvcli) — controls a FlowCV resume from the command line or Python, including content, design, templates, avatar, publishing, and PDF export
    summary: "show 8 Go SDKs and platforms"
    body: |

      | Package | Platform |
      |---------|----------|
      | [`s1`](/s1) | SentinelOne Singularity — agents, policies, threats, remote shell |
      | [`secops`](/secops) | Google SecOps — Chronicle SIEM + Siemplify SOAR |
      | [`fortigate`](/fortigate) | FortiGate firewall REST API |
      | [`fortimgr`](/fortimgr) | FortiManager FlatUI API |
      | [`nessus`](/nessus) | Tenable Nessus scanner (read-only) |
      | [`vngcloud`](/vngcloud) | VNG Cloud IAM |
      | [`gnode`](/gnode) | VNG Cloud GreenNode services — unofficial community SDK |
      | [`kaggle`](/kaggle) | Kaggle API — kernels, datasets, token introspection |
---
