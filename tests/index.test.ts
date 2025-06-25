import { expect, test } from 'vitest'
import { PLANS } from '../src'

test('myFunction', () => {
  expect(PLANS).toHaveLength(3)
})

test('each inside plans', () => {
  const plansNames = PLANS.map((plan) => plan.name)
  expect(plansNames).toEqual(['Arcade', 'Advanced', 'Pro'])
})
