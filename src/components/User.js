import React, { useRef } from 'react';

const User = ({setUser}) => {
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.value && setUser(inputRef.current.value);
    }

    return (
        <div className='user'>
            <input className='userInput' placeholder='Enter your name' ref={inputRef}/>
            <button className='startButton' onClick={handleClick}>Start</button>
        </div>
    );
};

export default User;