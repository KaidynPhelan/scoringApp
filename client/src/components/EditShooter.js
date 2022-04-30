import { IonItem, IonList, IonLabel, IonInput, IonButton, IonSelect, IonSelectOption } from '@ionic/react';
import axios from 'axios';
import React from 'react';

function EditShooter ({ close, Shooter }) {
    const [formValue, setformValue] = React.useState({
        fname: Shooter.fname,
        lname: Shooter.lname,
        grade: Shooter.grade,
        homeclub: Shooter.homeClub
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        const ShooterFormData = new FormData();
        ShooterFormData.append("fname", formValue.fname)
        ShooterFormData.append("lname", formValue.lname)
        ShooterFormData.append("grade", formValue.grade)
        ShooterFormData.append("homeClub", formValue.homeClub)

        try {
            await axios({
                method: "POST",
                url: '/shooters/update/' + Shooter._id,
                data: Object.fromEntries(ShooterFormData)
            });
            close();
        } catch(error){
            console.log(error)
        }
    }

    const handleChange = (event) => {
        const updatedForm = formValue;
        updatedForm[event.target.name] = event.target.value;
        setformValue(updatedForm);
    }



    return (
        <div>
            <div>
                <h1>Update Shooter: </h1>
                <br />
                <form onSubmit={handleSubmit}>
                    <IonList>
                        <IonItem>
                            <IonLabel position='stacked'>Shooters First Name</IonLabel>
                            <IonInput placeholder='Test' value={formValue.fname} onIonChange={handleChange} name = "fname"></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position='stacked'>Shooters Last Name</IonLabel>
                            <IonInput placeholder='Test' value = {formValue.lname} onIonChange={handleChange} name = "lname"></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position='stacked'>Shooters Grade {formValue.grade}</IonLabel>
                            <IonSelect defaultValue={"AA Grade"} value={formValue.grade} okText="Okay" cancelText="Dismiss" onIonChange={handleChange}  name = "grade">
                                <IonSelectOption value = "AA Grade">AA Grade</IonSelectOption>
                                <IonSelectOption value = "A Grade">A Grade</IonSelectOption>
                                <IonSelectOption value = "B Grade">B Grade</IonSelectOption>
                                <IonSelectOption value = "C Grade">C Grade</IonSelectOption>
                            </IonSelect>
                        </IonItem>
                        <IonItem>
                            <IonLabel position='stacked'>Shooters Gun Club</IonLabel>
                            <IonInput placeholder='Test' value={formValue.homeClub} onIonChange = {handleChange} name = "homeClub"></IonInput>
                        </IonItem>
                        <br></br>
                        <IonButton type='submit'>Submit</IonButton>
                    </IonList>
                </form>
        </div>
    </div>
    )
}
export default EditShooter;