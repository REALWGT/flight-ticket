import Card from './Card';
import Header from './Header';
import './App.css';
import { getRandomDate, getRandomFlight, getRandomIntegerUnderOneHundred, getRandomItem, getRandomNumber, getRandomSeat, getRandomGate, getRandomTime, getRandomTimezone, getTwoRandomItems } from './utils';
import { AIRLINES, AIRPORTS, CLASSES, PERSONS } from './constants';

function App() {
  let airports = getTwoRandomItems(AIRPORTS);
  const data = {
    airline: getRandomItem(AIRLINES),
    passenger: getRandomItem(PERSONS),
    flight: getRandomFlight(),
    date: getRandomDate(),
    boardingtime: getRandomTime() + getRandomTimezone(),
    gate: getRandomGate(),
    class: getRandomItem(CLASSES),
    zone: getRandomIntegerUnderOneHundred(),
    seat: getRandomSeat(),
    from: airports[0],
    to: airports[1]
  }

  const updateData = () => {
    data.airline = getRandomItem(AIRLINES);
    data.passenger = getRandomItem(PERSONS);
    data.flight = getRandomFlight();
    data.date = getRandomDate();
    data.gate =  getRandomGate();
    data.class = getRandomItem(CLASSES);
    data.zone =  getRandomIntegerUnderOneHundred();
    data.seat =  getRandomSeat();
    airports = getTwoRandomItems(AIRPORTS);
    data.from = airports[0];
    data.to = airports[1];
  }


  return (
    <div className="App">
      <Header />
      <div className='m-80 flex'>
        <div className='flex-1'>
          <Card type='pink' data={data}/>
        </div>
      </div>
    </div>
  );
}

export default App;
