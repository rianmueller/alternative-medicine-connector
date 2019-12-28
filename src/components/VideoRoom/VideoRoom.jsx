import React, { useEffect, useRef } from "react";
import styles from "./VideoRoom.module.scss";
import Video from "twilio-video";

const VideoRoom = ({ token }) => {
  const localMediaRef = useRef();
  const remoteMediaRef = useRef();

  useEffect(() => {
    Video.connect(token, {
      video: { width: 640 },
      audio: true,
      name: "GreenMeds"
    }).then(room => {
      Video.createLocalVideoTrack().then(track => {
        localMediaRef.current.appendChild(track.attach());
      });
      const addParticipant = participant => {
        participant.tracks.forEach(publication => {
          if (publication.isSubscribed) {
            const track = publication.track;
            remoteMediaRef.current.appendChild(track.attach());
          }
        });
        participant.on("trackSubscribed", track => {
          remoteMediaRef.current.appendChild(track.attach());
        });
      };
      room.participants.forEach(addParticipant);
      room.on("participantConnected", addParticipant);

      room.on("disconnected", room => {
        room.localParticipant.tracks.forEach(track => {});
      });
    });
  }, [token]);

  const handleDisconnect = () => {
    Video.LocalVideoTrack.detach();
  };

  return (
    <>
      <h1 className={styles.hello}>Let's get chatting!</h1>
      <div className={styles.vidContainer}>
        <div className={styles.localVid} ref={localMediaRef} />
        <div className={styles.remoteVid} ref={remoteMediaRef} />
      </div>
      <button type="submit" onClick={handleDisconnect}>
        disconnect
      </button>
    </>
  );
};

export default VideoRoom;
