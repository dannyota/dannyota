---
title: "Danny On The Air"
hero:
  cmd: "whoami"
  greeting: "Hey, I'm Danny 👋"
  intro: |
    Security engineer who writes the tools I need and open-sources them when they might help someone else. Mostly Go, C, and Python.
sections:
  - cmd: "ls ~/security-as-code/"
    title: "Security as Code"
    body: |
      I believe security operations should be versionable, diffable, and automated. These CLIs turn live SIEM and EDR platforms into code you can `git diff`:

      - [`secopsctl`](https://github.com/dannyota/secops) — operate Google SecOps (Chronicle SIEM + Siemplify SOAR) as code — pull detection rules, parsers, dashboards, and SOAR playbooks into files, review the diff, push back
      - [`s1ctl`](https://github.com/dannyota/s1ctl) — operate SentinelOne Singularity as code — agents, policies, exclusions, threat lifecycle, remote shell
      - [`splunkctl`](https://github.com/dannyota/splunkctl) — operate Splunk Enterprise SIEM as code — SPL search, detection-as-code YAML, alerts, dashboards, indexes

      All three ship with machine-readable command trees and embedded agent guides — built for both humans and AI agents.
  - cmd: "cat regulatory-ai.md"
    title: "Regulatory AI"
    body: |
      Evidence-only RAG + MCP servers that hand your AI exact legal provisions — no hallucination, no paraphrasing. Every hit links to the official government source so you can verify the exact wording yourself:

      | Server | Jurisdiction | Official sources |
      |--------|--------------|------------------|
      | [`banhmi`](https://banhmi.danny.vn) | 🇻🇳 Vietnam | State Bank of Vietnam · Ministry of Justice |
      | [`laksa`](https://laksa.danny.vn) | 🇲🇾 Malaysia | Bank Negara Malaysia · Securities Commission |
      | [`rendang`](https://rendang.danny.vn) | 🇮🇩 Indonesia | OJK · Bank Indonesia · BPK JDIH |
      | [`kaya`](https://kaya.danny.vn) | 🇸🇬 Singapore | MAS · PDPC · CSA |
      | [`tomyum`](https://tomyum.danny.vn) | 🇹🇭 Thailand | Bank of Thailand · SEC · ETDA |
      | [`amok`](https://amok.danny.vn) | 🇰🇭 Cambodia | National Bank of Cambodia |

      One codebase, one corpus per country — six ASEAN jurisdictions and counting. All free, no signup — just add the MCP endpoint to Claude, ChatGPT, Grok, or Gemini.
  - cmd: "cat compliance-ai.md"
    title: "Compliance AI"
    body: |
      Same evidence-only approach, pointed at what auditors ask for: [`compliary`](https://github.com/dannyota/compliary) serves the control frameworks organizations are audited against — exact control citations (`A.5.1`, `AC-2(3)`, `Req 8.3.6`), version lineage so superseded text is never presented as current, and cross-framework mappings with provenance:

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

      Framework text is licensed, so there's no shared public endpoint — the repo ships code + metadata only, and every operator builds their own corpus and runs their own private MCP instance.
  - cmd: "go list danny.vn/..."
    title: "Go SDKs"
    body: |
      Small, focused clients for security and cloud platforms — each one `go get`-able straight off `danny.vn/…`:

      | Package | Platform |
      |---------|----------|
      | [`s1`](/s1) | SentinelOne Singularity — agents, policies, threats, remote shell |
      | [`secops`](/secops) | Google SecOps — Chronicle SIEM + Siemplify SOAR |
      | [`fortigate`](/fortigate) | FortiGate firewall REST API |
      | [`fortimgr`](/fortimgr) | FortiManager FlatUI API |
      | [`nessus`](/nessus) | Tenable Nessus scanner (read-only) |
      | [`vngcloud`](/vngcloud) | VNG Cloud IAM |
      | [`kaggle`](/kaggle) | Kaggle API — kernels, datasets, token introspection |
  - cmd: "cat research/offthebook.txt"
    title: "Security Research"
    body: |
      - [`offthebook`](https://github.com/dannyota/offthebook) — memory-only Windows PE execution via SMB-over-QUIC SEC_IMAGE loading, with position-independent shellcode in pure C (MSVC + Clang)
  - cmd: "ls ~/tools/"
    title: "Other Tools"
    body: |
      - [`splunk-sdk-python`](https://github.com/dannyota/splunk-sdk-python) — Splunk SDK for Python — complements splunkctl for Python-native workflows
      - [`onnxruntime/go`](https://github.com/microsoft/onnxruntime/pull/29615) — Go bindings for ONNX Runtime C API via CGO — session management, I/O binding, execution providers (open PR on microsoft/onnxruntime)
      - [`flowcvcli`](https://github.com/dannyota/flowcvcli) — drive a FlowCV résumé from the command line or Python — content, design, templates, avatar, publish & PDF export
  - cmd: "git remote -v"
    title: "GitHub"
    body: |
      Everything's on [github.com/dannyota](https://github.com/dannyota).
---
