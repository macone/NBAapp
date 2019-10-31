import React ,{Component }from 'react';
import {Text, View, Image } from 'react-native';
import Input from '../../utils/forms/input'

class AuthForm extends Component {

	state = {
		type:'Login',
		action:'Login',
		actionMode:'i want to register',
		hasErrors:false,
		form:{
			email:{
				value:'',
				valid:false,
				type:'textinput',
				rules:{
					isRequired:true,
					isEmail:true
				}
			},
			password:{
				value:'',
				valid:false,
				type:'textinput',
				rules:{
					isRequired:true,
					minLength:6
				}
			},
			confirmPassword:{
				value:'',
				valid:false,
				type:'textinput',
				rules:{
					confirmPass:'password',
				}
			},
		}
	}

	render(){
		return (
			<View>
				<Input 
					placeholder="Enter email"
					placeholderTextColor="#cecece"
					type={this.state.form.email.type}
					value={this.state.form.email.value}
					autoCapitalize={'none'}
					keyboardType={'email-address'}
					// overrideStyle=style
				/>
			</View>

		)
	}

}

export default AuthForm;