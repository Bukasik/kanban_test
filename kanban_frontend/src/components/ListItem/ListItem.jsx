import React, { useContext } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import BoardContext from '../Board/BoardContext';

import './ListItem.css';

const ListItem = (props) => {
  const { card, index, deletedCard } = props;
  const boardId = useContext(BoardContext);

  return (
    <Draggable draggableId={card.id.toString()} index={index}>
      {(provided) => (
        <div
          className="card_container"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {card.title}
          <button
            type="button"
            className="btn btn-outline-danger btn-sm float-right"
            onClick={() => deletedCard(boardId, card.id)}
          >
            <i className="fa fa-trash-o" />
          </button>
        </div>
      )}
    </Draggable>
  );
};

export default ListItem;
