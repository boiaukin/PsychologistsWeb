<template>
    <nav>
        <div class="logoImg">
            <img class="logo" src="../assets/logo.png" alt="">
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
nav{
    width: 100%;
    height: 110px;
    background-color: #44220B;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
    position: fixed;
    z-index: 100;
}
.logoImg{
    width: 275px;
    height: 100px;  
    /* border: 1px solid #000; */
    
}
.logo{
    width: 100%;
    height: 100%;
}
</style>