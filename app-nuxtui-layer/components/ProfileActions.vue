<script setup lang="ts">
  // ...
</script>
<template>
  <div class="flex flex-nowrap items-center justify-center sm:!gap-1">
    <!-- <DarkModeSwitch /> -->
    <nuxt-link to="/app-cart">
      <UButton class="rounded-lg btn" variant="ghost">
        <UIcon name="i-material-symbols-shopping-bag" class="text-2xl" />
      </UButton>
    </nuxt-link>
    <nuxt-link to="/app-favorite">
      <UButton class="rounded-lg btn" variant="ghost">
        <UIcon name="i-material-symbols-favorite" class="text-2xl" />
      </UButton>
    </nuxt-link>
  </div>
</template>
<style scoped>
  .btn {
    color: #aa6a2a;
  }
</style>
