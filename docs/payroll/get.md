# Get Payroll Setup

Fetches the active payroll configuration.

Returns all earnings, deductions, and calculated components that were configured for payroll.

---

## Endpoint

`GET /payroll/setup`

---

## ✅ Success Response

```json
{
  "st": true,
  "statusCode": 200,
  "data": {
    "message": "Payroll Setup fetched successfully.",
    "data": [
      {
        "id": 9,
        "type": "deductions",
        "components": "Professional Tax",
        "percentage": 0,
        "maximum": "200",
        "calculation": "sum(earnings)",
        "isDelete": false,
        "createdBy": 1,
        "updatedBy": null,
        "createdAt": "2025-06-23T11:24:57.975Z",
        "updatedAt": "2025-06-23T11:24:57.975Z"
      },
      {
        "id": 5,
        "type": "deductions",
        "components": "PF",
        "percentage": 12,
        "maximum": "3600",
        "calculation": "",
        "isDelete": false,
        "createdBy": 1,
        "updatedBy": 1,
        "createdAt": "2025-06-20T10:39:56.818Z",
        "updatedAt": "2025-06-23T11:24:58.005Z"
      },
      {
        "id": 2,
        "type": "earnings",
        "components": "HRA",
        "percentage": 30,
        "maximum": "null",
        "calculation": "",
        "isDelete": false,
        "createdBy": 1,
        "updatedBy": 1,
        "createdAt": "2025-06-20T10:39:56.818Z",
        "updatedAt": "2025-06-23T11:24:57.998Z"
      },
      {
        "id": 4,
        "type": "earnings",
        "components": "Bonus",
        "percentage": 0,
        "maximum": "",
        "calculation": "",
        "isDelete": false,
        "createdBy": 1,
        "updatedBy": 1,
        "createdAt": "2025-06-20T10:39:56.818Z",
        "updatedAt": "2025-06-23T11:24:58.002Z"
      },
      {
        "id": 1,
        "type": "earnings",
        "components": "Basic",
        "percentage": 60,
        "maximum": "null",
        "calculation": "",
        "isDelete": false,
        "createdBy": 1,
        "updatedBy": 1,
        "createdAt": "2025-06-20T10:39:56.818Z",
        "updatedAt": "2025-06-23T11:24:57.988Z"
      },
      {
        "id": 3,
        "type": "earnings",
        "components": "Others",
        "percentage": 0,
        "maximum": "6000",
        "calculation": "",
        "isDelete": false,
        "createdBy": 1,
        "updatedBy": 1,
        "createdAt": "2025-06-20T10:39:56.818Z",
        "updatedAt": "2025-06-23T11:24:58.000Z"
      },
      {
        "id": 6,
        "type": "total",
        "components": null,
        "percentage": 0,
        "maximum": "null",
        "calculation": "sum(earnings) - sum(deductions)",
        "isDelete": false,
        "createdBy": 1,
        "updatedBy": 1,
        "createdAt": "2025-06-20T10:39:56.818Z",
        "updatedAt": "2025-06-23T11:24:58.007Z"
      }
    ]
  }
}
