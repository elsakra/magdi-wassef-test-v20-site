import { defineCollection, z } from 'astro:content';

const team = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string().optional(), // Made optional - some team members may not have a role listed
    credentials: z.string().optional(),
    image: z.string().optional(),
    email: z.string().optional(),
    phone: z.string().optional(),
    specialties: z.array(z.string()).optional(),
    locations: z.array(z.string()).optional(),
    order: z.number().default(0),
  }),
});

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    shortDescription: z.string().optional(),
    image: z.string().optional(),
    icon: z.string().optional(),
    features: z.array(z.string()).optional(),
    order: z.number().default(0),
  }),
});

const testimonials = defineCollection({
  type: 'content',
  schema: z.object({
    author: z.string(),
    location: z.string().optional(),
    image: z.string().optional(),
    rating: z.number().min(1).max(5).optional(),
    featured: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    image: z.string().optional(),
    author: z.string().optional(),
    publishedAt: z.string(),
    updatedAt: z.string().optional(),
    tags: z.array(z.string()).optional(),
    category: z.string().optional(),
  }),
});

const faq = defineCollection({
  type: 'content',
  schema: z.object({
    question: z.string(),
    category: z.string().optional(),
    order: z.number().default(0),
  }),
});

const locations = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    address: z.string(),
    city: z.string(),
    state: z.string(),
    zip: z.string(),
    phone: z.string(),
    fax: z.string().optional(),
    email: z.string().optional(),
    image: z.string().optional(),
    mapUrl: z.string().optional(),
    hours: z.object({
      monday: z.string().optional(),
      tuesday: z.string().optional(),
      wednesday: z.string().optional(),
      thursday: z.string().optional(),
      friday: z.string().optional(),
      saturday: z.string().optional(),
      sunday: z.string().optional(),
    }).optional(),
    services: z.array(z.string()).optional(),
    acceptingNewPatients: z.boolean().default(true),
    order: z.number().default(0),
  }),
});

export const collections = {
  team,
  services,
  testimonials,
  blog,
  faq,
  locations,
};
