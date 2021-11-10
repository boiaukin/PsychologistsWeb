<template>
    <div class="school_section">
        <div class="school">
            <h2>心理輔導中心</h2>
            <h4>{{user_input_type}}</h4>
            <div class="school-link">
                <div class="link">
                    <div >
                        <a :href="getLink?.link">前往</a>
                    </div>
                    
                    
                </div>
            
            
            </div>
        </div>
    
    </div>

</template>

<script>
import {mapState} from 'vuex'


export default {
    computed:{
        ...mapState(['user_input_type','Psychologists_data']),
    getLink(){
        let school = this.Psychologists_data.find((item)=>{
            return item.school === this.user_input_type
        })
        return school
    }
        
    }
}
</script>

<style scoped>
.school_section{
    width: 100%;
    height: 294px;
    background-color: #AB8F72;
    /* padding: 24px 32px 24px 32px; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.school{
    width: 1383px;
    height: 167px;
    border: 3px solid #fff;
    padding: 24px 36px 24px 36px;
    flex-direction: column;
    position: relative;
}
h2{
    font-size: 36px;
    color: #fff;
}
h4{
    font-size: 48px;
    color: #fff;
}
.school-link{
    position: absolute;
    right: 36px;
    bottom: 24px;
}
.link{
    width: 98px;
    height: 53px;
    padding: 12px 25px 12px 25px;
    border: 1px solid #fff;
    border-radius: 30px;

}
a{
    text-decoration: none;
    font-size: 23px;
    color: #fff;
}
</style>