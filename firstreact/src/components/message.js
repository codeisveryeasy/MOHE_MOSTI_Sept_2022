import React from 'react';
import MessageSize from './messagesize';

function Message(props) {
    return ( 
        <div>
            <p>
                Message {props.children}: {props.msg} 
                <br />
                <MessageSize msg={props.msg}></MessageSize>
            </p>

        </div>
     );
}

export default Message;