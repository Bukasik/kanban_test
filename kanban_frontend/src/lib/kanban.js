import apiClient from './apiClient';

const API_URL = "http://143.198.66.168:8080/api"

export const createBoard = (title) => apiClient
  .post(`${API_URL}/boards/`, { title });

export const cardAddedToList = (boardId, columnId, title) => {
  apiClient
    .post(`${API_URL}/boards/${boardId}/cards`, { title, column_id: columnId })
    .then((response) => {
      console.log(response);
    });
};

export const cardRemovedFromList = (boardId, card_id) => {
  apiClient
    .delete(`${API_URL}/boards/${boardId}/cards/${card_id}`)
    .then((response) => {
      console.log(response);
    });
};

export const listAddedToBoard = (boardId, title) => {
  apiClient
    .post(`${API_URL}/boards/${boardId}/columns`, { title })
    .then((response) => {
      console.log(response);
    });
};

export const listRemovedFromBoard = (boardId, columnId) => {
  apiClient
    .delete(`${API_URL}/boards/${boardId}/columns/${columnId}`)
    .then((response) => {
      console.log(response);
    });
};

export const cardUpdatedFromList = (boardId, columnId, card_id, title) => {
  apiClient
    .put(`${API_URL}/boards/${boardId}/cards/${card_id}`, { title, column_id: columnId })
    .then((response) => {
      console.log(response);
    });
};

export const fetchBoard = (boardId) => Promise.all([
  apiClient.get(`${API_URL}/boards/${boardId}/columns`),
  apiClient.get(`${API_URL}/boards/${boardId}/cards`),
]);
