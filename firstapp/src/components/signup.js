import { useState } from 'react';
import './signup.css';
const Signup = () => {

    let name = "Tuba";
    let count = 10;
    const [myCount, setMyCount] = useState(0);

    const handleClick = () => {
        console.log('button clicked');
        // alert("Button was clicked");
        count++;
        console.log(count);
        setMyCount(myCount + 1);

    }

    return (
        <div>
            <div className="my-card">
                <img className="logo" src="https://static.thenounproject.com/png/736672-200.png"
                    alt="" />
               
                <h3 style={{ textAlign: 'center' } }>create an account</h3>

                <input className="my-input" type="text" placeholder="email" />

                <input className="my-input" type="text" placeholder="Password" />

                <div style={{ marginTop: '2rem' }}>
                    
                </div>

                <button onClick={handleClick} className="my-btn">SIGN IN</button>

                
            </div>
        </div>
    )
}

export default Signup;
