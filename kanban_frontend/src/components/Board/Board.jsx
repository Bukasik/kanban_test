/* eslint-disable react/prop-types */
import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import List from '../List';
import ItemForm from '../ItemForm';
import BoardContext from './BoardContext';
import './Board.css';

import { listAddedToBoard, cardUpdatedFromList } from '../../lib/kanban';

function Board(props) {
  const { dispatch, board } = props;
  const { boardId, lists, cards } = board;

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (destination.droppableId === source.droppableId) {
      return;
    }
    const card = cards.find((el) => el.id === parseInt(draggableId, 10));
    card.columnId = parseInt(destination.droppableId, 10);

    dispatch({ type: 'UPDATE_CARD', payload: { card } });
    cardUpdatedFromList(
      boardId, parseInt(destination.droppableId, 10), parseInt(draggableId, 10), card.title,
    );
  };

  const onAddedList = (title) => {
    listAddedToBoard(boardId, title);
  };

  return (
    <BoardContext.Provider value={boardId}>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="lists">
          {lists.map((list) => (
            <List
              key={list.id}
              list={list}
              cards={cards.filter((card) => card.columnId === list.id)}
            />
          ))}
          <ItemForm type="List" onItemAdded={onAddedList} />
        </div>
      </DragDropContext>
    </BoardContext.Provider>
  );
}

export default Board;
