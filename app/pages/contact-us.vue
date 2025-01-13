<script setup lang="ts">
  definePageMeta({
    // layout: 'default',
    // name: 'contact-us',
    // alias: 'contact-us',
    title: 'Contact Us',
    description: `Get in Touch: We're All Ears!`,
    navOrder: '11',
    type: 'secondary',
    icon: 'i-mdi-home',
    // ogImage: 'images/ogImage.png', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
  })
</script>
<template>
  <div
    class="pb-12 text-center bg-primary-600 dark:bg-primary-200 text-white dark:text-primary-800"
  >
    <div class="container mx-auto px-4">
      <div class="-mx-4 flex flex-wrap">
        <div class="mx-auto px-4 rounded-2xl w-full lg:w-8/12">
          <div
            class="px-6 py-12 rounded-lg tertiary-card flex flex-col gap-3 items-center"
          >
            <h2 class="font-bold leading-tight mb-2 text-3xl">
              Свяжись с нами
            </h2>
            <p class="mb-5">Перейди в телеграм и задай свой вопрос!</p>
            <a
              href="https://t.me/vselena_deva"
              class="btn tg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="../assets/telegram.png" alt="" />
              <span>Перейти</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .tg {
    width: fit-content;
    padding: 7px 12px;
    background-color: #fff;
    color: black;
    border-radius: 10px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
</style>
