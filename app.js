const app = Vue.createApp({
    data(){
        return{
            firstname:"promise",
            lastname : "okafor",
            email:"okaform11@gmail.com",
            gender:"male",
            picture:"https://randomuser.me/api/portraits/men/10.jpg"
        }
    },
    methods:{
        async getUser(){
            const res = await  fetch('https://randomuser.me/api/')
            const { results } = await res.json()
            let data = results[0]

            let n = Math.floor(Math.random() * 10)

            this.firstname = data.name.first
            this.lastname = data.name.last
            this.email = data.email
            this.gender = data.gender
            this.picture = data.picture.large
        }
    }

})

app.mount('#app');