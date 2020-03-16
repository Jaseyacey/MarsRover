import React from "react";
import { render } from "react-dom";
import "./index.css";
import Mars from "./mars";

class App extends React.Component {
    state = {
        commands: '',
        commandsToExecute: '',
        execute: false,
        startPostion: '00N'
    };

    addCommand = (e) => {
        this.setState({
            commands: this.state.commands + e.target.value
        })
    };

    runSample = (e) => {
        this.setState({
            commands: this.state.commands + e.target.value
        })
    };

    execute = () => {
        let startPostion = this.startInput.value;
        if (/^[0-4][0-4][NEWS]$/. test(startPostion)) {
            this.setState({
                execute: true,
                commandsToExecute: this.state.commands,
                startPostion
            });
        } else {
            alert('Invalid start position.')
        }
    }

};

clear = () => {
    this.setState({
        commands: '',
        execute: false,
        commandsToExecute: ''
    });
};

validateStartPosition = (e) => {
    e.taret.checkValidity();
};

stopExecute = () => {
    this.setState({
        execute: false
    });
};
// establishing rover position on surface
render() {
    let position = this.state.startPostion || '00N';
    position = position.split('').join;
    return (
        <div className={app}>
            <h1 className={'Rover App'}>Mars Rover in JS and React</h1>
            <a className={'source'} href={'https://github.com/jaseyacey/MarsRover'}
                title={'Code for MarsRover in JS and React'}>Source</a>
        </div>
        < div className={'control-panel'}>
            <div className={'start-position'}>
{/* // start position is 00N ie bottom left */}
                <Label
                    htmlFor="startPostion"
                    >
                        start position () 
                </Label>
                <input  type="text"
                        id = "startPostion"
                        maxLength={3}
                        required
                        pattern={'^[0-4][0-4][NEWS]$'}
                        defaultValue={'00N'}
                        onBlur={this.validateStartPosition}
                        ref={(elm) => {
                            this.startInput = elm
                        }}
            />
        </div>
        <div className='commands'>
            <button value='M' onClick={this.addCommand}>Move</button>
            <button value='L' onClick={this.addCommand}>Left</button>
            <button value='R' onClick={this.addCommand}>Right</button>
        </div>
        <div className='execution'>
            <button onClick={this.clear} className='secondary'>*</button>
            <input tpe="text" readOnly value={this.state.commands}/>
            <button className={'cta'} onClick={this.execute}>Execute</button>
        </div>
        <div className='samples'>
            <label>Sample:</label>
            <ul>
                <li>
                    <button value={'MMRMMLMMRM'} onClick={this.runSample}>MMRMMLMMRM</button>
                </li>
                <li>
                    <button value={'RMMMLMRMLM'} onClick={this.runSample}>RMMMLMRMLM</button>
                </li>
            </ul>
        </div>
        <Mars 
            size={5}
            position={position}
            commands={this.state.commandsToExecute}
            execute={this.state.execute}
            onDone={this.stopExecute}
        />
    </ div>
    );
};
