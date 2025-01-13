<script setup lang="ts">
  definePageMeta({
    // layout: 'default',
    name: 'about-us',
    // alias: '[...slug]',
    title: 'О нас',
    description: `Сообщество "НеХудожник" - вдохновляющее и поддерживающее пространство для непрофессиональных художников`,
    navOrder: '2',
    type: 'primary',
    icon: 'i-mdi-home',
    // ogImage: 'images/ogImage.png', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
  })
</script>
<template>
  <div>
    <TheHeader>
      <div>
        <div class="flex items-center justify-center">
          <h2 class="text-5xl font-semibold">О нас</h2>
        </div>
      </div>
    </TheHeader>
    <section class="container mx-auto">
      <div
        class="px-10 w-full flex flex-col gap-10 mb-10 text-3xl font-unbounded"
      >
        <img
          class="rounded-3xl w-full h-1/4"
          src="../assets/aboutUs.jpg"
          alt=""
        />
        <span
          >Сообщество <b>"НеХудожник"</b> - вдохновляющее и поддерживающее
          пространство для непрофессиональных художников, где каждый может
          раскрыть свой творческий потенциал и поделиться своим искусством с
          миром.</span
        >
        <span
          >Мы объединяем людей, которые любят искусство ищут
          единомышленников.</span
        >
        <span
          >Вместе мы сообщество, где каждый голос услышан, а каждая картина
          находит своего зрителя.</span
        >
      </div>
    </section>
  </div>
</template>
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  span {
    font-family: 'Roboto', serif;
    font-weight: 300;
    font-style: normal;
  }
</style>
