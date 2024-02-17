<script setup>
const store = useFaqStore();
const { FaqNavIs } = storeToRefs(store);
const { handFaqNav } = store;
</script>
<template>
  <div class="lg:max-w-[1200px] mx-auto">
    <ul
      class="flex bg-white w-[90%] mx-auto justify-around rounded-[50px] overflow-hidden"
    >
      <li
        @click="handFaqNav('Application')"
        :class="[
          'cursor-pointer',
          'w-full',
          'text-center',
          'py-4',
          'text-[9px]',
          'md:text-base',
          'transition-colors',
          { listActive: FaqNavIs === 'Application' },
          { 'hover:text-[#ffae89]': FaqNavIs !== 'Application' },
        ]"
      >
        申辦方案
      </li>
      <li
        @click="handFaqNav('AccountActivation')"
        :class="[
          'cursor-pointer',
          'w-full',
          'text-center',
          'py-4',
          'text-[9px]',
          'md:text-base',
          'transition-colors',
          { listActive: FaqNavIs === 'AccountActivation' },
          { 'hover:text-[#ffae89]': FaqNavIs !== 'AccountActivation' },
        ]"
      >
        帳號啟用
      </li>
      <li
        @click="handFaqNav('PlanChange')"
        :class="[
          'cursor-pointer',
          'w-full',
          'text-center',
          'py-4',
          'text-[9px]',
          'md:text-base',
          'transition-colors',
          { listActive: FaqNavIs === 'PlanChange' },
          { 'hover:text-[#ffae89]': FaqNavIs !== 'PlanChange' },
        ]"
      >
        方案異動
      </li>
      <li
        @click="handFaqNav('ServiceRelated')"
        :class="[
          'cursor-pointer',
          'w-full',
          'text-center',
          'py-4',
          'text-[9px]',
          'md:text-base',
          'transition-colors',
          { listActive: FaqNavIs === 'ServiceRelated' },
          { 'hover:text-[#ffae89]': FaqNavIs !== 'ServiceRelated' },
        ]"
      >
        服務相關
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.listActive {
  background: #ff6b00;
  color: white;
}
</style>
