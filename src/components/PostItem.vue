<template>
    <div>
        <div><strong>Тема:</strong > {{ post.title }} </div>
        <div><strong>Описание:</strong> {{ post.body }} </div>
        <div><strong>ID:</strong> {{ post.id }} </div>
        <button @click="$emit('remove', post)">Удалить</button>
    </div>
</template>

<script>
export default{
    props: {
        post:{
            type: Object,
            require: true
        }
    },
    name: "post-item",
}
</script>

<style>
</style>