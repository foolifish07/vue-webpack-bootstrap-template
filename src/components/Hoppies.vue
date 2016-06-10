<template>
	
	<div style="margin-top: 30px">
		<h1>{{ title }}</h1>

		<div class="card-columns">
			
		<template class="card-group" v-for="item in descriptions" track-by="$index">
			<div class="card">
			  <img class="card-img-top cards-img"  style="width:100%;height:180px"
			  	v-bind:src="item.img_url">
			  <div class="card-block">
			  	 <h4 class="card-title">{{ item.name }}</h4>
			    <p class="card-text">{{ item.content }}</p>
			  </div>
			</div>
		</template>
		</div>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				title: 'Hoppies',
				descriptions: [
					{ name: 'Basketball', img_url: 'http://7xrn7f.com1.z0.glb.clouddn.com/16-6-10/66033875.jpg', 
						content: 'I like basketball, always play with friends. Watching NBA with friends do bring me a great blood surge. My favorite star is Chris Pau. The point guard has won the NBA Rookie of the Year Award, two Olympic gold medals, and led the NBA in assists four times and steals six times. His passing always give us some surprise.' },
					{ name: 'Chess', img_url: 'http://7xrn7f.com1.z0.glb.clouddn.com/16-6-10/21284842.jpg', 
						content: 'Besides chess, I also enjoy chinese chess, go, gobang, and my favorite, the flag, '},
					{ name: 'Reading', img_url: 'http://7xrn7f.com1.z0.glb.clouddn.com/16-6-10/85625831.jpg', 
						content: 'Although I do not read a lot of books, But reading actually has been one part of my lift.'},
					{ name: 'Movies', img_url: 'http://7xrn7f.com1.z0.glb.clouddn.com/16-6-10/17463247.jpg', 
						content: 'With strong visual shock && good taste of multiple experience, why not movies?'},
					{ name: 'Travelling', img_url: 'http://7xrn7f.com1.z0.glb.clouddn.com/16-6-10/76139752.jpg', 
						content: 'As many other children, I have a hope that I can travel around the world one day.'},
				]
			}
		}
	}
</script>

<style type="text/css">
.card-fixed {
	width: 220px;
}
	
</style>