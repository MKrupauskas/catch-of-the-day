import Rebase from 're-base'
import firebase from 'firebase'

import env from './env'

const { apiKey, authDomain, databaseURL } = env

const firebaseApp = firebase.initializeApp({
	apiKey,
	authDomain,
	databaseURL
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base
