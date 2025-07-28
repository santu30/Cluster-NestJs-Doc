# Get User Salary Structure

Fetches the salary structure details of a specific employee using their user ID.

---

## 📡 Endpoint

`GET /payroll/salary/:userId`

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
    "updatedAt": "2025-07-28T06:38:29.797Z",
    "createBy": 24,
    "updateBy": 24
  }
}
```

Here’s the **Error Response** section for `GET /payroll/salary/:userId`:

---

## ❌ Error Response `404 Not Found`

```json
{
  "st": false,
  "statusCode": 404,
  "msg": "Salary data not found for this user."
}
```

> This means the user does not have any salary structure configured yet. You should use the **Create User Salary Structure** API.

 