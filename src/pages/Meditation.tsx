import React from "react";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Meditation.css";
import MeditationItem from "../components/meditation-item/MeditationItem";

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
        <MeditationItem />
      </IonContent>
    </IonPage>
  );
};

export default Meditation;
