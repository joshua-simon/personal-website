import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Head from './Head'
import Form from './components/form';
import './styles.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path = '/' exact element = {<Head/>}/>
        <Route path = '/form'  element = {<Form/>}/>
      </Routes>
    </Router>
  );
}

export default App;
