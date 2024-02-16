<script setup>
import "virtual:svg-icons-register";
</script>
<template>
  <header class="h-[70px] flex items-center justify-between relative z-20">
    <SvgIcon class="ml-4 cursor-pointer w-[200px]" name="TWMHBO" />
    <SvgIcon
      class="flex items-center absolute right-16 md:hidden cursor-pointer w-[50px]"
      name="menu"
    />
    <HeaderMenu />
    <Account class="hidden" />
    <SvgIcon class="relative -left-2 w-[48px]" name="user" />
  </header>
  <slot></slot>
  <footer>foot</footer>
</template>

<style scoped></style>
