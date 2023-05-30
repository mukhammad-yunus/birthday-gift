import { useState } from "react";
import Greeting from "./components/Greeting";
import Congrats from "./components/Congrats";
import Memories from "./components/Memories";
import End from "./components/End";

function App() {
  const [isGreated, setIsGreated] = useState(true);
  const [isCongrated, setIsCongrated] = useState(false);
  const [isImage, setIsImage] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  
  return (
    <>
     {isEnd &&< End/>}
      {isGreated && (
        <Greeting setIsGreated={setIsGreated} setIsCongrated={setIsCongrated} />
      )}
      {isCongrated && <Congrats setIsCongrated={setIsCongrated} setIsImage={setIsImage}/>}
      {isImage && <Memories setIsImage={setIsImage} setIsEnd={setIsEnd} />}
    </>
  );
}

export default App;
