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
GET {{url}}/status?module=Lead
```

---

### ✅ Example Response

```json
{
  "st": true,
  "statusCode": 200,
  "data": [
    {"id":2,"status":"inProgress","module":"Lead","isDefault":true},
    {"id":3,"status":"converted","module":"Lead","isDefault":true},
    {"id":4,"status":"qualified","module":"Lead","isDefault":true},
    {"id":5,"status":"notInterested","module":"Lead","isDefault":true},
    {"id":6,"status":"Assigned","module":"Lead","isDefault":true},
    {"id":33,"status":"something status","module":"Lead","isDefault":false}
]

}
```
