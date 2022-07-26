import React from "react";
import "./MessageSender.css";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useState } from "react";
import { useStateValue } from "./StateProvider";
import db from "./firebase";

function MessageSender() {
  const [{ user }] = useStateValue();

  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      message: input,
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageUrl,
    });

    setImageUrl("");
    setInput("");
  };
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form action="">
          <input
            type="text"
            className="messageSender__input"
            placeholder={`What's on your mind, ${user.displayName} ?`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <input
            type="text"
            placeholder="Image URL (Optional)"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <button type="submit" onClick={handleSubmit}>
            Handle Submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__options">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video </h3>
        </div>
        <div className="messageSender__options">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__options">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
