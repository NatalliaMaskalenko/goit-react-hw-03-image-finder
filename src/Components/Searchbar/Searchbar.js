import { Component } from 'react';
import { ImSearch } from 'react-icons/im';

export default class Searchbar extends Component{
    state = {
        name: '',
    }

    handleNameChange = e => {
      this.setState({name: e.currentTarget.value.toLowerCase()})
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
            <header className="Searchbar">
                <form onSubmit={this.props.handleSearchSubmit} className="SearchForm">
                    <button type="submit" className="SearchForm-button">
                        <span className="SearchForm-button-label">
                            <ImSearch style={{color:"black"}}/>
                      </span>
                    </button>
                    <input
                        value={this.state.name}
                        className="SearchForm-input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        name="search"
                        onChange = {this.handleNameChange}
                    />
                </form>
            </header>
        )
    }


}