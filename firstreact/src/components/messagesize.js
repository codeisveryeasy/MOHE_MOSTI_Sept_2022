import React from 'react';

function MessageSize(props) {
    return ( 
        <span>
            Size: {props.msg.length}
        </span>
     );
}

export default MessageSize;