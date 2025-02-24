import React, {useState} from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonItem,
  IonLabel,
  IonAvatar,
} from "@ionic/react";
import "./MeditationTimer.css";
import EndMeditationButton from "../end-meditation-button/EndMeditationButton";
import { Button } from "../../stories/Button";

const user = {
  name: "Morgie",
};

const MeditationTimer: React.FC = () => {
  const [timer, setTimer] = useState(300); // 5 minutes (300 seconds)
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  // Load meditation audio
  // const sound = new Howl({
  //   src: ["/assets/audio/meditation.mp3"], // Ensure you have this file in `public/assets/audio/`
  //   loop: true,
  //   volume: 0.5,
  // });

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      // sound.play();

      const id = setInterval(() => {
        setTimer((prevTime) => {
          if (prevTime <= 1) {
            stopTimer();
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      setIntervalId(id);
    }
  };

  const stopTimer = () => {
    setIsRunning(false);
    // sound.stop();
    if (intervalId) clearInterval(intervalId);
    setIntervalId(null);
  };

  const resetTimer = () => {
    stopTimer();
    setTimer(300); // Reset to 5 minutes
  };

  // Format time as MM:SS
  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const togglePlayPause = () => {
    if (isRunning) {
      stopTimer();
    } else {
      startTimer();
    }
  };

  const buttonText = () => {
    if (timer === 300) {
      return "Start";
    } else if (isRunning) {
      return "Pause";
    } else {
      return "Continue";
    }
  };

  return (
    <IonPage>
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>Meditation Timer</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <IonContent className="ion-padding">
        <IonItem lines="none">
          <IonAvatar aria-hidden="true" slot="start">
            <img
              alt=""
              src="https://ionicframework.com/docs/img/demos/avatar.svg"
            />
          </IonAvatar>
          <IonLabel>Welcome back, {user.name}</IonLabel>
        </IonItem>
        <div className="meditation-timer-container">
          <div>
            <h1 className="timer-display">{formatTime(timer)}</h1>
          </div>

          <div className="button-group">
            <div>
              <IonButton
                className="start-button"
                color="primary"
                size="large"
                shape="round"
                onClick={togglePlayPause}>
                {buttonText()}
              </IonButton>
            </div>
            <Button label="Start" primary backgroundColor="var(--ion-color-primary)" />
            <div className="button-row">
              <IonButton
                color="primary"
                onClick={resetTimer}
                shape="round"
                fill="outline"
                className="reset-button">
                Reset
              </IonButton>

              <EndMeditationButton />
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default MeditationTimer;
