import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		listTeam: []
	},
	mutations: {
		setName(state, [index, name]){
			state.listTeam[index].name = name;

			setSession(state);
		},
		setTeamName(state, [indexTeam, indexUser, name]){
			this.state.listTeam[indexTeam].team[indexUser] = name;

			setSession(state);
		},
		addUser(state, index){
			state.listTeam[index].team.push("");

			setSession(state);
		},
		delUser(state, indexTeam){
			let indexUser = state.listTeam[indexTeam].team.length - 1;
			state.listTeam[indexTeam].team.splice(indexUser, 1);

			setSession(state);
		},
		addTeam(state){
			state.listTeam.push({ name: "", team : [""], balls: 0 });

			setSession(state);
		},
		delTeam(state, index){
			state.listTeam.splice(index, 1);

			setSession(state);
		},
		setList(state, list){
			state.listTeam = list;
		},
		addBall(state, [index, count]){
			state.listTeam[index].balls += count;

			setSession(state);
		}

		
	},
	getters:{
		allTeams(state){
			return state.listTeam;
		}
	}
});

function setSession(state){
	let list = state.listTeam;
	list = JSON.stringify(list);
	sessionStorage.setItem("listTeam", list);
}