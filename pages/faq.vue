<script setup>
const store = useFaqStore();
const { FaqData } = store;
const { FaqNavIs, faqContOpenIdx } = storeToRefs(store);
const GetFaqApidata = await useFetch("/api/faqData");
FaqData.data = GetFaqApidata.data.value.data;
FaqNavIs.value = "Application";
faqContOpenIdx.value = [];
</script>
<template>
  <div class="bg-[#EEE] relative min-h-[50vh] pt-[30px] pb-10">
    <FaqNav />
    <FaqCont />
  </div>
</template>

<style lang="scss" scoped></style>
