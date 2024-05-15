import { Link } from "react-router-dom";

function Home() {
  return (
    
    <div class="home">
      <div class="container">
        <section class="header">
          <div class="top">
            <div class="lst">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuGw6iSJ1nW1_guDYerusc9IBgWGRMo7nmDQ&s" alt="" />
              <span>
                <p>Hello Doris 👏</p>
                <p>Where do you want to go</p>
              </span>
            </div>
            <div class="icon">
              <i class="fa-regular fa-bell"></i>
              <i class="one">1</i>
            </div>
          </div>
          <span>
            <i class="fa-solid fa-microphone"></i>
            <input type="text" placeholder="search event" />
            <i class="fa-solid fa-magnifying-glass"></i>
          </span>
        </section>

        <section class="categories sect">
          <div class="lstBox">
            <p>categories</p>
            <i class="fa-solid fa-angles-right"></i>
          </div>
          <div class="scndBox">
            <span>Music</span>
            <span>art</span>
            <span>sport</span>
            <span>food</span>
          </div>
        </section>

        <section className="upcomingEvents sect">
          <h1>Upcoming popular events</h1>
          <div className="imageContainer">
            <Link to="/food">
            <div className="imageBox">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx9D-xxrQmH_8pitFTvs952oTL_HPlnifDGA&s" alt="" />
                <p>Owerri food week</p>
                <p>owerri</p>
              </div>
            </Link>
            <div className="imageBox">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREWGQivbqHsXWRTtUJbFVWqYCW1BcEe62X1Q&s" alt="" />
              <p>davido's concert</p>
              <p>new owerri</p>
            </div>
            <div className="imageBox">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRVxMhxGOupjLQS9666qenPrUBz_A_yY5mjA&s" alt="" />
              <p>AmaJohn Traditional wedding</p>
              <p>onuimo</p>
            </div>
          </div>
        </section>

        <section className="highlights">
          <div className="top">
            <h1>events highlights</h1>
            <i class="fa-solid fa-ellipsis"></i>
          </div>
          <div className="imageContainer">
            <div className="imageBox">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRMP2a9iYGMrJETvN_iOMyNXKVe9wtYBB-8A&s" alt="" />
              <p>food fight</p>
              <p>wetheral</p>
            </div>
            <div className="imageBox">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKmFvseaM84LJ0zrAkDjuKUU53u_OIUJ0cnQ&s" alt="" />
              <p>free movie tickets</p>
              <p>owerri</p>
            </div>
            <div className="imageBox">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj3kHNjwPJX3XAAJp8CVXJT8LnLoIvSte3NQ&s" alt="" />
              <p>baking championship runner up</p>
              <p>amakohia</p>
            </div>
          </div>
        </section>

        <footer>
          <span>
            <i class="fa-solid fa-user"></i>
            <p>Home</p>
          </span>
          <span>
            <i class="fa-solid fa-calendar-days"></i>
            <p>calendar</p>
          </span>
          <span>
            <i class="fa-solid fa-magnifying-glass"></i>
            <p>search</p>
          </span>
          <span>
            <i class="fa-solid fa-chart-simple"></i>
            <p>analytics</p>
          </span>
          <span>
            <i class="fa-solid fa-medal"></i>
            <p>reward</p>
          </span>
        </footer>
      </div>
    </div>
  );
}

export default Home