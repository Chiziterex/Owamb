import { Link } from "react-router-dom";

function SignUp(){
  return (
    <div id="signUp" class="signUp">
    <div class="container">
      <form>
        <h3>create account</h3>
        <input type="text" placeholder="full name" id="fname" />
        <span class="radio">
          <input type="radio" name="radio" id="radio1" />
          <label for="radio1">Phone number</label>
          <input type="radio" name="radio" id="radio2" />
          <label for="radio2">Email</label>
        </span>
        <span class="telInfo">
          <select name="" id="countryCode">
            <option value="">+1</option>
            <option value="">+22</option>
            <option value="">+44</option>
            <option value="">+233</option>
            <option value="">+234</option>
            <option value="">+235</option>
          </select>
          <input type="number" id="telNum" />
        </span>
        <p>Enter OTP sent to mobile number</p>
        <div class="OTP">
          <input type="number"/>
          </div>
        <button class="btn">Sign Up</button>
        <div class="or">
          <p>OR</p>
          <p>Sign up using</p>
        </div>
        <div class="icons">
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-google"></i>
        <i class="fa-brands fa-x-twitter"></i>
        </div>
        <p class="lastP">
          Already have an account? <Link to="/signIn">Sign in</Link>
        </p>
      </form>
    </div>
  </div>
  );
}

export default SignUp
  
  