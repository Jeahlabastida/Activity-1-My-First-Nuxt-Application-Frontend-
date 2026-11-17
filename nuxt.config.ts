import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      title: 'My Personal Profile',
      meta: [{ name: 'description', content: 'A two-page personal profile website built with Nuxt.js' }],
    },
  },
})
