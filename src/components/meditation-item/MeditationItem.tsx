import React from "react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";

const MeditationItem: React.FC = () => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Let's Breathe</IonCardTitle>
        <IonCardSubtitle>5 minutes</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        <p>Inhale. Exhale. Repeat.</p>
      </IonCardContent>
    </IonCard>
  );
};
export default MeditationItem;
