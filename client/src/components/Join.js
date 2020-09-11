import React, {useState} from 'react'
import { Link } from 'react-router-dom'
const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');



    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <div className="heading"></div>
            </div>
        </div>
    )
}


export default Join