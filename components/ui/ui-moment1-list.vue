<template>
	<view class="p-3 flex align-start border-bottom border-light-secondary">
			<fss-avater :src="item.avatar" size="80" @click="$emit('avatar',{item,index})"></fss-avater>
		<view class="pl-2 flex-1 flex flex-column">
			<!-- 昵称 -->
			<text class="font-md text-hover-primary mb-1">{{item.nickname}}</text>
			<!-- 内容 -->
			<text v-if="item.content" class="font-md text-dark mb-1">{{item.content}}</text>
			<!-- 图片 -->
			<view v-if="item.image.length" class="py-2 flex flex-wrap">
				<block v-for="(image,imageIndex) in item.image"
				:key="imageIndex">
					<!-- 单图 -->
					<fss-image v-if="item.image.length === 1" :src="image" imageClass="rounded bg-secondary" @click="preview(image)"></fss-image>
					<!-- 多图 -->
					<image v-else :src="image" mode="aspectFill" style="height: 180rpx;width: 180rpx;" class="bg-secondary mr-2 mb-2 rounded" @click="preview(image)"></image>
				</block>
			</view>
			<!-- 视频 -->
			<view v-if="item.video" class="py-2">
				<video :src="item.video.src" :poster="item.video.poster" controls style="height: 300rpx;width: 500rpx;" loop></video>
			</view>
			<!-- 时间|操作 -->
			<view class="flex align-center justify-between">
				<text class="font-sm text-light-muted">{{item.createdAt|formatTime}}</text>
			</view>
			<view class="flex" style="margin-left: 480rpx;">
				<view class="rounded p-1 bg-light" @click="$emit('action',{item,index})">
					<text class="text-hover-danger iconfont font">{{item.likes.length==0?'':item.likes.length}}{{isSHow?'&#xe644;':'&#xe63b;'}}</text>
				</view>
				<view class="rounded p-1 bg-light" @click="$emit('doPinglun',{item,index})">
					<text class="text-hover-primary iconfont font">{{item.comments.length==0?'':item.comments.length}}&#xe60f;</text>
				</view>
			</view>
			<!-- 点赞列表|评论列表 -->
			<view class="bg-light mt-2" v-if="isSHowList">
				<!-- 点赞 -->
				<view v-if="item.likes.length" class="border-bottom flex align-start p-2">
					<text class="flex-shrink iconfont font text-hover-primary">&#xe609;</text>
					<view class="flex flex-1 flex-wrap ml-1">
						<text v-for="(s,si) in item.likes" :key="si" class="font text-hover-primary ml-1">{{s.name}}</text>
					</view>
				</view>
				<!-- 评论 -->
				<view v-if="item.comments.length" class="flex align-start p-2">
					<text class="flex-shrink iconfont font-md text-hover-primary">&#xe634;</text>
					<view class="flex flex-column flex-1 ml-2">
						<view class="flex" 
						v-for="(c,ci) in item.comments"
						:key="ci">
							<text v-if="!c.reply" class="text-hover-primary font">{{c.user.name}}：</text>
							<view v-else class="flex align-center">
								<text class="text-hover-primary font">{{c.user.name}} </text>
								<text class="text-muted font-sm">回复</text>
								<text class="text-hover-primary font">{{c.reply.name}}：</text>
							</view>
							<text class="font text-dark flex-1"
							@click="$emit('reply',{
								item,
								index,
								reply:c.user
							})">{{c.content}}</text>
						</view>
					</view>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	import fssAvater from '@/components/ui/ui-avater.vue';
	import fssImage from '@/components/ui/ui-image.vue';
	import $T from '@/common/js/time.js';
	export default {
		components: {
			fssAvater,
			fssImage
		},
		props: {
			item: Object,
			index:Number,
			isSHow:false,
			isSHowList:false
		},
		filters: {
			formatTime(value) {
				return $T.gettime(value);
			}
		},
		methods: {
			// 查看大图
			preview(src) {
				uni.previewImage({
					current:src,
					urls:this.item.image 
				})
			}
		},
	}
</script>

<style>
</style>
