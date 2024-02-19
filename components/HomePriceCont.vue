<script setup>
const priceStore = usePlanPriceStore();
const { PlanPriceRender } = storeToRefs(priceStore);
const { ShowPriceRemindCont } = priceStore;
</script>
<template>
  <div
    class="py-20 space-y-12 md:flex md:space-y-0 flex-wrap justify-center gap-10"
  >
    <div
      class="w-[90%] md:max-w-[300px] md:mx-0 bg-white mx-auto rounded-lg pt-14 pb-28 px-8 relative"
      v-for="list in PlanPriceRender"
      :key="list.title"
    >
      <PriceExclusive v-if="list.exclusive" />

      <!-- priceCont -->
      <div class="priceCont space-y-2">
        <p class="font-bold text-center text-xl">{{ list.title }}</p>
        <p class="text-center">
          <span class="text-[#FF6B00] text-4xl font-bold"
            >${{ list.nowPrice }}</span
          ><span class="text-gray-400 ml-2">/月</span>
        </p>
        <p
          class="text-center text-gray-400 line-through"
          :style="list.title === '月訂方案' ? 'opacity: 0' : 'opacity: 1'"
        >
          {{ list.originPrice }}
        </p>
        <!-- priceInfo  -->
        <ul class="py-4">
          <li v-for="info in list.info" :key="info">
            {{ info }}
          </li>
        </ul>
        <div
          class="flex justify-center flex-wrap w-[90%] absolute bottom-4 left-1/2 -translate-x-1/2"
        >
          <button
            class="py-3 w-[90%] mx-auto bg-[#FF6B00] text-white rounded-[30px]"
          >
            我要訂閱
          </button>
          <button
            class="underline text-gray-400 text-center py-4"
            @click="ShowPriceRemindCont(list.deadline)"
          >
            貼心提醒
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
