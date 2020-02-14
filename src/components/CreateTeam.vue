<template>
  <div class="container pt-5 pb-5">
    <div class="row">
      <div class="col-3 p-3 border-light" v-for="(team, index) in listTeams" :key="index">
        <div class="row p-2">
          <input 
            type="text" 
            placeholder="Название команды" 
            v-bind:value="team.name"
            v-on:input="setName(index, $event.target.value)"
            class="mb-2 col-12" 
          >
          
          <input 
          class="col-12" 
            type="text" 
            :placeholder="'Участник - ' + (i + 1)" 
            v-for="(user, i) in team.team" 
            :key="i"
            v-bind:value="team.team[i]"
            v-on:input="setNameTeam(index, i, $event.target.value)"
            >
          
        </div>
        
        <div class="row pl-2 pr-2">
          <button class="col-5 btn btn-info" @click="addUser(index)">Добавить</button>
          <button
            class="offset-2 col-5 btn btn-danger"
            @click="delUser(index)"
            v-if="team.team.length != 0"
           >
            Удалить
          </button>
        </div>
        <button class="col-10 offset-1 btn btn-danger m-3" @click="delTeam(index)">Удалить команду</button>
        
      </div>
      <div class="col-3 p-3 mt-2">
        <button class="btn btn-success btn-lg col-12" @click="addTeam()">Добавить команду</button>
      </div>
      <div class="col-12 p-3 text-right">
        <router-link 
          v-if="listTeams.length != 0" 
          class="btn btn-primary offset-10 col-2" 
          to="/board">
            Далее
        </router-link>
      </div>
    </div>
    
    
  </div>
</template>

<script>
export default {
  methods:{
    addTeam(){
      this.$store.commit('addTeam');
    },
    delTeam(index){
      this.$store.commit('delTeam', index);
    },
    setName(index, name){
      this.$store.commit('setName', [index, name]);
    },
    setNameTeam(indexTeam, indexUser, name){
      this.$store.commit('setTeamName', [indexTeam, indexUser, name]);
    },
    addUser(index){
      this.$store.commit('addUser', index);
    },
    delUser(indexTeam){
      this.$store.commit('delUser', indexTeam);
    },
    
  },
  computed : {
    listTeams(){
      return this.$store.getters.allTeams;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
