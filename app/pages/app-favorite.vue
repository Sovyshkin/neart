<script setup lang="ts">
  import { provide } from 'vue'
  import axios from 'axios'
  import { getData } from 'nuxt-storage/local-storage'
  definePageMeta({
    // layout: 'default',
    // name: 'index',
    // alias: 'index',
    title: 'Home',
    description: 'Новые поступления, Большая экономия!',
    hidden: true,
    navOrder: 1,
    type: 'primary',
    icon: 'i-mdi-home',
    // ogImage: 'images/ogImage.png', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
  })

  provide('load_info', load_info)

  const route = useRoute()
  const capitalize = (s) => (s && s[0].toUpperCase() + s.slice(1)) || ''

  useHead({
    title: () => capitalize(route.params.category),
  })

  useServerSeoMeta({
    description: () => capitalize(route.params.category),
  })

  // const { category } = route.params
  let cart_id = ref(getData('cart_id'))
  let id = ref(getData('id'))
  let products = ref()
  let isLoading = ref(false)
  async function load_info() {
    try {
      isLoading.value = true
      let response = await axios.get(
        `http://45.12.238.27:5000/favorites/${id.value}`,
      )
      console.log(response)
      products.value = response.data.favorites
    } catch (err) {
      console.log(err)
    } finally {
      isLoading.value = false
    }
  }
  if (cart_id.value) {
    load_info()
  } else {
  }
</script>
<template>
  <app-loader v-if="isLoading"></app-loader>
  <div class="pb-16" v-else>
    <h1 class="text-center text-2xl">Избранное</h1>
    <UContainer class="py-8">
      <!-- <section
        class="flex items-center justify-center m-4"
      >
        <span class="font-bold text-sm">Filter Badges</span>
        <div class="ml-4 space-y-2">
          <UButton
            v-for="(badge, index) in badges"
            :key="index"
            :label="badge"
            :variant="filteredBadges.has(badge) ? 'soft' : 'outline'"
            class="mr-2"
            @click="toggleFilter(badge)"
          />
        </div>
      </section> -->
      <section data-pg-name="Products" class="flex flex-wrap justify-center">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
          v-bind="product"
          :favorite="true"
          @checkDel="load_info"
        />
      </section>
    </UContainer>
  </div>
</template>
<style scoped></style>
