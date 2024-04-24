import React, { useContext } from "react";
import NoteContainer from "../NotesContainer/NoteContainer";
import DefaultScreen from "../DefaultScreen/defaultScreen";
import UserContext from "../Context/UserContext";
const View = () => {
  const { currentgroup } = useContext(UserContext);
  return <>{currentgroup ? <NoteContainer /> : <DefaultScreen />}</>;
};

export default View;