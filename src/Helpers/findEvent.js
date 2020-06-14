import events from '../Data/event';

const findEvent = (id,category) => {
      const eventList = events[category];
      const curEvent = eventList.find( event => event.id === id);
      return curEvent;
}

export default findEvent;