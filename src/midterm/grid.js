import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom';
import Menu from './menu11';
import Top from './top';
import BottomSection from './bottomsection';
import TOP1 from './top1';
function Grid() {
    return ( <div class="row">
    <div class="col-12" style={{backgroundColor:"white",height:"30px"}}>
    <Menu/>
    </div>
    
    
    <div class="col-5" style={{backgroundColor:"white"}}>
    <div style={{display:"inline-block",backgroundColor:"white",height:230,width:300,position:"relative",marginTop:"100px",marginLeft:"5%"}}>
      <h1  >Football Unites the World</h1>
      <p > Football unites the world as a global movement to inspire, unite and develop through football.</p>
      <h2 >More from this topic</h2>
      </div>
      <Top/>
    </div>
   <div class="col-7" style={{ marginTop:"70px",height:"2000px",backgroundColor:" rgb(15, 133, 162)"}}> 
        <TOP1/>
   </div>
   
   <div class="col-4" style={{backgroundColor:"white",}}>
   <div >
<img src="fifalogo11.JPG"alt="Logo" style={{width:"200px",height:"70px",marginTop:"70px",marginLeft:"50px"}} />
<br/>
<br/>
<h2 style={{marginLeft:"50px"}}>WORLD RAKING</h2>
<br/>
<p style={{marginLeft:"50px"}}>The official world ranking of <br/> international men and women <br/> teams.</p>
<br/>
<h6 style={{marginLeft:"50px",color:"blue"}}>FIFA/COCA-COLA WORLD <br/> RANKING</h6>
</div>

   </div>
   
    <div class="col-8" style={{backgroundColor:"white", }}><BottomSection/></div>
    
    <div class="col-12" style={{backgroundColor:"white", }}>
    
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
    <div class="col-3" style={{}}>
     <Link style={{textDecoration: 'none'}}>   <h4 style={{marginLeft:"70px",marginTop:"30px"}}>EXPLORE</h4>
        <p style={{fontSize:18,marginLeft:"60px"}}>Competitions</p>
        <p style={{fontSize:18,marginLeft:"60px"}}>About FIFA</p>
        <p style={{fontSize:18,marginLeft:"60px"}}>Women's Football</p>
        <p style={{fontSize:18,marginLeft:"60px"}}>Social Impact</p>
        <p style={{fontSize:18,marginLeft:"60px"}}>Football Development</p>
        <p style={{fontSize:18,marginLeft:"60px"}}>Technical</p>
        <p style={{fontSize:18,marginLeft:"60px"}}>Legal & Compliance</p>
        <p style={{fontSize:18,marginLeft:"60px"}}>FIFA/Coca-Cola World ranking</p></Link>
    </div>
    <div class="col-6" style={{}}>
    <Link style={{textDecoration: 'none'}}> <h4 style={{marginLeft:"70px",marginTop:"30px"}}>ALSO VISIT</h4>
        <p style={{fontSize:18,marginLeft:"60px"}}>All stories & topics</p>
        <p style={{fontSize:18,marginLeft:"60px"}}>Official documents</p>
        <p style={{fontSize:18,marginLeft:"60px"}}>Jobs & Careers</p>
        <p style={{fontSize:18,marginLeft:"60px"}}>Contact FIFA</p></Link>
    </div>
    </div>

    </div>
  </div> );
}

export default Grid;