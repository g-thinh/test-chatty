import React from "react";
import { signout } from "../helpers/auth";

const Chat = () => {
  return (
    <div>
      <h1>Chat Page</h1>
      <button onClick={signout} type="button">
        Sign Out
      </button>
    </div>
  );
};

export default Chat;
