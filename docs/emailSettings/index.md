# Receive Email Settings Module

`moduleName`, `Email Id` array (stored as a single entry for each module).
`moduleName` cannot be duplicated, but the same email can be used in different modules.

Example input:

moduleName: "User" <br>
Email Ids: "user@koffeekodes.com, user2@koffeekodes.com,
user3@koffeekodes.com, common@koffeekodes.com" <br>

moduleName: "Account" <br>
Email Ids: "account@koffeekodes.com, account2@koffeekodes.com,
account3@koffeekodes.com, common@koffeekodes.com" <br>

moduleName: "Auth" <br>
Email Ids: "auth@koffeekodes.com, auth2@koffeekodes.com,
auth3@koffeekodes.com, common@koffeekodes.com" <br>

#### Example DB record

| Id | Module | Email |
|---|---|---|
| 1 | User | user@koffeekodes.com, user2@koffeekodes.com, user3@koffeekodes.com, common@koffeekodes.com |
| 2 | Account | account@koffeekodes.com, account2@koffeekodes.com, account3@koffeekodes.com, common@koffeekodes.com |
| 3 | Auth | auth@koffeekodes.com, auth2@koffeekodes.com, auth3@koffeekodes.com, common@koffeekodes.com |


#### Create API Payload
```json
{
  "moduleName": "User",
  "emailIds": [
    "user@koffeekodes.com",
    "user2@koffeekodes.com",
    "user3@koffeekodes.com",
    "common@koffeekodes.com"
  ]
}
```


#### Listing API Response
```json
{
  "totalPages": 10,
  "totalDocs": 100,
  "data": [
    {
      "id": 1,
      "moduleName": "User",
      "emailIds": [
        "user@koffeekodes.com",
        "user2@koffeekodes.com",
        "user3@koffeekodes.com",
        "common@koffeekodes.com"
      ]
    },
    {
      "id": 2,
      "moduleName": "Account",
      "emailIds": [
        "account@koffeekodes.com",
        "account2@koffeekodes.com",
        "account3@koffeekodes.com",
        "common@koffeekodes.com"
      ]
    },
    {
      "id": 3,
      "moduleName": "Auth",
      "emailIds": [
        "auth@koffeekodes.com",
        "auth2@koffeekodes.com",
        "auth3@koffeekodes.com",
        "common@koffeekodes.com"
      ]
    }
  ]
}


```

#### Update API Payload
PUT {{url}}/receive-email/:id

```json
{
  "moduleName": "User",
  "emailIds": [
    "user@koffeekodes.com",
    "user2@koffeekodes.com",
    "user3@koffeekodes.com",
    "common@koffeekodes.com"
  ]
}

```

#### Get By Id Reponse

```json
{
  "id": 1,
  "moduleName": "User",
  "emailIds": [
    "user@koffeekodes.com",
    "user2@koffeekodes.com",
    "user3@koffeekodes.com",
    "common@koffeekodes.com"
  ]
}

```



> When sending an email, fetch the single record based on the module. Extract the comma-separated email values and use them in the CC field.


---

# Send Email (SMTP) Configuration

#### Create API

| Field | Description |
|---|---|
| `moduleName` | Array of module names to associate with this SMTP configuration |
| `email` | Sender email address |
| `smtpConfig` | SMTP server configuration (host, port, username, password, etc.) |

#### Validation & Note

1. For each module name in the array, create a **separate database entry**
2. Store all SMTP data **in encrypted format**
3. Before saving, **send a test email** using the provided SMTP configuration
4. Save only if test email is successful

#### Example Payload

```json
{
  "moduleName": ["User", "Account"],
  "email": "noreply@koffeekodes.com",
  "host": "smtp.gmail.com",
  "port": 587,
  "username": "noreply@koffeekodes.com",
  "password": "yourPasswordHere",
  "secure": "SSL"
}
```

#### Record in database
(In the database it should be encrypted; for human readability it is shown here in normal text.)

| Id | Module Name | Email | Host | Port | Username | Password | Secure |
|---|---|---|---|---|---|---|---|
| 1 | User | noreply@koffeekodes.com | smtp.gmail.com | 587 | noreply@koffeekodes.com | yourPasswordHere | SSL |
| 2 | Account | noreply@koffeekodes.com | smtp.gmail.com | 587 | noreply@koffeekodes.com | yourPasswordHere | SSL |

#### Listing API
* All values must be **decrypted** before returning
* Do **not** return password or sensitive data

#### Response

```json 
{
  "success": true,
  "totalPages": 5,
  "totalDocs": 50,
  "data": [
    {
      "email": "noreply@koffeekodes.com",
      "moduleName": "User"
    },
    {
      "email": "noreply@koffeekodes.com",
      "moduleName": "Account"
    },
    {
      "email": "noreply@koffeekodes.com",
      "moduleName": "Auth"
    }
  ]
}

```
---

#### Get By ID API

* Same as listing, but for a single record.
* **Do not return the password** under any condition.

#### Example Response
```json
{
  "moduleName": ["User", "Account"],
  "email": "noreply@koffeekodes.com",
  "host": "smtp.gmail.com",
  "port": 587,
  "username": "noreply@koffeekodes.com",
  "secure": "SSL"
}
```
---

#### Update API

#### Validation Rules

1. If the request includes a **new password**, update it in the database (encrypted).
2. If **any value changes** (moduleName, email, host, port, username, etc.):

   * Re-validate the SMTP config by sending a test email.
   * Save only if the test passes.
3. If **something changed** but the request **did NOT include the password**:

   * Return an error:
     **“Password is required when updating SMTP configuration.”**
   * Because test email requires a valid password.


#### Example Payload
PUT {{url}}/send-email/:emailId
```json
{
  "moduleName": ["User", "Account"],
  "email": "noreply@koffeekodes.com",
  "host": "smtp.gmail.com",
  "port": 587,
  "username": "noreply@koffeekodes.com",
  "password": "not mandetory if provided need to update",
  "secure": "SSL"
}
```


