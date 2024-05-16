import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

 function Food() {
  return (
    
    <div className="foodWeek">
      <div className="content">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx9D-xxrQmH_8pitFTvs952oTL_HPlnifDGA&s" alt="" />

        <div className="text">
          <div className="left">
            <h4>owerri food week <i class="fa-solid fa-bowl-food"></i></h4>
            <p>owerri</p>
            <p>hosted by foodie buddy INC</p>
            <span>
              <p> <i class="fa-solid fa-location-dot"></i> owerri</p>
              <p><i class="fa-regular fa-clock"></i> 10:00am - 3:00pm</p>
            </span>
          </div>
          <div className="right">
            <span>6</span>
            <span>may</span>
            <span>24</span>
          </div>
        </div>

        <div className="middleElement">
          <div>
            <p>Rating</p>
            <span><i class="fa-solid fa-star"></i> 4.6</span>
          </div>
          <div>
            <p><span>1,024</span> are going</p>
            <p className="circles"><i></i><i></i><i></i><i></i><i></i></p>
          </div>
          <div>
            <span>View all</span>
          </div>
        </div>

        <div className="aboutEvent">
          <h1>About Event</h1>
          <p id="text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex neque
            atque nemo quae hic dolorum? Quam quaerat minus modi. Itaque atque
            distinctio praesentium corrupti ratione accusamus vero id ipsam ea.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus minus magnam delectus pariatur. Quisquam eos
            voluptatibus, aperiam praesentium nostrum minus maiores officia
            corporis illo at numquam id doloremque aspernatur? Commodi.
            <span>Read more</span> <i class="fa-solid fa-angle-down"></i>
          </p>
          <div className="ticket">
            <p><Link to="/payment" id="buyTicket">Buy ticket ₦5000</Link></p>
            <span><Link to="/home" id="cancel">Cancel</Link></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Food