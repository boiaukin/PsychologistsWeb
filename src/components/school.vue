<template>
    <div class="school_section">
        <div class="school">
            <h2>{{user_input_type}}</h2>
            <h4>心理輔導中心</h4>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed:{
        ...mapState(['user_input_type'])
    }
}
</script>

<style scoped>
.school_section{
    width: 100%;
    height: 294px;
    background-color: #AB8F72;
    padding: 59px 58.5px 59px 58.5px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.school{
    width: 1330px;
    height: 176px;
    border: 5px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
h2{
    font-size: 56.25px;
    color: #fff;
}
h4{
    font-size: 50px;
    color: #fff;
}
</style>