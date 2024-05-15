

function Feedback() {
    
    return (
    <div className="feedback">
        <div className="header">
            <i>gg</i>
            <p>feedback</p>
            <i>zz</i>
        </div>

        <div class="center">
            <p>Rate your exerience with us</p>
            <div class="stars">
                <i>r</i><i>r</i><i>r</i><i>r</i><i>r</i>
            </div>
        </div>

        <form>
            <label for="feedbk">Do you have any particular complaint?</label>
            <input type="text" placeholder="we'll love to hear it" id="feedbk"/>
            <label for="improvement">Anything that you will like us to improve?</label>
            <input type="text" placeholder="Your feedback is valuable to us" id="improvement" />
        </form>

        <div className="buttonContainer">
            <button>submit</button>
        </div>
    </div>
    );
}

export default Feedback;