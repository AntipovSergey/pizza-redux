import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../provider/redux/hooks';
import { getPizzasThunk } from '../provider/redux/pizzas/pizzaThunk';
import PizzaCard from '../ui/PizzaCard';

export default function MainPage(): JSX.Element {
  const pizzas = useAppSelector((store) => store.pizzas.pizzas);
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getPizzasThunk());
  }, []);

  return (
    <Container>
      <Row>
        {pizzas.map((pizza) => (
          <Col key={pizza.id}>
            <PizzaCard pizza={pizza} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
