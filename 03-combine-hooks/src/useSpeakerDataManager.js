import SpeakerData from './SpeakerData';
import speakersReducer from './speakersReducer';

import {useEffect, useReducer, useContext} from 'react'

import axios from 'axios'
import { InitialSpeakersDataContext } from '../pages/speakers';

function useSpeakerDataManager() {

  const initialSpeakersData = useContext(InitialSpeakersDataContext);

  const [{isLoading, speakerList}, dispatch] = useReducer(speakersReducer, {
    isLoading: true,
    speakerList: []
  });
  
  function toggleSpeakerFavorite(speakerRec) {
    
    const updateData = async function() {
      axios.get(`/api/speakers/${speakerRec.id}`, {...speakerRec, favorite: !speakerRec.favorite,});
      
      speakerRec.favorite === true ?
      dispatch({type: "unfavorite", id: speakerRec.id}):
        dispatch({type: "favorite", id: speakerRec.id});
    };
    updateData();
  }

  
  useEffect(() => {  
    const fetchData = async function() {
      let result = await axios.get('/api/speakers')
        dispatch({
          type: 'setSpeakerList',
          data: result.data,
        });
    }
    
    fetchData();

    return () => {
      console.log('cleanup');
    };
  }, []); // [speakingSunday, speakingSaturday]);

  return {isLoading, speakerList, toggleSpeakerFavorite};
}

export default useSpeakerDataManager;