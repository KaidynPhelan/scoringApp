import { IonItem, IonList, IonLabel, IonInput, IonButton, IonSelect, IonSelectOption } from '@ionic/react';
import axios, { Axios } from 'axios';
import React, { useState, useEffect } from 'react';

function AddComp ({ close }) {

    const [shooters, setShooters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        LoadShooters();
      }, []);

      async function LoadShooters() {
          try {
              const response = await axios.get('/shooters/');
              setShooters(response.data);
              setLoading(false);
          } catch (error) {
              console.error(error);
          }
      }




    const [formValue, setformValue] = React.useState({
        club: '',
        type: '',
        targets: 0,
        status: '',
        shooters: []
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        const CompFormData = new FormData();
        CompFormData.append("club", formValue.club)
        CompFormData.append("type", formValue.type)
        CompFormData.append("targets", formValue.targets)
        CompFormData.append("status", formValue.status)
        CompFormData.append("shooters", formValue.shooters)

        try {
            await axios({
                method: "POST",
                url: "/comps/add",
                data: Object.fromEntries(CompFormData)

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
                <h1>Add New Competition: </h1>
                <br></br>
                <form onSubmit={handleSubmit}>
                    <IonList>
                        <IonItem>
                            <IonLabel position='stacked'>Gun CLub</IonLabel>
                            <IonInput placeholder='Test' value= {formValue.club} onIonChange = {handleChange} name = 'club'></IonInput>
                        </IonItem>
                        




                        <IonItem>
                            <IonLabel position='stacked'>Shooters Competing: </IonLabel>
                            <IonSelect multiple = {true} value = {formValue.shooters} okText = "okay" cancelText='Dismiss' onIonChange={handleChange} name = "shooters">
                                {shooters.map((shooter, index) =>(
                                    <IonSelectOption Shooter = {shooter} key = {index}>{shooter.fname + " " + shooter.lname}</IonSelectOption>
                                ))}
                            </IonSelect>
                        </IonItem>
                    </IonList>

                </form>
            </div>
        </div>
    )
}

export default AddComp;
