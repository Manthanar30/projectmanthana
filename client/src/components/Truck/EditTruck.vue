<template>
  <div>
    <h1>แก้ไขข้อมูล รถบรรทุก</h1>
    <form v-on:submit.prevent="editTruck">
      <p>ยี่ห้อ: <input type="text" v-model="truck.brand" /></p>
      <p>รุ่น: <input type="text" v-model="truck.model" /></p>
      <p>เครื่องยนต์: <input type="text" v-model="truck.engine" /></p>
      <p>ความจุ: <input type="text" v-model="truck.load" /></p>
      <p>
        <button type="submit">แก้ไขข้อมูล รถบรรทุก</button>
        <button v-on:click="navigateTo('/truck')">กลับ</button>
      </p>
    </form>
  </div>
</template>
<script>
import TrucksService from "@/services/TrucksService";

export default {
  data() {
    return {
      truck: {
        brand: '',
        model: '',
        engine: '',
        load: '',
      }
    }
  },
  methods:{
        async editTruck(){
            try{
                await TrucksService.put(this.truck)
                this.$router.push({
                    name: 'trucks'
                })

            }catch(error){
                console.log(error)
            }
        }
    }, 
    async created(){
        try{
            let truckId = this.$route.params.truckId
            this.truck = (await TrucksService.show(truckId)).data
        }catch(error){
            console.log(error)
        }
    }
};
</script>
<style scoped>
	
.dropbox {
  outline: 2px dashed grey; /* the dash box */
  outline-offset: -10px;
  background: lemonchiffon;
  color: dimgray;
  padding: 10px 10px;
  min-height: 200px; /* minimum height */
  position: relative;
  cursor: pointer;
}

.input-file {
  opacity: 0; /* invisible but it's there! */
  width: 100%;
  height: 200px;
  position: absolute;
  cursor: pointer;
}
.dropbox:hover {
  background: khaki; /* when mouse over to the drop zone, change color
    */
}
.dropbox p {
  font-size: 1.2em;
  text-align: center;
  padding: 50px 0;
}
ul.pictures {
  list-style: none;
  padding: 0;
  margin: 0;
  float: left;
  padding-top: 10px;
  padding-bottom: 10px;
}
ul.pictures li {
  float: left;
}
ul.pictures li img {
  max-width: 180px;
  margin-right: 20px;
}
.clearfix {
  clear: both;
}
.thumbnail-pic img {
  width: 200px;
}
</style>
