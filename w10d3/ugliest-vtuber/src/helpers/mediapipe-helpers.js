import * as vision from "@mediapipe/tasks-vision";
// import { FaceLandmarker, FilesetResolver } from "@mediapipe/tasks-vision";

const { FaceLandmarker, FilesetResolver } = vision;

let lastVideoTime = -1;

export const createFaceLandmarker = async () => {
  const filesetResolver = await FilesetResolver.forVisionTasks(
    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/wasm"
  );
  const faceLandmarker = await FaceLandmarker.createFromOptions(filesetResolver, {
    baseOptions: {
      modelAssetPath: `https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task`,
      delegate: "GPU",
    },
    outputFaceBlendshapes: true,
    runningMode: "VIDEO",
    numFaces: 1,
  });

  return faceLandmarker;
};

export const predictWebcam = async (video, faceLandmarker, callback) => {
  let results;
  let startTimeMs = performance.now();

  if (lastVideoTime !== video.currentTime) {
    lastVideoTime = video.currentTime;
    results = faceLandmarker.detectForVideo(video, startTimeMs);
  }
  if (results && results.faceLandmarks) {
    callback(results);
  }

  // Call this function again to keep predicting when the browser is ready.
  // if (webcamRunning === true) {
  window.requestAnimationFrame(() => predictWebcam(video, faceLandmarker, callback));
  // }
};
