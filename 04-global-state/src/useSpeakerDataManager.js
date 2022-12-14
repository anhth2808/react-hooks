import SpeakerData from './SpeakerData';
import speakersReducer from './speakersReducer';

import {useEffect, useReducer, useContext} from 'react'

import axios from 'axios'

function useSpeakerDataManager() {

  const [{isLoading, speakerList, favoriteClickCount, hasErrored, error, imageRerenderIndentifier}, dispatch] = useReducer(speakersReducer, {
    isLoading: true,
    speakerList: [],
    favoriteClickCount: 0,
    hasErrored: false,
    error: null
  });
  
  function incrementFavoriteClickCount() {
    dispatch({type: "incrementFavoriteClickCount"});
  }

  function forceImageRerender() {
    dispatch({type: "forceImageRerender"});
  }

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
      try {
        let result = await axios.get('/api/speakers')
        dispatch({
          type: 'setSpeakerList',
          data: result.data,
        });
      } catch (e) {
        dispatch({
          type: 'errored',
          error: e
        })
      }
    }
    
    fetchData();

    return () => {
      console.log('cleanup');
    };
  }, []); // [speakingSunday, speakingSaturday]);

  return {
    isLoading, 
    speakerList, 
    favoriteClickCount, 
    incrementFavoriteClickCount, 
    toggleSpeakerFavorite,
    hasErrored,
    error,
    forceImageRerender,
    imageRerenderIndentifier
  };
}

export default useSpeakerDataManager;