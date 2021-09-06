import { FC, useCallback } from "react";
import { Card } from "./Card";
import update from "immutability-helper";

import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useGetAllPagesQuery } from "../../../services/page";

const style = {
  maxWidth: 636,
  width: "100%",
  margin: "auto",
  marginTop: 40,
};

export interface Item {
  id: number;
  text: string;
}

export interface ContainerState {
  cards: Item[];
}

export const Container: FC = () => {
  const history = useHistory();
  const token = localStorage.getItem("user-token");
  const { data, isSuccess } = useGetAllPagesQuery(token);

  const [cards, setCards] = useState(data);

  const moveCard = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const dragCard = cards[dragIndex];
      setCards(
        update(cards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
          ],
        })
      );
      
    },
    [cards]
  );

  const renderCard = (card: { id: number; text: string }, index: number) => {
    return (
      <Card
        key={card.id}
        index={index}
        id={card.positionNo}
        text={card.title}
        moveCard={moveCard}
      />
    );
  };

  return (
    <>
      <div style={style}>
        {cards && cards.map((card, i) => renderCard(card, i))}
      </div>
    </>
  );
};
