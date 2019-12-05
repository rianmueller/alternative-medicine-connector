import React, { useState } from "react";
import styles from "./WaitingRoom.module.scss";
import axios from "axios";
import VideoRoom from "../VideoRoom";

const WaitingRoom = () => {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [showVideo, setShowVideo] = useState(false);
  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post("/token", {
        identity: name
      })
      .then(res => {
        const { token } = res.data;
        setToken(token);
        setShowVideo(token);
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div>
      {!showVideo ? <h2 className={styles.hello}>Waiting Room</h2> : null}

      {!showVideo ? (
        <form onSubmit={handleSubmit}>
          <h3 className={styles.name}>Display Name:</h3>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <button type="submit">Join Video Chat</button>
        </form>
      ) : (
        <VideoRoom token={token} />
      )}
    </div>
  );
};

export default WaitingRoom;
