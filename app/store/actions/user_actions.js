import {
	SIGN_UP,
	SIGN_IN
} from '../types'

import axios from 'axios'
import { SIGNUP, SIGNIN, FIREBASEURL, REFRESH } from '../../utils/misc'

export function signUp(data) {

	const request = axios({
		method: 'POST',
		url: SIGNUP,
		data: {
			email: data.email,
			password: data.password,
			returnSecureToken: true
		},
		header: {
			'Content-Type': 'aplication/json'
		}
	}).then(response => {
		console.log(response.data)
		return response.data
	}).catch(e => {
		return false
	})

	return {
		type: SIGN_UP,
		payload: request
	}
}

export function signIn(data) {
	console.log('dupa')
	console.log(data)
	const request = axios({
		method: 'POST',
		url: SIGNIN,
		data: {
			email: data.email,
			password: data.password,
			returnSecureToken: true
		},
		header: {
			'Content-Type': 'aplication/json'
		}
	}).then(response => {
		console.log(response.data)
		return response.data
	}).catch(e => {
		return false
	})

	return {
		type: SIGN_UP,
		payload: request
	}
}