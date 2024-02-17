<script setup>
const store = useFaqStore();
const { faqContRender } = storeToRefs(store);
const { handFaqContOpenIdx } = store;
</script>
<template>
  <div class="lg:max-w-[1200px] mx-auto">
    <ul class="bg-white w-[90%] mx-auto rounded-md mt-4">
      <li
        @click="handFaqContOpenIdx(list.idx)"
        class="relative flex p-2 flex-wrap cursor-pointer"
        v-for="list in faqContRender"
        :key="list.title"
      >
        <div
          :class="[
            'font-bold',
            'w-full',
            'hover:text-[#FF6B00]',
            { 'text-[#FF6B00]': list.active },
          ]"
        >
          <span class="inline-block w-[90%]">{{ list.title }}</span>
          <span class="absolute scale-125 right-6" v-show="!list.active"
            >+</span
          >
          <span
            class="absolute top-5 right-6 w-[10px] h-[2px] inline-block bg-[#FF6B00]"
            v-show="list.active"
          ></span>
        </div>
        <span
          class="inline-block w-full border-b-2 py-2 pr-4 border-gray-200"
          v-show="list.active"
          v-html="list.ans"
        ></span>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
