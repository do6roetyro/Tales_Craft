import React from "react";
import TaleDisplay from "../components/TaleDisplay/TaleDisplay";
import { useTale } from "../components/Context/TaleContext";

const TaleDisplayPage: React.FC = () => {
  const {tale} = useTale();

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
