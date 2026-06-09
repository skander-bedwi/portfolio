import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// Crée un router de test
const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/', component: HomeView }]
})

describe('HomeView', () => {

  it('doit afficher le nom Skander', async () => {
    const wrapper = mount(HomeView, {
      global: { plugins: [router] }
    })
    expect(wrapper.text()).toContain('Skander')
  })

  it('doit afficher le titre Développeur Full Stack', async () => {
    const wrapper = mount(HomeView, {
      global: { plugins: [router] }
    })
    expect(wrapper.text()).toContain('Développeur Full Stack')
  })

  it('doit avoir un bouton Voir mes projets', async () => {
    const wrapper = mount(HomeView, {
      global: { plugins: [router] }
    })
    expect(wrapper.text()).toContain('Voir mes projets')
  })

})