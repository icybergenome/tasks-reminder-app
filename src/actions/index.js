import { ADD_REMINDER, DELETE_REMINDER } from '../constants';

export const addReminder = (text) => {    //Action Creator function
  const action = {
    type: ADD_REMINDER,
    text                //key value pair is same so it will return arg text with key text
  }

  console.log('action is addReminder', action);
  return action;
}

export const deleteReminder = (id) => {
  const action = {
    type: DELETE_REMINDER,
    id
  }
  console.log('Deleting in actions', action);
  return action;
}
