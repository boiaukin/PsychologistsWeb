<template>
    <navigation></navigation>
    <intro></intro>
    <About></About>
    <mind_filter></mind_filter>
    <footer_section></footer_section>
</template>

<script>
import navigation from "@/components/navigation-bar.vue"
import intro from "@/components/main.vue"
import About from "@/components/About.vue"
import mind_filter from "@/components/filter.vue"
import footer_section from "@/components/footer.vue"


export default {
    components:{
        navigation,intro,About,mind_filter,footer_section
        
    },
    
}
</script>

<style>

</style>