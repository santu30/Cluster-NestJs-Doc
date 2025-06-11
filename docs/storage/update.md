
# Create Storage API

Create a storage config for your tenant. Supports Google Drive (OAuth2), SFTP, S3 (user or system), and DigitalOcean Spaces.


## 📡 Method & Endpoint

**POST** `/storage/create`




## 📥 Payload Fields

### 🔹 Required

| Field         | Type     | Description |
|--------------|----------|-------------|
| `tanentId`    | Int      | Tenant ID |
| `companyId`   | Int      | Linked company ID |
| `schema`      | String   | Tenant-specific DB schema |
| `storageType` | Enum     | Storage type: `local`, `s3UserProvider`, `s3Primary`, `googleDrive`, `sftp` |
| `defaultPath` | String   | Default file upload path (applies to all storage types) |

---

### 🔹 SFTP Fields 

| Field      | Type   | Description |
|-----------|--------|-------------|
| `hostname` | String | SFTP host |
| `port`     | Int    | SFTP port |
| `username` | String | SFTP login username |
| `password` | String | SFTP login password |

---

### 🔹 Google Drive Fields 
##### It will auto saved via o auth
#### To Initiate the google drive o auth process please hit this url
<a href="https://{base_url}/storage/google/connect?tenantId={tenantId}&companyId={tenantId}&schema={tenantId}">https://{base_url}/storage/google/connect?tenantId={tenantId}&companyId={tenantId}&schema={tenantId}</a>
> Please update the url as per your config

---
| Field                    | Type   | Description |
|-------------------------|--------|-------------|
| `token`                 | String | Initial token (optional) |
| `accessToken`           | String | OAuth2 access token |
| `refreshToken`          | String | OAuth2 refresh token |
| `scope`                 | String | OAuth2 scope |
| `tokenType`             | String | Token type (e.g. Bearer) |
| `refreshTokenExpiresIn` | String | Refresh token expiration |
| `expiryDate`            | String | Access token expiry time |

---

### 🔹 S3 / DigitalOcean Space Fields

| Field             | Type   | Description |
|------------------|--------|-------------|
| `s3Endpoint`      | String | Full endpoint URL |
| `s3AccessKeyId`   | String | S3 access key |
| `s3SecretKey`     | String | S3 secret key |
| `s3Region`        | String | Region (e.g., `sfo3`) |
| `s3BucketName`    | String | Bucket name |
| `s3SpaceEndPoint` | String | Base domain (`digitaloceanspaces.com`) |

---

### 🔹 Quota & Flags

| Field                | Type     | Description |
|---------------------|----------|-------------|
| `quota`             | Decimal  | Quota in bytes — `0` means unlimited |
| `quotaResetInterval`| Enum     | Options: `NA`, `daily`, `weekly`, `monthly` |
| `isDefault`         | Boolean  | Set as tenant's default storage |

---

## Example Payload

```json
{
    "tanentId": 2,
    "companyId": 2,
    "schema": "schema_9f61aa4f",
    "storageType": "s3UserProvider",
    "hostname": "",
    "port": 0,
    "username": "",
    "password": "",
    "token": "",
    "defaultPath": "/uploads",
    "s3Endpoint": "https://abcd.region.digitaloceanspaces.com",
    "s3AccessKeyId": "******",
    "s3SecretKey": "******",
    "s3Region": "region",
    "s3BucketName": "bucket-name",
    "s3SpaceEndPoint": "digitaloceanspaces.com",// only base domain end point
    "quota": "0",
    "quotaResetInterval": "NA",
    "isDefault": true
}
```


## ✅ Success Response

```json
{
  "st": true,
  "statusCode": 201,
  "data": {
    "id": 26,
    "tanentId": 2,
    "schema": "schema_9f61aa4f",
    "companyId": 2,
    "storageType": "s3UserProvider",
    "hostname": "",
    "port": 0,
    "username": "",
    "password": "",
    "defaultPath": "/uploads",
    "token": "",
    "accessToken": null,
    "refreshToken": null,
    "scope": null,
    "tokenType": null,
    "refreshTokenExpiresIn": null,
    "expiryDate": null,
    "s3Endpoint": "https://abcd.region.digitaloceanspaces.com",
    "s3AccessKeyId": "******",
    "s3SecretKey": "******",
    "s3Region": "region",
    "s3BucketName": "bucket-name",
    "s3SpaceEndPoint": "digitaloceanspaces.com",
    "quota": "0",
    "consumed": "0",
    "quotaResetInterval": "NA",
    "isDefault": true,
    "isDeleted": false,
    "createAt": "2025-06-05T07:13:11.262Z",
    "createBy": 0,
    "updateAt": "2025-06-05T07:13:11.262Z",
    "updateBy": 0
  }
}

```
