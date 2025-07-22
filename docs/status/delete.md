## 🗑️ Delete Status

### Endpoint

`DELETE {{url}}/status/:statusId`

---

### ⚠️ Notes

* **Default statuses cannot be deleted.**



### ❌ Validation Response (Default Status)

#### Request
`DELETE {{url}}/status/2`
 
 #### Response

```json
{
  "st": false,
  "statusCode": 400,
  "msg": "Default status cannot be deleted"
}
```

---

### ✅ Success Response

#### Request
`DELETE {{url}}/status/32`

```json
{
  "st": true,
  "statusCode": 200,
  "data": {
    "id": 32,
    "status": "something status",
    "module": "Lead",
    "isDefault": false,
    "createdAt": "2025-07-22T05:44:44.055Z",
    "updatedAt": "2025-07-22T06:14:54.463Z",
    "createBy": 1,
    "updateBy": null,
    "isDelete": true
  }
}
```

 .
