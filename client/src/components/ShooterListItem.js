import { IonButton, IonContent, IonModal } from '@ionic/react';
import EditShooter from './EditShooter';
import { useEffect, useState } from 'react';
import axios from 'axios';


function ShooterListItem ({Shooter, LoadShooters}) {
    const [editShooterModalOpen, setEditShooterModalOpen] = useState(false);

    async function DeleteShooter(LoadShooters) {
        try {
            const response = await axios.delete('/shooters/' + Shooter._id)
        } catch(error) {
            console.log(error)
        }
    }





    return (
        <div>
            <div>
            <h1>Shooter Name: {Shooter.fname} {Shooter.lname}</h1>
            <IonButton onClick={() => {setEditShooterModalOpen(true); }}>Edit Shooter</IonButton>
            <IonModal isOpen = {editShooterModalOpen} backdropDismiss = {false} >
                <IonContent>
                    <EditShooter close={() => { setEditShooterModalOpen(false); LoadShooters();  }} Shooter={Shooter}/>
                    <IonButton onClick={() => {setEditShooterModalOpen(false); }}>Cancel</IonButton>
                </IonContent>
            </IonModal>
            <IonButton onClick={() => {DeleteShooter(); LoadShooters(); }}>Delete Shooter</IonButton>
            </div>
        </div>
    )
}

export default ShooterListItem;
