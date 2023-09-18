<template>
    <div class="swiper-container">
        <div class="swiper-content">
            <div class="swiper-hd">
                <ul>
                    <li class="active">
                        <span>HTML/CSS</span>
                        <el-icon><ArrowRight /></el-icon>
                    </li>
                    <li>
                        <span>TypeScript</span>
                        <el-icon><ArrowRight /></el-icon>
                    </li>
                    <li>
                        <span>ReactJS</span>
                        <el-icon><ArrowRight /></el-icon>
                    </li>
                    <li>
                        <span>JavaScript</span>
                        <el-icon><ArrowRight /></el-icon>
                    </li>
                    <li>
                        <span>Angular</span>
                        <el-icon><ArrowRight /></el-icon>
                    </li>
                    <li>
                        <span>Java</span>
                        <el-icon><ArrowRight /></el-icon>
                    </li>
                </ul>
                <div class="swiper-img">
                    <el-carousel :interval="5000" arrow="always" v-if="silderList.length">
                        <el-carousel-item v-for="item in silderList" :key="item.id">
                            <img :src="item.imageUrl" alt="">
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </div>
            <div class="swiper-bd">
                <ul>
                    <li>
                        <img src="@/assets/img/chuji.png" alt="">
                        <div class="desc">
                            <h4>初级课程</h4>
                            <span>入门快,岗位多</span>
                        </div>
                    </li>
                    <li>
                        <img src="@/assets/img/zhongji.png" alt="">
                        <div class="desc">
                            <h4>中级课程</h4>
                            <span>进阶与实战</span>
                        </div>
                    </li>
                    <li>
                        <img src="@/assets/img/gaoji.png" alt="">
                        <div class="desc">
                            <h4>高级课程</h4>
                            <span>轻松掌握核心技能</span>
                        </div>
                    </li>
                    <li>
                        <img src="@/assets/img/xiangmu.png" alt="">
                        <div class="desc">
                            <h4>项目实战</h4>
                            <span>手把手实践</span>
                        </div>
                    </li>
                    <li>
                        <img src="@/assets/img/suanfa.png" alt="">
                        <div class="desc">
                            <h4>前端算法</h4>
                            <span>笑傲前端技能</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ArrowRight } from '@element-plus/icons-vue'
import { getSilders } from '@/api/silder.js'

const silderList = ref([])

// 生命周期
onBeforeMount(async () => {
 const { data: { list }, meta } = await getSilders()
 silderList.value = list
})
</script>

<style lang="scss" scoped>
.swiper-container {
    background: url('@/assets/img/transitionbg.png');
    width: 100%;
    height: 600px;
    .swiper-content {
        width: 1000px;
        margin: 0 auto;
        padding: 47px 0;

        .swiper-hd {
            display: flex;
            height: 373px;
            border-radius: 11px 11px 0px 0px;
            
            ul {
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                width: 160px;
                height: 100%;
                background-color: #2b283d;
                border-radius: 11px 0px 0px 0px;
                
                li {
                    box-sizing: border-box;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 160px;
                    height: 37px;
                    padding: 0 14px;
                    color: #fff;
                    font-size: 16px;
	                cursor: pointer;

                }
                .active {
                    background: linear-gradient(90deg, #3FE5FF 0%, rgba(62, 222, 255, 0.93) 2%, rgba(60, 203, 255, 0.73) 9%, rgba(58, 186, 255, 0.56) 17%, rgba(57, 172, 255, 0.41) 25%, rgba(55, 160, 255, 0.28) 33%, rgba(54, 150, 255, 0.18) 43%, rgba(53, 142, 255, 0.1) 53%, rgba(53, 137, 255, 0.04) 64%, rgba(53, 133, 255, 0.01) 77%, rgba(53, 133, 255, 0) 100%);
                }
            }

            .swiper-img {
                width: 100%;
                height: 100%;

                .el-carousel {
                    :deep(.el-carousel__container) {
                        height: 373px;
                    }
                    img {
                        width: 100%;
                        height: 100%;
                    }
                    
                }
            }
        }

        .swiper-bd {
            ul {
                display: flex;
                justify-content: space-around;
                li {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 213px;
                    height: 133px;
                    background-color: #fff;
                    border-radius: 0 0 0 11px;
	                cursor: pointer;

                    img {
                        width: 64px;
                        height: 64px;
                    }
                    .desc {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-around;
                        margin-left: 12px;
                        h4 {
                            margin-bottom: 10px;
                            font-size: 16px;
                            font-weight: 700;
                            color: #333;
                        }

                        span {
                            font-size: 12px;
                            color: #808080;
                        }
                    }
                }
            }
        }
    }
}
</style>