<script setup lang="ts">
  import axios from 'axios'
  const message = ref()
  const cards = ref([])
  async function load_artists() {
    try {
      let response = await axios.get(`http://45.12.238.27:5000/get_artists`)
      console.log(response)
      cards.value = response.data
    } catch (err) {
      console.log(err)
    }
  }

  async function load_arts() {
    try {
      let response = await axios.get(`http://45.12.238.27:5000/get_pictures`)
      console.log(response)
      cards.value = response.data
    } catch (err) {
      console.log(err)
    }
  }

  async function load_orders() {
    try {
      let response = await axios.get(`http://45.12.238.27:5000/get_orders`)
      console.log(response)
      cards.value = response.data
    } catch (err) {
      console.log(err)
    }
  }

  const category =
    useRoute().params.category.toString().replace(/,/g, '/') ||
    useRoute().name.toString().replace(/,/g, '/')
  const name = ref('')
  const router = useRouter()
  if (category == 'arts') {
    load_arts()
    name.value = 'Картины'
  } else if (category == 'artists') {
    load_artists()
    name.value = 'Художники'
  } else if (category == 'orders') {
    load_orders()
    name.value = 'Заказы'
  }

  const modal = ref(false)
  const mainID = ref(0)

  function openModal(b, id) {
    modal.value = b
    mainID.value = id
  }

  async function goDelete() {
    try {
      let response = await axios.delete(
        `http://45.12.238.27:5000/artist/${mainID.value}`,
      )
      if (response.status == 200) {
        modal.value = false
        load_artists()
      }
    } catch (err) {
      console.log(err)
    }
  }
</script>
<template>
  <div class="wrap-btns">
    <nuxt-link class="btn" to="/admin/arts">Картины</nuxt-link>
    <nuxt-link class="btn" to="/admin/artists">Художники</nuxt-link>
    <nuxt-link class="btn" to="/admin/orders">Заказы</nuxt-link>
  </div>
  <h1>{{ name }}</h1>
  <div class="wrap-btns" v-if="category != 'orders'">
    <nuxt-link v-if="category == 'artists'" class="btn" to="/add-art"
      >Добавить художника</nuxt-link
    >
    <nuxt-link v-if="category == 'arts'" class="btn" to="/add-pic"
      >Добавить картину</nuxt-link
    >
  </div>
  <div class="users" v-if="category != 'arts'">
    <div class="user" v-for="card in cards">
      <span class="username">{{ card.username }}</span>
      <div class="user-wrap-btns">
        <img
          @click="$router.push(`/${category}/${card.id}`)"
          class="w-6 cursor-pointer"
          src="../../assets/edit.png"
          alt=""
        />
        <img
          @click="openModal(true, card.id)"
          class="w-6 cursor-pointer"
          src="../../assets/delete.png"
          alt=""
        />
      </div>
    </div>
  </div>
  <div class="pb-16" v-else>
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
          v-for="product in cards"
          :key="product.id"
          :product="product"
          :admin="true"
          v-bind="product"
        />
      </section>
    </UContainer>
  </div>
  <UModal v-model="modal">
    <UCard
      :ui="{
        ring: '',
        divide: 'divide-y divide-gray-100 dark:divide-gray-800',
      }"
    >
      <UIcon
        @click="modal = false"
        name="i-codicon:close"
        class="w-10 h-10 cursor-pointer absolute top-7 right-7 z-10"
      />
      <div class="card">
        <h1>Вы уверены?</h1>
        <div class="wrap-btns">
          <button class="btn yes" @click="goDelete()">Да</button>
          <button class="btn no" @click="modal = false">Нет</button>
        </div>
      </div>
    </UCard>
  </UModal>
</template>
<style scoped>
  .wrap-btns {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 20px;
  }

  .user-wrap-btns {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .btn {
    border-radius: 10px;
    padding: 12px 17px;
    color: black;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    border: 1px solid #aa6a2a;
    cursor: pointer;
  }

  .users {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
  }

  .user {
    width: 100%;
    padding: 20px;
    border: 1px solid #aa6a2a;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    border-radius: 20px;
    cursor: pointer;
    transition: all 500ms ease;
  }

  .user:hover {
    transform: translateY(-3px);
  }

  h1 {
    text-align: center;
    font-size: 26px;
  }

  .yes {
    background-color: #b4181f;
    border: 1px solid transparent;
    color: #fff;
  }
</style>
