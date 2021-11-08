import { Component } from 'react';
import Searchbar from './Components/Searchbar';

const base_url = `https://pixabay.com/api/`;
const key = `21301375-7d22153b76338a293f3dc129f`;

let searchQuery = "banana";
let searchPage = 1;
let searchPerPage = 12;


class App extends Component{
state = {

}
  
handleSearchSubmit = e => {
   e.preventDefault();
   this.props.onSubmit(this.state);
   this.reset()
}
  
reset = () => {
  this.setState({
  name: ''
});
}

render() {
  return (
    <>
      <Searchbar handleSearchSubmit={this.handleSearchSubmit}/>
    </>
        
    );
  }
}

export default App;
