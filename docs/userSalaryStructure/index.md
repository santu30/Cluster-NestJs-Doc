## 📘 User Salary Structure API

### 🔰 Introduction

In this module, we **assume the Payroll Setup is already completed**.

That means:

* All global payroll components (like Basic, HRA, PF, etc.) are already defined.
* These components have pre-configured percentage rules or fixed rules.

Now, we’re assigning **user-specific salary structures** using these components.

> ⚙️ This includes user CTC, earnings, deductions, and custom configurations per employee.

---

### 🛠️ Workflow Overview

1. **Payroll components** (earnings/deductions/bonuses) are already defined globally.
2. Use the `POST {{url}}/payroll/salary/get-payroll-component` API to get setup components.
3. Next use this component to create user salary.

