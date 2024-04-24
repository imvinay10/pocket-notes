import { useState, useContext } from "react"; // Import necessary hooks
import Groupcomp from "./Components/Group/Groupcomp"; // Import Group component
import DefaultScreen from "./Components/DefaultScreen/defaultScreen"; // Import DefaultScreen component
import Modal from "./Components/Modal/GroupModal"; // Import Modal component
import UserContextProvider from "./Components/Context/UserContextProvider"; // Import UserContextProvider
import View from "./Components/View/View"; // Import View component
import UserContext from "./Components/Context/UserContext"; // Import UserContext

function App() {
  const { notes } = useContext(UserContext);

  const [ismodalopen, setisemodalopen] = useState(false);
  const open = () => {
    setisemodalopen(true);
  };
  const close = () => {
    setisemodalopen(false);
  };

  return (
    <div className="maindiv" style={{ display: "flex" }}>
      <Groupcomp open={open} />
      {!notes && <View />}
      {ismodalopen && <Modal close={close} setisemodalopen={setisemodalopen} />}
    </div>
  );
}

export default App;