import React from 'react';
import './App.css';
import Crewmate from './Crewmate';
import Sighting from './Sighting';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import skeld from './skeld.png';
import mira from './mira.png';
import polus from './polus.png';
import Map from './Map';
import Timer from './Timer';
import SelfVouch from './SelfVouch';
import { Line } from 'react-lineto';



class App extends React.Component {

  state = {
    currentMap: skeld,
    selectedPath: 'Draw Paths',
    showHelp: false,
    sightings: [],
    selfVouches: [],
    fromTo: []
  };

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ now: Date.now() }), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }


  handleClose = () => {
    this.setState({ showHelp: false })
  }
  handleShow = () => {
    this.setState({ showHelp: true })
  }

  setMap = (map) => {
    this.setState({
      currentMap: map
    });
  }
  clearSightings = (x, y) => {
    this.setState({
      sightings: [],
      fromTo: []
    });
  }

  clearSelfVouces = (x, y) => {
    this.setState({
      selfVouches: []
    });
  }



  addSighting = (color, x, y) => {
    var newSighting = { color: color, x: x, y: y, time: new Date() }

    this.setState(prevState => ({
      sightings: [...prevState.sightings,
        newSighting
      ]
    }));
  }
  deleteSighting = (index) => {
    var arr = this.state.sightings
    arr.splice(index, 1);
    this.setState({
      sightings: arr
    })
  }

  addSelfVouch = (color, x, y) => {
    var newSelfVouch = { color: color, x: x, y: y }

    this.setState(prevState => ({
      selfVouches: [...prevState.selfVouches,
        newSelfVouch
      ]
    }));
  }
  deleteSelfVouch = (index) => {
    var arr = this.state.selfVouches
    arr.splice(index, 1);
    this.setState({
      selfVouches: arr
    })
  }

  drawPaths(color) {
    var cssColor;
    switch (color) {
      case 'red': cssColor = 'Red'; break;
      case 'blue': cssColor = 'Blue'; break;
      case 'green': cssColor = 'green'; break;
      case 'pink': cssColor = 'hotpink'; break;
      case 'orange': cssColor = '#ff8c1a'; break;
      case 'yellow': cssColor = 'Yellow'; break;
      case 'black': cssColor = '#333333'; break;
      case 'white': cssColor = 'white'; break;
      case 'purple': cssColor = '#8000ff'; break;
      case 'brown': cssColor = '#804000'; break;
      case 'teal': cssColor = 'aqua'; break;
      case 'lime': cssColor = 'lime'; break;

    }

    var i = 0;
    var coords = []
    var fromTo = [];


    for (i = 0; i < this.state.sightings.length; i++) {
      if (color === this.state.sightings[i].color) {
        var newCoord = { x: this.state.sightings[i].x + 20, y: this.state.sightings[i].y + 25 }
        coords.push(newCoord);
      }
    }

    for (i = 1; i < coords.length; i++) {
      fromTo.push({ color: cssColor, x0: coords[i - 1].x, y0: coords[i - 1].y, x1: coords[i].x, y1: coords[i].y })
    }

    this.setState({
      fromTo: fromTo,
      selectedPath: color
    })

  }
  clearPaths = () => {
    this.setState({
      selectedPath: 'Draw Paths',
      fromTo: []
    })
  }

  render() {
    return (
      <div className="App-header">



        <br />
        <Row style={{ width: '90%' }}>
          <Col className='align-items-center'>
            <Row>
              <Col className='align-items-center'>
                <Button variant={(this.state.currentMap === skeld) ? "success" : "secondary"} onClick={(e) => { this.setMap(skeld) }}>Skeld</Button>{' '}
                <Button variant={(this.state.currentMap === mira) ? "success" : "secondary"} onClick={(e) => { this.setMap(mira) }}>Mira</Button>{' '}
                <Button variant={(this.state.currentMap === polus) ? "success" : "secondary"} onClick={(e) => { this.setMap(polus) }}>Polus</Button>{' '}
                <Button style={{ padding: '.375rem .75rem' }} variant="primary" onClick={this.handleShow}>How To</Button>
              </Col>
            </Row>
            <Row>
              <Col className='align-items-center'>
                <Button style={{ padding: '.375rem .75rem' }} variant="danger" onClick={this.clearPaths}> ClearPaths</Button>{' '}
                <Button style={{ padding: '.375rem .75rem' }} variant="danger" onClick={this.clearSelfVouces}>Clear ?'s</Button>{' '}
                <Button variant="danger" onClick={this.clearSightings}>Clear Sightings</Button>{' '}

                <Dropdown style={{ padding: '.375rem .75rem' }}>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {this.state.selectedPath}
                  </Dropdown.Toggle>
                  <Dropdown.Menu >
                    <Dropdown.Item onSelect={(e) => { this.drawPaths('Draw Paths') }}>Draw Path</Dropdown.Item>
                    <Dropdown.Item onSelect={(e) => { this.drawPaths('red') }} >Red</Dropdown.Item>
                    <Dropdown.Item onSelect={(e) => { this.drawPaths('blue') }} >Blue</Dropdown.Item>
                    <Dropdown.Item onSelect={(e) => { this.drawPaths('green') }} >Green</Dropdown.Item>
                    <Dropdown.Item onSelect={(e) => { this.drawPaths('pink') }} >Pink</Dropdown.Item>
                    <Dropdown.Item onSelect={(e) => { this.drawPaths('orange') }} >Orange</Dropdown.Item>
                    <Dropdown.Item onSelect={(e) => { this.drawPaths('yellow') }} >Yellow</Dropdown.Item>
                    <Dropdown.Item onSelect={(e) => { this.drawPaths('black') }} >Black</Dropdown.Item>
                    <Dropdown.Item onSelect={(e) => { this.drawPaths('white') }} >White</Dropdown.Item>
                    <Dropdown.Item onSelect={(e) => { this.drawPaths('purple') }} >Purple</Dropdown.Item>
                    <Dropdown.Item onSelect={(e) => { this.drawPaths('brown') }} >Brown</Dropdown.Item>
                    <Dropdown.Item onSelect={(e) => { this.drawPaths('teal') }} >Teal</Dropdown.Item>
                    <Dropdown.Item onSelect={(e) => { this.drawPaths('lime') }} >Lime</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
          </Col>
          <Col lg='3' style={{ border: '4px solid white', borderRadius: '15px' }}>
            <Row >
              <Col md='4'><h3>Unknown</h3></Col>
              <Col>
                <Row >
                  <Crewmate color="crewmate red" />
                  <Crewmate color="crewmate blue" />
                  <Crewmate color="crewmate green" />
                  <Crewmate color="crewmate pink" />
                  <Crewmate color="crewmate orange" />
                </Row>
              </Col>
            </Row>
            <Row >
              <Crewmate color="crewmate yellow" />
              <Crewmate color="crewmate black" />
              <Crewmate color="crewmate white" />
              <Crewmate color="crewmate purple" />
              <Crewmate color="crewmate brown" />
              <Crewmate color="crewmate teal" />
              <Crewmate color="crewmate lime" /></Row>
          </Col>
          <Col style={{ border: '4px solid green', borderRadius: '15px' }}><h3>Innocents</h3>
            <br />
          </Col>
          <Col style={{ border: '4px solid red', borderRadius: '15px' }}><h3>Suspects</h3>
            <br />
          </Col>
        </Row>

        <br />
        <Row style={{ width: '97%' }}>
          <Col lg="12">

            {/* <Map addSighting={this.addSighting} currentMap={this.state.currentMap} clickLocation={this.clickLocation} /> */}
          </Col>
        </Row>
        <Map addSighting={this.addSighting} currentMap={this.state.currentMap} addSelfVouch={this.addSelfVouch} />


        <div id="sighting-container">
          {this.state.sightings.map((item, index) => {
            return (
              <Sighting
                index={index}
                key={index}
                color={item.color}
                x={item.x}
                y={item.y}
                time={item.time}
                deleteSighting={this.deleteSighting}
              />
            )
          })
          }
        </div>
        <div id="timer-container">
          {this.state.sightings.map((item, index) => {
            return (
              <Timer
                index={index}
                key={index}
                color={item.color}
                x={item.x}
                y={item.y}
                time={item.time}
                deleteSighting={this.deleteSighting}
              />
            )
          })
          }
        </div>
        <div id="self-vouch-container">
          {this.state.selfVouches.map((item, index) => {
            return (
              <SelfVouch
                index={index}
                key={index}
                color={item.color}
                x={item.x}
                y={item.y}
                deleteSelfVouch={this.deleteSelfVouch}
              />
            )
          })
          }
        </div>
        <div id='lines-container'>
          {this.state.fromTo.map((item, index) => {
            return (
              <Line
                index={index}
                key={index}
                borderWidth={10}
                borderColor={item.color}
                x0={item.x0}
                y0={item.y0}
                x1={item.x1}
                y1={item.y1}
                deleteSelfVouch={this.deleteSelfVouch}
              />
            )
          })
          }

        </div>



        <Modal show={this.state.showHelp} onHide={this.handleClose} size='lg'>
          <Modal.Header closeButton>
            <Modal.Title>How To Use</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p><b>Left click</b> and drag a color to mark a sighting.</p>
            <p><b>Left click</b> a sighting to remove it.</p>
            <p><b>Right click</b> and drag a color to mark when someone says they were somewhere.</p>
            <p style={{ textAlign: 'center' }}> (We both know they cant be trusted)</p>
            <p>Draw a path on a color to connect all sightings in chronological order.</p>
            <p>Click and drag unknowns to cleared or suspects.</p>
            <p>Clear sightings to remove all markers of crewmates.</p>
            <p>Clear paths to remove all lines between crewmates.</p>


          </Modal.Body>
        </Modal>
      </div>

    );
  }

}

export default App;
