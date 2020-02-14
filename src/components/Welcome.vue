<template>
	<div class="welcome">
		
		<div class="display"></div>

		<div class="content">
			<h1>TeamApp</h1>
			<p>Приложение для проведения соревнований.</p>
			<router-link class="btn btn-primary " to="/createteam">Войти</router-link>
		</div>

		<img src="../assets/team.png" class="team" alt="">

	</div>
</template>

<script>
export default {
}
</script>

<style>
.display{
	position: absolute;
	right: 0;
	top: 0;

	background: #eaeaea;

	height: 150vh;
	width: 700px;
	transform: rotateZ(10deg) translate(50px, -50px);
}
.content{
	position: absolute;
	right: 150px;
	top: 50%;
	transform: translateY(-50%);
	width: 300px;
	text-align: center;
	font-family: Roboto, Arial, sans-serif;
}
.welcome{
	position: relative;
	width: 100%;
	height: 100vh;
	overflow: hidden;
	background: #c2d8f0;
}
.team{
	position: absolute;
	left: 15%;
	top: 50%;
	transform: translate(-15%, -50%);
	width: 400px;
	opacity: 0.9;
}
</style>
