import web from '../assets/web_dev.png';
import ai from '../assets/ai.png';
import crypt from '../assets/homePage_crypto.jpg';
import network from '../assets/homePage_network.jpg';
import iot from '../assets/homePage_iot.jpg';
import react from '../assets/homePage_react.png';
import webdev from '../assets/web_development.svg';
import ai_workshop from '../assets/artificial_intelligence.svg';
import react_workshop from '../assets/react.svg';
import crypt_workshop from '../assets/crypt.svg';
import iot_workshop from '../assets/iot.svg';
import security_workshop from '../assets/security.svg';

export default {
      workshops:[
            {
                  id:'web-development',
                  name:'Web Development',
                  details:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio nec.',
                  image:web, 
                  price:'749',
                  date:'Jan 12',
                  time:'10.00 AM',
                  venue:'DSP Lab',
                  infoDetails:'Jaculis at erat pellentesque adipiscing commodo elit at. Feugiat in ante metus dictum at tempor commodo ullamcorper. Consequat interdum varius sit amet mattis vulputate enim. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Feugiat nibh sed pulvinar proin gravida hendrerit. Malesuada proin libero nunc consequat. At quis risus sed vulputate odio ut enim blandit.',
                  infoImage:webdev,
                  imageWidth:'90%',
                  agenda:[
                        'Risus in hendrerit gravida rutrum quisque.',
                        'Elit pellentesque habitant morbi tristique senectus et netus',
                        'Sed ullamcorper morbi tincidunt ornare massa eget.',
                        'Quam pellentesque nec nam aliquam sem et tortor. Consectetur purus ut faucibus pulvinar elementum integer. ',
                        'Gravida rutrum quisque non tellus orci ac auctor augue.',
                        'Vel risus commodo viverra maecenas accumsan lacus vel.'
                  ],
                  requirements:[
                        'Nisl pretium fusce id velit ut.',
                        'Ut sem nulla pharetra diam sit amet.',
                        'Sollicitudin aliquam ultrices sagittis.'
                  ]
            },
            {
                  id:'artificial-intelligence',
                  name:'Artificial Intelligence',
                  details:'Do you keep hearing about Artificial Intelligence? What\'s all the fuss about it ? Come find out..!',
                  image:ai, 
                  price:'749',
                  date:'Jan 13',
                  time:'9.00 AM',
                  venue:'LHC 201',
                  infoDetails:'Nibh tellus molestie nunc non blandit. Vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt. Mauris augue neque gravida in fermentum et sollicitudin ac orci. Est ultricies integer quis auctor elit sed vulputate. Et odio pellentesque diam volutpat. Ullamcorper velit sed ullamcorper morbi tincidunt ornare.',
                  infoImage:ai_workshop,
                  imageWidth:'90%',
                  agenda:[
                        'Artificial Intelligence and its subsets',
                        'Image Classifications and its challenges',
                        'Steps in image classifications',
                        'Learning Algorithms - Supervised and UnSupervised',
                        'Deep Learning and its practical applications',
                  ],
                  requirements:[
                        'No prerequisites needed'
                  ]
            },
            {
                  id:'cryptography-techniques',
                  name:'Cryptography Techniques Using Cryptool',
                  details:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio nec.',
                  image:crypt,
                  price:'749',
                  date:'Jan 13',
                  time:'9.00 AM',
                  venue:'Lecture Hall Complex 203',
                  infoDetails:'Nibh tellus molestie nunc non blandit. Vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt. Mauris augue neque gravida in fermentum et sollicitudin ac orci. Est ultricies integer quis auctor elit sed vulputate. Et odio pellentesque diam volutpat. Ullamcorper velit sed ullamcorper morbi tincidunt ornare.',
                  infoImage:crypt_workshop,
                  imageWidth:'90%',
                  agenda:[
                        'Basics of Cryptography',
                        'Types of Cryptography',
                        'Ancient Cryptography Techniques',
                        'Digital Cryptography Techniques',
                        'Types of message authentication system',
                        'Electronic transactions behind the scenes',
                        'Digital Signature Visualization',
                        'Implementation using Cryptool'
                  ],
                  requirements:[
                        'Basic Mathematics',
                        'Basic Concepts of network',
                        'Laptops will be provided'
                  ]
            },
            {
                  id:'react',
                  name:'React',
                  details:'Front End Made Easy.Come and learn React Js.',
                  image:react, 
                  price:'849',
                  date:'Jan 13',
                  time:'10.00 AM',
                  venue:'VLSI Lab',
                  infoDetails:'Laoreet id donec ultrices tincidunt arcu. Mauris rhoncus aenean vel elit scelerisque mauris. Metus dictum at tempor commodo ullamcorper. At consectetur lorem donec massa sapien faucibus. Neque convallis a cras semper auctor neque. Turpis in eu mi bibendum. Adipiscing elit duis tristique sollicitudin nibh sit. ',
                  infoImage:react_workshop,
                  imageWidth:'90%',
                  agenda:[
                        'Risus in hendrerit gravida rutrum quisque.',
                        'Elit pellentesque habitant morbi tristique senectus et netus',
                        'Sed ullamcorper morbi tincidunt ornare massa eget.',
                        'Quam pellentesque nec nam aliquam sem et tortor. Consectetur purus ut faucibus pulvinar elementum integer. ',
                        'Gravida rutrum quisque non tellus orci ac auctor augue.',
                        'Vel risus commodo viverra maecenas accumsan lacus vel.'
                  ],
                  requirements:[
                        'Nisl pretium fusce id velit ut.',
                        'Ut sem nulla pharetra diam sit amet.',
                        'Sollicitudin aliquam ultrices sagittis.'
                  ]
            },
            {
                  id:'internet-of-things',
                  name:'Internet Of Things',
                  details:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio nec.',
                  image:iot,
                  price:'999',
                  date:'Jan 13',
                  time:'9.00 AM',
                  venue:'RLHC 301',
                  infoDetails:'Nibh tellus molestie nunc non blandit. Vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt. Mauris augue neque gravida in fermentum et sollicitudin ac orci. Est ultricies integer quis auctor elit sed vulputate. Et odio pellentesque diam volutpat. Ullamcorper velit sed ullamcorper morbi tincidunt ornare.',
                  infoImage:iot_workshop,
                  imageWidth:'90%',
                  agenda:[
                        'Risus in hendrerit gravida rutrum quisque.',
                        'Elit pellentesque habitant morbi tristique senectus et netus',
                        'Sed ullamcorper morbi tincidunt ornare massa eget.',
                        'Quam pellentesque nec nam aliquam sem et tortor. Consectetur purus ut faucibus pulvinar elementum integer. ',
                        'Gravida rutrum quisque non tellus orci ac auctor augue.',
                        'Vel risus commodo viverra maecenas accumsan lacus vel.'
                  ],
                  requirements:[
                        'Nisl pretium fusce id velit ut.',
                        'Ut sem nulla pharetra diam sit amet.',
                        'Sollicitudin aliquam ultrices sagittis.'
                  ]
            },
            {
                  id:'network-security',
                  name:'Network Security By Nokia', 
                  details:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio nec.',
                  image:network,
                  price:'749',
                  date:'Jan 13',
                  time:'9.00 AM',
                  venue:'LHC 201',
                  infoDetails:'Nibh tellus molestie nunc non blandit. Vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt. Mauris augue neque gravida in fermentum et sollicitudin ac orci. Est ultricies integer quis auctor elit sed vulputate. Et odio pellentesque diam volutpat. Ullamcorper velit sed ullamcorper morbi tincidunt ornare.',
                  infoImage:security_workshop,
                  imageWidth:'90%',
                  agenda:[
                        'Risus in hendrerit gravida rutrum quisque.',
                        'Elit pellentesque habitant morbi tristique senectus et netus',
                        'Sed ullamcorper morbi tincidunt ornare massa eget.',
                        'Quam pellentesque nec nam aliquam sem et tortor. Consectetur purus ut faucibus pulvinar elementum integer. ',
                        'Gravida rutrum quisque non tellus orci ac auctor augue.',
                        'Vel risus commodo viverra maecenas accumsan lacus vel.'
                  ],
                  requirements:[
                        'Nisl pretium fusce id velit ut.',
                        'Ut sem nulla pharetra diam sit amet.',
                        'Sollicitudin aliquam ultrices sagittis.'
                  ]
            }
      ]
}

const workShopPageInfo = {
      subtitle:'Check Out our WorkShops',
      title:'Learn in-demand job skills',
      detail:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum.'
}

const singleWorkShopPageInfo = {
      subtitle:'Agenda',
      title:'What You\'ll Learn ?',
      requirementsSubTitle:'Requirements',
      requirementsTitle:'What You\'ll Need ?',
      detailsSubTitle:'Details',
      detailsTitle:'What You\'ll have to Know ?',
}

export {workShopPageInfo,singleWorkShopPageInfo};