<template>
  <nav>
    <ul>
      <li><NuxtLink to="/">홈</NuxtLink></li>
      <li><NuxtLink to="/about">어바웃</NuxtLink></li>
    </ul>
  </nav>
</template>

<style scoped>
nav ul {
  display: flex;
  gap: 1rem;
  list-style: none;
  padding: 0;
}
</style>