import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS, UPDATE_REMINDERS } from '../constants';
import moment from 'moment';
import { bake_cookie, read_cookie } from 'sfcookies';

const reminder = (action) => {
  let {text, dueDate} = action;
  let displayDate = moment(new Date(dueDate)).fromNow();
  return {
    id: Math.random(),
    text,
    dueDate,
    displayDate
  }
}

const removeById = (state = [], id) => {
  const reminders = state.filter(reminder => reminder.id !== id);
  console.log('new reduced reminders', reminders);
  return reminders;
}

const updateReminders = (state) => {
  let currentDate, difference;
  state.forEach(function(reminder){
    reminder.displayDate = moment(new Date(reminder.dueDate)).fromNow();
    currentDate = moment();
    difference = -currentDate.diff(reminder.dueDate);
    if (difference < 0 && difference > -20000)
      console.log("Time Passed for: ", reminder.text);
  });
  return state;
}

const reminders = (state = [], action) => {
  let reminders = null;
  state = read_cookie('reminders');
  switch (action.type) {
    case ADD_REMINDER:
      reminders = [...state, reminder(action)]; //First element of array is current state and second is new reminder with action &&&&& Calling the reminder function defined in this file
      bake_cookie('reminders', reminders);
      return reminders;
    case DELETE_REMINDER:
      reminders = removeById(state, action.id);
      bake_cookie('reminders', reminders);
      return reminders;
    case CLEAR_REMINDERS:
      reminders = [];
      console.log("clearing reminder",reminders);
      bake_cookie('reminders',reminders);
      return reminders;
    case UPDATE_REMINDERS:
      reminders = updateReminders(state);
      bake_cookie('reminders',reminders);
      return reminders;
    default:
      return state;
  }
}

export default reminders;
