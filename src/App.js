import React from 'react';
import { Route ,Switch} from 'react-router-dom';
import './App.css';
import Books from './Bookings/books';
import Header from './Header/Header';
import ContextProvider from './Store(Use Less Dnot Look)/cart-provider'
import SearchBar from './SearchBar/searchbar'
import Summary from './Summary/summary'



function App() {

  return (
    <ContextProvider>
  
       <div className="App">
         <Header/>
         <Switch>
         <Route path='/Shopping-Cart/:CartItems' exact >
        <Books/>
        </Route>
        <Route path='/Shopping-Cart/' exact>
        <SearchBar/>
        </Route>
        <Route path='/Shopping-Cart/Info/:id' exact> 
        <Summary/>
       </Route>
       </Switch>
    </div>

    </ContextProvider>
  );
}

export default App;
