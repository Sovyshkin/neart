<script setup lang="ts">
  import { getData, setData } from 'nuxt-storage/local-storage'
  const { navlinksSecondary } = useNav()

  const dropdownItems = [
    [
      {
        slot: 'account',
        disabled: true,
      },
      ...navlinksSecondary.value.map((navlink) => ({
        slot: navlink.link.replace(/^\//, '').replaceAll('/', '-'),
        label: navlink.text,
        icon: navlink.icon,
        to: navlink.link,
        activeClass: 'text-primary',
      })),
      // {
      //   label: 'Админ панель',
      //   slot: 'admin-panel',
      //   to: '/admin/arts',
      //   icon: 'i-dashicons-admin-generic',
      //   activeClass: 'text-primary',
      // },
    ],
  ]
  const id = getData('id')
  if (id == 15) {
    dropdownItems[0].push({
      label: 'Админ панель',
      slot: 'admin-panel',
      to: '/admin/arts',
      icon: 'i-dashicons-admin-generic',
      activeClass: 'text-primary',
    })
  }
</script>
<template>
  <UDropdown
    :popper="{ placement: 'bottom-start' }"
    :ui="{
      container: '!-ml-2 sm:ml-auto',
      rounded: '',
      width: 'w-full sm:w-48',
      item: { disabled: 'cursor-text select-text opacity-100' },
    }"
    :items="dropdownItems"
  >
    <UAvatar src="" alt="Avatar" size="lg" class="sm:ml-2" />
  </UDropdown>
</template>
<style scoped></style>
