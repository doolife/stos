<template>
  <div>
    <h1>유저 정보</h1>
    <pre>{{ user }}</pre>
  </div>
</template>

<script setup>
const { data: user } = await useFetch('/api/user');
</script>