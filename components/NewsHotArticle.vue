<script setup></script>
<template>
  <div
    class="bg-white w-[95%] ml-[2.5%] py-4 px-6 mt-[5rem] md:mt-[8rem] shadow-md rounded-[10px] z-10 md:flex gap-x-4 md:items-start relative lg:max-w-[1200px] lg:mx-auto"
  >
    <NewsTitle
      class="relative md:top-[-5rem] top-[-4.5rem] md:absolute text-black"
    >
      熱門文章
    </NewsTitle>
    <ul class="flex gap-2 lg:gap-14 flex-wrap md:flex-nowrap md:space-x-8">
      <NewsCard>
        <template #img>
          <img
            class="hover:scale-110 transition-transform"
            src="@/assets/img/news_list2.png"
            alt=""
          />
        </template>
        <template #category>
          <span
            class="border-[#ff9d56] text-[#ff9d56] rounded-[20px] border-2 py-[0.1rem] px-2 mr-2 font-medium text-base"
          >
            新聞
          </span>
        </template>
        <template #title>
          HBO亞洲原創製作《何百芮的地獄毒白》2月10日大年初一HBO GO 獨家上線
        </template>
        <template #date>
          <p class="text-gray-500 absolute bottom-0">更新日期：2024.02.01</p>
        </template>
      </NewsCard>
      <NewsCard>
        <template #img>
          <img
            class="hover:scale-110 transition-transform"
            src="@/assets/img/news_list2.png"
            alt=""
          />
        </template>
        <template #category>
          <span
            class="border-[#ff5656] text-[#ff5656] rounded-[20px] border-2 py-[0.1rem] px-2 mr-2 font-medium text-base"
          >
            遊戲
          </span>
        </template>
        <template #title> HBO亞洲原創製作《何百芮的地獄毒白2》 </template>
        <template #date>
          <p class="text-gray-500 absolute bottom-0">更新日期：2024.02.17</p>
        </template>
      </NewsCard>
      <NewsCard>
        <template #img>
          <img
            class="hover:scale-110 transition-transform"
            src="@/assets/img/news_list2.png"
            alt=""
          />
        </template>
        <template #category>
          <span
            class="border-[#2cae4f] text-[#175423] rounded-[20px] border-2 py-[0.1rem] px-2 mr-2 font-medium text-base"
          >
            攝影
          </span>
        </template>
        <template #title> HBO亞洲原創製作《何百芮的地獄毒白3》 </template>
        <template #date>
          <p class="text-gray-500 absolute bottom-0">更新日期：2024.02.27</p>
        </template>
      </NewsCard>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
