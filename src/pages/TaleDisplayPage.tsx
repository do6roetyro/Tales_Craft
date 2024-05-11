import React, {useEffect} from "react";
import TaleDisplay from "../components/TaleDisplay/TaleDisplay";
import { useTale } from "../components/Context/TaleContext";

const saveToLocalStorage = (key: string, value : any) => {
  localStorage.setItem(key, JSON.stringify(value))
}

const TaleDisplayPage: React.FC = () => {
  const {tale} = useTale();

useEffect(() => {
  saveToLocalStorage("savedTale", tale);
}, [tale])

  return (
    <>
      <TaleDisplay
        title={tale.title}
        text={tale.text}
        image={tale.imageUrl}
      />
    </>
  );
};

export default TaleDisplayPage;
