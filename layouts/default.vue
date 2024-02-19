<script setup>
import "virtual:svg-icons-register";
import { usetHeaderStore, useLightBoxStore } from "~/stores/counter";
const HeaderStore = usetHeaderStore();
const LightBoxStore = useLightBoxStore();
const { handMenuIcon } = HeaderStore;
const { darkBoxBool } = storeToRefs(LightBoxStore);
</script>

<template>
  <div
    class="darkBox h-full w-full bg-[#000] opacity-20 fixed top-0 z-40"
    v-if="darkBoxBool"
  ></div>
  <header class="h-[70px] flex items-center justify-between relative z-20">
    <nuxt-link to="/">
      <SvgIcon class="ml-4 cursor-pointer w-[200px] h-[50px]" name="TWMHBO" />
    </nuxt-link>
    <SvgIcon
      @click="handMenuIcon"
      class="flex items-center absolute right-16 md:hidden cursor-pointer w-[50px]"
      name="menu"
    />
    <HeaderMenu />
    <Account class="hidden" />
    <SvgIcon class="relative -left-2 w-[48px]" name="user" />
  </header>
  <HeaderMenuOpen />
  <NuxtPage />
  <footer class="pt-5 pb-10 lg:flex">
    <FooterMenu />
  </footer>
</template>

<style scoped></style>
