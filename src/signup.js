import { useState } from "react";
import Menu from "./menu";
import { Link } from 'react-router-dom';
function Signup(){

    const [Lname, setLname] = useState("");
    const [Fname, setFname] = useState("");
    const [Email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [Cpassword, setCpassword] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitted.");

    // eslint-disable-next-line no-unused-vars
    const handleChange = (e) => {
      const newLname = e.currentTarget.value;
      setLname(newLname);
      // console.log(e.currentTarget.value);
  }
}
    return(
    
<div>
<Menu></Menu>
    <br></br>
<section className="">
 
  <div className="px-4 py-5 px-md-5 text-center text-lg-start" style={{backgroundColor: "Black", borderShadow:"green"}}>
    <div className="container">
      <div className="row gx-lg-5 align-items-center">
        <div className="col-lg-6 mb-5 mb-lg-0">
          <h1  className="my-5 display-3 fw-bold ls-tight" style={{color:"blue"}}>
            Welcome To <br />
            <span className="text-primary">WEB BROKER</span>
          </h1> 
        </div>

        <div className="col-lg-6 mb-5 mb-lg-0">
          <div className="card">
            <div className="card-body py-5 px-md-5">
              <form onSubmit={handleSubmit}>
                
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input className="text" id="form3Example1" class="form-control" />
                      <label className="form-label" for="form3Example1" value={Fname}  >First name</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example2" class="form-control" />
                      <label className="form-label" for="form3Example2" value={Lname}>Last name</label>
                    </div>
                  </div>
                </div>

                
                <div className="form-outline mb-4">
                  <input type="email" id="form3Example3" class="form-control" />
                  <label className="form-label" for="form3Example3" value={Email}>Email address</label>
                  </div>

                
                <div class="form-outline mb-4">
                  <input type="password" id="form3Example4" class="form-control" />
                  <label class="form-label" for="form3Example4" value={password}>Password</label>
                </div>
                <div class="form-outline mb-4">
                  <input type="password" id="form3Example4" class="form-control" />
                  <label class="form-label" for="form3Example4" value={Cpassword}>Confirm Password</label>
                </div>

                
                <div className="form-check d-flex justify-content-center mb-4">
                  <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                  <label className="form-check-label" for="form2Example33">
                    Subscribe to our newsletter
                  </label>
                </div>

                <Link to="/">
                <button type="submit" class="btn btn-primary btn-block mb-4"style={{marginLeft:"170px"}}>
                        Create Account
                </button>
                </Link>
                
               
              </form>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
 
    </section>
    </div>
  
    );
}
export default Signup;