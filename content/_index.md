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

      - [`banhmi`](https://banhmi.danny.vn) — Vietnamese banking & fintech regulation (State Bank of Vietnam, Ministry of Justice)
      - [`laksa`](https://laksa.danny.vn) — Malaysian banking & fintech regulation (Bank Negara Malaysia, Securities Commission)
      - [`rendang`](https://rendang.danny.vn) — Indonesian banking & fintech regulation (OJK, Bank Indonesia, BPK JDIH)
      - [`kaya`](https://kaya.danny.vn) — Singaporean banking & fintech regulation (MAS, PDPC, CSA)
      - [`tomyum`](https://tomyum.danny.vn) — Thai banking & fintech regulation (Bank of Thailand, SEC, ETDA)
      - [`amok`](https://amok.danny.vn) — Cambodian banking & fintech regulation (National Bank of Cambodia)

      One codebase, one corpus per country — six ASEAN jurisdictions and counting. All free, no signup — just add the MCP endpoint to Claude, ChatGPT, Grok, or Gemini.

      Next up: [`compliary`](https://github.com/dannyota/compliary) — the same evidence-only approach for the security control frameworks organizations are audited against (ISO/IEC 27001, NIST CSF & SP 800-53, PCI DSS, SOC 2, CIS). In development.
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
