import React from "react";
import TaleDisplay from "../components/TaleDisplay";
import { text1, text2, text3, title } from "../components/test";
import image_1 from "../assets/images/image_1(test).jpg";
import image_2 from "../assets/images/image_2(test).jpg";

const TaleDisplayPage: React.FC = () => {
  return (
    <>
      <TaleDisplay
        title={title}
        text1={text1}
        text2={text2}
        text3={text3}
        image_1={image_1}
        image_2={image_2}
      />
    </>
  );
};

export default TaleDisplayPage;
