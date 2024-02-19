<script setup>
const PlanPrice = usePlanPriceStore();
const { CloseRemindCont } = PlanPrice;
</script>
<template>
  <div class="flex items-center relative py-8 justify-center">
    <slot name="cancel"></slot>

    <h1 class="text-center text-xl font-bold text-[#222]">
      <slot name="title"></slot>
    </h1>
  </div>
</template>

<style lang="scss" scoped></style>
