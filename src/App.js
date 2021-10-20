import Header from './UI/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Contact from './Components/Contact'
import About from './Components/About'
<<<<<<< HEAD
import { MoviesGrid } from "./Components/MoviesGrid";
import { Footer } from './UI/Footer'
=======
>>>>>>> d28bc444c51a75e13db5ae061f34c1f322f17092

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* <Route path="/" exact/> */}
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
      </div>
<<<<<<< HEAD
      <main>
        <MoviesGrid />
      </main>
      <Footer />
=======
>>>>>>> d28bc444c51a75e13db5ae061f34c1f322f17092
    </Router>
  );
}

export default App;
<<<<<<< HEAD

=======
>>>>>>> d28bc444c51a75e13db5ae061f34c1f322f17092
