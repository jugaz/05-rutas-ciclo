<template>
    <h1> Friends:  <span> #{{ id }}</span></h1>
    <div v-if="friends">
        <img :src="friends.url" :alt="friends.name">
    </div>
</template>
<script>
export default {
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            // id: null
            friends: null
        }
    },



    created() {

        // const { id } =  this.$route.params
        //this.id = id
        this.getFriends()
    },
    methods: {
        async getFriends() {
            try {
                const friends = await fetch(`https://jugaz.github.io/series-tv-api/json/friends/${ this.id }.json`)
                .then( r => r.json())
                console.log('friends',friends)
                this.friends = friends
            }
            catch (error) {
                this.$router.push("/home") 
                console.log('No hay nada que hacer aquí')
                
            }
           

            
            
        }
    },
    watch: {
        id() {
            this.getFriends()
        }
    }

}
</script>