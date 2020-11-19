import React from 'react';
import PropTypes from 'prop-types';
import './FormAddNewCity.scss';

export class FormAddNewCity extends React.Component {
  state = {
    searchValue: '',
  }

  addChangeValue = ({ target }) => {
    const { value } = target;

    this.setState({
      searchValue: value,
    });

    this.props.defaultErrorInput();
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addCity(this.state.searchValue);
    this.setState({
      searchValue: '',
    });
  }

  render() {
    const { searchValue } = this.state;

    return (
      <form className="FormAddNewCity" onSubmit={this.onSubmit}>
        {
          this.props.errorInput
          && <p className="FormAddNewCity__error">Incorrect city!</p>
        }
        <input
          value={searchValue}
          className="FormAddNewCity__input"
          type="text"
          onChange={this.addChangeValue}
          placeholder="London"
        />
        <button
          type="submit"
          className="FormAddNewCity__button"
        >
          Add City
        </button>
      </form>
    );
  }
}

FormAddNewCity.propTypes = {
  defaultErrorInput: PropTypes.func.isRequired,
  addCity: PropTypes.func.isRequired,
  errorInput: PropTypes.bool.isRequired,
};
