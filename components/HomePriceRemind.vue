<script setup>
import { xssParse } from "@/lib/filterXss";
const store = usePlanPriceStore();
const { RemindCont } = storeToRefs(store);
const { ClosePriceRemindCont } = store;
const xssParseCont = computed(() => {
  let cont = RemindCont.value.is;
  let result = [];
  cont.forEach((item) => {
    result.push(xssParse(item.msg));
  });
  // console.log('原資料',cont);
  // console.log('XSS處理後=>',result);
  return result;
});
</script>
<template>
  <div
    class="z-50 bg-[#FFF] fixed w-[90%] lg:max-w-[800px] max-w-[600px] p-4 pb-10 rounded-lg h-[90vh] top-[5vh] left-1/2 -translate-x-1/2"
    v-if="RemindCont.is.length !== 0"
  >
    <LightBoxTitle>
      <template #cancel>
        <SvgIcon
          @click="ClosePriceRemindCont"
          name="cancel"
          color="#999"
          class="w-[50px] h-[50px] absolute right-4 cursor-pointer"
        />
      </template>
      <template #title> 貼心提醒 </template>
    </LightBoxTitle>
    <ol class="lightBoxScroll list-decimal px-8 h-[75vh] space-y-2">
      <!-- <li v-for="list in RemindCont.is" :key="list.msg" v-html="list.msg"></li> -->
      <li v-for="list in xssParseCont" :key="list" v-html="list"></li>
    </ol>
  </div>
</template>

<style lang="scss" scoped>
.lightBoxScroll {
  --sb-track-color: #ffffff;
  --sb-thumb-color: #ff6b00;
  --sb-size: 4px;
  overflow: hidden;
  overflow-y: scroll;
}

.lightBoxScroll::-webkit-scrollbar {
  width: var(--sb-size);
}

.lightBoxScroll::-webkit-scrollbar-track {
  background: var(--sb-track-color);
  border-radius: 1px;
}

.lightBoxScroll::-webkit-scrollbar-thumb {
  background: var(--sb-thumb-color);
  border-radius: 1px;
}
</style>
