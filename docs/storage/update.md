# Update Storage API

Update a specific storage config for your tenant. Google Drive updates are not supported via this endpoint.

## 📡 Method & Endpoint

**PUT** `/storage/:id`

---

## 📥 Payload Fields

### 🔹 Required

| Field         | Type   | Description                                                  |
| ------------- | ------ | ------------------------------------------------------------ |
| `tanentId`    | Int    | Tenant ID                                                    |
| `companyId`   | Int    | Linked company ID                                            |
| `schema`      | String | Tenant-specific DB schema                                    |
| `storageType` | Enum   | Storage type: `local`, `s3UserProvider`, `s3Primary`, `sftp` |
| `defaultPath` | String | Default file upload path                                     |

---

### 🔹 SFTP Fields

| Field      | Type   | Description         |
| ---------- | ------ | ------------------- |
| `hostname` | String | SFTP host           |
| `port`     | Int    | SFTP port           |
| `username` | String | SFTP login username |
| `password` | String | SFTP login password |

---

### 🔹 S3 / DigitalOcean Space Fields

| Field           | Type   | Description                |
| --------------- | ------ | -------------------------- |
| `s3Endpoint`    | String | Full endpoint URL          |
| `s3AccessKeyId` | String | S3 access key              |
| `s3SecretKey`   | String | S3 secret key              |
| `s3Region`      | String | Region (e.g., `us-west-2`) |
| `s3BucketName`  | String | Bucket name                |

---

### 🔹 Quota & Flags

| Field                | Type    | Description                                 |
| -------------------- | ------- | ------------------------------------------- |
| `quota`              | Decimal | Quota in MB/GB — `0` means unlimited        |
| `quotaResetInterval` | Enum    | Options: `NA`, `daily`, `weekly`, `monthly` |
| `isDefault`          | Boolean | Set as tenant's default storage             |

---

## 🧪 Example Payload

```json
{
  "tanentId": 2,
  "companyId": 2,
  "schema": "schema_9f61aa4f",
  "storageType": "s3UserProvider",
  "hostname": "Test",
  "port": 443,
  "username": "s3user",
  "password": "s3pass",
  "token": "3rffsf",
  "defaultPath": "/uploads/",
  "s3Endpoint": "https://s3.amazonaws.com",
  "s3AccessKeyId": "AKIAIOSFODNN7EXAMPLE",
  "s3SecretKey": "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
  "s3Region": "us-west-2",
  "s3BucketName": "my-cluster-bucket",
  "quota": "500.00",
  "quotaResetInterval": "NA",
  "isDefault": true
}
```

---

## ✅ Success Response

```json
{
  "st": true,
  "statusCode": 200,
  "data": {
    "id": 26,
    "tanentId": 2,
    "schema": "schema_9f61aa4f",
    "companyId": 2,
    "storageType": "s3UserProvider",
    "hostname": "Test",
    "port": 443,
    "username": "s3user",
    "password": "s3pass",
    "defaultPath": "/uploads/",
    "token": "3rffsf",
    "s3Endpoint": "https://s3.amazonaws.com",
    "s3AccessKeyId": "AKIAIOSFODNN7EXAMPLE",
    "s3SecretKey": "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
    "s3Region": "us-west-2",
    "s3BucketName": "my-cluster-bucket",
    "quota": "500.00",
    "quotaResetInterval": "NA",
    "isDefault": true,
    "isDeleted": false,
    "createAt": "2025-06-11T10:00:00.000Z",
    "createBy": 0,
    "updateAt": "2025-06-11T10:00:00.000Z",
    "updateBy": 0
  }
}
```