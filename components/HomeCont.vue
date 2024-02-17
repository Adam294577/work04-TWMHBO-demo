<script setup></script>
<template>
  <div
    class="mt-10 w-[90%] rounded-lg mx-auto bg-[#0f1b28] p-4 space-y-4 pb-20 md:flex md:items-center"
  >
    <div class="title space-y-4 md:w-[30%] md:pl-8">
      <h1 class="text-white text-[40px] font-bold">最新強檔</h1>
      <p class="text-white font-light">
        HBO
        GO線上影音服務提供眾多屢獲殊榮的HBO原創影集、電視電影、紀錄片，以及Max原創大製作。另外更有好萊塢主要片廠和獨立製片廠的獨家首播原創作品和節目，包括來自卡通頻道的兒童內容以及華納兄弟的動畫作品。
      </p>
      <button
        class="w-full mx-auto font-bold py-4 rounded-[30px] bg-[#FF6B00] hover:bg-[#ff9100] md:w-[200px]"
      >
        馬上訂閱
      </button>
    </div>
    <div class="swiper relative top-8 w-[70%] mx-auto md:w-[70%]">
      <div class="swiperItem relative mx-auto max-w-[280px]">
        <img class="" src="@/assets/img/content_1.png" alt="" />
        <div class="mask absolute top-0 p-4">
          <div class="intro">
            <h2 class="text-xl font-bold flex items-center">
              <span
                class="inline-block w-[15px] h-[30px] bg-[#FF6B00] mr-2"
              ></span
              >何百芮的地獄毒白
            </h2>
            <span
              >何百芮 (郭書瑤 飾)
              因被前男友分手而在社群媒體上宣洩，卻意外成為網路紅人，開啟一段驚喜旅程。</span
            >
          </div>
        </div>
        <div
          class="hot absolute top-[-30px] h-[30px] bg-[#FF6B00] w-full text-center text-white text-[9px] pt-1 rounded-t-md"
        >
          熱門推薦
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mask {
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 40%,
    rgba(255, 255, 255, 1) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: end;
}
</style>
