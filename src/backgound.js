
import Menu from "./menu";
function Background() {
  return ( <div>
    <Menu></Menu>
    <br></br>
    <img src="pic4.png" class="img-fluid" alt="Responsive image"></img>
    
<div class="card text-center" style={{background:"DodgerBlue"}}>
  <div class="card-header">
    Featured
  </div>
  <div class="card-body" style={{background:"DodgerBlue"}}>
    <h5 class="card-title">Our Latest Listings</h5>
    <p class="card-text">Every Monday we publish new businesses for sale on our marketplace.</p>
    <a href="#" class="btn btn-primary">New Listings Published</a>
    
  </div>
  <div class="card-footer text-muted" style={{background:"DodgerBlue"}}>
    2 days ago
  </div>
  
</div>
<h2 style={{marginLeft:"450px"}}>Recommended Businesses<br></br></h2>
<h3 style={{marginLeft:"490px"}}>Similar Listing Criteria</h3>
<div class="card-group">
  <div class="card">
    <img class="card-img-top" src="1.JPG" alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title"><h4>Price  :       $249,821</h4></h5>
      <p class="card-text"><h4>Expenses   :     $20,991<br></br></h4><h4 style={{color:"blue"}}>Net Profit  : $6,752</h4></p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      <button type="button" class="btn btn-primary">View Listing</button>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="2.JPG" alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title"><h4>Price  : $149,118</h4></h5>
      <p class="card-text"><h4>Expenses  : $6,328

<br></br></h4><h4 style={{color:"blue"}}>Net Profit  : $4,810</h4></p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      <button type="button" class="btn btn-primary">View Listing</button>    
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="3.JPG" alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title"><h4>Price  : $585,198</h4></h5>
      <p class="card-text"><h4>Expenses  : $91,131<br></br></h4><h4 style={{color:"blue"}}>Net Profit  : $17,212</h4></p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      <button type="button" class="btn btn-primary">View Listing</button>
    </div>
  </div>
</div>

<div style={{backgroundColor:"white",width:"1315px", height:"105px"}}><h5>Copyright © Web Broker, LLC 2022</h5>

<h5>Terms of Use Copyright Policy Privacy Policy</h5></div>
</div>
   );
}

export default Background;