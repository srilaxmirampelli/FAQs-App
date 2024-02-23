// Write your code here.
import './index.css'

import {Component} from 'react'

import FaqItem from '../FaqItem'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props

    return (
      <div className="app-container">
        <div className="faqs-container">
          <h1 className="main-heading">FAQs</h1>
          <ul className="faqs-list">
            {faqsList.map(faq => (
              <FaqItem
                key={faq.id}
                question={faq.questionText}
                answer={faq.answerText}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
