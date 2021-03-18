import { addListItem } from '../lib/helpers';
import { camelize } from '../utils/keysConverter';

const initialState = {
  cards: [],
  lists: [],
  boardId: null,
};

const reducer = (state = initialState, action) => {
  const { type, payload = {} } = action;
  const {
    boardId, list, card, cards, lists,
  } = payload;

  switch (type) {
    case 'INIT':
      return { cards, lists, boardId };
    case 'ADD_CARD':
      return {
        ...state,
        cards: addListItem(state.cards, camelize(card)),
      };
    case 'DELETE_CARD':
      return {
        ...state,
        cards: state.cards.filter((el) => el.id !== card.id),
      };
    case 'UPDATE_CARD':
      if (state.cards[card.id] === card.id) {
        return state;
      }
      return {
        ...state,
        cards: state.cards.map((el) => (el.id === card.id ? camelize(card) : el)),
      };
    case 'ADD_LIST':
      return {
        ...state,
        lists: addListItem(state.lists, list),
      };
    case 'DELETE_LIST':
      return {
        ...state,
        lists: state.lists.filter((el) => el.id !== list.id),
      };
    default:
      console.log('error');
  }
};

export default reducer;
