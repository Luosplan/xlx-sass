<template>
	<div class='new-course'>
		<div class='new-course-main'>
			<div class='new-course-t'>
				<div class='title-hot'>
					<div class='hot'>HOT</div>
					<div class='hot-c'></div>
				</div>
				<div class='title-txt'>新上好课</div>
			</div>
			<ul class='new-course-b'>
				<li v-for="item in courseList" :key="item.id">
					<img :src="item.courseCover" />
					<div class='course-content'>
						<h3>{{ item.courseName }}</h3>
						<div>{{ courseTypeFn(item.courseLevel) }} · {{ item.clicks }}人报名</div>
						<div class='price'>
							<div class='price-vip'>会员专享</div>
							<div class='price-total'>¥ {{ item.discountPrice }}</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
import { getCourseList } from '@/api/course.js'
import mixin from '@/mixins/courseTypeFn.js'

console.log(getCourseList);
const queryData = reactive({
	pageNum: 1,
	pageSize: 10,
})

let { courseTypeFn } = mixin();
let courseList = ref([])

onBeforeMount(async () => {
	const { data: { pageInfo }, meta } = await getCourseList(queryData)
	courseList.value = pageInfo.list
})


</script>


<style scoped>
.new-course{
	padding-top: 38px;
	background: #F3F5F9;
}
.new-course-main{
	width: 1000px;
	margin: 0 auto;
}
.new-course-t{
	display: flex;
}
.title-hot{
	display: flex;
}
.title-hot .hot{
	width: 65px;
	line-height: 32.5px;
	text-align: center;
	color: #fff;
	background: linear-gradient(90deg, #FF727F 0%, #FC685C 100%);
	border-radius: 5px 0px 5px 5px;
}
.title-hot .hot-c{
	width: 0;
	height: 0;
	border: 3px solid #FC685C;
	border-bottom-color: transparent;
	border-right-color: transparent;
}
.title-txt{
	position: relative;
	z-index: 999;
	margin-left: 11px;
	font-size: 23px;
	color: #333333;
}
.title-txt:after{
	content: '';
	position: absolute;
	left: 0;
	bottom: 0;
	z-index: -1;
	width: 120%;
	margin-left: -10%;
	height: 9px;
	background: linear-gradient(90deg, #FBF84F 0%, #FEA935 100%);
	border-radius: 5px;
}
.new-course-b{
	display: flex;
	flex-wrap: wrap;
	padding-bottom: 38px;
}

.new-course-b li {
	float: left;
	margin-top: 38px;
	margin-right: 10px;
	width: 240px;
	height: 275px;
	background: #FFFFFF;
	box-shadow: 1px 3px 3px rgba(27, 39, 94, 0.1);
	border-radius: 5px;
}
.new-course-b li:has(:nth-child(4n)) {
	margin-right: 0;
}
.new-course-b li img{
	width: 240px;
	height: 153px;
}
.course-content{
	padding: 7px 16px;
}
.course-content h3{
	font-size: 12px;
	color: #333333;
}
.course-content >div{
	padding: 7px 0;
	font-size: 12px;
	color: #808080;
}
.price{
	display: flex;
}
.price-vip{
	width: 64px;
	height: 16px;
	line-height: 16px;
	text-align: center;
	color: #fff;
	margin-right: 5px;
	background: linear-gradient(90deg, #FF928E 0%, #FE7062 99%);
	border-radius: 16px 0px 16px 0px;
}
.price-total{
	font-size: 12px;
	color: #FF727F;
}
</style>