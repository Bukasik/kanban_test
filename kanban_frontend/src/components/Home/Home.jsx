import React from 'react';
import { createBoard } from '../../lib/kanban';
import ItemForm from '../ItemForm';

const Home = (props) => {
  const onAddedBoard = (title) => {
    createBoard(title).then((response) => {
      props.history.push(`/boards/${response.id}`);
    });
  };

  return (
    <div>
      <ItemForm type="Board" onItemAdded={onAddedBoard} />
    </div>
  );
};
export default Home;
