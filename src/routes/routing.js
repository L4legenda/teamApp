import VueRouter from 'vue-router';

import Welcome from '../components/Welcome.vue'
import Board from '../components/Board.vue'
import CreateTeam from '../components/CreateTeam.vue'

const routes = [
	{ path : "/", component : Welcome},
	{ path : "/board", component : Board},
	{ path : "/createteam", component : CreateTeam}
];

export default new VueRouter({
	mode: "history",
	routes
})
