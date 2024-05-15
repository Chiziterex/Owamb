import { Link } from "react-router-dom";

function SignIn() {
  
  return (
    <div class="content">
      <div class="header">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdKTB6_3KQcFTO3G-cd1-ut7IYtcSYH7-w94SwgyoTuUPk3iJunLP7qWfq_IBzCJhqwYw&usqp=CAU"
          alt=""
        />
        <h1>my owambe events</h1>
        <span class="line"></span>
      </div>

      <form class="form">
        <input type="text" placeholder="Username" />
        <input
          type="password"
          placeholder="Password"
          minlength="6"
          maxlength="8"
        />
        <span class="left">Forgot your password?</span>

        <Link to="/home">
        <button class="btn">Sign in</button>
        </Link>

        <p>
          New customer? Sign up
          <Link to="/signup">
            <span className="btnSignIn"> HERE</span>
          </Link>
        </p>
        
      </form>
    </div>
  );
}

export default SignIn;
