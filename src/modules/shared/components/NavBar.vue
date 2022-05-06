<template>
    
    <div>
        <!-- <router-link :to="{ name:'home'}">Home</router-link>
        <router-link :to="{ name:'brawl-starts-id', params: { id: 10 } }">Brawl</router-link>
        <router-link :to="{ name:'about'}">About</router-link> -->
        <CustomLink 
            v-for="link in links" :key="link.to"
            :link=" link"
        />
    </div>

</template>
<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
    data() {
        return {
            links: [
                { to: '/', name: 'BrawlStart'},
                { to: '/10', name: 'Por ID'},
                { to: '/about', name: 'About'},
                { to: 'https://google.com', name: 'Google'}
                
            ]
        }
    },

    components: {
        CustomLink: defineAsyncComponent(() => import("@/modules/shared/components/CustomLink.vue"))
    }
}
</script>
<style scoped>
    div {
        padding: 0 30px;
    }

    div a {
        font-weight: bold;
        color: #2c3e50;
        margin: 0 10px;
    }

    /* a.router-link-exact-active {
        color: #42b983;
    } */
</style>