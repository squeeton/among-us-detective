import React from 'react';
import PieMenu, { Slice } from 'react-pie-menu';

import './App.css';
import map from './polus.png';

const MOUSE_LEFT_CODE = 1;

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
        };
    }

    componentDidMount() {
        const ctx = this.canvas.getContext('2d');
        const img = new Image();
        img.onload = () => {
            ctx.drawImage(img, -50, 0, 1920, 1080);
        };
        img.src = map;
    }

    onContextMenu = e => {
        e.preventDefault();
    }

    onMouseDown = e => {
        if (e.nativeEvent.which === MOUSE_LEFT_CODE) {
            console.log('client:', e.clientX,e.clientY)
            console.log('page:', e.pageX,e.pageY)
            console.log('screen:', e.screenX,e.screenY)

            this.props.addSighting('red',e.pageX,e.pageY);
            this.setState({
                mouseX: `${e.clientX }px`,
                mouseY: `${e.clientY }px`,
                showMenu: true,
            });
        }
    }

    onMouseUp = e => {
        if (e.nativeEvent.which === MOUSE_LEFT_CODE) {
            this.setState({ showMenu: false });
            e.preventDefault();
        }
    }


    itemSelected = (x) => {
        console.log('select successful', x)
    }

    render() {
        const { showMenu, mouseX, mouseY } = this.state;
        return (
            <div
                role="presentation"
                className="App"
                onMouseDown={this.onMouseDown}
                onMouseUp={this.onMouseUp}
                onContextMenu={this.onContextMenu}
            >
                <canvas width="1920" height="1080" ref={ref => { this.canvas = ref; }} />
                {showMenu && (
                    <PieMenu
                        radius="100px"
                        centerRadius="15px"
                        centerX={mouseX}
                        centerY={mouseY}
                    >
                        <Slice onSelect={this.itemSelected}>
                            <span className="dot yellow"></span>
                        </Slice>
                        <Slice onSelect={this.itemSelected}>
                            <span className="dot yellow"></span>
                        </Slice>
                        <Slice onSelect={this.itemSelected}>
                            <span className="dot yellow"></span>
                        </Slice>
                        <Slice onSelect={this.itemSelected}>
                            <span className="dot yellow"></span>
                        </Slice>
                        <Slice onSelect={this.itemSelected}>
                            <span className="dot yellow"></span>
                        </Slice>
                        <Slice onSelect={this.itemSelected}>
                            <span className="dot yellow"></span>
                        </Slice>
                        <Slice onSelect={this.itemSelected}>
                            <span className="dot yellow"></span>
                        </Slice>
                        <Slice onSelect={this.itemSelected}>
                            <span className="dot yellow"></span>
                        </Slice>
                    </PieMenu>
                )}
            </div>
        );
    }
}