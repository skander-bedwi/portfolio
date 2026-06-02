<script setup lang="ts">
function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <header class="navbar">
    <div class="navbar-brand">
      <span>Skander</span>
    </div>
    <nav class="navbar-links">
      <a @click="scrollTo('home')">Home</a>
      <a @click="scrollTo('about')">About</a>
      <a @click="scrollTo('projects')">Projects</a>
      <a @click="scrollTo('contact')">Contact</a>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #1a1a2e;
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar-brand span {
  font-size: 1.5rem;
  font-weight: bold;
  color: #42b883;
}

.navbar-links {
  display: flex;
  gap: 2rem;
}

.navbar-links a {
  color: #ffffff;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  transition: color 0.3s;
}

.navbar-links a:hover {
  color: #42b883;
}

main {
  min-height: 100vh;
}
</style>