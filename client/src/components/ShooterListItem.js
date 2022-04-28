import { IonButton } from '@ionic/react';
import {link} from 'react-router-dom';

function ShooterListItem ({Shooter}) {
    return (
        <div>
            <div>
            <h1>Shooter Name: {Shooter.fname} {Shooter.lname}</h1>
            <IonButton>Edit Shooter</IonButton>
            <IonButton>Delete Shooter</IonButton>
            </div>
        </div>
    )
}

export default ShooterListItem;
