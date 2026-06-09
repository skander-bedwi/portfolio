import { describe, it, expect } from 'vitest'
import router from '../router'

describe('Router', () => {

  it('doit avoir une route pour la page home', () => {
    const homeRoute = router.getRoutes().find(r => r.name === 'home')
    expect(homeRoute).toBeDefined()
    expect(homeRoute?.path).toBe('/')
  })

})