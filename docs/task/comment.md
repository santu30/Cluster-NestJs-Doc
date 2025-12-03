# Realtime Task Comment Section (Socket.io)

#### Overview

* Uses the **existing project socket connection**; no new connection required.
* Allows users to **join task-specific comment rooms** and **send/receive comments in real-time**.

---

#### Join Task Comment Room

`Event`: `join-task-comment-room`

**Client Payload**

```json
{
  "taskId": 123
}
```

**Server Response** (`task-comment-room-joined`)

```json
{
  "roomId": "room_123",
  "firstName": "John",
  "lastName": "Doe",
  "tenetUserId": 456,
  "from": "socketId_789"
}
```

**Description**

* Client emits to join a specific task comment room.
* Server adds the user to the room and confirms via `task-comment-room-joined`.

---

#### Send Comment

`Event`: `comment`

**Client Payload**

```json
{
  "taskId": 123,
  "roomId": "room_123",
  "message": "This is a comment."
}
```

**Server Response** (`comment-on-task`)

```json
{
  "roomId": "room_123",
  "message": "This is a comment.",
  "taskId": 123,
  "firstName": "John",
  "lastName": "Doe"
}
```

**Description**

* Client emits a comment with task ID, room ID, and message.
* Server broadcasts the comment to all users in the room in real-time.