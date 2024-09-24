import React from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import type { PizzaT } from '../../types/pizzaType';
import { useAppDispatch } from '../provider/redux/hooks';
import { editPizza } from '../provider/redux/pizzas/pizzaThunk';
import { pizzasFormSchema } from '../../utils/validation';

type EditModalType = {
  pizza: PizzaT | null;
  show: boolean;
  handleClose: () => void;
};

function EditModal({ pizza, show, handleClose }: EditModalType): JSX.Element {
  const dispatch = useAppDispatch();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = pizzasFormSchema.parse(Object.fromEntries(new FormData(e.currentTarget)));
    void dispatch(editPizza({ id: pizza?.id ?? 0, formData }));
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit pizza</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              defaultValue={pizza?.title}
              placeholder="Enter title"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              name="imageUrl"
              defaultValue={pizza?.imageUrl}
              placeholder="Enter image URL"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              name="price"
              defaultValue={pizza?.price}
              placeholder="Enter price"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              type="number"
              name="rating"
              defaultValue={pizza?.rating || 0}
              min={0}
              max={10}
              placeholder="Enter rating"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Edit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default EditModal;
