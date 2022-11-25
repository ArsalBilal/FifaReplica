import Menu from "./menu";
import { Link } from 'react-router-dom';
function Login(){
    const handleSubmit = (e) => {
        e.preventDefault();
    
        console.log("Submitted.");
    }
    return(
<div>
   <Menu></Menu>
    <br></br>
<section className="">
 
  <div className="px-4 py-5 px-md-5 text-center text-lg-start" style={{backgroundColor: "black", borderShadow:"green" }}>
    <div className="container">
      <div className="row gx-lg-5 align-items-center">
        <div className="col-lg-6 mb-5 mb-lg-0">
          <h1 className="my-5 display-3 fw-bold ls-tight">
            Welcome To <br />
            <span className="text-primary">WEB <br></br> BROKER</span>
          </h1> 
        </div>

        <div className="col-lg-6 mb-5 mb-lg-0">
          <div className="card">
            <div className="card-body py-5 px-md-5">
              <form onSubmit={handleSubmit}>
                
               

                
                <div className="form-outline mb-4">

                  <input type="email" id="form3Example3" class="form-control" />
                  <label className="form-label" for="form3Example3">Email address</label>
                  </div>

                <br></br>
                <div class="form-outline mb-4">
                  <input type="password" id="form3Example4" class="form-control" />
                  <label class="form-label" for="form3Example4">Password</label>
                </div>
                

                <br></br>
               

                <Link to="/">
                <button type="submit" class="btn btn-primary btn-block mb-4"style={{marginLeft:"170px"}}>
                                Login
                </button>
                </Link>
                <br></br>
                <Link to="/signup">
                <button type="submit" class="btn btn-primary"style={{marginLeft:"115px"}}>
                                Create a new Account
                </button>
                </Link>
                <br></br>
               
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</section>
<div style={{backgroundColor:"black",width:"1315px", height:"105px"}}><h5>Copyright © Web Broker, LLC 2022</h5>

<h5>Terms of Use Copyright Policy Privacy Policy</h5></div>
</div>
    );
}
export default Login;