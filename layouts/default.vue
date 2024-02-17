<script setup>
import "virtual:svg-icons-register";
</script>
<template>
  <header class="h-[70px] flex items-center justify-between relative z-20">
    <nuxt-link to="/">
      <SvgIcon class="ml-4 cursor-pointer w-[200px] h-[50px]" name="TWMHBO" />
    </nuxt-link>
    <SvgIcon
      class="flex items-center absolute right-16 md:hidden cursor-pointer w-[50px]"
      name="menu"
    />
    <HeaderMenu />
    <Account class="hidden" />
    <SvgIcon class="relative -left-2 w-[48px]" name="user" />
  </header>
  <NuxtPage />
  <footer class="pt-5 pb-10 lg:flex">
    <FooterMenu />
  </footer>
</template>

<style scoped></style>
