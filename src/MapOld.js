import React from 'react';
import './App.css';
import PieMenu, { Slice } from 'react-pie-menu';





class Map extends React.Component {




  render() {
    return (
      
      <div style={{zIndex:'0'}}>       
          
        <span>
        </span>
        
      <img style={{ width: '98%', padding: '0px', margin: '0px', zIndex: '0' }} className="map" src={this.props.currentMap} draggable="false" onClick={(e)=>{this.clickLocation(e)}}>
      </img>

      
      <PieMenu
          radius='100px'
          centerRadius='15px'
          centerX={375}
          centerY={400}
        >
          {/* Contents */}
         
        </PieMenu>
      </div>

    );
  }

}

export default Map;
