import Header from './UI/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Contact from './Components/Contact'
import About from './Components/About'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* <Route path="/" exact/> */}
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
      </div>
    </Router>
  );
}

export default App;
