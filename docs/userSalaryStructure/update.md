# Update User Salary Structure

Update an employee's salary structure using defined payroll components.

---

## 📡 Endpoint

`PUT /payroll/salary/:userId`

---

## 🧾 Request Field Description

| Field             | Type    | Description                                           |
| ----------------- | ------- | ----------------------------------------------------- |
| `totalCtc`        | number  | Total cost to company                                 |
| `monthlyCtc`      | number  | Monthly CTC value                                     |
| `basic`           | number  | Basic salary component                                |
| `neatPay`         | number  | Net payable amount                                    |
| `GrossSalary`     | number  | Gross salary                                          |
| `tax`             | number  | Total tax                                             |
| `pf`              | number  | Provident fund deduction                              |
| `esi`             | number  | Employee state insurance                              |
| `professionalTax` | number  | Professional tax                                      |
| `totalDeduction`  | number  | Total of all deductions                               |
| `totalEarning`    | number  | Total of all earnings                                 |
| `isOptedForPF`    | boolean | Whether PF is opted                                   |
| `isOptedForESI`   | boolean | Whether ESI is opted                                  |
| `config`          | array   | List of components (earnings/deductions) with amounts |

---

### 📤 Config Item

| Field        | Type         | Description                              |
| ------------ | ------------ | ---------------------------------------- |
| `id`         | number       | ID of the payroll component              |
| `type`       | string       | `earnings` or `deductions`               |
| `components` | string       | Name of the component (e.g., HRA, Bonus) |
| `percentage` | number       | Configured percentage                    |
| `maximum`    | string\|null | Max limit if any                         |
| `amount`     | number       | Final assigned value                     |

---

## 📤 Request Payload

```json
{
  "totalCtc": 60000,
  "monthlyCtc": 60000,
  "basic": 36000,
  "neatPay": 56200,
  "GrossSalary": 60000,
  "tax": 0,
  "pf": 3600,
  "esi": 0,
  "professionalTax": 200,
  "totalDeduction": 3800,
  "totalEarning": 60000,
  "isOptedForPF": true,
  "isOptedForESI": false,
  "config": [
    {
      "id": 1,
      "type": "earnings",
      "components": "Basic",
      "percentage": 60,
      "maximum": null,
      "amount": 36000
    },
    {
      "id": 4,
      "type": "earnings",
      "components": "Bonus",
      "percentage": 0,
      "maximum": "",
      "amount": 0
    },
    {
      "id": 2,
      "type": "earnings",
      "components": "HRA",
      "percentage": 30,
      "maximum": null,
      "amount": 18000
    },
    {
      "id": 3,
      "type": "earnings",
      "components": "Others",
      "percentage": 0,
      "maximum": "0",
      "amount": 0
    },
    {
      "id": 5,
      "type": "deductions",
      "components": "PF",
      "percentage": 12,
      "maximum": "3600",
      "amount": 3600
    },
    {
      "id": 9,
      "type": "deductions",
      "components": "Professional Tax",
      "percentage": 0,
      "maximum": "200",
      "amount": 200
    }
  ]
}
```

---

## ✅ Success Response `200 OK`

```json
{
  "st": true,
  "statusCode": 200,
  "data": {
    "id": 1,
    "userId": 1,
    "totalCtc": 60000,
    "monthlyCtc": 60000,
    "basic": 36000,
    "neatPay": 56200,
    "GrossSalary": 60000,
    "tax": 0,
    "pf": 3600,
    "esi": 0,
    "professionalTax": 200,
    "totalDeduction": 3800,
    "totalEarning": 60000,
    "isOptedForPF": true,
    "isOptedForESI": false,
    "config": [
      {
        "id": 1,
        "type": "earnings",
        "amount": 36000,
        "maximum": null,
        "components": "Basic",
        "percentage": 60
      },
      {
        "id": 4,
        "type": "earnings",
        "amount": 0,
        "maximum": "",
        "components": "Bonus",
        "percentage": 0
      },
      {
        "id": 2,
        "type": "earnings",
        "amount": 18000,
        "maximum": null,
        "components": "HRA",
        "percentage": 30
      },
      {
        "id": 3,
        "type": "earnings",
        "amount": 0,
        "maximum": "0",
        "components": "Others",
        "percentage": 0
      },
      {
        "id": 5,
        "type": "deductions",
        "amount": 3600,
        "maximum": "3600",
        "components": "PF",
        "percentage": 12
      },
      {
        "id": 9,
        "type": "deductions",
        "amount": 200,
        "maximum": "200",
        "components": "Professional Tax",
        "percentage": 0
      }
    ],
    "createdAt": "2025-07-28T06:28:03.867Z",
    "updatedAt": "2025-07-28T06:35:23.918Z",
    "createBy": 24,
    "updateBy": 24
  }
}
```
