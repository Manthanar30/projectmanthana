<template>
	<div>
		<h2>รายชื่อ รถบรรทุกทั้งหมด</h2>
		<h4>จํานวน รถบรรทุก {{ trucks.length }} คัน</h4>
		<p><button v-on:click="navigateTo('/truck/create')">เพิ่มรถบรรทุก</button></p>
		<div v-for="truck in trucks" v-bind:key="truck.id">
			<p>ลำดับที่: {{ truck.id }}</p>
			<p>ยี่ห้อ: {{ truck.brand }}</p>
			<p>รุ่น: {{ truck.model }}</p>
			<p>เครื่องยนต์: {{ truck.engine }}</p>
			<p>ความจุ: {{ truck.load }}</p>

			<p>
				
				<button v-on:click="navigateTo('/truck/' + truck.id)">ดู รถบรรทุก</button>
				<button v-on:click="navigateTo('/truck/edit/' + truck.id)">
					แก้ไขข้อมูล รถบรรทุก
				</button>
				<button v-on:click="deleteTruck(truck)">ลบข้อมูล รถบรรทุก</button>
			</p>
			<hr />
		</div>
	</div>
</template>
<script>
import TrucksService from "@/services/TrucksService";
export default {
	data() {
		return {
			trucks: [],
		};
	},
	async created() {
		this.trucks = (await TrucksService.index()).data;
	},
	methods: {
		navigateTo(route) {
			this.$router.push(route);
		},
		async deleteTruck(truck) {
			let result = confirm("Want to delete?");
			if (result) {
				try {
					await TrucksService.delete(truck);
					this.refreshData();
				} catch (err) {
					console.log(err);
				}
			}
		},
		async refreshData() {
			this.trucks = (await TrucksService.index()).data;
		},
	},
};
</script>
<style scoped>
</style>