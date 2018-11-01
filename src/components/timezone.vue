<template>
	<div>
		<div class="timezone-wrapper">
			<div id="map"></div>
		</div>
		<div style="text-align: center;position: fixed;bottom: 80px;left: 0;z-index: 100;width: 100%;">
			<div style="margin-bottom: 12px;">
				国家：{{country?country:'-'}}
				地区：{{timezone?timezone:'-'}}
				时区：{{offset?offset:'-'}}
			</div>
			<div>
				<el-button @click="chooseTimezone" type="primary">确定</el-button>
			</div>
		</div>
	</div>
</template>

<script>
	import $ from "../lib/timezone-picker.js";
	export default {
		data() {
			return {
				country:"",
				offset:"",
				timezone:""
			}
		},
		mounted() {
			var _this=this;
			$("#map").timezonePicker();
			$("#map").on("map:clicked", function() {
				var values=$("#map").data('timezonePicker').getValue();
				console.log(values)
				if(values.length>0){
					var value=values[0];
					_this.country=value.country;
					_this.offset='UTC'+
					(value.offset<0?"-":"+")+
					(Math.abs(value.offset)>9?Math.abs(value.offset):"0"+Math.abs(value.offset))+
					':00';
					_this.timezone=value.timezone;
				}else{
					_this.country="";
					_this.offset="";
					_this.timezone="";
				}
			});
		},
		methods:{
			chooseTimezone(){
				this.$emit("click",this.offset)
			}
		}
	}
</script>

<style>
	.timezone-wrapper {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #FFFFFF;
	}
</style>