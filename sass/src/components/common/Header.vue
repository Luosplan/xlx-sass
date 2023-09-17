<template>
   <header>
        <div class="header-container">
            <div class="header-left">
                <h1 class="logo">
                    <img src="@/assets/img/logo.png" alt="">
                </h1>
                <ul>
                    <li class="active">首 页</li>
                    <li>课 程</li>
                    <li>会 员</li>
                </ul>
            </div>
            <div class="header-right">
                <div class="search">
                    <input type="text">
                    <el-icon color="#bbb" :size="20"><Search /></el-icon>
                </div>
                <div class="shopcar-logo">
                    <el-icon><ShoppingTrolley /></el-icon>
                </div>
                <div class="login">
                    登录/注册
                </div>
            </div>
        </div>
   </header>
</template>

<script setup>
// Element icon
import { Search, ShoppingTrolley } from '@element-plus/icons-vue'

</script>

<style lang="scss" scoped>
header {
    width: 100%;
    height: 80px;
    .header-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 1000px;
        height: 100%;
        margin: 0 auto;
        .header-left {
            display: flex;
            justify-content: space-between;

            .logo {
                width: 127px;
                height: 50px;
                margin-right: 51px;
                cursor: pointer;
                img {
                    width: 100%;
                    height: 100%;
                }
            }

            ul {
                display: flex;
                align-items: center;
                height: 50px;
                line-height: 50px;
                font-weight: 500;
                li + li {
                    margin-left: 79px;
                    font-size: 16px;
                    color: #808088;
                }
                li {
                    cursor: pointer;
                }
                .active {
                    position: relative;
                    color: #3585ff;

                    &::after {
                        content: '';
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 140%;
                        height: 3px;
                        margin-left: -20%;
                        background-color: #3585ff;

                    }
                }
            }
        }
        .header-right {
            display: flex;
            align-items: center;
            .search {
                display: flex;
                align-items: center;
                width: 300px;
                height: 43px;
                padding: 0 10px;
                background-color: #F0F2F4;
                border-radius: 5px;
                input {
                    width: 270px;
                    height: 100%;
                    outline: none;
                    border: none;
                    background-color: #F0F2F4;
                }
            }
            .shopcar-logo {
                margin-left: 42px;
                
            }
            .login {
                margin-left: 39px;
                font-size: 16px;
                color: #808088;
                cursor: pointer;
            }
            
        }
    }
}
</style>