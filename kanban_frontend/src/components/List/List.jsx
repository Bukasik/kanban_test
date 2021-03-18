import React, { useContext } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Card from '../ListItem';
import ItemForm from '../ItemForm';
import BoardContext from '../Board/BoardContext';
import './List.css';

import {
  cardAddedToList,
  cardRemovedFromList,
  listRemovedFromBoard,
} from '../../lib/kanban';

const InnerList = ({ cards }) => cards.map((card, index) => (
  <Card key={card.id} card={card} index={index} deletedCard={cardRemovedFromList} />
));

const List = (props) => {
  const { list, cards } = props;
  const boardId = useContext(BoardContext);

  const onAddedCard = (title) => {
    cardAddedToList(boardId, list.id, title);
  };

  return (
    <div className="list-wrapper">
      <div className="header_container">
        <h1>
          {list.title}
        </h1>
        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={() => listRemovedFromBoard(boardId, list.id)}
        >
          <i className="fa fa-trash-o" />
        </button>
      </div>
      <div className="body_container">
        <Droppable droppableId={list.id.toString()}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <InnerList cards={cards} />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <div className="bottom_item">
          <ItemForm type="Card" onItemAdded={onAddedCard} />
        </div>
      </div>
    </div>
  );
};
export default List;
