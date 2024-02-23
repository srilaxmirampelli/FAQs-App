// Write your code here.
import './index.css'
import {Component} from 'react'

class FaqItem extends Component {
  state = {isAnswerDisplayed: false}

  onClickPlusOrMinusBtn = () => {
    this.setState(prevState => ({
      isAnswerDisplayed: !prevState.isAnswerDisplayed,
    }))
  }

  displayAnswerText = () => {
    const {answer} = this.props
    return (
      <div className="faq-answer-container">
        <hr className="hr-line" />
        <p className="answer">{answer}</p>
      </div>
    )
  }

  render() {
    const {question} = this.props
    const {isAnswerDisplayed} = this.state
    const plusIconUrl =
      'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const minusIconUrl =
      'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

    return (
      <li className="faq-item">
        <div className="faq-question-container">
          <h1 className="question">{question}</h1>
          <button
            className="plusOrMinusBtn"
            type="button"
            onClick={this.onClickPlusOrMinusBtn}
          >
            <img
              src={isAnswerDisplayed ? minusIconUrl : plusIconUrl}
              alt={isAnswerDisplayed ? 'minus' : 'plus'}
            />
          </button>
        </div>
        {isAnswerDisplayed ? this.displayAnswerText() : ''}
      </li>
    )
  }
}

export default FaqItem
