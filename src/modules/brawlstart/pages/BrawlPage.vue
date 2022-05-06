<template>
    <h1> Brawl:  <span> #{{ id }}</span></h1>
    <div v-if="brawl">
        <img :src="brawl.url" :alt="brawl.name">
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
            brawl: null
        }
    },



    created() {

        // const { id } =  this.$route.params
        //this.id = id
        this.getBrawl()
    },
    methods: {
        async getBrawl() {
            try {
                const brawl = await fetch(`https://jugaz.github.io/brawl-start-api/json/${ this.id }.json`)
                .then( r => r.json())
                console.log('brawl',brawl)
                this.brawl = brawl
            }
            catch (error) {
                this.$router.push("/home") 
                console.log('No hay nada que hacer aquí')
                
            }
           

            
            
        }
    },
    watch: {
        id() {
            this.getBrawl()
        }
    }

}
</script>