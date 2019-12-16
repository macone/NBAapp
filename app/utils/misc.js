import {
	AsyncStorage
} from 'react-native'

import firebase from '../google-services.json'

export const FIREBASEURL = 'https://rn-nba-app-db.firebaseio.com';

export const API_KEY = 'AIzaSyAZ2l1NOs9ss_EicqpqYsuBynaml90i6r8';

export const SIGNUP = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;

export const SIGNIN = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;

export const REFRESH = '';

export const setTokens = (values,cb) => {
	const dateNow = new Date();
	const expiration = dateNow.getTime() + (3600 * 1000);
	console.log('set')
	console.log(firebase)
	AsyncStorage.multiSet([
		['@nba_app@token',values.token],
		['@nba_app@refreshToken',values.refToken],
		['@nba_app@expireToken',expiration.toString()],
		['@nba_app@uid',values.uid]
	]).then (response => {
		cb();
	})
}