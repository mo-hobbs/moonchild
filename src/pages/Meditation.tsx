import React from "react";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Meditation.css";
import MeditationTimer from "./meditation-timer/MeditationTimer";
import {playSharp} from "ionicons/icons";

const Meditation: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Meditation</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Meditation</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButtons>
          <IonButton>
            <IonIcon icon={playSharp} />
          </IonButton>
        </IonButtons>
      </IonContent>
    </IonPage>
  );
};

export default Meditation;
