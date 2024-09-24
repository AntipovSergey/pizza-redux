import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../provider/redux/hooks';
import { pizzasFormSchema } from '../../utils/validation';
import { addPizzaThunk } from '../provider/redux/pizzas/pizzaThunk';

function AddPizzaPage(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = pizzasFormSchema.parse(Object.fromEntries(new FormData(e.currentTarget)));
    void dispatch(addPizzaThunk(formData));
    navigate('/');
  };

  return (
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" name="title" placeholder="Enter title" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Image URL</Form.Label>
        <Form.Control type="text" name="imageUrl" placeholder="Enter image URL" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" name="price" placeholder="Enter price" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Rating</Form.Label>
        <Form.Control type="number" name="rating" min={0} max={10} placeholder="Enter rating" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default AddPizzaPage;
