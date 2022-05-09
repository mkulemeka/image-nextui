import '../styles/App.scss'
import React from "react";
import { Card, Text } from "@nextui-org/react";

const ImgCard = ({ imageUrl, user }) => {
  return (
    <Card clickable hoverable cover css={{ mw: "300px" }} className='img-card'>
      <Card.Header css={{position: 'absolute', zIndex: 1, top: 2}} className='img-card__text'>
        <Text>{user}</Text>
      </Card.Header>
      <Card.Image src={imageUrl} height={340} width="100%" alt={user} className='img-card__img' />
    </Card>
  );
};

export default ImgCard;
