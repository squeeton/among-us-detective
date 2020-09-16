import React from 'react';


class SelfVouch extends React.Component {


  render(props) {
    return (
        <div className="suit" style={{ zIndex: '2', top: this.props.y + 'px', left: this.props.x + 'px', position: 'absolute' }}
          onClick={() => {this.props.deleteSelfVouch(this.props.index) }}>
              <h1 className={this.props.color+"-text self-vouch-text"}>?</h1>
        </div>

    );
  }

}

export default SelfVouch;