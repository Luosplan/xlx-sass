# 基础补充



## vue3

### 说一下你对 Vue3 的理解



- 性能更好了
  - 响应式的原理换成了 Proxy
  - 基本数据类型响应式还是通过Object.defindProperty
  - VNode Diff 算法进行了优化

- 体积更小了

  - 删除了一些不太常用的 API，例如 filter，EventBus
  - 按需导入，能配合 Webpack 支持 Tree Shaking

- 对 TS 支持更好了

- Composition API

  - 解决了对同一功能的数据和业务逻辑复用和维护的问题

  - Vue2 实现一个功能或业务，需要在data中定义数据，methods中定义方法，等等，每个业务的数据比较分散，不利于维护

  - Vue3 中可以通过 自定义 hooks 来抽离功能、业务，提高了复用性和维护性，使得Vue3 也可以驾驭大型项目

- 新特性



### 创建一个 Vue3 项目

```js
// !#1 按需导入一个 createApp 的函数

import { createApp } from 'vue'



// !#2 创建一个根组件 App.vue

import App from './App.vue'



// !#3 使用 createApp 传递 App 根组件创建应用

// Vue3 及周边生态的代码更强调函数式编程，例如我要创建实例，我就要调用 createApp，我要创建路由我就要调用 createRouter...

const app = createApp(App)



// !#4 应用挂载到某个地方

app.mount('#app')
```



### 组合式 API

#### setup

- 执行时机：比beforeCreate 和 created 还要早
- 内部没有this this是 undefined
- 使用setup 中的数据或方法 需要在setup 里面 return

#### ref

- 包裹任意数据（普通和复杂）将其转换为响应式对象
- 注意
  - JS 代码中使用 ref响应式对象要加 .value
  - 模板中不用加，会自动加

#### reactive

- 可以把数组或对象包装成响应式的数据
- reactive 内部的数据如果是一个复杂数据类型的话（内部会借助reactive），其实它还是一个reactive对象

#### toRef (响应式对象，属性)

- 可以把响应式对象中某一个属性转换未单独的响应式 ref对象
- 并且转换后的数据和原对象是关联的

#### toRefs (响应式对象)

- 可以把响应式对象中的多个属性转换为单独的响应式 ref对象

#### computed (计算属性)

- 如果要修改 computed 数据，需要使用 set 的方式

  ```js
  state.fullName = computed({
  
  	get() {
  
  		return state.firstName + '~' + state.lastName
  
  	},
  
  	set(newFullName) {
  
  		const [firstName, lastName] = newFullName.split('~')
  
  		state.firstName = firstName
  
  		state.lastName = lastName
  
  	}
  
  })
  ```

  

#### watch (监听)

##### 监听ref

```js
<template>
  <div>
    <p>eat：{{ obj.hobby.eat}}</p>
    <button @click="obj.hobby.eat = ''">面条</button>
  </div>
</template>

<script>
import { watch, ref } from 'vue';

export default {
  setup() {
    const obj = ref({
      hobby: {
        eat: '西瓜',
      },
    })
    // !watch 监听 ref 类型数据，默认监听的只是第一层，谁是第一层？
    watch(obj, () => {
      console.log(1)
    })
    return {obj}
  }
}
</script>
```

- 监听 ref 默认是浅监听，只监听一层，可以开启深度监听
- 只修改第一层obj.vue 也能触发监听
- ref 包裹的如果是一个对象，对象内部的复杂的数据类型其实是一个reactive 类型的数据，那就符合监听reactive 数据的特点





##### 监听 reactive 类型数据

- 强制开启深度监听，deep 配置无效
- 其实监听是reactive 内部的数据，对本身的修改不会触发监听
- 注意点
  - reactive 内部的数据如果是一个复杂数据类型的话，其实它还是一个 reactive，对这个数据的监听还是符合监听 reactive 数据的特点



##### 监听普通值

- watch(()=> 普通值, () => {} )

- 如果监听 reactive 中的某个对象本身和内部数据的修改

  ```js
  watch(() => state.list, (newList) => {
  
      	localStorage.setItem('TODOS', JSON.stringify(newList))
  
      }, 
       {
  
      deep: true
  
  })
  ```

  

  

### 生命周期

```js
onBeforeMount(() => {
    console.log('onBeforeMount') // 挂载之前
})
onMounted(() => {
    console.log('onMounted') // 挂载之后
})
onBeforeUpdate(() => {
    console.log('onBeforeUpdate') // 更新之前
})
onUpdated(() => {
    console.log('onUpdated') // 更新之后
})
onBeforeUnmount(() => {
    console.log('onBeforeUnmount') // 卸载之前
})
onUnmounted(() => {
    console.log('onUnmounted') // 卸载之后
})
```



- 把 Vue2 中的 beforeCreate 和 created 变成了 setup
- 相同的生命周期可以写多次

### setup 中的参数

#### 参数一：props

- 接受父组件传递的值

#### 参数二：context

- emit：传递自定义事件
- attrs：非 props 属性 父组件传递了值，子组件没有通过props接收
- slots：插槽信息

- 如何跨层级组件通信（依赖注入）

  - 祖先通过 provide 提供数据
  - 后代通过 inject 注入数据
    - 根据单项数据流的思想，注入过来的这个数据不能直接修改
    - 如果想改需要祖先再提供一个修改数据的方法到后代

  

  
### script setup 语法糖

  defineProps 接受数据

  - defineEmits 生成 emit 提交自定义事件

  - defineExpose

    - script setup 中数据默认外界是不能访问的

    - 如果需要访问，通过次函数暴露一下

### v-model
- 相当于 :modelValue 和 @update:modelValue 的语法糖
- 把 Vue2 中的 v-model 和 .sync 修饰符综合起来了，组件上也可以写多次 v-model







## 为什么使用vite

什么是vite

- vite 是一个构建工具

vue-cli 脚手架 

- 不管你的vue 是 2.x 或者 3.x  创建项目都是 `vue create 项目名称`

- 它基于的构建工具是 webpack



webpack

- ![1694851516571](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1694851516571.png)



vite

- ![1694851771617](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1694851771617.png)





为什么使用vite

- 使用vite 可以大大的提高我们的开发效率
- vite 是按需加载，修改某个页面时，只会更新这个页面，而不会重新加载所有的页面
- webpack 每次修改某个页面，所有的页面都会重新加载一遍





## 基于vite搭建vue3项目

不适用vite 也可以搭建vue3项目

### 传统的搭建方式

vue create 项目名称

- 这里是基于webpack 构建工具的



使用 NPM:

```bash
$ npm create vite@latest
```

使用 Yarn:

```bash
$ yarn create vite
```

使用 PNPM:

```bash
$ pnpm create vite
```







# vue3-demo















# 项目实战