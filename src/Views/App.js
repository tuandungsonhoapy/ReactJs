import { Routes, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.scss';
// import MyComponent from './Example/MyComponent';
import ListToDo from './ToDoApp/ListToDo';
import Home from './Home/Home';
import About from './About/About';
import Navigation from './Nav/Navigation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <img src={logo} className="App-logo" alt="logo" />
        <Routes>
          <Route path='/todoapp' element={<Home />} />
          <Route path='/' element={<ListToDo />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
