<template>
  <button @click = "fetchPosts">Add</button>
  <post-form
    @create = "createPost"
  />
  <div v-if="posts.length ==0">Пусто</div>
  <post-list
    v-else
    :posts = "posts"
    @remove = "removePost"
   />
</template>

<script>
import axios from "axios"
import { title } from "process"
export default{
  data(){
    return{
      posts: [],
      id: 0
    }
  },
  methods: {
    removePost(post){
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    async fetchPosts(){
      const responce = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5")
      this.posts = responce.data
      this.id = this.posts.length
    },
    createPost(post){
      this.posts.push({
        title: post.title,
        body: post.body,
        id: ++this.id
      })
    }
  },
  mounted(){
    this.fetchPosts()
  }
}
</script>

<style>
</style>
