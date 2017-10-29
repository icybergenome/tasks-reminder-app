import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addReminder, deleteReminder, clearReminders, updateReminders } from '../actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      dueDate: '',
      displayDate: ''
    }
  }

  addReminder( ){
    this.props.addReminder(this.state.text, this.state.dueDate);
  }
  deleteReminder(id) {
    this.props.deleteReminder(id);
  }
  componentDidMount(){
    setInterval(() => this.props.updateReminders(), 10000 );
  }
  renderReminders() {
    const { reminders } = this.props; //Key and value is same for reminders
    return (
      <ul className="list-group col-sm-4">
        {
          reminders.map((reminder) => {
            return (
              <li key={reminder.id} className="list-group-item">
                <div className="list-item">
                  <div>{reminder.text}</div>
                  <div>{reminder.displayDate}</div>
                </div>
                <div
                  className="list-item delete-button"
                  onClick = {() => this.deleteReminder(reminder.id)}
                  >
                  &#x2715;
                </div>
              </li>
            )
          })
        }
      </ul>
    )
  }
  render(){
    return (
      <div className="App">
        <div className="title">
          Reminder Pro
        </div>
        <div className="form-inline reminder-form">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="I have to ...."
              onChange={(event) => this.setState({text: event.target.value})}
            />
          <input
            className="form-control"
            type="datetime-local"
            onChange={(event) => this.setState({dueDate: event.target.value})}
            />
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.addReminder()}
          >
            Add Reminder
          </button>
          </div>
        </div>
        {this.renderReminders()}
        <div
          className="btn btn-danger"
          onClick={()=>this.props.clearReminders()}
          >
          Delete All
        </div>
      </div>

    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addReminder, deleteReminder, clearReminders, updateReminders }, dispatch); //Binding action creators with dispatch function in overall Application
}

function mapStateToProps(state) {
  return {
    reminders: state
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

/* Shortcut
export default connect(null, {addReminder})(App);*/ //Since mapStateToProps is haven't defined in app
