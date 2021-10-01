<template>
    <navigation></navigation>
    <Psychologist_filter></Psychologist_filter>
    <school></school>
    <Psychologist_card></Psychologist_card>
    <footer_section></footer_section>
</template>

<script>
import navigation from '@/components/navigation-bar.vue'
import Psychologist_filter from '@/components/Psychologist_filter.vue'
import school from '@/components/school.vue'
import Psychologist_card from '@/components/Psychologist_card.vue'
import footer_section from "@/components/footer.vue"
export default {
    components:{
        navigation,
        Psychologist_filter,
        school,
        Psychologist_card,
        footer_section
    }

}
</script>

<style>

</style>