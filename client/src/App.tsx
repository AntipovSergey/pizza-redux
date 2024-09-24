import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import MainPage from './components/pages/MainPage';
import OnePizzaPage from './components/pages/OnePizzaPage';
import AddPizzaPage from './components/pages/AddPizzaPage';

function App(): JSX.Element {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          element: <MainPage />,
          path: '/',
        },
        {
          element: <OnePizzaPage />,
          path: '/pizzas/:pizzaId',
        },
        {
          element: <AddPizzaPage />,
          path: '/addPizza',
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
