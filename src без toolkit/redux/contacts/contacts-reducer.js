import { combineReducers } from 'redux';
import types from './contacts-action-types';
import Notiflix from 'notiflix';

const items = (state = JSON.parse(localStorage.getItem('contacts')), { type, payload }) => {
  switch (type) {
    case types.ADD: {
      const findName = state.find(contact => contact.name === payload.name);
      if (findName) {
        Notiflix.Notify.failure(`${findName.name} is already in contacts`);
        return state;
      }
      localStorage.setItem('contacts', JSON.stringify([...state, payload].sort()));
      return [...state, payload].sort();
    }
    case types.DELETE:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
