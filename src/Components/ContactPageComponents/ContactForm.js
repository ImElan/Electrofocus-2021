import React,{ Component } from 'react';

class ContactForm extends Component {
      render() {
            return(
                  <form className='contact__form'>
                        <div className='contact__headingContainer'>
                              <svg className='contact__headingSvg'>
                                    <use />
                              </svg>
                              <h2 className='heading--2 heading--2-dark'>Contact Us</h2>
                        </div>
                        <div className='contact__inputGroup'>
                              <label className='contact__label' htmlfor='#name'>Name</label>
                              <input className='contact__input' type='text' placeholder='Chandler Bing' id='name' />
                        </div>
                        <div className='contact__inputGroup'>
                              <label className='contact__label' htmlfor='#email'>Email</label>
                              <input 
                                    className='contact__input' 
                                    type='text' 
                                    placeholder='chandlerbing@gmail.com' 
                                    id='email' 
                              />
                        </div>
                        <div className='contact__inputGroup'>
                              <label className='contact__Label' htmlfor='#message'>Message</label>
                              <textarea 
                                    className='contact__textArea'rows='3'
                                    cols='5'
                                    style={{resize:'none'}}

                                    placeholder={`I'm not good at giving advice. Can I interest you in a sarcastic comment.`} 
                              />
                        </div>
                        <button className='contact__sendButton'>
                              <svg className='contact__sendSvg'>
                                    <use />
                              </svg>
                              Send
                        </button>
                  </form>
            )
      }
}

export default ContactForm;