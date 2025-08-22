# Send Message

When a user sends a message (text or file), the client must emit the `sendMessage` event to the server.

> ⚠️ `roomId` will be obtained from the **Discussion Listing API**.
> ⚠️ `messageId` must be generated on the client (5–10 digit unique number).
> ⚠️ For file upload, use the existing **File Upload API** before emitting `sendMessage`.

---

## Emit

`sendMessage`

---

## Payload

| Field         | Type        | Required | Description                                      |
| ------------- | ----------- | -------- | ------------------------------------------------ |
| `roomId`      | string      | ✅ Yes    | Unique ID of the discussion / room (from API)    |
| `message`     | string      | ✅ Yes    | Text content (empty string if only file is sent) |
| `messageType` | string      | ✅ Yes    | `Text` or `File`                                 |
| `fileInfo`    | array\|null | ❌ No     | Array of uploaded file objects (see below)       |
| `projectId`   | string      | ✅ Yes    | Project identifier linked to the message         |
| `replytoId`   | string      | ❌ No     | ID of the message being replied to               |
| `messageId`   | string      | ✅ Yes    | Client-generated unique ID (5–10 digit number)   |

---

## FileInfo Structure

If `messageType = File`, `fileInfo` must be an array of objects:

| Field       | Type   | Description                       |
| ----------- | ------ | --------------------------------- |
| `path`      | string | File storage path                 |
| `name`      | string | Original filename                 |
| `size`      | number | File size in bytes                |
| `mimetype`  | string | File MIME type (e.g. `image/png`) |
| `extension` | string | File extension (e.g. `png`)       |

---

## Example: Text Message

```js
socket.emit('sendMessage', {
    roomId: currentRoom, // obtained from Discussion Listing API
    message: 'Hello World 👋',
    messageType: 'Text',
    fileInfo: null,
    projectId: socketData.projectId,
    replytoId: null,
    messageId: String(Math.floor(10000 + Math.random() * 900000)) // client unique ID
});
```

---

## Example: File Message

```js
// After uploading via existing API
const mapped = result.data.map(f => ({
    path: f.imageRecord.path,
    name: f.imageRecord.name,
    size: f.imageRecord.size,
    mimetype: f.imageRecord.mimetype,
    extension: f.imageRecord.extension
}));

socket.emit('sendMessage', {
    roomId: currentRoom, // obtained from Discussion Listing API
    message: '', // optional text
    messageType: 'File',
    fileInfo: mapped,
    projectId: socketData.projectId,
    replytoId: null,
    messageId: String(Math.floor(100000 + Math.random() * 900000)) // client unique ID
});
```
---

 # Project Member Notification

When a user sends a message in a project discussion, the server will emit a `ProjectMemberNotification` event to **all users** in that project’s discussion room.

---

## Event

`ProjectMemberNotification`

---

## Payload

| Field          | Type        | Description                               |
| -------------- | ----------- | ----------------------------------------- |
| `msg`          | string      | The actual message content                |
| `fromId`       | string      | Sender’s unique user ID                   |
| `from`         | string      | Sender’s socket ID                        |
| `sendAt`       | string      | ISO timestamp when message was sent       |
| `messageType`  | string      | `Text` or `File`                          |
| `fileInfo`     | array\|null | File details if message type is `File`    |
| `roomId`       | string      | Room ID (from Discussion Listing API)     |
| `fromName`     | string      | Sender’s first name                       |
| `fromLastName` | string      | Sender’s last name                        |
| `projectName`  | string      | Name of the project linked to the message |

---

## Example

```js
socket.on('ProjectMemberNotification', (payload) => {
    console.log('New notification:', payload);
    // { msg, fromId, from, sendAt, messageType, fileInfo, roomId, fromName, fromLastName, projectName }
});
```

 ---
# Conversation History
use *POST* `chatHistory/discussionConversation` api to retrieve conversation history for a specific discussion. load this after `Room Join` event.


