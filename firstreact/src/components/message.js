import React from 'react';

function Message(props) {
    return ( 
        <div>
            <p>Message {props.children}: {props.msg}</p>
        </div>
     );
}

export default Message;