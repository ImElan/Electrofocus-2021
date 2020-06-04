import React,{Component} from 'react';
import FeatureBox from './FeatureBox';

class Features extends Component {
      static defaultProps = {
            features:[
                  {
                        icon:'certificate',
                        feature:'Certification Of Completion',
                        details:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.'
                  },
                  {
                        icon:'lecture',
                        feature:'Experienced Instructors',
                        details:'Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia.'
                  },
                  {     
                        icon:'typewriter',
                        feature:'Hands On Training',
                        details:'Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum.'
                  },
                  {     
                        icon:'chip',
                        feature:'20+ Events',
                        details:'Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                  },
                  {     
                        icon:'profit',
                        feature:'Value For Money',
                        details:'Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur voluptatibus.'
                  },
                  {     
                        icon:'robotic',
                        feature:'8+ WorkShops',
                        details:'Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae.'
                  }
            ]
      }
      render() {
            const {features} = this.props;
            return(
                  <div className='features__container'>
                        <h1 className='features__heading heading--1 heading--1-dark'>Why ElectroFocus ?</h1>
                        <section className='features'>
                              {features.map( featureBox => <FeatureBox {...featureBox} key={featureBox.icon}/>)}
                        </section>
                  </div>
            )
      }
}

export default Features;