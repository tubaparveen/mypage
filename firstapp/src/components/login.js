import { useState } from 'react';
import './login.css';
const Login = () => {

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
                <img className="logo" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
                    alt="" />
               

                <input className="my-input" type="text" placeholder="Username" />

                <input className="my-input" type="text" placeholder="Password" />

                <div style={{ marginTop: '2rem' }}>
                    <input type="checkbox" />
                    <span>stay signed in</span>
                </div>

                <button onClick={handleClick} className="my-btn">LOGIN</button>

               
            </div>
        </div>
    )
}

export default Login;