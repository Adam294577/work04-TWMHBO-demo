<script setup>
const priceStore = usePlanPriceStore();
const { PlanPriceData } = priceStore;
const GetPriceApiData = await useFetch("/api/planPriceData");
PlanPriceData.data = GetPriceApiData.data.value.data;
</script>
<template>
  <div class="priceBg mt-10">
    <HomeSectionTilte> 選擇你的 HBO GO 方案 </HomeSectionTilte>
    <HomePriceCont />
    <HomePriceRemind />
  </div>
</template>

<style lang="scss" scoped>
.priceBg {
  background-image: linear-gradient(90deg, #17abbe, #3a3885, #bc0ddd);
}
</style>
