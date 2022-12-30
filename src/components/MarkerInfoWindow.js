
import { IonButton, IonCol, IonContent, IonGrid, IonIcon, IonLabel, IonNote, IonRow } from '@ionic/react';
import { heartOutline, locationOutline, navigateOutline } from "ionicons/icons";



export function MarkerInfoWindow({ birds, dismiss }) {
    return (
        <IonContent>
            <IonGrid className="ion-padding">

                <IonRow className="ion-margin-bottom">
                    <IonCol size="12">
                        <IonLabel>
                            <h1>{birds.comName}</h1>
                            <IonNote>{birds.sciName}</IonNote>
                        </IonLabel>
                    </IonCol>
                </IonRow>

                <IonRow className="ion-justify-content-start ion-align-items-center">
                    <IonCol size="2">
                        <IonIcon icon={locationOutline} color="primary" style={{ fontSize: "1.5rem" }} />
                    </IonCol>

                    <IonCol size="10">{birds.locName}</IonCol>
                </IonRow>

                {/* <IonRow className="ion-justify-content-start ion-align-items-center">
                <IonCol size="2">
                    <IonIcon icon={phonePortraitOutline} color="primary" style={{fontSize: "1.5rem"}} />
                </IonCol>

                <IonCol size="10">{marker.phone}</IonCol>
            </IonRow> */}

                <IonRow>
                    <IonButton>
                        <IonIcon icon={heartOutline} />&nbsp;
                        Favourite
                    </IonButton>
                    <IonButton>
                        <IonIcon icon={navigateOutline} />&nbsp;
                        Navigate
                    </IonButton>
                </IonRow>
            </IonGrid>
        </IonContent>
    );
}