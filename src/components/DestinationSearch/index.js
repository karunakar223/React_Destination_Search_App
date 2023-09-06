// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    console.log(searchInput)
    const searchResult = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <h1 className="main-heading">Destination Search</h1>
        <div className="search-container">
          <input
            type="search"
            className="search"
            onChange={this.onChangeSearchInput}
            placeholder="Search"
            value={searchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            className="img-icon"
            alt="search icon"
          />
        </div>
        <ul className="ul-container">
          {searchResult.map(eachPlace => (
            <DestinationItem
              key={eachPlace.id}
              destinationDetails={eachPlace}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
