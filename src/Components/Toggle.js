import React from 'react';
import '../StyleSheets/Toggle.css'
class Toggle extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			toggle: false
		};
		
	  this.toggleState = this.toggleState.bind(this);
      
	}

	toggleState() {
		this.setState({
			toggle: !this.state.toggle
        });
        if(!this.state.toggle){
        document.getElementById('natdot').style.visibility='hidden';
        document.getElementById('legdot').style.visibility='visible';
        }
        else{
            document.getElementById('natdot').style.visibility='visible';
            document.getElementById('legdot').style.visibility='hidden';
        }
	}

	render() {
		return (
			<div className="switch-field">
				<input
					type="radio"
					id="switch_left"
					name="switchToggle"
					value="legal"
					onChange={this.toggleState}
					checked={!this.state.toggle}
				/>
				<label htmlFor="switch_left"><span id="natdot" className="dot" >&#10003;</span>مشترک حقوقی هستم</label>

				<input
					type="radio"
					id="switch_right"
					name="switchToggle"
					value="naural"
					onChange={this.toggleState}
					checked={this.state.toggle}
				/>
				<label  htmlFor="switch_right"><span id="legdot" className="dot" style={{visibility:'hidden'}}>&#10003;</span>مشترک حقیقی هستم</label>
			</div>
		);
	}
}

export default Toggle;
