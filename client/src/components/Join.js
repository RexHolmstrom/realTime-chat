import React, {useState} from 'react'
import { Link } from 'react-router-dom'
const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');



    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <div className="heading">Join</div>
                <div><input placeholder="Name" className="joinInput" type="text" onChange={} /></div>
                <div><input placeholder="Room" className="joinInput mt-20" type="text" onChange={} /></div>
                <Link>
                 <button className="button" type="submit">Sign in</button>
                </Link>
            </div>
        </div>
    )
}


export default Join     