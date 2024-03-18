import React from "react";
import { Spade, Heart, Club, Diamond } from "../Decor";
import styled from "styled-components";
const CardFront = styled.div`
  font-size: 164px;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 20px;
  box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075),
    0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075),
    0 0 16px hsl(0deg 0% 0% / 0.075);
  transform-origin: 10% 60%;
`;

const Digit = styled.div`
  font-size: 22px;
  position: absolute;
  top: 5%;
  left: 5%;
`;

const BottomDigit = styled.div`
  font-size: 22px;
  position: absolute;
  right: 5%;
  bottom: 5%;
`;
interface CardProps {
  num: number;
  decorType: number;
}

const numMap = {
  1: "A",
  11: "J",
  12: "Q",
  13: "K",
};

const decorMap = {
  1: <Spade />,
  2: <Heart />,
  3: <Club />,
  4: <Diamond />,
};
const Card: React.FC<CardProps> = ({ num, decorType }) => {
  return (
    <CardFront>
      <Digit>
        {Object.keys(numMap).includes(String(num)) ? numMap[num] : num}
      </Digit>
      {decorMap[decorType]}
      <BottomDigit>
        {Object.keys(numMap).includes(String(num)) ? numMap[num] : num}
      </BottomDigit>
    </CardFront>
  );
};
export default Card;
