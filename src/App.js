// import Signup from "./signup";
// import Login from "./login";

// import Men1 from "./midterm/menu1";
// import Top from "./midterm/top";
// import BottomSection from "./bottomsection";
// import Footer from "./midterm/footer";
// import { Link } from 'react-router-dom';

import {Routes, Route} from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";

// import Background from "./backgound";
// import Marketing from "./marketing";
// import Seller from "./seller";
import Grid from "./midterm/grid";
import Menu from "./midterm/menu11";






function App() {
  return (
    <div>
      {/* <Menu/> */}
   {/* <Men1/> */}
   {/* <Top/> */}
   {/* <BottomSection/>
   <div class="col-12" style={{backgroundColor:"white",height:"100px"}}>
        <br></br>
    <div style={{height:"2px",backgroundColor:"gray"}}></div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
         <h3 style={{marginLeft:"550px"}}>FIFA PARTNERS</h3>

        <Link> <img src="m1.JPG" class="img-fluid" alt="Responsive image" style={{marginLeft:"250px"}}></img></Link>
        <Link> <img src="m2.JPG" class="img-fluid" alt="Responsive image" style={{marginLeft:"50px"}}></img></Link>
        <Link><img src="m3.JPG" class="img-fluid" alt="Responsive image"style={{marginLeft:"50px"}}></img></Link>
        <Link><img src="m4.JPG" class="img-fluid" alt="Responsive image"style={{marginLeft:"50px"}}></img></Link>
         <br></br>
         <Link> <img src="m5.JPG" class="img-fluid" alt="Responsive image" style={{marginLeft:"350px"}}></img></Link>
         <Link> <img src="m6.JPG" class="img-fluid" alt="Responsive image" style={{marginLeft:"60px"}}></img></Link>
         <Link><img src="m7.JPG" class="img-fluid" alt="Responsive image" style={{marginLeft:"60px"}}></img></Link>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <div style={{height:"2px",backgroundColor:"gray"}}></div>
         <br></br>
         <Link><img src="m8.JPG" class="img-fluid" alt="Responsive image" style={{marginLeft:"60px"}}></img></Link>

         <div class="row">
    <div class="col-3" style={{backgroundColor:"white",height:"350px"}}>
        <h4 style={{marginLeft:"80px",marginTop:"30px"}}>EXPLORE</h4>
        <p style={{fontSize:18}}>Competitions</p>
    </div>
    <div class="col-6" style={{backgroundColor:"white",height:"350px"}}></div>
    </div>

    </div> */}
   {/* <Footer/> */}
    <Grid/>
    
    
      {/* <Route path="/" element={<Background/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/seller" element={<Seller/>} />
      <Route path="/marketing" element={<Marketing/>} /> */}
{/* <Routes>
   <Route path="/privacy" element={<Menu/>}/>
   <Route path="/terms" element={<Menu/>}/>
    </Routes>
     */}
    {/* <Background/> */}
     {/* <Main/> */}
     {/* <Marketing/> */}
     {/* <Seller/> */}
      {/* <Signup/> */}
    {/* <Login/> */}
    {/* <LoginForm/> */}

    </div>
  );
}

export default App;
