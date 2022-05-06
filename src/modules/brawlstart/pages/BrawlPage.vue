<template>
    <h1> Brawl:  <span> #{{ id }}</span></h1>

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
        }
    },



    created() {

       const { id } =  this.$route.params
    //    this.id = id
    }
}
</script>