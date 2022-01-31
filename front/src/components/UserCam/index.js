import React, { useEffect, useRef } from "react";
import styles from "./video.module.css";

const Video = ({ keys, participant }) => {
  const videoRef = useRef(null);
  useEffect(() => {
    videoRef.current.srcObject =
      participant.type === "local"
        ? participant.rtcPeer.getLocalStream()
        : participant.rtcPeer.getRemoteStream();
  });
  return (
    <div className={styles.container}>
      <h1>비디오 컴포넌트</h1>
      <li className={styles.li} key={keys}>
        <video className={styles.video} ref={videoRef} autoPlay></video>
      </li>
    </div>
  );
};

export default Video;
