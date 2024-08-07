import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="line"></div>
        <button className="home-button">Home</button>
        <p className="title">TerpInsider</p>
        <button className="club-buttons">Clubs!</button>
        <button className="classes-buttons">Classes!</button>
        <button className="other-buttons">Other!</button>
        <input className="search-box" placeholder="Search for UMD Clubs, Fraternities, and more!"></input>
      </header>
    </div>
  );
}

export default App;
