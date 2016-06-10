<template>
	
	<div class="jumbotron">
	  <h1 class="display-2 text-center">{{ title }}</h1>
	  <template v-for="item in descriptions">
		  <p class="lead text-center"><em>{{ item }}</em></p>
	  </template>
	  <iframe class="center-block" width="560" height="315" src="https://www.youtube.com/embed/IJNR2EpS0jw" frameborder="0" allowfullscreen=""></iframe>
	</div>


</template>

<script>
	export default {
		created: function(){
			
		},
		data() {
			return {
				title: 'foolifish07',
				descriptions : [
					'This is foolifish07\'s home.',
					'To ask why we fight, is to ask why the leaves fall.'
				],
				
			}
		}
	}

            
        
</script>