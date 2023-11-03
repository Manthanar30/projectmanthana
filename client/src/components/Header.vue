<template>
	<div>
		<div class="nv-navbar" style="margin-top: -60px;margin-left: -10px;">
			<ul class="nav">
				<li><router-link :to="{ name: 'truck' }">รถบรรทุก</router-link></li>
			</ul>
			<div class="clearfix" />
		</div>
	</div>
</template>
<script>
export default {};
</script>
<style scoped>
.nv-navbar {
	background-color: rgb(255, 229, 156);
	width: 110%;
	padding: 10px 0px 10px 0px;
}
.nv-navbar .nav {
	list-style: none;
	margin: 0;
	padding: 0;
	float: left;
}
.nv-navbar .nav li {
	float: left;
}
.nv-navbar .nav li a {
	padding: 10px;
	text-decoration: none;
	color: grey;
	font-weight: bold;
}
.nv-navbar .nav li a:hover {
	padding: 10px;
	text-decoration: none;
	color: darkslategrey;
}
.nv-navbar .nav li a.router-link-active {
	background-color: rgb(255, 191, 95);
	color: darkslategrey;
}
.clearfix {
	clear: left;
}
</style>
