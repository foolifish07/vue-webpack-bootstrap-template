<template>
	
	<div style="margin-top: 30px">
		<h1>{{ title }}</h1>
		<dl class="dl-horizontal row">
			<template v-for="item in descriptions" track-by="$index">
			  <dt class="col-sm-3">{{ item.name }}</dt>
			  <dd class="col-sm-9">
			  	<p v-if="!item.href">{{ item.context }}</p>
			  	<a v-if="item.href" href="{{ item.href }}">{{ item.context }}</a>
			  </dd>
			</template>
		</dl>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				title: 'Contact',
				descriptions: [
					{ name: 'Telephone', context:'(+86)1234567890',  },
					{ name: 'Email', context:'foolifish07@gmail.com',  },
					{ name: 'Github', context:'https://github.com/foolifish07', href:'https://github.com/foolifish07' },
				]
			}
		}
	}
</script>