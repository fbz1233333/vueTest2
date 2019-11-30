import axios from 'axios'
import cookie from "js-cookie"
export default{
  state:{
    characterInfo:{
      basicInfo:{
        id:"",
        name:''
      },
      coordinate:{
        x:0,
        y:0,
      },

    },
    delta_coordinate:{
      delta_x:0,
      delta_y:0
    }
  },
  getters:{
    getCharacterInfo(state){
      return state.characterInfo
    }
  },
  mutations:{
    setCoordinate(state,data){
      state.characterInfo.coordinate=data
    },
    setCharacterInfo(state,data){
      state.characterInfo=data
    }
  },
  actions: {
    ajaxCharacterMove(context,info){
      axios.post('app/api2/s02',info,{
        headers:{

        }
      }).then(res=>{
        // context.dispatch('ajaxGetCharacterInfo')
      })
    },
    ajaxGetCharacterInfo(context){
      axios.get('app/api2/s01/'+cookie.get('id'),{
        headers:{

        }
      }).then(res=>{
        // console.log(res.data)

        context.commit('setCharacterInfo',res.data)
      }).catch(err=>{
        //执行error操作
      })
    }
  }
}
