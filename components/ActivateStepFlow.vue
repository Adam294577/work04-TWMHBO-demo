<script setup></script>
<template>
  <div
    class="w-[90%] mx-auto rounded-lg mt-10 py-8 px-4 relative space-y-[50px] md:flex md:space-y-0 md:flex-wrap md:justify-center md:gap-10"
  >
    <div
      class="activateCard py-6 min-h-[600px] rounded-lg bg-white min-w-[300px] md:max-w-[300px] mx-auto md:mx-0 relative"
    >
      <p class="font-bold text-center text-4xl">Step1</p>
      <div class="msg pt-4 pb-8">
        <p class="text-center">點擊上方「啟用我的 HBO GO」</p>
        <p class="text-center">按鈕前往帳戶啟用頁面</p>
      </div>
      <SvgIcon
        name="activateStep/1"
        class="mx-auto md:absolute md:left-1/2 md:-translate-x-1/2 w-[254px] h-[386px] scale-[1.3]"
      />
    </div>
    <div
      class="activateCard py-6 min-h-[600px] rounded-lg bg-white min-w-[300px] md:max-w-[300px] mx-auto md:mx-0 relative"
    >
      <p class="font-bold text-center text-4xl">Step2</p>
      <div class="msg pt-4 pb-8">
        <p class="text-center">點擊上方「啟用我的 HBO GO」</p>
        <p class="text-center">按鈕前往帳戶啟用頁面</p>
      </div>
      <img
        class="relative left-1/2 -translate-x-1/2"
        src="@/assets/img/activateStep/2.png"
        alt=""
      />
    </div>
    <div
      class="activateCard py-6 min-h-[600px] rounded-lg bg-white min-w-[300px] md:max-w-[300px] mx-auto md:mx-0 relative"
    >
      <p class="font-bold text-center text-4xl">Step3</p>
      <div class="msg pt-4 pb-8">
        <p class="text-center">點擊上方「啟用我的 HBO GO」</p>
        <p class="text-center">按鈕前往帳戶啟用頁面</p>
      </div>
      <img
        class="relative left-1/2 -translate-x-1/2"
        src="@/assets/img/activateStep/3.png"
        alt=""
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
