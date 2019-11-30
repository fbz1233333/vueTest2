<template>
  <div style="background: grey">

      <table style="width: auto" border="1" cellspacing="0" cellpadding="0">
        <tr v-for="(y,index) in map_icons">
<!--          {{index}}-->
          <td v-for="(value,index) in y">
<!--            {{index}}-->
          <img v-if="value===0" src="../assets/back_icon1.png" height="50" width="50"/>
          <img v-else-if="value===1" src="../assets/back_icon2.png" height="50" width="50">
          <img v-else-if="value===2" src="../assets/back_icon3.png" height="50" width="50">

          </td>

        </tr>
      </table>

  </div>
</template>
<script>
export  default {
    data(){
        return{
            map_icons:[
                [0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,1,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,2,0,0,0,0,0,0]
            ]
        }
    }
}
</script>
<style scoped>

</style>
