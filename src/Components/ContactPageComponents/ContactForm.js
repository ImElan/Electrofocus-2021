import React,{ Component } from 'react';
import idea from '../../assets/idea.svg';

class ContactForm extends Component {
      render() {
            return(
                  <form className='contact__form'>
                        <div className='contact__headingContainer'>
                              <img src={idea} className='contact__headingSvg' alt='Bulb' />
                              <h2 className='contact__formHeading'>Contact Us</h2>
                        </div>
                        <div className='contact__inputGroup'>
                              <label className='contact__label' htmlFor='#name'>Name</label>
                              <input className='contact__input' type='text' placeholder='Chandler Bing' id='name' />
                              <p className='contact__hint'>Hint : Chandler Bing</p>
                        </div>
                        <div className='contact__inputGroup'>
                              <label className='contact__label' htmlFor='#email'>Email</label>
                              <input 
                                    className='contact__input' 
                                    type='email' 
                                    placeholder='chandlerbing@gmail.com' 
                                    id='email' 
                              />
                              <p className='contact__hint'>Hint : chandlerbing@gmail.com</p>
                        </div>
                        <div className='contact__inputGroup'>
                              <label className='contact__label' htmlFor='#message'>Message</label>
                              <textarea
                                    rows='8'
                                    className='contact__input contact__input--textArea'
                                    style={{resize:'none'}}

                                    placeholder={`I'm not good at giving advice. Can I interest you in a sarcastic comment.`} 
                              />
                        </div>
                        <button className='contact__sendButton'>
                              <img src={idea} className='contact__sendSvg' alt='Bulb' />
                              Send
                        </button>
                  </form>
            )
      }
}

export default ContactForm;