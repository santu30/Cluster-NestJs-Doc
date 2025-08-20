# 🧾 Project Discussion / Chat Module

Initializes a socket.io connection to the cluster discussion/chat module.
This connection is required before joining any room or sending messages.

---

## Endpoint

`http://<baseURL>/`

---

## Auth

| Field   | Type   | Required | Description                          |
| ------- | ------ | -------- | ------------------------------------ |
| `token` | string | ✅ Yes    | Bearer token used for authentication |

> The token should be passed inside the `auth` object while initializing the socket.

---

## Example

```js
const socket = io('http://localhost:3001/', {
  auth: {
    token: '<JWT_ACCESS_TOKEN>'// tanent token
  }
});
```

---

## ✅ Server Emits on Successful Connect

| Event  | Payload Structure                                      |
| ------ | ------------------------------------------------------ |
| `user` | `{ firstName, lastName, tenetUserId, projectId, ... }` |

 
