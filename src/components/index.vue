<template @scroll.prevent>
  <div style="background: white">

    <table style="width: auto" border="1" cellspacing="0" cellpadding="0">
      <tr v-for="(item,index) in map_all" >
        <!--          {{index}}-->
        <td v-for="(value,index) in item">
<!--                      {{value}}-->
          <img v-if="value===0" src="../assets/back_icon1.png" height="50" width="50"/>
          <img v-else-if="value===1" src="../assets/back_icon2.png" height="50" width="50">
          <img v-else-if="value===2" src="../assets/back_icon3.png" height="50" width="50">

        </td>

      </tr>
    </table>
    {{characterInfo}}<br>
    {{coordinate}}
  </div>
</template>
<script>
    import cookie from 'js-cookie'

    export  default {
        methods:{
        },
        data(){
            return{
                Length:13,
            }
        },
        computed:{
            characterInfo(){
                return this.$store.getters.getCharacterInfo
            },
            coordinate(){
                return this.$store.getters.getCharacterInfo.coordinate
            },
            map_info(){
                return this.$store.getters.getMapInfo
            },
            map_all(){
                let result=this.map_info
                result[this.coordinate.y][this.coordinate.x]=2
                return result
            }
        },
        watch:{
            coordinate(val,oldval) {
                console.log('就职为',oldval)
                console.log('新的为',val)
                this.map_all[oldval.y][oldval.x]=0
            }
        },
        // watch:{
        //     coordinate(val,oldval) {
        //         console.log('旧的值为:{}',oldval)
        //         console.log('新的值为:{}',val)
        //
        //     }
        // },
        created(){
            this.$store.dispatch('ajaxGetCharacterInfo',cookie.get('id'))
            // console.log(this.characterInfo.coordinate.x)
            // console.log(this.characterInfo.coordinate.y)
            // console.log(this.map_info[this.characterInfo.coordinate.x][this.characterInfo.coordinate.y])
            // console.log(this.map_info[this.characterInfo.coordinate.x][this.characterInfo.coordinate.y])
            let _this=this
            document.onkeydown=function (ev) {
                let key=ev.key
                let coordinate=_this.coordinate
                _this.map_all[coordinate.y][coordinate.x]=0
                switch (key) {
                    case "ArrowLeft":
                        console.log('点击了左键')
                        if (coordinate.x>0)
                            coordinate.x--
                        break;
                    case "ArrowDown":
                        console.log('点击了下键')
                        if (coordinate.y<_this.Length-1)
                            coordinate.y++
                        break;
                    case "ArrowUp":
                        console.log('点击了上键')
                        if (coordinate.y>0)
                            coordinate.y--
                        break;
                    case "ArrowRight":
                        console.log('点击了右键')
                        if (coordinate.x<_this.Length-1)
                            coordinate.x++
                        break;
                    default:break;
                }
                //设置响应式属性
                _this.$store.commit('setCoordinate',coordinate)
            }
        }



    }
</script>
<style scoped>

</style>
