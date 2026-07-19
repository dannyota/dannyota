# Hey, I'm Danny 👋

Security engineer who writes the tools I need and open-sources them when they might help someone else. Mostly Go, C, and Python.

### 🛠️ Security as Code

CLIs that turn live SIEM and EDR platforms into code you can `git diff`:

- [`splunkctl`](https://github.com/dannyota/splunkctl) — operate Splunk Enterprise SIEM + Splunk SOAR as code — state pull → diff → push across rules, parsers, macros, lookups, dashboards, and SOAR playbooks-as-code, plus ES incident review and SIEM-to-SOAR ingest
- [`s1ctl`](https://github.com/dannyota/s1ctl) — operate SentinelOne Singularity as code — pull/diff/push across 11 surfaces with `drift` for CI, agents, threats, remote ops, xSPM, marketplace, and Data Lake queries
- [`secopsctl`](https://github.com/dannyota/secops) — operate Google SecOps (Chronicle SIEM + Siemplify SOAR) as code — pull detection rules, parsers, dashboards, and SOAR playbooks into files, review the diff, push back

All three ship a built-in MCP server, machine-readable command trees, and embedded agent guides — and every mutation is dry-run until `--yes`.

### 📜 Regulatory AI

Evidence-only RAG + MCP servers that hand your AI exact legal provisions — no hallucination, no paraphrasing. One codebase, one corpus per country — six ASEAN jurisdictions and counting:

| Server | Jurisdiction | Official sources |
|--------|--------------|------------------|
| [`banhmi`](https://banhmi.danny.vn) | 🇻🇳 Vietnam | State Bank of Vietnam · Ministry of Justice |
| [`laksa`](https://laksa.danny.vn) | 🇲🇾 Malaysia | Bank Negara Malaysia · Securities Commission |
| [`rendang`](https://rendang.danny.vn) | 🇮🇩 Indonesia | OJK · Bank Indonesia · BPK JDIH |
| [`kaya`](https://kaya.danny.vn) | 🇸🇬 Singapore | MAS · PDPC · CSA |
| [`tomyum`](https://tomyum.danny.vn) | 🇹🇭 Thailand | Bank of Thailand · SEC · ETDA |
| [`amok`](https://amok.danny.vn) | 🇰🇭 Cambodia | National Bank of Cambodia |

All free, no signup — just add the MCP endpoint to Claude, ChatGPT, Grok, or Gemini.

### ✅ Compliance AI

Same evidence-only approach, pointed at what auditors ask for: [`compliary`](https://github.com/dannyota/compliary) serves the control frameworks organizations are audited against — exact control citations (`A.5.1`, `AC-2(3)`, `Req 8.3.6`), version lineage so superseded text is never presented as current, and cross-framework mappings with provenance: the ISO/IEC 27001 family (27001 · 27002 · 27017 · 27018 · 27701), ISO 22301, ISO/IEC 42001, NIST CSF 2.0, NIST SP 800-53 r5, SOC 2, PCI DSS v4.0.1, CIS Controls v8.1, SWIFT CSCF, CSA CCM v4.1, and COBIT 2019.

Framework text is licensed, so there's no shared public endpoint — the repo ships code + metadata only, and every operator builds their own corpus and runs their own private MCP instance.

### 📦 Go SDKs

Small, focused clients for security and cloud platforms — each one `go get`-able straight off `danny.vn/…`:

| Package | Platform |
|---------|----------|
| [`s1`](https://danny.vn/s1) | SentinelOne Singularity — agents, policies, threats, remote shell |
| [`secops`](https://danny.vn/secops) | Google SecOps — Chronicle SIEM + Siemplify SOAR |
| [`fortigate`](https://danny.vn/fortigate) | FortiGate firewall REST API |
| [`fortimgr`](https://danny.vn/fortimgr) | FortiManager FlatUI API |
| [`nessus`](https://danny.vn/nessus) | Tenable Nessus scanner (read-only) |
| [`vngcloud`](https://danny.vn/vngcloud) | VNG Cloud IAM |
| [`kaggle`](https://danny.vn/kaggle) | Kaggle API — kernels, datasets, token introspection |

### 🔬 Security Research

- [`offthebook`](https://github.com/dannyota/offthebook) — memory-only Windows PE execution via SMB-over-QUIC SEC_IMAGE loading, with position-independent shellcode in pure C (MSVC + Clang)

### 🔧 Other Tools

- [`splunk-sdk-python`](https://github.com/dannyota/splunk-sdk-python) — Splunk SDK for Python — complements splunkctl for Python-native workflows
- [`onnxruntime/go`](https://github.com/microsoft/onnxruntime/pull/29615) — Go bindings for ONNX Runtime C API via CGO (open PR on microsoft/onnxruntime)
- [`flowcvcli`](https://github.com/dannyota/flowcvcli) — drive a FlowCV résumé from the command line or Python — content, design, templates, avatar, publish & PDF export

More at [danny.vn](https://danny.vn).
