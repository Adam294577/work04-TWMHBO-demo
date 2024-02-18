<script setup>
import { usetHeaderStore } from "~/stores/counter";

const store = usetHeaderStore();
const { MenuIconOpen } = storeToRefs(store);
const { handMenuIcon, CloseMenuIcon } = store;
</script>
<template>
  <div
    class="menuOpen h-full w-full absolute bg-[#000] z-50 top-0 md:hidden"
    v-show="MenuIconOpen"
  >
    <nav class="text-white">
      <SvgIcon
        @click="handMenuIcon"
        name="cancel"
        class="absolute left-1/2 -translate-x-1/2 top-[30px] cursor-pointer w-[50px] h-[50px]"
      />
      <ul class="text-center pt-[100px] space-y-12">
        <li @click="CloseMenuIcon('/news')" class="text-lg">
          <nuxt-link to="/news">最新消息</nuxt-link>
        </li>
        <li @click="CloseMenuIcon('/promocode')" class="text-lg">
          <nuxt-link to="/promocode">序號兌換</nuxt-link>
        </li>
        <li @click="CloseMenuIcon('/activate')" class="text-lg">
          <nuxt-link to="/activate">立即啟用</nuxt-link>
        </li>
        <li @click="CloseMenuIcon('/contract')" class="text-lg">
          <nuxt-link to="/contract">我的合約</nuxt-link>
        </li>
        <li @click="CloseMenuIcon('/faq')" class="text-lg">
          <nuxt-link to="/faq">常見問題</nuxt-link>
        </li>
      </ul>
      <nuxt-link to="/" @click="CloseMenuIcon('/')">
        <SvgIcon
          class="ml-4 cursor-pointer w-[200px] h-[50px] scale-150 absolute left-1/2 -translate-x-1/2 bottom-12"
          name="TWMHBO"
        />
      </nuxt-link>
    </nav>
  </div>
</template>

<style lang="scss" scoped></style>
