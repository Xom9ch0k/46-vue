<template>
    <h3>Список постов</h3>
    <div>
        <post-item
            v-for="post in posts" :post = "post"
            @remove = "$emit('remove', post)"
        />
    </div>
</template>

<script>
export default{
    props: {
        posts:{
            type: Array,
            require: true
        }
    },
    name: "post-list",
}
</script>

<style>
</style>