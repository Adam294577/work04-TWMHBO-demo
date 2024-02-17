<script setup></script>
<template>
  <li class="newsCard flex flex-col md:w-[200px] md:mt-4 lg:w-[30%]">
    <div class="rounded-[20px] overflow-hidden">
      <slot name="img"></slot>
    </div>
    <div
      class="mt-4 select-none relative pb-10 md:h-[160px] h-[100px] lg:h-[140px]"
    >
      <span class="font-bold text-xl md:inline-block">
        <slot name="category"> </slot>
        <slot name="title"> </slot>
      </span>
      <slot name="date"> </slot>
    </div>
  </li>
</template>

<style lang="scss" scoped></style>
