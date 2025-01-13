<script setup lang="ts">
  import site from '~~/site'
  const { name, logo } = site
</script>
<template>
  <ULink data-pg-name="Logo" class="flex items-center sm:flex-row" to="/">
    <div class="group">
      <img src="/logo.png" class="logo" alt="" />
      <img src="/logoText.png" class="text" alt="" />
    </div>
  </ULink>
</template>
<style scoped>
  .group {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .text {
    padding-top: 10px;
    width: 180px;
  }

  .logo {
    width: 70px;
  }

  @media (max-width: 768px) {
    .text {
      width: 100px;
    }

    .logo {
      width: 50px;
    }
  }

  @media (max-width: 324px) {
    .logo {
      width: 30px;
    }
  }
</style>
