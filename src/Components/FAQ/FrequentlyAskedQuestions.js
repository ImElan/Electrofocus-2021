import React,{Component} from 'react';
import Questions from './Questions';

class FrequentlyAskedQuestions extends Component {
      static defaultProps = {
            faqs:[
                  {
                        question:'Will I be provided with a certificate ?',
                        answer:'Yes, but only upon presence for the entire duration of the workshop.'
                  },
                  {
                        question:'Do You provide accomodation for the participants ?',
                        answer:'Yes. We provide accomodation depending on the availability and your place of residence.'
                  },
                  {
                        question:'Are the workshops theoretical ?',
                        answer:'No, They are complete hands on workShop.'
                  },
                  {
                        question:'On What basis are the workshops registrations confirmed ?',
                        answer:'Registrations are confirmed after payment on first come first serve basis. Confirmation of your participation is subject to availability.'
                  },
                  {
                        question:'Should I bring any materials with me ?',
                        answer:'You must bring your College ID card. If you are required to bring anything we would inform you through mail after registration.'
                  },
                  {
                        question:'Will the fees paid for the workshop be refunded in case i fail to attend the workshop ?',
                        answer:'Fees once paid, is strictly non-refundable.'
                  }
            ]
      }
      render() {
            const {faqs} = this.props;
            return(
                  <section className='frequentlyAskedQuestions'>
                        <h5 className='heading--5 heading--5-primary text-center'>FAQ's</h5>
                        <h1 className='heading--1 heading--1-dark text-center'>You Have Questions ?</h1>
                        <div className='frequentlyAskedQuestions__questions'>
                              {faqs.map( (faq,index) => <Questions {...faq} key={index}/>)}
                        </div>
                  </section>
            )
      }
}

export default FrequentlyAskedQuestions;