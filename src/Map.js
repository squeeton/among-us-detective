import React from 'react';
import PieMenu, { Slice } from 'react-pie-menu';

import './style.css';

const MOUSE_LEFT = 1;
const MOUSE_RIGHT = 3;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
  }



  componentDidMount() {
    var ctx = this.canvas.getContext('2d');
    var img = new Image();
    img.onload = () => {
      ctx.drawImage(img, -50, 0, 1680, 1050);
    };
    img.src = this.props.currentMap;
    this.setState({
      currentMap: this.props.currentMap
    });
  }


  componentDidUpdate() {
    if (this.state.currentMap !== this.props.currentMap) {
      var ctx = this.canvas.getContext('2d');
      var img = new Image();
      img.onload = () => {
        ctx.drawImage(img, -50, 0, 1680, 1050);
      };
      img.src = this.props.currentMap;
      this.setState({
        currentMap: this.props.currentMap
      });
    }
  }

  onContextMenu = e => {
    e.preventDefault();
  }

  onMouseDown = e => {
    if (e.nativeEvent.which === MOUSE_LEFT) {
      this.setState({
        mouseX: `${e.pageX}px`,
        mouseY: `${e.pageY}px`,
        showMenu: true,
        selfVouch: false
      });
    }

    if (e.nativeEvent.which === MOUSE_RIGHT) {
      this.setState({
        mouseX: `${e.pageX}px`,
        mouseY: `${e.pageY}px`,
        showMenu: true,
        selfVouch: true
      });
    }
  }

  onMouseUp = e => {
    if (e.nativeEvent.which === MOUSE_LEFT || e.nativeEvent.which === MOUSE_RIGHT) {
      this.setState({ showMenu: false });
      e.preventDefault();
    }
  }

  circleClick = (e, color, x, y) => {
    //this.addSighting("red", x, y);
    var xInt = parseInt(x.slice(0, x.length - 2)) - 25
    var yInt = parseInt(y.slice(0, y.length - 2)) - 30


    if (e.nativeEvent.which === MOUSE_LEFT) {
      this.props.addSighting(color, xInt, yInt)
    }
    if (e.nativeEvent.which === MOUSE_RIGHT) {
      this.props.addSelfVouch(color, xInt, yInt)
    }

    this.setState({ selfVouch: false });
  }


  render() {
    const { showMenu, mouseX, mouseY } = this.state;
    return (
      <div
        role="presentation"
        className="map-canvas"
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
        onContextMenu={this.onContextMenu}
      >
        <canvas width="1680" height="1050" ref={ref => { this.canvas = ref; }} />
        {showMenu && (
          <PieMenu
            radius="200px"
            centerRadius="25px"
            centerX={mouseX}
            centerY={mouseY}
            
          >
            <Slice onSelect={(e) => this.circleClick(e, 'red', mouseX, mouseY)}>
              {(this.state.selfVouch) ? <h1 class="self-vouch-text" style={{ color: 'red' }}>?</h1> : <span class="dot red"></span>}
            </Slice>
            <Slice onSelect={(e) => this.circleClick(e, 'blue', mouseX, mouseY)}>
              {(this.state.selfVouch) ? <h1 class="self-vouch-text" style={{ color: 'blue' }}>?</h1> : <span class="dot blue"></span>}
            </Slice>
            <Slice onSelect={(e) => this.circleClick(e, 'green', mouseX, mouseY)}>
              {(this.state.selfVouch) ? <h1 class="self-vouch-text" style={{ color: 'green' }}>?</h1> : <span class="dot green"></span>}
            </Slice>
            <Slice onSelect={(e) => this.circleClick(e, 'pink', mouseX, mouseY)}>
              {(this.state.selfVouch) ? <h1 class="self-vouch-text" style={{ color: 'pink' }}>?</h1> : <span class="dot pink"></span>}
            </Slice>
            <Slice onSelect={(e) => this.circleClick(e, 'orange', mouseX, mouseY)}>
              {(this.state.selfVouch) ? <h1 class="self-vouch-text" style={{ color: ' #ff8c1a' }}>?</h1> : <span class="dot orange"></span>}
            </Slice>
            <Slice onSelect={(e) => this.circleClick(e, 'yellow', mouseX, mouseY)}>
              {(this.state.selfVouch) ? <h1 class="self-vouch-text" style={{ color: 'yellow' }}>?</h1> : <span class="dot yellow"></span>}
            </Slice>
            <Slice onSelect={(e) => this.circleClick(e, 'black', mouseX, mouseY)}>
              {(this.state.selfVouch) ? <h1 class="self-vouch-text" style={{ color: '#333333' }}>?</h1> : <span class="dot black"></span>}
            </Slice>
            <Slice onSelect={(e) => this.circleClick(e, 'white', mouseX, mouseY)}>
              {(this.state.selfVouch) ? <h1 class="self-vouch-text" style={{ color: 'white' }}>?</h1> : <span class="dot white"></span>}
            </Slice>
            <Slice onSelect={(e) => this.circleClick(e, 'purple', mouseX, mouseY)}>
              {(this.state.selfVouch) ? <h1 class="self-vouch-text" style={{ color: '#8000ff' }}>?</h1> : <span class="dot purple"></span>}
            </Slice>
            <Slice onSelect={(e) => this.circleClick(e, 'brown', mouseX, mouseY)}>
              {(this.state.selfVouch) ? <h1 class="self-vouch-text" style={{ color: '#804000' }}>?</h1> : <span class="dot brown"></span>}
            </Slice>
            <Slice onSelect={(e) => this.circleClick(e, 'teal', mouseX, mouseY)}>
              {(this.state.selfVouch) ? <h1 class="self-vouch-text" style={{ color: 'teal' }}>?</h1> : <span class="dot teal"></span>}
            </Slice>
            <Slice onSelect={(e) => this.circleClick(e, 'lime', mouseX, mouseY)}>
              {(this.state.selfVouch) ? <h1 class="self-vouch-text" style={{ color: 'lime' }}>?</h1> : <span class="dot lime"></span>}
            </Slice>
          </PieMenu>
        )}
      </div>
    );
  }
}