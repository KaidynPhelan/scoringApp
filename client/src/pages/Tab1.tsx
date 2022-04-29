import { IonButton, IonContent, IonHeader, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import CompListItem from '../components/CompListItem';
import Axios from 'axios';
import './Tab1.css';
import AddComp from '../components/AddComp';

const Tab1: React.FC = () => {

  const [comps, setComps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [compModalOpen, setCompModalOpen] = useState(false);

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
          <IonButton onClick={() => {setCompModalOpen(true); }}>Create a Competition</IonButton>
          <IonModal isOpen = {compModalOpen}>
            <IonContent>
              <AddComp close = {() => {setCompModalOpen(false); LoadCompetitions(); }} />
            </IonContent>
          </IonModal>
        </IonContent>
        :
        <div>Loading...</div>
      }
    </IonPage>
  );


};

export default Tab1;
