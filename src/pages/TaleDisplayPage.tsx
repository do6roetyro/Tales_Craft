import React from "react";
import TaleDisplay from "../components/TaleDisplay";
import { image_1, image_2, text, title } from "../components/test";

const TaleDisplayPage: React.FC = () => {
  return (
    <>
      <TaleDisplay title={title} text={text} image_1={image_1} image_2={image_2} />
    </>
  );
};

export default TaleDisplayPage