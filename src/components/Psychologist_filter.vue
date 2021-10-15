<template>
    <div class="Psychologist-filter">
        <h2>找到適合你的心理師吧!</h2>
        <div class="Psychologist-filter-identify">
            <div class="tittle">
                <p>身份</p>
            <!-- {{identify}} -->
            </div>
            
                <div class="chips">
                    <div class="col-1">
                        <div class="chip-1 chip" :class="{border:action1}" @click="get_select_identify_1" >
                            <div class="icon-1">
                                <img src="@/assets/art.png" alt="">
                            </div>
                            <div class="name" >藝術治療師</div>
                        </div>
                        <div class="chip-2 chip" :class="{border:action2}" @click="get_select_identify_2">
                            <div class="icon-1">
                                <img src="@/assets/Social-worker.png" alt="">
                            </div>
                            <div class="name" >社工師</div>
                        </div>
                        <div class="chip-3 chip" :class="{border:action3}" @click="get_select_identify_3">
                            <div class="icon-1">
                                <img src="@/assets/Counseling-Psychologist.png" alt="">
                            </div>
                            <div class="name">諮商心理師</div>
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="chip-4 chip" :class="{border:action4}" @click="get_select_identify_4">
                            <div class="icon-1">
                                <img src="@/assets/Clinical-psychologist.png" alt="">
                            </div>
                            <div class="name">臨床心理師</div>
                        </div>
                        <div class="chip-5 chip" :class="{border:action5}" @click="get_select_identify_5">
                            <div class="icon-1">
                                <img src="@/assets/other.png" alt="">
                            </div>
                            <div class="name">其他輔導人員</div>
                        </div>
                    </div>
                </div>
            
        
        </div>
        <div class="Psychologist-filter-topic">
            <div class="tittle">
                <!-- {{topic}} -->
                <p>諮商議題</p>
            </div>
            <div class="chips">
                <div class="col-3">
                    <div class="chip-8 chip" :class="{border:action6}" @click="get_topic_identify_1">
                        <div class="icon-3">
                            <img src="@/assets/identify.png" alt="">
                        </div>
                        <div class="name">身分認同</div>
                        <div class="detail_Info_8"  >
                            <ul>
                                <li>性別議題</li>
                                <li>外籍生</li>
                                <li>特教生</li>
                                <li>多元文化</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="chip-9 chip" :class="{border:action7}" @click="get_topic_identify_2">
                        <div class="icon-4">
                            <img src="@/assets/Interpersonal-relationship.png" alt="">
                        </div>
                        <div class="name">人際關係</div>
                        <div class="detail_Info_9"  >
                            <ul>
                                <li>情感關係議題</li>
                                <li>人際關係議題</li>
                                <li>家庭關係議題</li>
                                <li>伴侶</li>
                                <li>家暴</li>
                                <li>性侵害</li>
                            </ul>
                        </div>
                    </div>
                    <div class="chip-10 chip" :class="{border:action8}" @click="get_topic_identify_3">
                        <div class="icon-3">
                            <img src="@/assets/Emotional-management.png" alt="">
                        </div>
                        <div class="name">情緒管理</div>
                        <div class="detail_Info_10"  >
                            <ul>
                                <li>情緒管理</li>
                                <li>悲傷失落與創傷調適</li>
                                <li>壓力調適</li>
                                <li>焦慮</li>
                            
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="chip-11 chip" :class="{border:action9}"  @click="get_topic_identify_4">
                        <div class="icon-3">
                            <img src="@/assets/Multiple-therapy.png" alt="">
                        </div>
                        <div class="name">多元療法</div>
                        <div class="detail_Info_11"  >
                            <ul>
                                <li>夢境解析</li>
                                <li>精神分析</li>
                                <li>完形取向</li>
                                <li>存在取向</li>
                                <li>卡牌/塔羅牌</li>
                                <li>表達性藝術</li>
                                <li>薩提爾家族治療</li>
                                <li>個人中心取向</li>
                            </ul>
                        </div>
                    </div>
                    <div class="chip-12 chip" :class="{border:action10}" @click="get_topic_identify_5">
                        <div class="icon-3">
                            <img src="@/assets/Career.png" alt="">
                        </div>
                        <div class="name">生涯探索</div>
                        <div class="detail_Info_12"  >
                            <ul>
                                <li>自我探索</li>
                                <li>生涯議題</li>
                    
                            
                            </ul>
                        </div>
                    </div>
                    <div class="chip-13 chip" :class="{border:action11}"  @click="get_topic_identify_6">
                        <div class="icon-3">
                            <img src="@/assets/diary.png" alt="">
                        </div>
                        <div class="name">日常生活</div>
                        <div class="detail_Info_13"  >
                            <ul>
                                <li>時間管理</li>
                                <li>生活適應</li>
                                <li>課業學習</li>
                                <li>睡眠問題</li>
                                <li>飲食問題</li>
                                <li>成癮問題</li>
                                <li>身心症狀</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>

        <div class="select-sumbit" @click="aa">
            <a href="#cards">
                <button class="submit" >開始搜尋!</button>
            </a>
            
        </div>
        
    </div>

</template>

<script>
import { mapState,mapGetters } from 'vuex'
export default {
    data(){
        return{
            action1: false,
            action2: false,
            action3: false,
            action4: false,
            action5: false,
            action6: false,
            action7: false,
            action8: false,
            action9: false,
            action10: false,
            action11: false,

        }

    },
    computed:{
        ...mapState(['identify','topic','final_filter_array','filter_array']),
        ...mapGetters(['final_filter_array'])
    },
    mounted(){
      this.$store.commit('clean_input')  
    },
    methods:{
        get_select_identify_1(){
            console.log("aas")
            this.$store.commit('identify_select',"藝術治療師")

            if(this.action1==false){
                this.action1=true
            }else{
                this.action1=false
            }
        },
        get_select_identify_2(){
            
            this.$store.commit('identify_select',"社工師")
            if(this.action2==false){
                this.action2=true
            }else{
                this.action2=false
            }
        },
        get_select_identify_3(){
            
            this.$store.commit('identify_select',"諮商心理師")
            if(this.action3==false){
                this.action3=true
            }else{
                this.action3=false
            }
        },
        get_select_identify_4(){
            
            this.$store.commit('identify_select',"臨床心理師")
             if(this.action4==false){
                this.action4=true
            }else{
                this.action4=false
            }
        },
        get_select_identify_5(){
            
            this.$store.commit('identify_select',"其他輔導人員")
            if(this.action5==false){
                this.action5=true
            }else{
                this.action5=false
            }
        },
        aa(){   
            this.$store.commit('final_filter')
        
        },
        get_topic_identify_1(){
            this.$store.commit('topic_select',["性別議題","外籍生","特教生","多元文化"])
             if(this.action6==false){
                this.action6=true
            }else{
                this.action6=false
            }
            
        },
        get_topic_identify_2(){
            this.$store.commit('topic_select',["情感關係議題","人際關係議題","家庭關係議題","伴侶","家暴","性侵害"])
            if(this.action7==false){
                this.action7=true
            }else{
                this.action7=false
            }
             
        },
        get_topic_identify_3(){
            this.$store.commit('topic_select',["情緒管理","悲傷失落與創傷調適","壓力調適","焦慮"])
            if(this.action8==false){
                this.action8=true
            }else{
                this.action8=false
            }
        },
        get_topic_identify_4(){
            this.$store.commit('topic_select',["夢境解析","精神分析","完形取向","存在取向","卡牌/塔羅牌","表達性藝術","薩提爾家族治療","個人中心取向"])
            if(this.action9==false){
                this.action9=true
            }else{
                this.action9=false
            }
        },
        get_topic_identify_5(){
            this.$store.commit('topic_select',["自我探索","生涯議題"])
             if(this.action10==false){
                this.action10=true
            }else{
                this.action10=false
            }
        },
        get_topic_identify_6(){
            this.$store.commit('topic_select',["時間管理","生活適應","課業學習","睡眠問題","飲食問題","成癮問題","身心症狀"])
            if(this.action11==false){
                this.action11=true
            }else{
                this.action11=false
            }
        },

        get_topic_identify_all(){
            this.$store.commit("topic_select_all")
        }
    }
}
</script>

<style scoped>
button{
    cursor: pointer;
}
.Psychologist-filter{
    width: 100%;
    height: 1481px;
    background-color: #FFF2DC;
    padding-top: 230px;
}
h2{
    font-size: 55px;
    text-align: center;
    color: #845A3E;
}
p{
    font-size: 35px;
    color: #845A3E;
}

li{
    font-size: 22px;
    margin: 10px;
}
.icon-1{
    width: 31.68px;
    height: 25.08px;
}
.icon-2{
    width: 40px;
    height: 40px;
}
.icon-3{
    width: 28px;
    height: 28px;
}
.icon-4{
    width: 31px;
    height: 25px;
}
img{
    width: 100%;
    height: 100%;
}
/* Psychologist-filter-identify */

.Psychologist-filter-identify{
    width: 1115px;
    height: 229px;
    margin-top: 134px;
    margin-left: 212px;
    display: flex;
    background: rgba(211, 185, 185, 0.25);
    padding: 42px 50px 42px 52px;
    position: relative;
}
.Psychologist-filter-identify::before{
    content: "";
    display: block;
    width: 133px;
    height: 5px;
    background-color: #fff;
    transform: rotate(90deg);
    position: absolute;
    left: 160px;
    top: 110px;
}


.tittle{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.Psychologist-filter-topic{
    padding: 47.81px 0px 47.81px 0px;
    flex: 2;
    position: relative;
}
.Psychologist-filter-topic::before{
    content: "";
    display: block;
    width: 133px;
    height: 5px;
    background-color: #fff;
    transform: rotate(90deg);
    position: absolute;
    left: 160px;
    top: 120px;
}

.chips{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 4;
}

.col-1{
    display: flex;
}
.col-2{
    display: flex;
    margin-top: 10px;
}
.col-3{
    display: flex;
}
.col-4{
    display: flex;
    padding-left: 100px;
    margin-top: 11px;
   
}

.chip{
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 38px;
    margin: 0px 6px 0px 6px;
    
}
.name{
    font-weight: 200;
    font-size: 22px;
    color: #694B36;
    margin-left: 11px;
}

/* chip */
.chip-1{
    width: 202.68px;
    height: 67px;
}
.chip-2{
    width: 161px;
    height: 70px;
}
.chip-3{
    width: 202px;
    height: 67px;
}
.chip-4{
    width: 201px;
    height: 68px;
}
.chip-5{
    width: 230px;
    height: 67px;
}
.chip-6,.chip-7{
    width: 145px;
    height: 67px;
    
}
.chip-8,.chip-9,.chip-10,.chip-11,.chip-12,.chip-13{
    width: 181px;
    height: 68px;
    position: relative;

}

/* detail-info */
.detail_Info_8{
    width: 172px;
    height: 194px;
    justify-content: center;
    align-items: center;
    position: absolute;
    padding: 20px 20px;
    background: rgba(92, 56, 31, 0.7);
    border-radius: 10px;
    color: #fff;
    z-index: 10;
    top: 80px;
    
    display: none;
    
    
}
.detail_Info_9{
    width:  216px;
    height: 276px;
    justify-content: center;
    align-items: center;
    position: absolute;
   padding: 20px 30px;
    background: rgba(92, 56, 31, 0.7);
    border-radius: 10px;
    color: #fff;
    z-index: 10;
    top: 80px;
    display: none;
}
.detail_Info_10{
    width: 282px;
    height: 194px;
    justify-content: center;
    align-items: center;
    position: absolute;
   padding: 20px 30px;
    background: rgba(92, 56, 31, 0.7);
    border-radius: 10px;
    color: #fff;
    z-index: 10;
    top: 80px;
    display: none;
}
.detail_Info_11{
    width: 238px;
    height: 348px;
    justify-content: center;
    align-items: center;
    position: absolute;
    padding: 20px 30px;
    background: rgba(92, 56, 31, 0.7);
    border-radius: 10px;
    color: #fff;
    z-index: 10;
    top: 80px;
    display: none;
}

.detail_Info_12{
    width: 173px;
    height: 112px;
    justify-content: center;
    align-items: center;
    position: absolute;
    padding: 20px 30px;
    background: rgba(92, 56, 31, 0.7);
    border-radius: 10px;
    color: #fff;
    z-index: 10;
    top: 80px;
    display: none;
}
.detail_Info_13{
    width: 172px;
    height: 317px;
    justify-content: center;
    align-items: center;
    position: absolute;
    padding: 20px 30px;
    background: rgba(92, 56, 31, 0.7);
    border-radius: 10px;
    color: #fff;
    z-index: 10;
    top: 80px;
    display: none;
}

/* hover */
.chip-8:hover >.detail_Info_8 {

   display: flex;
    
}
.chip-9:hover >.detail_Info_9 {
    display: flex;
}
.chip-10:hover >.detail_Info_10 {
    display: flex;
}
.chip-11:hover >.detail_Info_11 {
    display: flex;
}
.chip-12:hover >.detail_Info_12 {
    display: flex;
}
.chip-13:hover >.detail_Info_13 {
    display: flex;
}




.Psychologist-filter-gender::before{
    content: "";
    display: block;
    width: 84px;
    height: 5px;
    background-color: #fff;
    transform: rotate(90deg);
    position: absolute;
    left: 160px;
    top: 70px;
}
.Psychologist-filter-topic{
    width: 1166px;
    height: 243px;
    margin-left: 86px;
    margin-top: 30px;
    background: rgba(211, 185, 185, 0.25);
    display: flex;
}
input{
    border: 1px solid #000;
}
.select-sumbit{
    width: 100%;
    height: 85px;
    margin-top: 198px;
    display: flex;
    justify-content: center;    
    align-items: center;
    
}
.submit{
    width: 220px;
    height: 85px;
    border: none;
    background: rgba(220, 148, 148, 0.8);
    box-shadow: 3px 9px 8px rgba(0, 0, 0, 0.25);
    border-radius: 40px;
    font-size: 28px;
    color: #fff;
}
.border{
    border: 3px solid #694B36;
    background-color: #fff;
}
</style>