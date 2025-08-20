# 🧾 Project Discussion / Chat Module

In our project discussion / chat module, we use **WebSocket (Socket.IO)** to send and receive messages in real-time.
This doc explains how the client connects to the chat socket and covers all the **major emits and events** used in the module.

You'll find how to:

* establish the connection (with auth token)
* join a room
* send room messages
* handle incoming messages
* send / receive personal (one-to-one) messages
* handle notifications

 