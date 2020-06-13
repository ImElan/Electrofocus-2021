import workshopData from '../Data/workshop';

const findWorkShop = (id) => {
      const workshopsList = workshopData.workshops;
      const currentWorkShop = workshopsList.find( workshop => workshop.id === id);
      return currentWorkShop;
}

export default findWorkShop;