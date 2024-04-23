import { useState } from "react";
import Groupcomp from "./Components/Group/Groupcomp";
import DefaultScreen from "./Components/DefaultScreen/defaultScreen";
import Modal from "./Components/Modal/GroupModal";
import UserContextProvider from "./Components/Context/UserContextProvider";
function App() {

  const [ismodalopen, setisemodalopen] = useState(false);

  const open = () => {
    setisemodalopen(true);
  };
  const close = () => {
    setisemodalopen(false);
  };

  return (
    <UserContextProvider>
      <div className="maindiv" style={{ display: "flex" }}>
        <Groupcomp open={open} />
        <DefaultScreen />
        {ismodalopen && (
          <Modal
            close={close}
            setisemodalopensetisemodalopen={setisemodalopen}
          />
        )}      </div>
    </UserContextProvider>
  );
}

export default App;