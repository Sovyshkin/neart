<script setup lang="ts">
  import axios from 'axios'
  import { getData, setData } from 'nuxt-storage/local-storage'
  definePageMeta({
    // layout: 'default',
    name: 'store',
    // alias: '[...slug]',
    title: 'Store',
    description: `Shop 'til You Drop: Your E-Commerce Haven!`,
    navOrder: '3',
    hidden: true,
    type: 'primary',
    icon: 'i-mdi-home',
    // ogImage: 'images/ogImage.png', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
  })

  const route = useRoute()
  const { id: id } = route.params
  const title = ref()
  const description = ref()
  const price = ref()
  let img_urls = []
  const items = ref([])
  const carouselRef = ref()
  const is_favorite = ref(false)
  let isLoading = ref(false)
  async function load_pic() {
    try {
      isLoading.value = true
      let customer_id = getData('id')
      let response = await axios.get(
        `http://45.12.238.27:5000/get_picture/${id}?customer_id=${customer_id}`,
      )
      console.log(response)
      title.value = response.data.title
      description.value = response.data.description
      price.value = response.data.price
      is_favorite.value = response.data.is_favorite
      img_urls = response.data.img_urls
      img_urls.forEach((item) => {
        items.value.push(`http://45.12.238.27:5000/images/${item}`)
      })
      // setInterval(() => {
      //   if (!carouselRef.value) return

      //   if (carouselRef.value.page === carouselRef.value.pages) {
      //     return carouselRef.value.select(0)
      //   }

      //   carouselRef.value.next()
      // }, 3000)
    } catch (err) {
      console.log(err)
    } finally {
      isLoading.value = false
    }
  }
  load_pic()
  useHead({
    title: title || '',
  })

  useServerSeoMeta({
    description: () => description || '',
  })

  async function addCart() {
    try {
      isLoading.value = true
      let response = await axios.post(`http://45.12.238.27:5000/add_elem`, {
        cart_id: getData('cart_id'),
        picture_id: id[0],
      })
      console.log(response)
    } catch (err) {
      console.log(err)
    } finally {
      isLoading.value = false
    }
  }

  async function addFav() {
    try {
      isLoading.value = true
      let response = await axios.post(
        `http://45.12.238.27:5000/favorites/add`,
        {
          customer_id: getData('id'),
          picture_id: id[0],
        },
      )
      console.log(response)
      load_pic()
    } catch (err) {
      console.log(err)
    } finally {
      isLoading.value = false
    }
  }

  async function removeFav() {
    try {
      isLoading.value = true
      let response = await axios.post(
        `http://45.12.238.27:5000/favorites/remove`,
        {
          customer_id: getData('id'),
          picture_id: id[0],
        },
      )
      console.log(response)
      load_pic()
    } catch (err) {
      console.log(err)
    }
  }
</script>
<template>
  <app-loader v-if="isLoading"></app-loader>
  <section class="mx-4 my-16 product-details" v-else>
    <div class="flex justify-center max-h-96 xl:max-h-[600px]">
      <div class="bg-white rounded-lg">
        <UCarousel
          :items="items"
          :ui="{
            item: 'basis-full',
            container: 'rounded-lg',
            indicators: {
              wrapper: 'relative bottom-0 mt-4',
            },
          }"
          indicators
          class="max-h-96 xl:max-h-[600px] mx-auto"
        >
          <template #default="{ item }">
            <img :src="item" class="w-full" draggable="false" />
          </template>

          <template #indicator="{ onClick, page, active }">
            <UButton
              :label="String(page)"
              :variant="active ? 'solid' : 'outline'"
              size="2xs"
              class="rounded-full min-w-6 justify-center"
              @click="onClick(page)"
            />
          </template>
        </UCarousel>
        <!-- <img :src="image" class="max-h-full" /> -->
      </div>
    </div>
    <div class="mt-8 md:mt-0 md:mx-8">
      <div class="relative">
        <!-- <UBadge v-if="badge" :label="badge" class="-top-7 absolute" /> -->
        <h3>{{ title }}</h3>
      </div>
      <div class="flex items-center justify-between mt-4">
        <div>
          <span class="font-bold text-xl">{{ price }} ₽</span>
        </div>
        <div>
          <UButton
            class="rounded-lg"
            variant="ghost"
            v-if="!is_favorite"
            @click="addFav()"
          >
            <img class="w-10" src="../../assets/favorite.png" alt="" />
          </UButton>
          <UButton
            class="rounded-lg"
            variant="ghost"
            v-else
            @click="removeFav()"
          >
            <img class="w-10" src="../../assets/favoriteFill.png" alt="" />
          </UButton>
        </div>
      </div>
      <div>
        <div class="mt-4 w-full">
          <UButton
            label="Add To Cart"
            class="rounded-lg"
            size="lg"
            block
            @click="addCart"
          >
            <span class="py-2 lg:text-lg">Добавить в корзину</span>
          </UButton>
        </div>
      </div>
      <div class="mt-8">
        <span>{{ description }}</span>
      </div>
    </div>
  </section>
</template>
<style scoped>
  .product-details {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    grid-template-areas: 'image' 'details';
  }
  @media (min-width: 768px) {
    .product-details {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;
      grid-template-areas: 'image details';
    }
  }
</style>
