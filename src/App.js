import './App.css';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1>Meal Now</h1>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default App;
