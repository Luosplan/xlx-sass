<template>
    <div>
        <Header />
        <nav-swiper />
        <div ref='target'>
            <new-course v-if='targetIsVisible'></new-course>
        </div>
        <Footer />
    </div>
</template>

<script setup>
import { useIntersectionObserver } from '@vueuse/core'
// 异步组件
const NewCourse = defineAsyncComponent(() =>
    import('@/components/Home/NewCourse.vue')
)
const target = ref(null);
const targetIsVisible = ref(false);
const { stop } = useIntersectionObserver(
    target,
    ([{ isIntersecting }]) => {
        if( isIntersecting ) {
            targetIsVisible.value = isIntersecting
        }
    },
)
</script>

<style lang="scss" scoped>

</style>