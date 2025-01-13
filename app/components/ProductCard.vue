<script setup lang="ts">
  import { inject } from 'vue'
  import axios from 'axios'
  import { getData, setData } from 'nuxt-storage/local-storage'
  const { id, title, price, img_urls, description } = defineProps<{
    id: String
    title: String
    price: String
    img_urls: String[]
    description: String
    cart: Boolean
    favorite: Boolean
  }>()
  // console.log(id, title, price, img_urls, description)
  const load_info = inject('load_info')
  async function deleteElem() {
    try {
      let response = await axios.post(`http://45.12.238.27:5000/delete_elem`, {
        cart_id: getData('cart_id'),
        picture_id: id,
      })
      console.log(response)
      load_info()
    } catch (err) {
      console.log(err)
    }
  }

  async function deleteFav() {
    try {
      let response = await axios.post(
        `http://45.12.238.27:5000/favorites/remove`,
        {
          customer_id: getData('id'),
          picture_id: id,
        },
      )
      console.log(response)
      load_info()
    } catch (err) {
      console.log()
    }
  }

  const items = ref([])
  const carouselRef = ref()

  onMounted(() => {
    img_urls.forEach((item) => {
      items.value.push(`http://45.12.238.27:5000/images/${item}`)
    })
    const intervalId = setInterval(() => {
      if (!carouselRef.value) return

      if (carouselRef.value.page === carouselRef.value.pages) {
        return carouselRef.value.select(0)
      }

      carouselRef.value.next()
    }, 3000)

    // Не забудьте очистить интервал при размонтировании компонента
    onUnmounted(() => clearInterval(intervalId))
  })
</script>
<template>
  <NuxtLink
    class="m-4 relative w-full md:w-1/3 lg:w-1/4 xl:w-1/4"
    :to="`/store/${id}`"
  >
    <!-- <span
      v-if="badge"
      class="absolute bg-primary font-serif p-1 right-0 rounded-bl-md rounded-br-none rounded-tl-none rounded-tr-md text-white text-xs z-10"
      >{{ badge }}</span
    > -->
    <UCard class="md:h-full card">
      <template #header>
        <div class="flex justify-center">
          <div class="-m-4 bg-white h-250 rounded-lg" height="250">
            <!-- <NuxtImg class="max-h-full" height="250" :src="items[0]" /> -->
            <UCarousel
              ref="carouselRef"
              v-slot="{ item }"
              :items="items"
              :ui="{ item: 'basis-full' }"
              class="rounded-lg overflow-hidden max-h-full"
              height="250"
              indicators
            >
              <img
                :src="item"
                class="w-full h-full max-h-64"
                draggable="false"
              />
            </UCarousel>
            <!-- <img v-if="image" :src="image" height="250" class="max-h-full" /> -->
          </div>
        </div>
      </template>
      <div>
        <span>{{ title }}</span>
        <div class="flex font-medium items-center justify-between mt-4">
          <span class="font-bold">{{ price }} ₽</span>
        </div>
        <button class="btn mt-3" v-if="cart" @click.stop.prevent="deleteElem">
          Убрать из корзины
        </button>
        <button
          class="btn mt-3"
          v-if="favorite"
          @click.stop.prevent="deleteFav"
        >
          Убрать из избранного
        </button>
      </div>
    </UCard>
  </NuxtLink>
</template>
<style scoped>
  .card {
    background-color: #f1dbb2;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  .btn {
    width: 100%;
    background-color: rgb(var(--color-primary-600));
    border-radius: 10px;
    padding: 12px 17px;
    color: #fff;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
  }
</style>
