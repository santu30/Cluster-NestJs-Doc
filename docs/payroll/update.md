# Update Payroll Setup

Updates the payroll component structure.

This endpoint allows:
- Editing existing components
- Adding new ones

---

## Endpoint

`PUT /payroll/setup`

---

## Payload Schema

| Field         | Type               | Required   | Description                                                              |
|---------------|--------------------|------------|--------------------------------------------------------------------------|
| `id`          | `number` \| `null` | ✅ Yes      | Existing record ID, `null` for new entries                               |
| `type`        | `string`           | ✅ Yes      | `"earnings"`, `"deductions"`, `"total"`, `"gross"`                       |
| `components`  | `string` \| `null` | ✅ Yes      | Component name (e.g. `Basic`, `PF`) or `null` for totals                 |
| `percentage`  | `number`           | ✅ Yes      | Component salary % (use `0` for flat or calculated values)               |
| `maximum`     | `string` \| `null` | ❌ Optional | Value cap (e.g. `"5000"`, `"null"`)                                      |
| `calculation` | `string` \| `null` | ❌ Optional | Only required for `type: total` or `gross`                               |


---

## Example Payload

```json
[
    {
        "id": 1,
        "type": "earnings",
        "components": "Basic",
        "percentage": 60,
        "maximum": "null",
        "calculation": "",
        "isDelete": false,
        "createdBy": 1,
        "updatedBy": null,
        "createdAt": "2025-06-20T10:39:56.818Z",
        "updatedAt": "2025-06-20T10:39:56.818Z"
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
        "updatedBy": null,
        "createdAt": "2025-06-20T10:39:56.818Z",
        "updatedAt": "2025-06-20T10:39:56.818Z"
    },
    {
        "id": 3,
        "type": "earnings",
        "components": "Others",
        "percentage": 12,
        "maximum": "null",
        "calculation": "",
        "isDelete": false,
        "createdBy": 1,
        "updatedBy": null,
        "createdAt": "2025-06-20T10:39:56.818Z",
        "updatedAt": "2025-06-20T10:39:56.818Z"
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
        "updatedBy": null,
        "createdAt": "2025-06-20T10:39:56.818Z",
        "updatedAt": "2025-06-20T10:39:56.818Z"
    },
    {
        "id": 5,
        "type": "deductions",
        "components": "PF",
        "percentage": 12,
        "maximum": "null",
        "calculation": "",
        "isDelete": false,
        "createdBy": 1,
        "updatedBy": null,
        "createdAt": "2025-06-20T10:39:56.818Z",
        "updatedAt": "2025-06-20T10:39:56.818Z"
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
        "updatedBy": null,
        "createdAt": "2025-06-20T10:39:56.818Z",
        "updatedAt": "2025-06-20T10:39:56.818Z"
    },
    {
        "id": null,
        "type": "deductions",
        "components": "Professional Tax",
        "percentage": 0,
        "maximum": "200",
        "calculation": "sum(earnings)",
        "isDelete": false,
        "createdBy": 1,
        "updatedBy": null,
        "createdAt": "2025-06-20T10:39:56.818Z",
        "updatedAt": "2025-06-20T10:39:56.818Z"
    }
]

```

### ✅ Success Response

```json
{
    "st": true,
    "statusCode": 200,
    "data": {
        "message": "Payroll Setup updated successfully"
    }
}
```