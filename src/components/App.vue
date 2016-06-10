<template>
	
	<div class="container">

		<!-- Navbar -->
		<nav class="navbar navbar-dark bg-inverse">
		  <a class="navbar-brand" v-link="{ name: 'index' }">{{ nav.brand }}</a>
		  <ul class="nav navbar-nav center-block">
		  	<template v-for="item in nav.navbar" track-by="$index">
			    <li class="nav-item">
			      <a class="nav-link" v-link="{ name: item.link }">{{ item.name }}</a>
			    </li>
		  	</template>
		  </ul>
		  <audio class="pull-right" v-bind:src="music_url" controls loop></audio>
		</nav>

		<router-view></router-view>

	</div>
	<canvas width="1301" height="659">

</template>

<script>
	export default {
		data() {
			return {
				nav: {
					brand: 'Foolifish07',
					navbar: [
						{name: 'Info', link: 'info'},
						{name: 'Skills', link: 'skills'},
						{name: 'Hoppies', link: 'hoppies'},
						{name: 'Contact', link: 'contact'},
					],
				},
				music_url: 'http://cc.stream.qqmusic.qq.com/C200004Bzogh02UROw.m4a?vkey=5D0FBA9C8DC118F3B9DB9F1E1F9533843FDD3D74E0F2B003ED4E0FABD33957AB67BBBFA8ADCF4735835E7CE2F3A9C3EA5E39658E6D37E8CC&guid=5165864343&fromtag=30'
			}
		}
	}
</script>