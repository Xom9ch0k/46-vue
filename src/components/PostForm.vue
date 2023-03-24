<template>
    <h3>Добавление поста</h3>
    <form @submit.prevent>
        <input v-focus type="text" v-model="post.title" placeholder="Тема поста">
        <input type="text" v-model="post.body" placeholder="Текст поста">
        <button @click="create">Создать</button>
    </form>
</template>

<script>
export default{
    data(){
        return{
            post: {
                title: "",
                body: ""
            }
        }
    },
    methods: {
        create(){
            this.$emit('create', this.post)
            this.post.title = ""
            this.post.body = ""
        }
    },
    name: "post-form"
}
</script>

<style>
</style>