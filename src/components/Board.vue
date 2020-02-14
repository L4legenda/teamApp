<template>
  <div class=" board" >
    <div class="container pt-5 pb-5">
      <div class="row">
        <div class="col-9">
          <div class="row">
            <div class="teams col-3 p-2 text-center pb-4" v-for="(team, index) in listTeams" :key="index">
              <h3 class="name">{{ team.name }}</h3>
              <p class="balls">{{ team.balls }} {{ ballsName(index) }}</p>
            </div>
          </div>
          

        </div>
        <aside class="col-3 pt-3 pb-3">
          <select v-model="chengeTeam" class="col-10 offset-1">
            <option 
              v-for="(team, index) in listTeams" 
              :key="index"
              :value="index"
            >
              {{ team.name }}
            </option>
          </select>
          <input type="text" v-model="inputCount" placeholder="Баллы" class="col-10 offset-1 mt-1">
          <button @click="addBalls()" class="btn btn-info col-10 offset-1 mt-1">Добавить</button>
          <button @click="delBalls()" class="btn btn-danger col-10 offset-1 mt-1">Удалить</button>
        </aside>
        
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      chengeTeam : 0,
      inputCount : "",
    }
  },
  methods:{
    ballsName : function(index) {
      if (this.listTeams[index].balls < 10) return "балла";
      else return "баллов"
    },
    addBalls : function() {
      this.$store.commit('addBall', [this.chengeTeam, this.count]);
    },
    delBalls : function() {
      let team = this.chengeTeam;
      this.listTeams[team].balls -= this.count;
    },
    isNum : function(str) {
      return /[0-9]/.test(str)
    }
  },
  computed : {
    count : function(){
      if (/[0-9]/.test(this.inputCount)) return parseInt(this.inputCount)
      else{
        alert("Неправильное число")
        return 0;
      }
    },
    listTeams(){
      return this.$store.getters.allTeams
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
aside{
  border-left: 1px solid #b9b9b9;
}
.board{
  height: 100vh;
  overflow-x: hidden;
  position: relative;
}
</style>
