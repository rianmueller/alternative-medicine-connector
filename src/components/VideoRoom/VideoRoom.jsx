import React, { useEffect, useRef } from "react";
import styles from "./VideoRoom.module.scss";
import Video from "twilio-video";

const VideoRoom = ({ token }) => {
  const localMediaRef = useRef();
  const remoteMediaRef = useRef();

  useEffect(() => {
    Video.connect(token, { video: true, audio: true, name: "GreenMeds" }).then(
      room => {
        console.log(`Connected to Room: ${room.name}`);
        Video.createLocalVideoTrack().then(track => {
          localMediaRef.current.appendChild(track.attach());
        });
        const addParticipant = participant => {
          console.log(`${participant.identity}, has entered!`);
          participant.tracks.forEach(publication => {
            if (publication.isSubscribed) {
              const track = publication.track;
              remoteMediaRef.current.appendChild(track.attach());
              console.log("Subbed track attached");
            }
          });
          participant.on("trackSubscribed", track => {
            remoteMediaRef.current.appendChild(track.attach());
            console.log("remote track attached");
          });
        };
        room.participants.forEach(addParticipant);
        room.on("participantConnected", addParticipant);

        room.on("disconnected", room => {
          console.log(room);
          room.localParticipant.tracks.forEach(track => {
            console.log("track", track);
            // track.stop;
            // track.detach();
            console.log("disconnect");
          });
        });
        // room.disconnect()
      }
    );
  }, [token]);

  const handleDisconnect = () => {
    console.log(Video.LocalVideoTrack);
    Video.LocalVideoTrack.detach()
  };

  return (
    <>
      <h1 className={styles.hello}>Hello Muthfaka</h1>
      <div ref={localMediaRef} />
      <div ref={remoteMediaRef} />
      <button type="submit" onClick={handleDisconnect}>
        disconnect
      </button>
    </>
  );
};

export default VideoRoom
