<template>
	
	<div style="margin-top: 30px">
		<h1>{{ title }}</h1>
		<template v-for="item in descriptions" track-by="$index">
			<p class="lead">
				{{ item }}
			</p>
		</template>


		<div class="carousel slide center-block" style="width: 100%;">
		  <ol class="carousel-indicators">
		    <template v-for="item in carousels" track-by="$index">
		    	<li v-bind:class="[current==$index?'active':'' ]"
		    		v-on:click="setcurrent($index)"></li>
		    </template>
		  </ol>
		  <div class="carousel-inner" role="listbox">
		    <template v-for="item in carousels" track-by="$index">
			    <div v-bind:class="['carousel-item', current==$index?'active':'' ]">
			      <img v-bind:src="item.href" class="center-block" style="height:300px">
			      <div class="carousel-caption">
					    <h3>{{ item.title }}</h3>
					  </div>
			    </div>
		    </template>
		  </div>
		  <a class="left carousel-control btn" style="border: 0px" v-on:click="prev_current">
		    <span class="icon-prev" aria-hidden="true"></span>
		    <span class="sr-only">Previous</span>
		  </a>
		  <a class="right carousel-control btn" style="border: 0px" v-on:click="next_current">
		    <span class="icon-next" aria-hidden="true"></span>
		    <span class="sr-only">Next</span>
		  </a>
		</div>
	</div>

</template>

<script>
	export default {
		data: function() {
			return {
				title: 'About Me',
				descriptions: [
					' Hello, 我是张无忌，出生在冰火岛。',
					' 小时候中寒毒命危，后来却福缘际会，身兼“九阳神功”、“太极拳、剑”、“圣火令神功”、“乾坤大挪移”、“七伤拳”、“少林龙爪手”等武功，',
					' 我生性随和，宅心仁厚，精通医术药理，身兼明教教主。',
					' 现在正在学习藏在倚天屠龙中的兵法和秘笈《武穆遗书》、《九阴真经》和《降龙十八掌》～，望各路大神多多指教。 ',
				],
				carousels: [
					{ title: '我', 
						href: 'http://i4.buimg.com/462b8f763ec66b60.jpg' },
					{ title: '我女票', 
						href: 'http://i4.buimg.com/04edcdee13c7bc9e.jpg' },
					{ title: '灭绝师太', 
						href: 'http://i4.buimg.com/6687a6612022e22e.jpg' },
					{ title: '我前女友', 
						href: 'http://i4.buimg.com/a3b55ae8529ca91c.jpg' },
					{ title: '我的宝剑', 
						href: 'http://i4.buimg.com/f5f92cd453ebdb94.png' },
					{ title: '被我干掉的大魔王成昆', 
						href: 'http://i4.buimg.com/6f558ced6dc04a95.jpg' },
				],
				current: 0,
			}
		},
		methods: {
			setcurrent: function(v){
				this.current = v;
			},
			prev_current: function(){
				let n = this.carousels.length;
				this.current = (this.current + n - 1) % n;
			},
			next_current: function(){
				let n = this.carousels.length;
				this.current = (this.current + 1) % n;
			}
		}
	}
</script>