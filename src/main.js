import App from './App.svelte';
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/api'

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;