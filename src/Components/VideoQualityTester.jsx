import React, { useState } from "react";

const VideoQualityTester = () => {
  // State to store the uploaded video
  const [video, setVideo] = useState(null);
  // State to store the video quality
  const [videoQuality, setVideoQuality] = useState(null);

  // Function to handle video upload
  const handleVideoUpload = (event) => {
    // Get the uploaded video
    const uploadedVideo = event.target.files[0];
    // Set the uploaded video to state
    setVideo(uploadedVideo);
  };

  // Function to test video quality
  const testVideoQuality = () => {
    // Check if a video is uploaded
    if (!video) {
      alert("Please upload a video first");
      return;
    }

    // Create a video element
    const videoElement = document.createElement("video");
    // Set the video source
    videoElement.src = URL.createObjectURL(video);
    // Play the video
    videoElement.play();

    // Get the video width and height
    const videoWidth = videoElement.videoWidth;
    const videoHeight = videoElement.videoHeight;

    // Calculate the video quality based on the resolution
    let quality = "";
    if (videoWidth >= 1920 && videoHeight >= 1080) {
      quality = "Full HD (1080p)";
    } else if (videoWidth >= 1280 && videoHeight >= 720) {
      quality = "HD (720p)";
    } else if (videoWidth >= 640 && videoHeight >= 480) {
      quality = "SD (480p)";
    } else {
      quality = "Low";
    }

    // Set the video quality to state
    setVideoQuality(quality);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-md shadow-md">
      <h2 className="text-lg font-bold mb-4">Video Quality Tester</h2>
      <input
        type="file"
        accept="video/*"
        onChange={handleVideoUpload}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      />
      {video && (
        <div className="mt-4">
          <button
            onClick={testVideoQuality}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Test Video Quality
          </button>
          {videoQuality && (
            <p className="mt-4 text-lg font-bold">
              Video Quality: {videoQuality}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default VideoQualityTester;

// echo "# youtube-testing" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/bhupeshcoding/youtube-testing.git
// git push -u origin main

// git remote add origin https://github.com/bhupeshcoding/youtube-testing.git
// git branch -M main
// git push -u origin main
