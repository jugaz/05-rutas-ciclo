<template>
    
    <div>
        <router-link :to="{ name:'home'}">Home</router-link>
        <router-link :to="{ name:'brawl-starts-id', params: { id: 10 } }">Brawl</router-link>
        <router-link :to="{ name:'about'}">About</router-link>

    </div>

</template>

<style scoped>
    div {
        padding: 0 30px;
    }

    div a {
        font-weight: bold;
        color: #2c3e50;
        margin: 0 10px;
    }

    a.router-link-exact-active {
        color: #42b983;
    }
</style>