<script setup lang="ts">
  import axios from 'axios'
  const route = useRoute()
  const { category } = route.params

  let products = ref()
  async function load_info() {
    let response = await axios.get(`http://45.12.238.27:5000/get_pictures`)
    console.log(response)
    products.value = response.data.slice(0, 9)
  }
  load_info()
</script>
<template>
  <div>
    <UContainer class="py-8">
      <div
        class="-tracking-wide flex font-bold items-center justify-center text-5xl"
      >
        <span class="text-center text-primary">Горячие предложения</span>
        <UIcon name="i-twemoji-fire" class="ml-2" width="28px" />
      </div>
      <section
        data-pg-name="Products"
        class="flex flex-wrap justify-center mt-8"
      >
        <ProductCard
          v-for="(product, index) in products"
          :key="index"
          v-bind="product"
        />
      </section>
    </UContainer>
  </div>
</template>
<style scoped>
  .fon {
    background-image: url('../assets/back.jpg');
  }
</style>
