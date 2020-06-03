import React,{Component} from 'react';
import IndividualSponsor from './IndividualSponsor';
import amazonLogo from './assets/amazon.png';
import googleLogo from './assets/google.png';
import facebookLogo from './assets/facebook.png';
import microsoftLogo from './assets/microsoft.png';
import zillowLogo from './assets/zillow.png';

class Sponsors extends Component {
      static defaultProps = {
            sponsors:[
                  amazonLogo,
                  googleLogo,
                  facebookLogo,
                  microsoftLogo,
                  zillowLogo
            ]
      }
      render() {
            const {sponsors} = this.props;
            return(
                  <section className='sponsors'>
                        <h1 className='sponsors__heading heading--1 heading--1-dark'>Our Sponsors</h1>
                        <div className='sponsors__track'>
                              {sponsors.map( (sponsor,index) => <IndividualSponsor sponsorLogo={sponsor} key={index}/>)}
                              {sponsors.map( (sponsor,index) => <IndividualSponsor sponsorLogo={sponsor} key={index}/>)}
                        </div>
                  </section>
            )
      }
}

export default Sponsors;