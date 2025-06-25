import { z } from 'zod'

const AddonIdEnum = z.enum([
  'customizable_profile',
  'larger_storage',
  'online_services',
])

export const PersonalInfoSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z
    .string()
    .email()
    .max(100)
    .regex(/^[\w.%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i),
  phone: z.string().transform((val) => val.replaceAll(/[^\d+]/g, '')),
})

export const PlanSelectionSchema = z.object({
  plan_id: z.enum(['arcade', 'advanced', 'pro']),
  billing_period: z.enum(['yearly', 'monthly']),
})

export const AddonsSchema = z.object({
  addons: z.array(AddonIdEnum),
})

export type AddonId = z.infer<typeof AddonIdEnum>

export const NavigateSchema = z.object({
  step: z.number().min(1).max(4),
})

export const sessionIdSchema = z.object({
  sessionId: z.string().length(21, 'Invalid sessionId'),
})
