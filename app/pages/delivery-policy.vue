<script setup lang="ts">
  definePageMeta({
    // layout: 'default',
    name: 'delivery-policy',
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
          <h2 class="text-5xl font-semibold">Политика доставки</h2>
        </div>
      </div>
    </TheHeader>
    <section class="container mx-auto">
      <div
        class="px-10 w-full flex flex-col gap-10 mb-10 text-3xl font-unbounded"
      >
        <img class="" src="../assets/policyDelivery.jpg" alt="" />
        <ul class="list-group">
          <li>ТК СДЭК</li>
          <li>Дни отправки - понедельник пятница</li>
          <li>
            Доставка от 3х рабочих дней (сб и вс выходные). Возможна экспресс
            доставка - 1 день (оплата рассчитывается отдельно)
          </li>
          <li>
            Посылка оплачивается получателем при получении. Стоимость доставки
            становится известна при оформлении посылки
          </li>
          <li>
            Оплата наличными и безналичным (перевод или qr-код) - для физических
            лиц. Для юрлиц - по выставленному счету по ранее заключённому
            договору
          </li>
          <li>Возможна доставка курьером</li>
        </ul>
      </div>
    </section>
  </div>
</template>
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  .list-group {
    list-style: inside;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  li {
    font-family: 'Roboto', serif;
    font-weight: 300;
    font-style: normal;
  }

  img {
    width: 100%;
    object-fit: cover;
    max-height: 45vh;
    border-radius: 10px;
  }
</style>
