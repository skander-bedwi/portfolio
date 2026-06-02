<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const scrolled = ref(false)
const menuOpen = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="navbar" :class="{ scrolled }">
    <div class="navbar-brand" @click="scrollTo('home')">Skander.</div>

    <nav class="navbar-links">
      <a @click="scrollTo('home')">Home</a>
      <a @click="scrollTo('about')">About</a>
      <a @click="scrollTo('projects')">Projects</a>
      <a @click="scrollTo('contact')">Contact</a>
    </nav>

    <button class="menu-toggle" @click="menuOpen = !menuOpen" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>

    <div class="mobile-menu" :class="{ open: menuOpen }">
      <a @click="scrollTo('home'); menuOpen = false">Home</a>
      <a @click="scrollTo('about'); menuOpen = false">About</a>
      <a @click="scrollTo('projects'); menuOpen = false">Projects</a>
      <a @click="scrollTo('contact'); menuOpen = false">Contact</a>
    </div>
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
  padding: 1.1rem 3rem;
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(14, 14, 26, 0.7);
  backdrop-filter: blur(12px);
  border-bottom: 0.5px solid transparent;
  transition: border-color 0.3s, background 0.3s;
}

.navbar.scrolled {
  border-bottom-color: rgba(42, 42, 69, 0.8);
  background: rgba(14, 14, 26, 0.92);
}

.navbar-brand {
  font-size: 1.25rem;
  font-weight: 600;
  background: linear-gradient(135deg, #7F77DD, #D85A30);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
  user-select: none;
}

.navbar-links {
  display: flex;
  gap: 2rem;
}

.navbar-links a {
  color: #9896b0;
  text-decoration: none;
  font-size: 0.9rem;
  cursor: pointer;
  transition: color 0.2s;
  position: relative;
}

.navbar-links a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1px;
  background: #7F77DD;
  transition: width 0.3s;
}

.navbar-links a:hover {
  color: #f0eefc;
}

.navbar-links a:hover::after {
  width: 100%;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.menu-toggle span {
  display: block;
  width: 22px;
  height: 1.5px;
  background: #9896b0;
  transition: 0.3s;
}

.mobile-menu {
  display: none;
  position: fixed;
  top: 64px;
  left: 0;
  right: 0;
  background: #13131f;
  border-bottom: 0.5px solid #2a2a45;
  flex-direction: column;
  padding: 1rem 2rem;
  gap: 1rem;
  transform: translateY(-10px);
  opacity: 0;
  pointer-events: none;
  transition: all 0.25s;
}

.mobile-menu.open {
  opacity: 1;
  transform: translateY(0);
  pointer-events: all;
}

.mobile-menu a {
  color: #9896b0;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  padding: 0.5rem 0;
  border-bottom: 0.5px solid #2a2a45;
}

.mobile-menu a:hover {
  color: #f0eefc;
}

main {
  min-height: 100vh;
  background: #0e0e1a;
}

@media (max-width: 768px) {
  .navbar {
    padding: 1rem 1.5rem;
  }

  .navbar-links {
    display: none;
  }

  .menu-toggle {
    display: flex;
  }

  .mobile-menu {
    display: flex;
  }
}
</style>