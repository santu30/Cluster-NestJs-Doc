
# 📘 Project: **Cluster**

## 🚀 Overview

**Cluster** is a full-stack enterprise management platform built to handle CRM, HRM, project management, inventory, and sales processes under one modular system. It’s designed for scalability, multi-tenancy, and high customizability for diverse business workflows.

---

## 🌐 Links

### 🟢 Production

**Web**
- Cluster Console: https://cluster-console.vercel.app/login
- Cluster Web: https://cluster-web-brown.vercel.app/login

**API**
- API Base URL: https://cluster.koffeekodes.in/api/
- Health Check: https://cluster.koffeekodes.in/api/health

---

### 🔴 Test / Staging

**Web**
- Cluster Console: https://cluster-console-git-dev-koffeekodes.vercel.app/login
- Cluster Web: https://cluster-web-git-newdev-koffeekodes.vercel.app/login

**API**
- API Base URL: https://cluster-test.koffeekodes.in/api/
- Health Check: https://cluster-test.koffeekodes.in/api/health

---

## 🧩 Modules

### 1. **Authentication & User Management**

* Role-based access (RBAC)
* Multi-tenant support
* User type separation: admin, client, sales, user

### 2. **HRM (Human Resource Management)**

* Employee profiles, designations
* Attendance & leave tracking
* Shift scheduling
* Payroll & salary setup

### 3. **Project Management**

* Projects, milestones, tasks
* Task priority, status, and dependencies
* File management per task/project
* Internal and client collaboration

### 4. **CRM & Leads**

* Lead sources, pipeline stages
* Meetings, calls, activity logs
* Lead follow-ups & notes
* Interview and candidate flow

### 5. **Inventory & Assets**

* Product & service catalog
* Stock tracking (in/out)
* Asset assignment & status
* Warranty, ownership modes

### 6. **Sales & Finance**

* Quotations, sales orders
* Discount, tax, warranty options
* Invoice generation pipeline
* Payroll integration for employee finance

### 7. **Communication**

* Internal messages (text, image, file)
* Notifications for key actions
* Visitor logs and status tracking

### 8. **Platform Settings**

* Allowed platforms: web, desktop, app
* Custom duration & package type config
* Enum-driven control for dynamic UI

---

## 🛠️ Tech Stack

| Layer    | Technology                |
| -------- | ------------------------- |
| Backend  | Node.js (NestJS)          |
| ORM      | Prisma (multi-schema)     |
| Frontend | React / Flutter (planned) |
| DB       | PostgreSQL                |
| Realtime | Socket.io (for comms)     |
| Queue    | Redis / BullMQ            |
| Auth     | JWT / OAuth (planned)     |
| Hosting  | VPS / Cloud      |

---

## 📌 Highlights

* Designed for enterprise use-cases with modular scaling
* Clean enum-based configs for dropdowns & logic reuse
* Built-in hooks for future integrations (3rd-party API, webhooks)
* Schema-first development strategy
* Built-in audit trails (optional)

