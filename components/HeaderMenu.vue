<script setup>
const route = useRoute();
const nowPath = computed(() => route.path);
</script>
<template>
  <div class="headerMenu hidden md:inline-block grow bg-black">
    <ul class="text-center flex gap-x-4 ml-8">
      <li class="text-white hover:text-[#ff9100] transition-colors relative">
        <nuxt-link to="/news">最新消息</nuxt-link>
        <RouterActiveBar v-if="nowPath === '/news'" />
      </li>
      <li class="text-white hover:text-[#ff9100] transition-colors relative">
        <nuxt-link to="/promocode">序號兌換</nuxt-link>
        <RouterActiveBar v-if="nowPath === '/promocode'" />
      </li>
      <li class="text-white hover:text-[#ff9100] transition-colors relative">
        <nuxt-link to="/activate">立即啟用</nuxt-link>
        <RouterActiveBar v-if="nowPath === '/activate'" />
      </li>
      <li class="text-white hover:text-[#ff9100] transition-colors relative">
        <nuxt-link to="/contract">我的合約</nuxt-link>
        <RouterActiveBar v-if="nowPath === '/contract'" />
      </li>
      <li class="text-white hover:text-[#ff9100] transition-colors relative">
        <nuxt-link to="/faq">常見問題</nuxt-link>
        <RouterActiveBar v-if="nowPath === '/faq'" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
