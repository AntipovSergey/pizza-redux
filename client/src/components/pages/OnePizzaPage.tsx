import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../provider/redux/hooks';
import { deletePizzasThunk, getOnePizza } from '../provider/redux/pizzas/pizzaThunk';
import EditModal from '../ui/EditModal';

function OnePizzaPage(): JSX.Element {
  const { pizzaId } = useParams();
  const dispatch = useAppDispatch();
  const pizza = useAppSelector((store) => store.pizzas.currentPizza);
  const error = useAppSelector((store) => store.pizzas.error);
  const navigate = useNavigate();

  const [show, setShow] = useState<boolean>(false);

  const handleClose = (): void => setShow(false);
  const handleShow = (): void => setShow(true);

  useEffect(() => {
    void dispatch(getOnePizza(Number(pizzaId)));
  }, []);

  return (
    <Container>
      {!error ? (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={pizza?.imageUrl} />
          <Card.Body>
            <Card.Title>{pizza?.title}</Card.Title>
            <Card.Text>Стоимость: {pizza?.price} рублей</Card.Text>
            <Card.Text>Рейтинг пиццы: {pizza?.rating}</Card.Text>
            <Button variant="primary" onClick={handleShow}>
              Edit
            </Button>
            <Button
              variant="danger"
              onClick={() => {
                if (!pizza?.id) {
                  throw new Error();
                }
                void dispatch(deletePizzasThunk(pizza?.id));
                navigate('/');
              }}
            >
              Delete
            </Button>
          </Card.Body>
        </Card>
      ) : (
        <img
          src="https://quasa.io/storage/images/news/1wy7s2BEZhuJaqYsay2yO8QkAYe76BvTD1K7A7Gt.png"
          alt="Error"
        />
      )}
      <EditModal show={show} handleClose={handleClose} pizza={pizza} />
    </Container>
  );
}

export default OnePizzaPage;
