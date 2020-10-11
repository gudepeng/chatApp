<template>
	<view>
		<view :class="getClass">
			<!-- 状态栏 -->
			<view :style="'height:'+ statusBarHeight +'px'"></view>
			<!-- 导航 -->
			<view class="w-100 flex align-center justify-between" style="height: 90rpx;">
				<!-- 左边 -->
				<view class="flex align-center">
					<!-- 返回按钮 -->
					<!-- #ifndef MP -->
					<fss-icon-button v-if="showBack" @click="back"
					:icon="'\ue607'"></fss-icon-button>
					<!-- #endif -->
					<!-- 标题 -->
					<slot>
						<text v-if="title" class="font-md ml-3">{{getTitle}}</text>
					</slot>
				</view>
				<!-- 右边 -->
				<view class="flex align-center" v-if="showRight">
					<slot name="right"><!-- @click="search"  -->
						<fss-icon-button 
						:icon="'\ue6dd'"></fss-icon-button>
						<fss-icon-button @click="openExtend"
						:icon="'\ue602'"></fss-icon-button>
					</slot>
				</view>
			</view>
		</view>
		<!-- 占位 -->
		<!-- <view v-if="fixed" :style="fixedStyle"></view> -->
		
		<!-- 扩展菜单 -->
		<fss-popup v-if="showRight" ref="extend" :bodyWidth="320" :bodyHeight="525"
		bodyBgColor="bg-dark" transformOrigin="right top">
			<view class="flex flex-column" 
			style="width: 320rpx;height: 525rpx;">
				<view class="flex-1 flex align-center" 
				hover-class="bg-hover-dark"
				v-for="(item,index) in menus"
				:key="index"
				@click="clickEvent(item)">
					<text class="iconfont pl-3 pr-2 font-md text-white">{{item.icon}}</text>
					<text class="font-md text-white">{{item.name}}</text>
				</view>
			</view>
		</fss-popup>
		
		
	</view>
</template>

<script>
	import fssIconButton from "./ui-icon-button.vue"
	import fssPopup from "./ui-popup.vue"
	export default {
		props: {
			showBack:{
				type:Boolean,
				default:false
			},
			backEvent:{
				type:Boolean,
				default:true
			},
			title: {
				type: [String,Boolean],
				default:false 
			},
			fixed:{
				type:Boolean,
				default:true
			},
			noreadnum:{
				type:[Number,String],
				default:0
			},
			bgColor:{
				type:String,
				default:"bg-light"
			},
			showRight:{
				type:Boolean,
				default:true
			}
		},
		components:{
			fssIconButton,
			fssPopup
		},
		data() {
			return {
				statusBarHeight:0,
				navBarHeight:0,
				menus:[
					{
						name:"发动态",
						event:"navigateTo",
						path:"/pages/find/add-moment/add-moment?type=image",
						icon:"\ue734"
					},
					{
						name:"发群聊",
						event:"navigateTo",
						path:"/pages/mail/mail/mail?type=createGroup",
						icon:"\ue6fd"
					},
					{
						name:"加好友",
						event:"navigateTo",
						path:"/pages/common/search/search",
						icon:"\ue61a"
					},
					// #ifndef H5
					{
						name:"扫一扫",
						event:"",
						icon:"\ue606"
					},
					// #endif
					{
						name:"同学录",
						event:"navigateTo",
						path:"/pages/tabbar/mail/mail",
						icon:"\ue605"
					}
				],
			}
		},
		mounted() {
			// #ifdef APP-PLUS-NVUE
			this.statusBarHeight = plus.navigator.getStatusbarHeight()
			// #endif
			this.navBarHeight = this.statusBarHeight + uni.upx2px(90)
		},
		computed: {
			fixedStyle() {
				return `height:${this.navBarHeight}px`
			},
			getTitle(){
				let noreadnum = this.noreadnum > 0 ? '('+this.noreadnum+')' : ''
				return this.title + noreadnum
			},
			getClass(){
				let fixed = this.fixed?'fixed-top':''
				return `${fixed} ${this.bgColor}` 
			}
		},
		methods: {
			openExtend() {
				this.$refs.extend.show(uni.upx2px(415),uni.upx2px(150))
			},
			// 返回
			back(){
				if(this.backEvent){
					return uni.navigateBack({
						delta: 1
					});
				}
				this.$emit('back')
			},
			search(){
				uni.navigateTo({
					url: '/pages/common/search/search'
				});
			},
			clickEvent(item){
				this.$refs.extend.hide()
				switch (item.event){
					case 'navigateTo':
					uni.navigateTo({
						url: item.path,
					});
						break;
					default:
					uni.showToast({
						title: '有待开发',
						icon: 'none'
					});
						break;
				}
			}
		},
	}
</script>

<style>
</style>
