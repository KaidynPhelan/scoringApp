import { IonList, IonButton } from '@ionic/react';
import axios from 'axios';


function CompListItem ({Comp, LoadComps}) {

    async function DeleteComp(LoadComps) {
        try {
            const response = await axios.delete('/comps/' + Comp._id)
        } catch(error) {
            console.log(error)
        }
    }


    return (
        <div>
            <h1>Competition name: { Comp.club }</h1>
            <IonButton>Edit Competition</IonButton>
            <IonButton onClick={() => {DeleteComp(); LoadComps(); }}>Delete Competition</IonButton>
            <IonButton>Start Competition</IonButton>
        </div>
    )
}

export default CompListItem;
