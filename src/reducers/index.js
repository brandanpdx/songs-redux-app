import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "Sun & Moon",
      duration: "4:05",
    },
    {
      title: "Peace of Mind",
      duration: "3:25",
    },
    {
      title: "We're All We Need",
      duration: "6:22",
    },
    {
      title: "Blue Sky Action",
      duration: "5:53",
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
