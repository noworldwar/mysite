<template>
    <h1 class="title">{{ title }}</h1>
</template>

<script>
export default {
    name:'TitleComponent',
    props:{
        title:{
            type:String,
            required:true
        }
    }
}
</script>

<style scoped>
h1,title {
    color: aquamarine;
}
</style>
