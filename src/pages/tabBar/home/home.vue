<template>
	<view>
		<view class="home-header-container">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item>
					<view class="swiper-item">item1</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">item2</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">item3</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less">
.home-header-container{
	
	.swiper-item:nth-child(1){
		background-color: #007AFF;
	}
	.swiper-item:nth-child(2){
		background-color: #ff0022;
	}
	.swiper-item:nth-child(3){
		background-color: #00ff00;
	}
}
</style>
