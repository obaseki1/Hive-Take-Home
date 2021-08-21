import { ADD, REMOVE, ADD_ALL, REMOVE_ALL } from '../constants/actionTypes';

export default (skills = [], action) => {
  switch (action.type) {
    case ADD:
      return [...skills, action.payload];
    case ADD_ALL:
      return action.payload
    case REMOVE:
      return skills.filter((skill) => skill != action.payload);
    case REMOVE_ALL:
      return []
    default:
      return skills;
  }
};
