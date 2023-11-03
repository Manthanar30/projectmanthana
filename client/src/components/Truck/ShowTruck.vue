<template>
	<div>
		<h1>แสดงข้อมูล รถบรรทุก</h1>
		<p>ลำดับที่: {{ truck.id }}</p>
		<p>ยี่ห้อ: {{ truck.brand }}</p>
		<p>รุ่น: {{ truck.model }}</p>
		<p>เครื่องยนต์: {{ truck.engine }}</p>
		<p>ความจุ: {{ truck.oad }}</p>
		<p>
			<button v-on:click="navigateTo('/truck/edit/' + truck.id)">
				แก้ไขข้อมูล รถบรรทุก
			</button>
			<button v-on:click="navigateTo('/trucks')">กลับ</button>
		</p>
	</div>
</template>
<script>
import TrucksService from "@/services/TrucksService";
export default {
	data() {
		return {
			truck: null,
		};
	},
	async created() {
		try {
			let truckId = this.$route.params.truckId;
			this.truck = (await TrucksService.show(truckId)).data;
		} catch (error) {
			console.log(error);
		}
	},
	methods: {
		navigateTo(route) {
			this.$router.push(route);
		},
	},
};
</script>
<style scoped></style>
