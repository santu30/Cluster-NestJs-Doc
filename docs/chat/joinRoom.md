# Join Room

When a user click on discussion topic, the client must join the corresponding room in order to start receiving and sending messages for that discussion topic.

> ⚠️ RoomId will be obtained from the discussion listing API.



## Emit

`joinRoom`

---

## Payload

| Field    | Type   | Required | Description                        |
| -------- | ------ | -------- | ---------------------------------- |
| `roomId` | string | ✅ Yes    | Unique ID of the discussion / room |

---

## Example

```js
socket.emit('joinRoom', { roomId });
```

---

## ✅ Server Emits on Success

| Event        | Payload Structure                           |
| ------------ | ------------------------------------------- |
| `joinedRoom` | `{ firstName, lastName, tenetUserId, ... }` |

> Once this is received, the client can enable UI controls and call `getMessages` to load the message history or use get messages API.

 
