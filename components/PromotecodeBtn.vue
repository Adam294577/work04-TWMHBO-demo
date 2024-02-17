<script setup></script>
<template>
  <div
    class="bg-white w-[98%] max-w-[700px] mx-auto rounded-t-[20px] px-4 py-2 relative h-[120px] -mt-32"
  >
    <h1 class="text-xl text-center font-bold">優惠序號兌換</h1>
    <input class="bg-[#EEE] w-full mx-auto py-2" type="text" />
    <button
      class="py-4 w-[100%] rounded-b-[20px] absolute top-full left-0 org-gradient text-white font-bold transition-opacity hover:opacity-90"
    >
      確認兌換
    </button>
  </div>
</template>

<style lang="scss" scoped>
.org-gradient {
  background: linear-gradient(
    90deg,
    rgb(255, 145, 0) 0%,
    rgb(255, 203, 14) 100%
  );
}
</style>
