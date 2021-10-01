<template>
    
    <div class="filter">
        <img class="background-img" src="../assets/content2.png" alt="">
        <div class="tittle">
            <h3>查查附近的校園心輔資源吧！</h3>
            <p>資訊以各校官網為主，如有勘誤請聯絡我們，我們會盡快改正！</p>
        </div>
        <div class="filter-section">
            <div class="region-filter">
                <select name="region" id="region" v-model="currRegion">
                    <option selected>選擇區域</option>
                    <option v-for="(regions,index) in setregion"  :key="index">{{regions}}</option>      
                </select>
                <div class="select-icon-1">
                    <img class="select-icon" src="@/assets/up.png" alt="">
                </div>
                
            </div>
            <div class="school-filter">
                <select name="school" id="school" v-model="currschool">
                    <option selected>選擇大學</option>
                    <option  v-for="(school,index) in setschool" :key="index" >{{school.school}}</option>
                </select>
                
                <div class="select-icon-2">
                    <img  src="@/assets/up.png" alt="">
                </div>
            </div>
            
        </div>
        <div class="user-input-filter">
            <p class="user-input-filter-p">或者...</p>
            <div class="input-filter">
                <input :class="{ user_input_style: isShow }" type="input" placeholder="請輸入大學名稱" v-model="user_typing">
                <div class="user-input-filter-icon">
                    <img class="search-icon" src="@/assets/search_icon.png" alt="">
                </div>
                <div class="select-chips" v-show="isShow">
                    <div class="chips"  v-for="(data,index) in filterschool" :key= index @click="click_chip_getData(data)">
                        <div class="select-chips-img">
                            <img src="@/assets/search_icon.png" alt="">
                        </div>
                        <div class="chip">
                            {{data}}

                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
        <div class="error_message">
                {{error_message}}
        </div>
        
        <button class="btn" @click="to_psuchologist_route">開始搜尋!</button>
        
        
    </div>
</template>

<script>

import { mapGetters,mapState } from 'vuex'
export default {
    data(){
        return{
            isShow: false,
            error_message:"",
            hide: false
        }
    },
    computed:{
        
        ...mapState(['all_school','user_input_school','user_input_type']),
        ...mapGetters(['setregion','setschool','filterschool','setschool']),
        currRegion:{
            get(){
                return this.$store.state.user_input_region
            },
            set(value){
                return this.$store.commit('getcurrRedion',value)
            }
        },
        currschool:{
            get(){
                return this.$store.state.user_input_school
            },
            set(value){
                return this.$store.commit('getcurrschool',value)
            }
        },
        user_typing:{
            get(){
                return this.$store.state.user_input_type
            },
            set(value){
                return this.$store.commit('get_user_typing',value)
            }
        },
    },
    watch:{
        user_typing(){
            this.$store.commit('filter_binding')
            this.detect_show()
        
        
        }
    },
    methods:{
        click_chip_getData(item){
            this.$store.commit('get_user_typing',item)
            this.isShow = false
        
        },
        detect_show(){
            if(this.user_input_type){
                this.isShow =  true
            }else{
                this.isShow =  false
            }
            
        },
        to_psuchologist_route(){
            this.$store.commit('Psychologists_filter_school')
            let a = this.all_school.find((res)=>{
                return res == this.user_input_type
            })
            if(a){
                this.$router.push({path:'/Psychologist-filter'})
                
            }else{
                this.isShow =  false,
                this.error_message = "請輸入校名"
            }
            
        }
        
    }
}
</script>

<style scoped>
.filter{
    width: 100%;
    height: 809px;
    display: flex;
    
    align-items: center;
    flex-direction: column;
    position: relative;
    
}
img{
    width: 100%;
    height: 100%;
    z-index: -1;
/* 修改一下position: absolute,會影響到下面的search-icon */
}
.background-img,.select-icon{
    position: absolute;
}
/* tittle */
.tittle{
    margin-top: 50px;
}
h3{
    font-size: 48px;
    color: #845A3E;
    text-align: center;
}
p{
    font-size: 16px;
    text-align: center;
    margin-top: 20px;
    color: #B50303;
}
/* filter-section */
.filter-section{
    display: flex;
    margin-top: 123px;
    width: 584px;
    position: relative;
}
.region-filter{
    height: 100%;
    width: 200px;
    position: relative;
}
.school-filter{
    height: 100%;
    width: 350px;
    margin-left: 34px;
    position: relative;
    z-index: 10;
}
select{
    width: 100%;
    height: 60px;
    color: #9E5F3F;
    font-size: 24px;
    padding-left: 40px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

}
.select-icon-1{
    width: 50px;
    height: 50px;
    position: absolute;
    right: 0px;
    top: 5px;
    z-index: 10;
}


.select-chips{
    width: 450px;
    background: #fff;
    margin-top: -10%;
    padding-top: 10px;
    padding-bottom: 24px;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 120px;
    border-top: 1px solid #C4C4C4;
    border-radius: 0px 0px 30px 30px;
    height: 250px;
    overflow-x: hidden;
    
}

.chip{
    width: 100%;
    background-color: #fff;
    height: 50px;
    margin: 0px;
    padding-left: 80px;
    display: flex;
    align-items: center;
  
}
.chip:hover{
    background-color: #C4C4C4;
    
}


.select-chips-img{
    position: absolute;
    width: 42px;
    height: 42px;
    margin-left: 23px;
    margin-top: 5px;
    
}

.select-icon-2{
    width: 50px;
    height: 50px;
    position: absolute;
    right: 0px;
    z-index: 10;
    top: 5px;
}
option{
    margin-left: 50px;
}


/* user-input-filter  */
.user-input-filter{
    margin-top: 24px;
    width: 556px;
    height: 80px;
    display: flex;
    

}
.user-input-filter-p{
    font-size: 24px;
    color: #9E5F3F;
}
.input-filter{
    height: 100%;
    width: 450px;
    position: relative;
    margin-left: 37px;

    
}
input{
    width: 100%;
    height: 100%;
    border-radius: 50px;
    font-size: 24px;
    border: none;
    padding: 0px 0px 0px 77px ;
    outline: none;

}
.user_input_style{
    border-radius: 50px 50px 0px 0px;
}
.user-input-filter-icon{
    width: 42px;
    height: 42px;
    position: absolute;
    top: 19px;
    left: 20px;
}
button{
    margin-top: 123px;
    width: 220px;
    height: 85px;
    background: rgba(220, 148, 148, 0.8);
    box-shadow: 3px 9px 8px rgba(0, 0, 0, 0.25);
    border-radius: 40px;
    border:  none;
    font-weight: 600;
    font-size: 28px;
    color: #fff;
    
    
}
.btn:hover{
    transform: scale(1.1);
    transition: 0.5s ;
}

/* error message */
.error_message{
    margin-top: 30px;
    color: #B91210;
    font-size: 24px;
}


/* anumate */

</style>