import { createStore } from 'vuex'
import get_school_data from '../file/school.json'
import all_school from '../file/allSchool.json'
import Psychologists_data from '../file/Psychologists.json'


// https://schoolfile.blob.core.windows.net/uploadfile/school.json?sp=r&st=2021-08-31T15:39:54Z&se=2023-07-29T23:39:54Z&spr=https&sv=2020-08-04&sr=b&sig=tw%2FMh7qDl48N406Ab5hlMSrDCXjVi%2FalRIqw56j7sQc%3D
// school api

const psychologist_filter = {
  state: {
    
  },
  gatter: {},
  mutations:{},
  action: {}
}


export default createStore({
  state: {
    user_input_region: "選擇區域",
    user_input_school: "選擇大學",
    user_input_type: "",
    region_school: [],
    all_school : [],
    Psychologists_data: [],
    




    find_filter_school:[],
    identify: [],
    topic:     [],
    filter_array: [],
    


    
    
    
  },
  getters:{
    setregion(state){
      let region = state.region_school.map((res)=>{
        return res.city
      })
      return region
    },
    setschool(state){
      let result = state.region_school.find((res)=>{
        return res.city == state.user_input_region
      })
      if(state.user_input_region == "選擇區域"){
        return []

      }else{
        return result.school
      }
    },
    
    filterschool(state){
      const { user_input_type,all_school } = state
      if(user_input_type){
        let data = all_school.filter((item)=>{
          return item.includes(user_input_type)
        })     
        return data
      }else{
        return
      }                                                                                                                                                                                                                                                                                                
    }
    
},
  mutations: {
    setRegion(state,payload){
      state.region_school = payload
    },
    getcurrRedion(state,payload){
      state.user_input_region = payload
    
    },
    getcurrschool(state,payload){
      state.user_input_school = payload
      state.user_input_type = payload
      
    },
    get_user_typing(state,payload){
      state.user_input_type = payload
    },
    all_school(state,payload){
      state.all_school = payload
    },
    Psychologists_data(state,payload){
      state.Psychologists_data = payload
    },
    filter_binding(state){
      //這邊寫很久，記得回來看
      let is_exist = state.all_school.includes(state.user_input_type)
      if(is_exist){
        let data = state.region_school.find((res) => {
          return res.school.find((res2)=>{
            return res2.school ==  state.user_input_type
            })
          })
          state.user_input_region =  data.city
          state.user_input_school =  state.user_input_type
      }else{
        state.user_input_region =  "選擇區域"
        state.user_input_school =  "選擇大學"
      }
    },
    Psychologists_filter_school(state){
      let data = state.Psychologists_data.find(res =>
          res.school == state.user_input_type
        )
      state.find_filter_school = data
      console.log(state.find_filter_school)
    },

    identify_select(state,payload){
      let isvalue = state.identify.findIndex( res => res == payload )
      if(isvalue == -1){
        state.identify.push(payload)
      
      }else{
        state.identify.splice(isvalue,1)
      }
    },
    identify_select_all(state){
      state.identify = ["藝術治療師","社工師","諮商心理師","臨床心理師","其他輔導人員"]
    },
    topic_select(state,payload){
      let length = [...payload].length
      let isvalue = [...payload].findIndex( res=> state.topic.includes(res) )
      let index =  state.topic.findIndex((res)=>{
        return res == [...payload][0]
      })
      
      if(isvalue == -1){
        state.topic.push(...payload)
      }else{
        state.topic.splice(index,length)
      }

    },
    topic_select_all(state){
      state.topic = ["性別議題","外籍生","特教生","多元文化","情感關係議題","人際關係議題","家庭關係議題","伴侶","家暴","性侵害","情緒管理","悲傷失落與創傷調適","壓力調適","焦慮","夢境解析","精神分析","完形取向","存在取向","卡牌/塔羅牌","表達性藝術","薩提爾家族治療","個人中心取向","自我探索","生涯議題","時間管理","生活適應","課業學習","睡眠問題","飲食問題","成癮問題","身心症狀"]
    },
    final_filter(state){
      state.filter_array = state.find_filter_school.psychologists 
      if(state.identify.length == 0 && state.topic.length == 0){
        state.filter_array = state.find_filter_school.psychologists 
      
      }else{


        let data = state.filter_array.filter((res)=>{
          return state.identify.includes(res.identify)
        })

        let data2 = []
        
        state.topic.forEach((res)=>{
          let array = state.filter_array.filter((res2)=>{
            return res2.topics.includes(res)
          })
          data2.push(...array)
          data2 = [...new Set(data2)];
          // 刪除相同元素

        })

        let data3 = []

        state.topic.forEach((res)=>{
          let array = data.filter((res2)=>{
            return res2.topics.includes(res)
          })
          data3.push(...array)
          data3 = [...new Set(data3)];

        })

        if(state.identify.length == 0){
          
          state.filter_array = data2
          console.log('data2')
          console.log(data2)
        } else if(state.topic.length == 0){
          state.filter_array = data
          console.log('data')
          console.log(data)
        }else{
          state.filter_array = data3
          console.log('data3')
          console.log(data3)
        }

      }
    },
    clean_input(state){
      state.identify = [],
      state.topic = []
    }


    

    
    
  },
  actions: {
    async get_school_data({commit}){
   
      commit('setRegion',get_school_data)
    },

    async all_school({commit}){

      commit('all_school',all_school.all_data)
    },
    async Psychologists_data({commit}){
     

      commit('Psychologists_data',Psychologists_data)
    }    
  },
  modules: {
    psychologist_filter
  }
})
