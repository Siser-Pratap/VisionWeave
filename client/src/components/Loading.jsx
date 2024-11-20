import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Loading = () => {
  const progressBarRef = useRef(null);
  const percentageRef = useRef(null);
  const preloaderRef = useRef(null);


  const styles = {
    preloader: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "#121212",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 9999,
    },
    loaderContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    progressBarContainer: {
      width: "80%",
      height: "10px",
      backgroundColor: "#333",
      borderRadius: "5px",
      overflow: "hidden",
      marginBottom: "20px",
    },
    progressBar: {
      height: "100%",
      width: "0%",
      backgroundColor: "#00ff99",
      borderRadius: "5px",
    },
    percentage: {
      fontSize: "1.5rem",
      color: "#fff",
      fontWeight: "bold",
    },
  };

  useEffect(() => {
    const timeline = gsap.timeline();

    // Animation: Progress bar and percentage counter
    timeline
      .to(percentageRef.current, {
        innerText: 100,
        duration: 3,
        snap: { innerText: 1 },
        ease: "none",
        onUpdate: function () {
          const value = Math.round(timeline.progress() * 100);
          percentageRef.current.innerText = `${value}%`;
        },
      })
      .to(
        progressBarRef.current,
        {
          width: "100%",
          duration: 3,
          ease: "power1.inOut",
        },
        "<"
      )
      .to(preloaderRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
          preloaderRef.current.style.display = "none";
        },
      });

    // Cleanup GSAP animations
    return () => timeline.kill();
  }, []);

  return (
    <div ref={preloaderRef} style={styles.preloader}>
      <div style={styles.loaderContainer}>
        <div style={styles.progressBarContainer}>
          <div ref={progressBarRef} style={styles.progressBar}></div>
        </div>
        <div ref={percentageRef} style={styles.percentage}>
          0%
        </div>
      </div>
    </div>
  );
};


export default Loading;
