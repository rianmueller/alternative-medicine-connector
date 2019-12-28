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
      .catch(err => {});
  };

  return (
    <>
      <div className={styles.imgContainer}>
        <h1 className={styles.imgTxt}>
          Speak with one of our professionals to see if medical marijuana is
          right for you!
        </h1>
        <img
          className={styles.doctor}
          src="https://steemitimages.com/DQmdCKm8WtnxjXpU8MG1HyWkkZ2jRmDZVpD7SYWtLp8dYCK/Image%203.jpg"
        />
      </div>
      <div className={styles.container}>
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
    </>
  );
};

export default WaitingRoom;
