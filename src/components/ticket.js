import { Link } from "react-router-dom";
import Tick from "../assets/tick mark.png"

function Ticket() {
    
    return (
        

    <div class="tickets">
    <div class="container">
        
        <header>
            <Link to="/food"><i class="fa-solid fa-arrow-left"></i></Link>
            <p>save</p>
        </header>

        <section class="contentt">
                <img src={Tick}></img>
        <div class="text">
            <h4>ticket summary</h4>
            <span>name</span>
            <p>Chukwuemeka obinna</p>
            <span>location</span>
            <p>Dan anyiam stadium, owerri</p>
            <div class="nested-div">
                <div>
                    <span>date</span>
                    <p>6 may 2024</p>
                </div>
                <div>
                    <span>time</span>
                    <p>10:00am</p>
                </div>
            </div>
            <span>ticket ID</span>
            <p>GFDFYTUI76HG90876GH</p>
        </div>
        <span class="line"></span>
        </section>

        <section class="scan">
            <p>scan QR code</p>
            <i class="fa-solid fa-qrcode"></i>

            <div class="pay">
                <Link to="/feedback"><p className="confirm ticketConfirm">Give feedback</p></Link>
                <Link to="/payment"><span class="cancel">Close</span></Link>
            </div>

        </section>
        

    </div>
</div>
    );
}
    
export default Ticket;