import './App.css';
import MainContent from './components/MainContent';
import GNB from './components/nav/GNB';
import SNB from './components/nav/SNB';

function App() {
  return (
    <>
      <GNB />
      <div className="mainArea">
        <SNB />
        <MainContent />
      </div>
    </>
  );
}

export default App;
