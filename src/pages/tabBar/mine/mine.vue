<template>
	<view>
		<view class="min-header-container" v-if="!userCode">
			<button class="login-btn" open-type="getUserInfo" @getuserinfo="login" :disabled="isLoading">微信授权登录</button>
		</view>
		<view class="min-header-container" v-else>
			<image class="user-icon" :src="userInfo.avatarUrl" mode=""></image>
			<text class="user-name">{{userInfo.nickName}}</text>
		</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		data() {
			return {
				isLoading: false,
				userCode: ''
			}
		},
		computed: {
			...mapState(['userInfo'])
		},
		methods: {
			login() {
				this.isLoading = true
				uni.getProvider({
					service: 'oauth'
				})
				.then((json) => {
					const [err, res] = json
				
					return uni.login({
						provider: res.provider[0]
					})
				})
				.then((json) => {
					const [err, res] = json

					this.userCode = res.code
					
					return uni.getUserInfo({
						provider:res.provider
					})
				})
				.then((json) => {
					const [err, res] = json
					this.isLoading = false
					
					this.$store.commit('userInfo', res.userInfo)
				})
				.catch(err => {
					this.isLoading = false
				})
				
			}
		}
	}
</script>

<style lang="less">
.min-header-container{
	height: 300rpx;
	width: 750rpx;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-bottom: 1rpx solid #333333;
	.user-icon{
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
	}
	.user-name{
		font-size: 16px;
	}
}


</style>
