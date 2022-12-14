import React from "react";
import useSpeakerDataManager from './useSpeakerDataManager'

export const GlobalContext = React.createContext();



export const GlobalProvider = ({children}) => {
  
  const {
    isLoading, 
    speakerList, 
    favoriteClickCount, 
    incrementFavoriteClickCount, 
    toggleSpeakerFavorite,
    hasErrored,
    error,
    imageRerenderIndentifier,
    forceImageRerender
  } = useSpeakerDataManager();

  const provider = {
    isLoading, 
    speakerList, 
    favoriteClickCount, 
    incrementFavoriteClickCount, 
    toggleSpeakerFavorite,
    hasErrored,
    error,
    imageRerenderIndentifier,
    forceImageRerender
  }

  return (
    <GlobalContext.Provider value={provider}>
      {children}
    </GlobalContext.Provider>
  )
}