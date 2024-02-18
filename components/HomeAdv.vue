<script setup>
const store = useAdvStore();
const { advIsShow, advBool } = storeToRefs(store);
const { handAdvBool, scrollToPrice } = store;
advBool.value = true;
</script>
<template>
  <div
    v-show="advBool"
    :class="[
      'z-50',
      'fixed',
      'bottom-0',
      'transition-transform',
      'w-[260px]',
      'md:w-[500px]',
      'md:h-[60px]',
      'left-1/2',
      '-translate-x-1/2',
      'h-[90px]',
      'bg-[#FF6B00]',
      'rounded-t-md',
      'ease-out',
      'duration-500',
      'md:flex',
      'items-center',
      { 'translate-y-[90px]': advIsShow },
    ]"
  >
    <SvgIcon
      @click="handAdvBool"
      name="cancel"
      class="w-[50px] h-[50px] z-50 absolute right-[-5px] top-[-5px] scale-[0.35] fill-[#FFF] cursor-pointer md:top-2 md:right-0 md:scale-[0.7]"
    />
    <span
      class="text-center inline-block text-white font-bold text-sm w-full mt-4 md:mt-0 md:relative md:left-[-50px]"
      >每月只要$90(原價$150)
      <button
        @click="scrollToPrice"
        class="absolute bottom-3 left-1/2 -translate-x-1/2 py-1 px-4 bg-white text-[#FF6B00] rounded-[30px] text-sm md:-bottom-1 md:left-[calc(50%+130px)]"
      >
        我要訂閱
      </button>
    </span>
  </div>
</template>

<style lang="scss" scoped></style>
