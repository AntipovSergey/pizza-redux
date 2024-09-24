import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import type { PizzaT } from '../../types/pizzaType';

function PizzaCard({ pizza }: { pizza: PizzaT }): JSX.Element {
  const navigate = useNavigate();
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pizza.imageUrl} />
      <Card.Body>
        <Card.Title>{pizza.title}</Card.Title>
        <Card.Text>Стоимость: {pizza.price} рублей</Card.Text>
        <Card.Text>Рейтинг пиццы: {pizza.rating}</Card.Text>
        <Button variant="primary" onClick={() => navigate(`/pizzas/${pizza.id}`)}>
          More info
        </Button>
      </Card.Body>
    </Card>
  );
}

export default PizzaCard;
