<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>



export default {
	name: 'App',
	created: function () {
		let list = sessionStorage.getItem("listTeam");
		if(list != null){
			let jsonList = JSON.parse( list );
			this.$store.commit('setList', jsonList);
		}
		
	}
}
</script>

<style>
body{
	margin: 0;
	padding: 0;
}
*{
	box-sizing: border-box;
}
</style>
