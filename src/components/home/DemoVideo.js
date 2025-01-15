import React, { useState } from "react";

const DemoVideo = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  return (
    <section className="demo-video" id="demo_video">
      <div className="container">
        <h2>Watch Severity AI in Action</h2>
        <p>
          See how our AI-powered vulnerability detection can transform your
          development workflow.
        </p>
        <div
          className={`video-container ${videoLoaded ? "loaded" : ""} ${
            videoEnded ? "ended" : ""
          }`}
        >
          <video
            controls
            width="100%"
            poster="/images/video-placeholder.png"
            onLoadedData={handleVideoLoad}
            onEnded={handleVideoEnd}
          >
            <source
              src={`${process.env.PUBLIC_URL}/videos/demo-video.mp4`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          {!videoLoaded && (
            <div className="video-placeholder">
              <i className="fas fa-spinner fa-spin"></i>
            </div>
          )}
          {videoEnded && (
            <div className="video-poster">
              <img src="/images/video-placeholder.png" alt="Video Poster" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DemoVideo;
