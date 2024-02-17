<script setup></script>
<template>
  <div
    class="bg-white w-[95%] ml-[2.5%] py-4 px-6 shadow-md rounded-[10px] z-10 md:flex gap-x-4 md:items-start relative lg:py-8 lg:max-w-[1200px] lg:mx-auto"
  >
    <NewsTitle class="relative top-[-4.5rem] md:absolute w-full">
      最新消息
    </NewsTitle>
    <div class="rounded-[20px] overflow-hidden md:w-1/2">
      <img
        class="hover:scale-110 transition-transform"
        src="@/assets/img/news_list.png"
        alt=""
      />
    </div>
    <div class="msg mt-4 select-none space-y-3 pb-4 md:w-1/2">
      <span
        class="category border-[#ff9d56] text-[#ff9d56] rounded-[20px] border-2 py-1 px-3 font-bold"
        >新聞</span
      >
      <h1 class="font-bold text-xl md:text-3xl">
        台灣大哥大攜手華納兄弟探索集團推出HBO GO電信獨家方案
      </h1>
      <p class="text-gray-500">更新日期：2024.02.01</p>
      <p class="line-clamp-3">
        台灣大積極拓展影視內容布局與影音串流平台「HBO
        GO」強強聯手，推出市場最低價HBO
        GO電信獨家方案。歡慶獨家合作，台灣大即日起至2月14日，加碼推出新春快閃優惠，申辦12個月HBO
        GO方案，每月只要69元，再抽1,000元momo幣
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
