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
				music_url: 'http://m6.file.xiami.com/816/121816/554989/1771460868_3899664_h.mp3?auth_key=783b598cb288d4dfe3926b168b472a8c-1465948800-0-null'
			}
		}
	}
</script>