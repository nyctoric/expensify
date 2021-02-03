import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

const now = moment();

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : '',
      amount: props.expense ? (props.expense.amount /100).toString() : '',
      note: props.expense ? props.expense.note : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  }
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({description}));
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({note}));
  };
  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({amount}));
    }
  };
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ( {createdAt} ));
    };
  };
  onFocusChange = ({focused}) => {
    this.setState(() => ({calendarFocused: focused}))
  };
  onSubmit = (e) => {
    e.preventDefault();   // prevent full page refresh
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({error: 'Please provide description and amount.' }));
    } else {
      this.setState(() => ({error: '' }));

      /*the actual onSubmit function to be used is different depending upon whether ExpenseForm is called by
      AddExpensePage or EditExpensePage.  The function to be used is passed down here to ExpenseForm as a prop -->
      this.props.onSubmit()
      */
      this.props.onSubmit({
        description: this.state.description,
        amount: Math.round(parseFloat(this.state.amount, 10) * 100),
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          {/*  autofocus:  When form renders, put focus on this input */}
          <input
            type="number"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={(day) => false}
          />

          <textarea
            placeholder="Add a note for your expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
          <button>Add Expense</button>
        </form>
      </div>
    )
  };
};
