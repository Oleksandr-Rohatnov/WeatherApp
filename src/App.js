import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { getCity } from './API/getWeather';
import './App.css';
import { FormAddNewCity } from './components/form/FormAddNewCity';
import { Header } from './components/header/header';
import { CardList } from './components/cardList/CardList';
import { CityDetails } from './components/CityDetails/CityDetails';

class App extends React.Component {
state = {
  city: [],
  errorInput: false,
}

componentDidMount() {
  const x = Object.keys(localStorage);

  x.forEach(city => this.addNewCityToState(city));
}

 addNewCityToState = async(city) => {
   const x = await getCity(city);

   if (x && x.cod === 200) {
     this.setState(state => ({
       city: [...state.city, x],
     }));
     localStorage.setItem(x.name, x.name);
   } else {
     this.setState({ errorInput: true });
   }
 }

defaultErrorInput = () => {
  this.setState({ errorInput: false });
}

deleteCityFromState = (name) => {
  this.setState(state => ({
    city: state.city.filter(city => city.name !== name),
  }));
  localStorage.removeItem(name);
}

render() {
  const { city, errorInput } = this.state;

  return (
    <div className="content">
      <Header />
      <Switch>
        <Route path="/" exact>
          <FormAddNewCity
            defaultErrorInput={this.defaultErrorInput}
            errorInput={errorInput}
            addCity={this.addNewCityToState}
          />
          <CardList cityList={city} deleteCity={this.deleteCityFromState} />
        </Route>
        <Route path="/:city" component={CityDetails} />
      </Switch>
    </div>
  );
}
}

export default App;
