import React, { useState, useEffect } from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from "@ionic/react";

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

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Meditation Timer</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="timer-display">
          <h1>{formatTime(timer)}</h1>
        </div>

        <div className="button-group">
          <IonButton color="success" onClick={startTimer} disabled={isRunning}>
            Start
          </IonButton>
          <IonButton color="danger" onClick={stopTimer} disabled={!isRunning}>
            Stop
          </IonButton>
          <IonButton color="medium" onClick={resetTimer}>
            Reset
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default MeditationTimer;
