import robot from '../assets/header.png';
import workshop from '../assets/workshop.svg';
import tech from '../assets/tech.svg';
import nonTech from '../assets/nonTech.svg';
import register from '../assets/register.svg';
import contact from '../assets/contact.svg';

const homePageHeader = {
      title:'ElectroFocus',
      content:'An Inter College National level technical flamboyance with 20+ events and 8+ workshops. The Symposium is one of the best platforms for all the aspiring engineers to showcase their talents and to those who wish to furnish them.',
      isHomePage:true,
      image:robot,
      imageWidth:'100%'
}

const workShopPageHeader = {
      title:'WorkShops',
      content:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
      isHomePage:false,
      image:workshop,
      imageWidth:'80%'
}

const techEventPageHeader = {
      title:'Technical Events',
      content:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
      isHomePage:false,
      image:tech,
      imageWidth:'90%'
}

const nonTechEventPageHeader = {
      title:'Non Technical Events',
      content:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
      isHomePage:false,
      image:nonTech,
      imageWidth:'90%'
}

const registerPageHeader = {
      title:'The Ultimate Platform',
      content:'A great opportunity to level up your knowledge and show your talents. Come Join Us',
      isHomePage:false,
      image:register,
      imageWidth:'90%'
}

const contactPageHeader = {
      title:'Contact Us',
      content:'You\'ve got questions ? We\'ve got answers.',
      isHomePage:false,
      image:contact,
      imageWidth:'90%'
}

export {
      homePageHeader,
      workShopPageHeader,
      techEventPageHeader,
      nonTechEventPageHeader,
      registerPageHeader,
      contactPageHeader      
};
