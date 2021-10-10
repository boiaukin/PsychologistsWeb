<template>
    
    <router-view></router-view>
    
</template>
<script>


export default {
  
    
    mounted(){
      this.$store.dispatch('get_school_data')  
      this.$store.dispatch('all_school')  
      this.$store.dispatch('Psychologists_data')  

    }
    
    

}
</script>

<style >
*{
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  /* border: 1px solid #000; */
}
html{
    scroll-behavior: smooth;
}



</style>
