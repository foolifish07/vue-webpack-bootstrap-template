import Vue from 'vue'
import App from './components/App.vue'

Vue.config.debug = true;

new Vue({
	el: 'body',
	data(){
		return {
			msg : 'ssssss'
		}
	},
	components: {
		App
	}
})