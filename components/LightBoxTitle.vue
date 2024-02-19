<script setup></script>
<template>
  <div class="flex items-center relative py-8 justify-center">
    <SvgIcon
      name="cancel"
      color="#999"
      class="w-[50px] h-[50px] absolute right-4"
    />
    <h1 class="text-center text-xl font-bold text-[#222]">
      <slot></slot>
    </h1>
  </div>
</template>

<style lang="scss" scoped></style>
