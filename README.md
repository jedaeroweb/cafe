
## Overview

This repository contains a simple order system for small stores,
implemented using Ruby on Rails.

> 소규모 매장(카페, 음식점 등)을 위한  
> **가볍고 단순한 주문 관리 시스템**입니다.

It is intended for developers who want a minimal, real-world Rails app
that can be used as-is or adapted for specific shop environments.

> 실제 매장에서 바로 쓰거나  
> 필요에 맞게 커스터마이징할 수 있도록 설계되었습니다.

---

## Why this project?

Most existing order or POS systems are either:

- Over-engineered
- Expensive
- Difficult to customize

> 기능은 많지만 현장에서는 오히려 불편한 경우가 많습니다.

This project aims to be:

- Small and understandable
- Easy to deploy and operate
- Friendly to modification and extension

> **필요한 기능만, 유지보수하기 쉬운 구조**를 목표로 합니다.

---

## Demo

[Demo page](https://cafe.jedaeroweb.co.kr)

> 실제 동작 화면을 확인할 수 있는 데모 페이지입니다.

---

## 🚀 Getting Started

```bash
git clone https://github.com/jedaeroweb/community.git
cd community
bundle install
rails db:create db:migrate db:seed
rails server

```

then visit

http://localhost:3000


> 로컬 환경에서 바로 실행해볼 수 있습니다.

---

## 📌 Server Requirements

[Rails](http://rubyonrails.org/) version 7 or newer is recommended.
> Rails 7 이상 환경을 권장합니다.

## 📄 License

MIT License – completely free to use and modify
> 개인·상업적 사용 모두 자유롭습니다.

## ✍️ Author

[Jeedaeroweb](https://www.jedaeroweb.co.kr)
> 작성자 = 제대로웹

