<template>
    <div class="Psychologist_card_info" id="cards">
    
        <div class="Psychologist_cards">
            
            <div class="Psychologist_card" v-for="(data,index) in filter_array" :key="index">
                <div class="college-icon">
                    <img src="@/assets/college.png" alt="">
                </div>
                <div class="unit">
                    {{data.unit}}
                </div>
                <div class="Psychologist_card_photo">
                    <img src="@/assets/female_photo.png" alt="">
                </div>
                
                <div class="name">{{data.name}}</div>
                <div class="job">{{data.identify}}</div>
                <p class="top-line"> - - - - 專長 - - - - </p>
                <div class="Psychologist_card_topic"  >
                    <div class="topic" v-for="(topic,index) in data.topics" :key="index">
                        {{topic }}
                    </div>
                
                </div>
                <p class="bottom-line"> - - - - - - - - - - - - </p>
            </div>
        
        </div>
    </div>
    <div class="back" @click="backtohome">
        <a href="">
            重新選擇學校
            <img class="back-img" src="@/assets/back.png" alt=""><br>
            back to landing page
        </a>
    </div>
</template>

<script>
import {  mapState } from 'vuex'
export default {
    mounted(){
        this.$store.commit('final_filter')
        window.scrollTo(0,0);
    },
    
    computed:{
        ...mapState(['filter_array']),
    
    },
    methods:{
        backtohome(){
            this.$router.push({path:'/'})
        }

    }

}
</script>

<style scoped>

.Psychologist_card_info{
    width: 100%;
    background-color: #EDD0B2;
    padding-top: 165px;
    padding-left: 84px;
}
.Psychologist_cards{
    width: 1320px;
    display: flex;
    flex-wrap: wrap;
    position: relative;
}
.Psychologist_card{
    width: 386px;
    margin-right: 50px;
    margin-bottom: 56px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    align-items: center;
    position: relative;
    filter: drop-shadow(0px 4px 30px #D7C3C2);
}
.Psychologist_card_photo{
    width: 162px;
    height: 162px;
    margin-top: 24px;
}


img{
    width: 100%;
    height: 100%;
}
.college-icon{
    width: 84px;
    height: 68px;
    position: absolute;
    right: 6px;
    top: 10px;
    
    

}

.unit{
    position: absolute;
    width: 127px;
    text-align: center;
    padding-top: 23px;
    padding-bottom: 23px;
    font-size: 18px;
    background-color: #fff ;
    border: 2px solid rgba(220, 198, 122, 0.75);
    color: #C19A70;
    border-radius: 10px;
    right: -40px;
    top: 90px;
    opacity: 1;
    display: none;
   
    line-height: 30px;
    
}
.college-icon:hover + .unit  {
    display: block;
}
.name{
    margin-top: 18px;
    color: #9E5F3F;
    font-size: 36px;
}
.job{
    margin: 15px;
    color: #6B6565;
    font-size: 24px;
}
p{
    color: #DC9494;
    font-size: 24px;

}
.bottom-line{
    margin-bottom: 130px;
}
.Psychologist_card_topic{
    margin: 21px 0px 0px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.topic{
    line-height: 50px;
    color: #694B36;
    font-size: 18px;
}
.back{
    width: 100%;
    height: 445px;
    padding-top: 112px;
    background-color: #EDD0B2;
    padding-bottom: 235px;;
    display: flex;
    justify-content: center;    
    align-items: center;
}

a{
    text-decoration:none;
    font-size: 30px;
    color: #fff;
}
a:hover{
    color: #44220B;
}
.back-img{
    width: 40px;
    height: 22px;
}

</style>