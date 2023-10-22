import Layout from './components/shared/layout';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Service from './components/service';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = ()=>{
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App