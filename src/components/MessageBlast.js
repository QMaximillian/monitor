import React from "react";

class MessageBlast extends React.Component {
    render(){
        return (
            <div className="flex border border-black w-full">
                {this.props.children}
            </div>
        )
    }
    
}

export default MessageBlast;
