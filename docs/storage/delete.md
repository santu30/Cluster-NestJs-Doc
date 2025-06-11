# Delete Storage API
This API used to disconnect / delete the storage unit fom the Cluster Project
## 🧩 Endpoint
`DELETE /api/storage/:id`

## 🔐 Auth
✅ Required (Tenant Token)

## 📥 Path Params
| Param | Type | Description |
|-------|------|-------------|
| `id`  | int  | ID of the storage to delete |



## ✅ Success Response

```json
{
  "message": "Storage deleted successfully",
  "id": 12
}
```

## ⚠️ Error Responses

* `404 Not Found` → Storage not found
* `403 Forbidden` → Unauthorized
* `500 Internal Server Error` → Unexpected issue

