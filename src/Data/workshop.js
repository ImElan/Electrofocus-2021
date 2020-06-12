import web from '../assets/web_dev.png';
import ai from '../assets/ai.jpg';
import arduino from '../assets/arduino_workshop.jfif';
import webdev from '../assets/web_development.svg';
import ai_workshop from '../assets/artificial_intelligence.svg';
import arduino_workshop from '../assets/circuit.svg';


export default {
      workshops:[
            {
                  name:'Web Development',
                  details:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio nec.',
                  image:web, 
                  price:'749',
                  date:'Jan 12',
                  time:'10.00 AM',
                  venue:'DSP Lab',
                  infoDetails:'Jaculis at erat pellentesque adipiscing commodo elit at. Feugiat in ante metus dictum at tempor commodo ullamcorper. Consequat interdum varius sit amet mattis vulputate enim. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Feugiat nibh sed pulvinar proin gravida hendrerit. Malesuada proin libero nunc consequat. At quis risus sed vulputate odio ut enim blandit.',
                  infoImage:webdev
            },
            {
                  name:'Arduino',
                  details:'Are you new to robotics and arduino ? Don\'t know where to start with ? Well then,this workshop is for you.',
                  image:arduino, 
                  price:'849',
                  date:'Jan 13',
                  time:'10.00 AM',
                  venue:'VLSI Lab',
                  infoDetails:'Laoreet id donec ultrices tincidunt arcu. Mauris rhoncus aenean vel elit scelerisque mauris. Metus dictum at tempor commodo ullamcorper. At consectetur lorem donec massa sapien faucibus. Neque convallis a cras semper auctor neque. Turpis in eu mi bibendum. Adipiscing elit duis tristique sollicitudin nibh sit. ',
                  infoImage:arduino_workshop
            },
            {
                  name:'Artificial Intelligence',
                  details:'Do you keep hearing about Artificial Intelligence? What\'s all the fuss about it ? Come find out..!',
                  image:ai, 
                  price:'749',
                  date:'Jan 13',
                  time:'9.00 AM',
                  venue:'LHC 201',
                  infoDetails:'Nibh tellus molestie nunc non blandit. Vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt. Mauris augue neque gravida in fermentum et sollicitudin ac orci. Est ultricies integer quis auctor elit sed vulputate. Et odio pellentesque diam volutpat. Ullamcorper velit sed ullamcorper morbi tincidunt ornare.',
                  infoImage:ai_workshop
            },
      ]
}

const workShopPageInfo = {
      subtitle:'Check Out our WorkShops',
      title:'Learn in-demand job skills',
      detail:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum.'
}

export {workShopPageInfo};