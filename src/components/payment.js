import { Link } from "react-router-dom";

function Payment() {
  
  return (
    <div className="payment">
    <div className="content">
      <header>
        <a href="food.html"><i class="fa-solid fa-arrow-left"></i></a>
        <p>payment</p>
      </header>
  
      <section className="two">
        <p>payment method</p>
        <select name="" id="">
          <option value="">card</option>
          <option value="">Transfer</option>
        </select>
      </section>
  
      <section className="third">
        <p>Card holder's name</p>
        <input type="text" />
      </section>
  
      <section className="fourth">
        <p>Card pan</p>
        <input type="number" />
      </section>
  
      <section className="fifth">
        <div className="left">
          <p>expiry date</p>
          <input type="date" />
          <span>Sub total</span>
          <span>Discount</span>
          <span>Rewards earned</span>
          <span>grand total</span>
        </div>
        <div className="right">
          <p>CVV</p>
          <input type="number" />
          <p>₦5000</p>
          <p>₦0</p>
          <p>₦200</p>
          <span>₦4800</span>
        </div>
      </section>
  
      <div className="pay">
        <p className="confirm"><Link to="/ticket">Confirm payment ₦4800</Link></p>
        <span><Link to="/food" className="cancel">Cancel</Link></span>
      </div>
    </div>
  </div>
  );
}

export default Payment

