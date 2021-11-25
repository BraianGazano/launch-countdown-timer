import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CountDownTimer from "./components/Timer/CountDownTimer";
function App() {
  const daysHoursMinSecs = {days:99, hours:23, minutes: 59, seconds: 59}
  return (
    <>
      <Header></Header>
      <CountDownTimer daysHoursMinSecs={daysHoursMinSecs}></CountDownTimer>
      <Footer></Footer>
    </>
  );
}

export default App;
