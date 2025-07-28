 # Get Payroll Components

Fetches the list of configured payroll components from the payroll setup.

Returns all `earnings` and `deductions` components that can be used to configure individual user/employee salary structures.

---

## Endpoint

`GET /payroll/salary/get-payroll-component`

---

## ✅ Success Response

```json
{
  "st": true,
  "statusCode": 200,
  "data": [
    {
      "id": 1,
      "type": "earnings",
      "components": "Basic",
      "percentage": 60,
      "maximum": "null"
    },
    {
      "id": 4,
      "type": "earnings",
      "components": "Bonus",
      "percentage": 10,
      "maximum": "10000"
    },
    {
      "id": 2,
      "type": "earnings",
      "components": "HRA",
      "percentage": 30,
      "maximum": "null"
    },
    {
      "id": 3,
      "type": "earnings",
      "components": "Others",
      "percentage": 12,
      "maximum": "null"
    },
    {
      "id": 5,
      "type": "deductions",
      "components": "PF",
      "percentage": 12,
      "maximum": "null"
    }
  ]
}
```

 
