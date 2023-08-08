import {Navbar, Header, Footer, Home, AboutUs, StudentInfo, 
  Calendar, Forms, Faculty, Programs, PhotoGallery, Driving} from "./containers";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './App.css'

function App() {
  return (
    
    <Router>
      <div className="App">
        
          <Navbar/>
          <Header/>

        <div className="App__content">
            
          <Routes>
            <Route path = "/Photo-Gallery" element = {
              <PhotoGallery/>
            }/>

            <Route path = "/Driving-Directions" element = {
              <Driving/>
            }/>

            <Route path = "/Programs" element = {
              <Programs/>
            }/>
            
            <Route path = "/Faculty" element = {
              <Faculty/>
            }/>
          
            <Route path = "/Forms" element = {
              <Forms/>
            }/>
            
            <Route path = "/Calendar" element = {
              <Calendar/>
            }/>

            <Route path = "/Student-Information" element = {
              <StudentInfo/>
            }/>
            
            <Route path = "/Courses" element = {
              <AboutUs/>
            }/>
        
            <Route path = "/" element = {
              <Home/>
            }/>

          </Routes>
        </div>

        <Footer/>
      </div>

    </Router>
  );
}

export default App;
