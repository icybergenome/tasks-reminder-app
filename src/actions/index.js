import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS, UPDATE_REMINDERS } from '../constants';

export const addReminder = (text, dueDate) => {    //Action Creator function
  const action = {
    type: ADD_REMINDER,
    text,                //key value pair is same so it will return arg text with key text
    dueDate
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

export const clearReminders = () => {
  return {
    type: CLEAR_REMINDERS
  }
}

export const updateReminders = () => {
  return {
    type: UPDATE_REMINDERS
  }
}
