import React, { Component } from "react";
import { auth } from "../services/firebase";
import { db } from "../services/firebase";
import { signout } from "../helpers/auth";

const Chat = () => {
  const [user, setUser] = React.useState(auth().currentUser);
  const [chats, setChats] = React.useState([]);
  const [content, setContent] = React.useState("");
  const [readError, setReadError] = React.useState(null);
  const [writeError, setWriteError] = React.useState(null);

  React.useState(() => {
    console.log("[Chat.js mounted]");
    setReadError(null);
    try {
      db.ref("chats").on("value", (snapshot) => {
        let chats = [];
        snapshot.forEach((snap) => {
          chats.push(snap.val());
        });
        setChats(chats);
      });
    } catch (error) {
      setReadError(error.message);
    }
  }, []);

  const handleChange = (ev) => {
    setContent(ev.target.value);
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    setWriteError(null);
    try {
      await db.ref("chats").push({
        content: content,
        timestamp: Date.now(),
        uid: user.uid,
      });
      setContent("");
    } catch (error) {
      setWriteError(error.message);
    }
  };

  return (
    <div>
      <h1>Chat Page</h1>
      <button onClick={signout} type="button">
        Sign Out
      </button>
      <div>
        <div className="chats">
          {chats.map((chat) => {
            return <p key={chat.timestamp}>{chat.content}</p>;
          })}
        </div>
        # message form #
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} value={content} />
          {readError ? <p>{writeError}</p> : null}
          <button type="submit">Send</button>
        </form>
        <div>
          Login in as: <strong>{user.email}</strong>
        </div>
      </div>
    </div>
  );
};

export default Chat;
