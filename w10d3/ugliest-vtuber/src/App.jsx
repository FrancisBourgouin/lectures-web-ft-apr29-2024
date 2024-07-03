import { useRef, useState } from "react";
import Webcam from "react-webcam";
import "./App.scss";
import { createFaceLandmarker, predictWebcam } from "./helpers/mediapipe-helpers";
import { calculateDistanceBetweenPoints } from "./helpers/math-helpers";

function App() {
  const [faceValues, setFaceValues] = useState({
    leftEye: 0,
    rightEye: 0,
    mouth: 0,
  });

  const webcamRef = useRef();

  console.log("Initial", webcamRef.current);

  const showEyeLidDistance = (results) => {
    const faceLandmarks = results.faceLandmarks[0];

    if (faceLandmarks) {
      const topLeftEyelid = faceLandmarks[386];
      const bottomLeftEyelid = faceLandmarks[374];
      const leftEye = Math.floor(
        calculateDistanceBetweenPoints(topLeftEyelid, bottomLeftEyelid) * 1000
      );

      const topRightEyelid = faceLandmarks[159];
      const bottomRightEyelid = faceLandmarks[145];
      const rightEye = Math.floor(
        calculateDistanceBetweenPoints(topRightEyelid, bottomRightEyelid) * 1000
      );

      const topMouth = faceLandmarks[13];
      const bottomMouth = faceLandmarks[14];
      const mouth = Math.floor(
        calculateDistanceBetweenPoints(topMouth, bottomMouth) * 1000
      );

      setFaceValues({ leftEye, rightEye, mouth });
    }
  };

  const handleWebcamReady = async () => {
    console.log("Webcam ready", webcamRef.current.video);
    const faceLandmarker = await createFaceLandmarker();
    predictWebcam(webcamRef.current.video, faceLandmarker, showEyeLidDistance);
  };

  const leftEyeStyle = {transform: `scale(${faceValues.leftEye / 20})`}
  const rightEyeStyle = {transform: `scale(${faceValues.rightEye / 20})`}
  const mouthStyle = {height: `${1.3 * faceValues.mouth}%`}

  return (
    <>
      <main>

        <Webcam
          ref={webcamRef}
          onUserMedia={handleWebcamReady}
          style={{ width: "40em", height: "auto" }}
        />

        <section className="vtuber-face">
          <div className="leftEye" style={leftEyeStyle}></div>
          <div className="rightEye" style={rightEyeStyle}></div>
          <div className="nose"></div>
          <div className="mouth">
            <div className="inside-mouth" style={mouthStyle}></div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
