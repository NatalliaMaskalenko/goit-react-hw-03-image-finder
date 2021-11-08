import { Component } from 'react';

export default class Searchbar extends Component{
    statte = {
        name: '',
    }

      handleNameChange = (e) => {
      this.setState({name: e.currentTarget.value})
  }

    
    render() {
        return (
            <header className="Searchbar">
                <form onSubmit={this.props.handleSearchSubmit} className="SearchForm">
                    <button type="submit" className="SearchForm-button">
                      <span className="SearchForm-button-label">Search</span>
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