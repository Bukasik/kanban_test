import React, { useState, useEffect, useReducer } from 'react';
import { useParams } from 'react-router';
import { fetchBoard } from '../../lib/kanban';
import Board from '../Board';

import reducer from '../../reducers';

function BoardContainer(props) {
  const [isInitalLoaded, setisInitalLoaded] = useState(false);
  const [state, dispatch] = useReducer(reducer);

  const { id } = useParams();

  const handleRecieved = (data) => {
    const { type, list, card } = data;

    dispatch({ type, payload: { list, card } });
  };

  useEffect(() => {
    fetchBoard(id)
      .then((response) => {
        const [lists, cards] = response;
        dispatch({ type: 'INIT', payload: { cards, lists, boardId: id } });
        setisInitalLoaded(true);
      }).then(() => {
        const channel = props.cableApp.subscriptions.create(
          {
            channel: 'BoardChannel', board_id: id,
          },
          {
            connected: () => {
              console.log('web sockets connected');
            },
            received: handleRecieved,

          },
        );

        return () => {
          channel.unsubscribe();
        };
      }).catch((error) => console.error(error));
  }, [id, props.cableApp.subscriptions]);

  return (
    isInitalLoaded ? <Board board={state} dispatch={dispatch} /> : <div>Идет загрузка</div>
  );
}

export default BoardContainer;
