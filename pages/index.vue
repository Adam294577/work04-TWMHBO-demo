<script setup>
const advstore = useAdvStore();
const { priceContainer } = storeToRefs(advstore);
const { updatePriceOffsetTop, handScrollPos } = advstore;
onMounted(() => {
  window.addEventListener("scroll", handScrollPos);
  window.addEventListener("resize", updatePriceOffsetTop);
  updatePriceOffsetTop();
});
onUnmounted(() => {
  window.removeEventListener("scroll", handScrollPos);
  window.removeEventListener("resize", updatePriceOffsetTop);
});
</script>
<template>
  <div>
    <HomeBanner />
    <HomeRecommend />
    <HomeCont />
    <HomePrice ref="priceContainer" />
    <HomeStartStep />
    <HomeAdv />
  </div>
</template>

<style lang="scss" scoped></style>
