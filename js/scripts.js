const app=Vue.createApp({
data(){
    return {
      
     bulbIsOn: false,
    };
},
methods:{
  switchBulb(){
    this.bulbIsOn=!this.bulbIsOn
  }
}

})


app.mount('#app')