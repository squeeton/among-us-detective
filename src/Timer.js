import React from 'react';


class Timer extends React.Component {


    render(props) {
        var now = new Date();
        var diff = Math.round(Math.abs((this.props.time.getTime() - now.getTime()) / 1000))
        return (
            <div className="timer" style={{ zIndex: '2', top: this.props.y -42 + 'px', left: this.props.x + 5 + 'px', position: 'absolute' }}>
                <p className="timer-text">{diff}s</p>
            </div>

        );
    }

}

export default Timer;