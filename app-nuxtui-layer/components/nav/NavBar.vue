<script setup lang="ts">
  import axios from 'axios'
  import { getData, setData } from 'nuxt-storage/local-storage'
  const { isMobileMenuOpen } = useMobileMenu()
  let title = ref()
  async function search() {
    try {
      let response = await axios.get(
        `http://45.12.238.27:5000/pictures/title/${title.value}`,
      )
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  }
  let isReg = ref(false)
  let isLog = ref(false)
  let isCode = ref(false)
  let email = ref()
  let id = ref(getData('id'))

  function handleCode(mail: string) {
    console.log(email)
    if (email) {
      isLog.value = false
      isCode.value = true
      email.value = mail
    }
  }
  function handleConfirm(b) {
    isCode.value = b
    if (!b) {
      location.reload()
    }
  }
</script>
<template>
  <nav class="container mx-auto px-4">
    <div class="flex h-full items-center justify-between navbar-grid py-4">
      <div style="grid-area: logo" class="flex justify-center">
        <TheLogo />
      </div>
      <div
        data-pg-name="Hamburger"
        style="grid-area: hamburger"
        class="sm:hidden"
      >
        <NavHamburger @click="isMobileMenuOpen = true" />
      </div>
      <div
        data-pg-name="NavBarPrimary"
        style="grid-area: primary-nav"
        class="hidden sm:flex"
      >
        <NavPrimary class="sm:w-full" />
      </div>
      <div data-pg-name="Searchbox" style="grid-area: search">
        <UFormGroup hint="Optional">
          <UInput
            placeholder="начни искать..."
            size="md"
            trailing-icon="i-material-symbols-search-rounded"
            class="w-full"
            v-model="title"
            @change="search"
          />
        </UFormGroup>
      </div>
      <div data-pg-name="Profile" class="flex space-x-1" v-if="id">
        <ProfileActions class="!hidden sm:!flex" />
        <NavSecondary />
      </div>
      <div class="flex gap-2" v-if="!id">
        <UButton
          class="font-bold my-4 sm:my-2 text-center btn"
          @click="isLog = true"
          >Войти</UButton
        >
        <UButton
          class="font-bold my-4 sm:my-2 text-center btn"
          @click="isReg = true"
          >Присоединиться</UButton
        >
      </div>
    </div>
    <USlideover
      v-model="isMobileMenuOpen"
      data-pg-name="NavBarSecondary"
      style="grid-area: primary-nav"
      class="w-80 sm:hidden"
      side="left"
    >
      <NavPrimary class="m-4" />
    </USlideover>
  </nav>
  <UModal v-model="isLog">
    <UCard
      :ui="{
        ring: '',
        divide: 'divide-y divide-gray-100 dark:divide-gray-800',
      }"
    >
      <UIcon
        @click="isLog = false"
        name="i-codicon:close"
        class="w-10 h-10 cursor-pointer absolute top-7 right-7 z-10"
      />
      <app-login @goCode="handleCode"></app-login>
    </UCard>
  </UModal>
  <UModal v-model="isReg">
    <UCard
      :ui="{
        ring: '',
        divide: 'divide-y divide-gray-100 dark:divide-gray-800',
      }"
    >
      <UIcon
        @click="isReg = false"
        name="i-codicon:close"
        class="w-10 h-10 cursor-pointer absolute top-7 right-7 z-10"
      />
      <app-auth></app-auth>
    </UCard>
  </UModal>
  <UModal v-model="isCode">
    <UCard
      :ui="{
        ring: '',
        divide: 'divide-y divide-gray-100 dark:divide-gray-800',
      }"
    >
      <UIcon
        @click="isCode = false"
        name="i-codicon:close"
        class="w-10 h-10 cursor-pointer absolute top-7 right-7 z-10"
      />
      <enter-code :email="email" @confirm="handleConfirm"></enter-code>
    </UCard>
  </UModal>
</template>
<style scoped>
  .btn {
    background-color: #aa6a2a;
  }
  .navbar-grid {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto;
    grid-template-areas: 'hamburger logo profile' 'search search search';
    gap: 20px;
  }
  @media (min-width: 640px) {
    .navbar-grid {
      display: grid;
      grid-template-columns: auto auto auto;
      grid-template-rows: auto auto;
      grid-template-areas: 'logo search profile' 'primary-nav primary-nav primary-nav';
      gap: 20px;
    }
  }
  @media (min-width: 1280px) {
    .navbar-grid {
      display: grid;
      grid-template-columns: auto auto auto auto;
      grid-template-rows: auto;
      grid-template-areas: 'logo primary-nav search profile';
    }
  }
</style>
