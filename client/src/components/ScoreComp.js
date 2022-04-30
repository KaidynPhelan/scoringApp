import { IonItem, IonList, IonLabel, IonInput, IonButton, IonSelect, IonSelectOption } from '@ionic/react';
import axios from 'axios';
import React from 'react';

function ScoreComp ({Comp, close}) {
    const [formValue, setformValue] = React.useState({
        scores: Comp.scores
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        const CompFormData = new FormData();
        CompFormData.append("scores", formValue.scores)

        try{
            await axios({
                method: "POST",
                url: "/comps/update/" + Comp._id,
                data: Object.fromEntries(CompFormData)
            });
            close();
        } catch(error){
            console.log(error);
        }
    }
    const handleChange = (event) => {
        const updatedForm = formValue;
        updatedForm[event.target.name] = event.target.value;
        setformValue(updatedForm);
    }

    
    return (
        <p>test</p>
    )
}

export default ScoreComp;