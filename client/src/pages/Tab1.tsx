import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import CompListItem from '../components/CompListItem';
import Axios from 'axios';
import './Tab1.css';

const Tab1: React.FC = () => {

  const [comps, setComps] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load the data when the component mounts
  useEffect(() => {
    LoadCompetitions();
  }, []);

  // Download competition information from the backend
  async function LoadCompetitions() {
    try {
      const response = await Axios.get('/comps/');
      setComps(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error); 
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className='headerbar'>Competitions: </IonTitle>
        </IonToolbar>
      </IonHeader>
      {
        !loading ?
        <IonContent fullscreen>
          {comps.map((comps, index) => (
            <CompListItem Comp = {comps} key={index}/>
          ))}
        </IonContent>
        :
        <div>Loading...</div>
      }
    </IonPage>
  );


};

export default Tab1;
