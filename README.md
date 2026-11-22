# 🧪 Self-Healing CI/CD Synthetic Failure Fixture

**Synthetic Broken Build Fixture for Benchmarking the Autonomous Self-Healing CI/CD Agent**

[![Integration](https://img.shields.io/badge/Integration-Self--Healing_CI-2496ED?style=for-the-badge)](https://github.com/anshere0/CI-CD-)
[![Node.js](https://img.shields.io/badge/Runtime-Node.js-339933?style=for-the-badge&logo=node.js)](https://nodejs.org/)

---

## 📌 Purpose

This repository acts as a live, automated test harness and fixture for [anshere0/CI-CD-](https://github.com/anshere0/CI-CD-). 

It contains intentionally injected unit test regressions (e.g. failing assertions in `math.test.js` and `multiply.test.js`) executed via GitHub Actions workflows. 

When a workflow fails, it triggers the Self-Healing CI webhook service, which reproduces the failure in a Docker sandbox, synthesizes a patch, validates that all tests pass, and opens a pull request.

---

## 👤 Author
**Ansh Arora**  
- GitHub: [@anshere0](https://github.com/anshere0)
