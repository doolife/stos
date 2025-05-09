<template>
  <div>
    <h1>게시물 ID: {{ id }}</h1>
    <pre>{{ post }}</pre>
  </div>
</template>

<script setup>
const route = useRoute()
const id = route.params.id

const { data: post } = await useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
</script>
