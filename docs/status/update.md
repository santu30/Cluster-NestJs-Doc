

## ♻️ Update Status

### Endpoint

`PUT {{url}}/status/:statusId`

---

### 📥 Payload

| Field  | Type   | Required | Description                                                     | Example     |
| ------ | ------ | -------- | --------------------------------------------------------------- | ----------- |
| status | string | ✅        | Updated name of the status                                      | "Contacted" |
| module | enum   | ✅        | enum `Lead`, `LeadCall`, `CandidateCall`, `Interview`, `Ticket` | `LeadCall`  |

---

### 📤 Example Payload

```json
{
  "status": "Contacted",
  "module": "LeadCall"
}
```

---

### ✅ Response

```json
{
  "st": true,
  "statusCode": 200,
  "data": {
    "id": 31,
    "status": "Contacted",
    "module": "LeadCall",
    "isDefault": false,
    "createdAt": "2025-07-20T08:32:12.244Z",
    "updatedAt": "2025-07-22T06:10:55.312Z",
    "createBy": 1,
    "updateBy": 1,
    "isDelete": false
  }
}
```