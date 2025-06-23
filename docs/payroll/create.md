# Create Payroll Setup

Creates a new payroll configuration for the organization.  
This is a one-time setup — if a setup already exists, this endpoint will return an error.

---

## Endpoint

`POST /payroll/setup`

---

## Payload Schema

| Field         | Type               | Required   | Description                                                             |
| ------------- | ------------------ | ---------- | ----------------------------------------------------------------------- |
| `type`        | `string`           | ✅ Yes      | Enum: `"earnings"`, `"deductions"`, `"total"`, `"gross"`                |
| `components`  | `string`           | ✅ Yes\*    | Name of the component (e.g. `Basic`, `PF`, `Bonus`) — `null` for totals |
| `percentage`  | `number`           | ✅ Yes      | Percentage of base salary (set `0` for fixed or calculated components)  |
| `maximum`     | `string` \| `null` | ❌ Optional | Max limit for this component’s value (e.g. `"10000"` or `null`)         |
| `calculation` | `string` \| `null` | ❌ Optional | Expression used in derived fields (e.g. `sum(earnings)`)                |


---
## Example Payload

```json 
[
  {
    "type": "earnings",
    "components": "Basic",
    "percentage": 60,
    "maximum": null,
    "calculation": null
  },
  {
    "type": "earnings",
    "components": "HRA",
    "percentage": 30,
    "maximum": null,
    "calculation": null
  },
  {
    "type": "earnings",
    "components": "Others",
    "percentage": 12,
    "maximum": null,
    "calculation": null
  },
  {
    "type": "earnings",
    "components": "Bonus",
    "percentage": 10,
    "maximum": "10000",
    "calculation": null
  },
  {
    "type": "deductions",
    "components": "PF",
    "percentage": 12,
    "maximum": null,
    "calculation": null
  },
  {
    "type": "total",
    "components": null,
    "percentage": 0,
    "maximum": null,
    "calculation": "sum(earnings) - sum(deductions)"
  },
  {
    "type": "gross",
    "components": null,
    "percentage": 0,
    "maximum": null,
    "calculation": "sum(earnings)"
  }
]

```

## ✅ Success Response

```json
{
  "st": true,
  "statusCode": 201,
  "msg": "Payroll Setup created successfully."
}
```


## ❌ If already setup
 > Payroll can update not re-create again
```json
{
  "st": false,
  "statusCode": 400,
  "msg": "Payroll Setup already exists."
}
```