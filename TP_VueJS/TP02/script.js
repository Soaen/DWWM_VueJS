Vue.createApp({
    setup() {
        const prenom = Vue.ref('Sylvain')
        return(
            prenom
        )
    }
}).mount('#app')