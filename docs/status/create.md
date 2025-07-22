## 🛠️ Create Status

### Endpoint

`POST {{url}}/status`

---

### 📥 Payload

| Field  | Type   | Required | Description                              | Example     |
| ------ | ------ | -------- | ---------------------------------------- | ----------- |
| status | string | ✅        | The name of the status                   | "In Review" |
| module | enum   | ✅        | enum  `Lead`, `LeadCall`, `CandidateCall`, `Interview`, `Ticket` | `Lead`

---

### 📤 Example Payload

```json
{
  "status": "something status",
  "module": "Lead"
}
```

---

### ✅ Response

```json
{
  "st": true,
  "statusCode": 201,
  "data": {
    "id": 32,
    "status": "something status",
    "module": "Lead",
    "isDefault": false,
    "createdAt": "2025-07-22T05:44:44.055Z",
    "updatedAt": "2025-07-22T05:44:44.055Z",
    "createBy": 1,
    "updateBy": null,
    "isDelete": false
  }
}
```
