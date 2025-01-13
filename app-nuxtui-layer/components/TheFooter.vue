<script setup lang="ts">
  const { navlinksPrimary } = useNav()
  const { isMobileMenuOpen } = useMobileMenu()
</script>
<template>
  <footer class="footer">
    <p>&copy;2025 НеХудожник | Все права защищены</p>
  </footer>
</template>
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');

  .footer {
    position: relative;
    width: 100%;
    background: #aa6a2a;
    max-height: 150px;
    padding: 20px 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .footer p {
    color: #fff;
    margin: 15px 0 10px 0;
    font-size: 1rem;
    font-weight: 300;
    text-align: center;
  }
</style>
