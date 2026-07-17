# Hey, I'm Danny 👋

Security engineer who writes the tools I need and open-sources them when they might help someone else. Mostly Go, C, and Python.

### 🛠️ Security as Code

CLIs that turn live SIEM and EDR platforms into code you can `git diff`:

- [`secops`](https://github.com/dannyota/secops) — operate Google SecOps (Chronicle SIEM + Siemplify SOAR) as code — pull detection rules, parsers, dashboards, and SOAR playbooks into files, review the diff, push back
- [`s1ctl`](https://github.com/dannyota/s1ctl) — operate SentinelOne Singularity as code — agents, policies, exclusions, threat lifecycle, remote shell
- [`splunkctl`](https://github.com/dannyota/splunkctl) — operate Splunk Enterprise SIEM as code — SPL search, detection-as-code YAML, alerts, dashboards, indexes

All three ship with machine-readable command trees and embedded agent guides — built for both humans and AI agents.

### 📜 Regulatory AI

Evidence-only RAG + MCP servers that hand your AI exact legal provisions — no hallucination, no paraphrasing. One codebase, one corpus per country:

- [`banhmi`](https://banhmi.danny.vn) — Vietnamese banking & fintech regulation (State Bank of Vietnam, Ministry of Justice)
- [`laksa`](https://laksa.danny.vn) — Malaysian banking & fintech regulation (Bank Negara Malaysia, Securities Commission)
- [`rendang`](https://rendang.danny.vn) — Indonesian banking & fintech regulation (OJK, Bank Indonesia)
- [`kaya`](https://kaya.danny.vn) — Singaporean banking & fintech regulation (MAS)

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

- [`onnxruntime/go`](https://github.com/microsoft/onnxruntime/pull/29615) — Go bindings for ONNX Runtime C API via CGO (open PR on microsoft/onnxruntime)
- [`flowcvcli`](https://github.com/dannyota/flowcvcli) — drive a FlowCV résumé from the command line or Python — content, design, templates, avatar, publish & PDF export

More at [danny.vn](https://danny.vn).
