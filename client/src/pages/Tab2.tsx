import { IonButton, IonContent, IonHeader, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import './Tab2.css';
import ShooterListItem from '../components/ShooterListItem';
import AddShooter from '../components/AddShooter';

const Tab2: React.FC = () => {

  const [shooters, setShooters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    LoadShooters();
  }, [])

  async function LoadShooters() {
    try{
      const response = await Axios.get('/shooters/');
      setShooters(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }




  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Shooters:</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {shooters.map((shooters, index) => (
          <ShooterListItem Shooter = {shooters} key = {index} />
        ))}
        <IonButton id="trigger-button">Add Shooter</IonButton>
        <IonModal trigger='trigger-button'>
          <IonContent>
            <AddShooter/>
          </IonContent>
        </IonModal>

      </IonContent>
    </IonPage>
  );
};

export default Tab2;
