## 📄 Status Listing / Dropdown usages

### Endpoint

`GET {{url}}/status`

---

### 🔍 Query Parameters

| Param  | Type   | Required | Description                                                                        | Example         |
| ------ | ------ | -------- | ---------------------------------------------------------------------------------- | --------------- |
| module | enum   | ❌        | Filter by module name (`Lead`, `LeadCall`, `CandidateCall`, `Interview`, `Ticket`) | `CandidateCall` |
| status | string | ❌        | Search statuses by name (partial or full match)                                    | `pending`       |

> ⚠️ If `module` is **not provided**, the API will return **all statuses across all modules**.

---

### 📥 Example Request

```
GET {{url}}/status?module=CandidateCall
```

---

### ✅ Example Response

```json
{
  "st": true,
  "statusCode": 200,
  "data": [
    { "id": 13, "status": "Scheduled" },
    { "id": 14, "status": "inProgress" },
    { "id": 15, "status": "completed" },
    { "id": 16, "status": "rescheduled" },
    { "id": 17, "status": "missed" },
    { "id": 18, "status": "planned" }
  ]
}
```
