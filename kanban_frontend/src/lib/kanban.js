import apiClient from './apiClient';

export const createBoard = (title) => apiClient
  .post('http://143.198.66.168:8080/api/boards/', { title });

export const cardAddedToList = (boardId, columnId, title) => {
  apiClient
    .post(`http://143.198.66.168:8080/api/boards/${boardId}/cards`, { title, column_id: columnId })
    .then((response) => {
      console.log(response);
    });
};

export const cardRemovedFromList = (boardId, card_id) => {
  apiClient
    .delete(`http://143.198.66.168:8080/api/boards/${boardId}/cards/${card_id}`)
    .then((response) => {
      console.log(response);
    });
};

export const listAddedToBoard = (boardId, title) => {
  apiClient
    .post(`http://143.198.66.168:8080/api/boards/${boardId}/columns`, { title })
    .then((response) => {
      console.log(response);
    });
};

export const listRemovedFromBoard = (boardId, columnId) => {
  apiClient
    .delete(`http://143.198.66.168:8080/api/boards/${boardId}/columns/${columnId}`)
    .then((response) => {
      console.log(response);
    });
};

export const cardUpdatedFromList = (boardId, columnId, card_id, title) => {
  apiClient
    .put(`http://143.198.66.168:8080/api/boards/${boardId}/cards/${card_id}`, { title, column_id: columnId })
    .then((response) => {
      console.log(response);
    });
};

export const fetchBoard = (boardId) => Promise.all([
  apiClient.get(`http://143.198.66.168:8080/api/boards/${boardId}`),
  apiClient.get(`http://143.198.66.168:8080/api/boards/${boardId}/cards`),
]);
