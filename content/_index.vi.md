---
title: "Danny On The Air"
hero:
  cmd: "whoami"
  greeting: "Chào, mình là Danny 👋"
  intro: |
    Kỹ sư bảo mật — tự viết những công cụ mình cần và open-source khi chúng có thể giúp ích cho người khác. Chủ yếu dùng Go, C và Python.
sections:
  - cmd: "ls ~/security-as-code/"
    title: "Security as Code"
    body: |
      Mình tin rằng vận hành bảo mật nên được quản lý phiên bản, diff được và tự động hoá. Những CLI này biến các nền tảng SIEM và EDR đang chạy thành code mà bạn có thể `git diff`:

      - [`secopsctl`](https://github.com/dannyota/secops) — vận hành Google SecOps (Chronicle SIEM + Siemplify SOAR) dưới dạng code — kéo detection rules, parsers, dashboards và SOAR playbooks về file, review diff, đẩy ngược lại
      - [`s1ctl`](https://github.com/dannyota/s1ctl) — vận hành SentinelOne Singularity dưới dạng code — agents, policies, exclusions, vòng đời threat, remote shell
      - [`splunkctl`](https://github.com/dannyota/splunkctl) — vận hành Splunk Enterprise SIEM dưới dạng code — SPL search, detection-as-code YAML, alerts, dashboards, indexes

      Cả ba đều có command tree machine-readable và agent guide nhúng sẵn — xây cho cả con người lẫn AI agent.
  - cmd: "cat regulatory-ai.md"
    title: "AI pháp lý"
    body: |
      RAG + MCP server chỉ-dựa-trên-bằng-chứng, đưa cho AI của bạn đúng nguyên văn điều khoản pháp lý — không ảo giác, không diễn giải lại. Mỗi kết quả đều kèm link về nguồn chính thức của cơ quan nhà nước để bạn tự kiểm chứng:

      - [`banhmi`](https://banhmi.danny.vn) — quy định ngân hàng & fintech Việt Nam (Ngân hàng Nhà nước, Bộ Tư pháp)
      - [`laksa`](https://laksa.danny.vn) — quy định ngân hàng & fintech Malaysia (Bank Negara Malaysia, Securities Commission)
      - [`rendang`](https://rendang.danny.vn) — quy định ngân hàng & fintech Indonesia (OJK, Bank Indonesia, BPK JDIH)
      - [`kaya`](https://kaya.danny.vn) — quy định ngân hàng & fintech Singapore (MAS)

      Một codebase, một corpus cho mỗi quốc gia. Miễn phí, không cần đăng ký — chỉ cần thêm MCP endpoint vào Claude, ChatGPT, Grok hoặc Gemini.
  - cmd: "go list danny.vn/..."
    title: "Go SDK"
    body: |
      Client nhỏ gọn, tập trung cho các nền tảng bảo mật và cloud — tất cả đều `go get` thẳng từ `danny.vn/…`:

      | Package | Nền tảng |
      |---------|----------|
      | [`s1`](/s1) | SentinelOne Singularity — agents, policies, threats, remote shell |
      | [`secops`](/secops) | Google SecOps — Chronicle SIEM + Siemplify SOAR |
      | [`fortigate`](/fortigate) | REST API của firewall FortiGate |
      | [`fortimgr`](/fortimgr) | FortiManager FlatUI API |
      | [`nessus`](/nessus) | Máy quét Tenable Nessus (chỉ đọc) |
      | [`vngcloud`](/vngcloud) | VNG Cloud IAM |
      | [`kaggle`](/kaggle) | Kaggle API — kernels, datasets, token introspection |
  - cmd: "cat research/offthebook.txt"
    title: "Nghiên cứu bảo mật"
    body: |
      - [`offthebook`](https://github.com/dannyota/offthebook) — thực thi Windows PE chỉ trong bộ nhớ qua SMB-over-QUIC SEC_IMAGE loading, kèm position-independent shellcode thuần C (MSVC + Clang)
  - cmd: "ls ~/tools/"
    title: "Công cụ khác"
    body: |
      - [`splunk-sdk-python`](https://github.com/dannyota/splunk-sdk-python) — Splunk SDK cho Python — bổ trợ splunkctl cho workflow thuần Python
      - [`byway`](https://github.com/dannyota/byway) — bypass VPN theo từng ứng dụng trên Linux, trong suốt với app, dùng cgroup v2 + nftables + policy routing
      - [`flowcvcli`](https://github.com/dannyota/flowcvcli) — điều khiển CV FlowCV từ command line hoặc Python — nội dung, thiết kế, template, avatar, publish & xuất PDF
  - cmd: "git remote -v"
    title: "GitHub"
    body: |
      Tất cả đều ở [github.com/dannyota](https://github.com/dannyota).
---
