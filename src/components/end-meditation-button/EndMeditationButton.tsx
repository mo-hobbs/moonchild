import React from "react";
import {IonActionSheet, IonButton} from "@ionic/react";

const EndMeditationButton: React.FC = () => {
  return (
    <>
      <IonButton
        id="open-action-sheet"
        color="danger"
        shape="round"
        fill="outline">
        End
      </IonButton>
      <IonActionSheet
        trigger="open-action-sheet"
        header="End Meditation?"
        subHeader="End and log your meditation."
        buttons={[
          {
            text: "End Meditation",
            role: "destructive",
            data: {
              action: "delete",
            },
          },
          {
            text: "Cancel",
            role: "cancel",
            data: {
              action: "cancel",
            },
          },
        ]}></IonActionSheet>
    </>
  );
};
export default EndMeditationButton;
