// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    randomNumber: 0,
  }

  generateRandomNumber = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState({randomNumber})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="bg-container">
        <div className="random-number-card">
          <h1 className="random-number-card-heading">Random Number</h1>
          <p className="random-number-card-paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="generate-button"
            onClick={this.generateRandomNumber}
          >
            Generate
          </button>
          <h1 className="random-number">{randomNumber}</h1>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
