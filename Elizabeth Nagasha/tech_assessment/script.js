const appInstance = {
  methods: {
      alert(){
        alert('submitted')
      },
    }
  }

Vue.createApp(appInstance).mount('#app')