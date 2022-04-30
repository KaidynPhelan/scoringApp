import { IonList, IonButton } from '@ionic/react';


function CompListItem ({Comp}) {
    return (
        <div>
            <h1>Competition name: { Comp.club }</h1>
            <IonButton>Edit Competition</IonButton>
            <IonButton>Delete Competition</IonButton>
            <IonButton>Start Competition</IonButton>
        </div>
    )
}

export default CompListItem;
