import React from "react";
import TaleDisplay from "../components/TaleDisplay/TaleDisplay";
import { text, title } from "../components/test";
import image from "../assets/images/image_1(test).jpg";

const TaleDisplayPage: React.FC = () => {
  return (
    <>
      <TaleDisplay
        title={title}
        text={text}
        image={image}
      />
    </>
  );
};

export default TaleDisplayPage;
