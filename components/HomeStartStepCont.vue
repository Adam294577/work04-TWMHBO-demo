<script setup></script>
<template>
  <div class="space-y-8 md:flex md:space-y-0 flex-wrap justify-center gap-y-8">
    <div
      class="stepCard flex justify-center flex-col relative h-[250px] md:h-[200px] md:w-[250px]"
    >
      <SvgIcon
        class="step-svg max-h-[150px] md:w-[150px]"
        color="#FFF"
        name="step/1"
      />
      <div class="msg absolute bottom-0 left-1/2 -translate-x-1/2">
        <p class="text-white text-center text-sm">選擇適合你的</p>
        <p class="text-white text-center text-sm">HBO GO 方案</p>
      </div>
    </div>
    <div
      class="stepCard flex justify-center flex-col relative h-[250px] md:h-[200px] md:w-[250px]"
    >
      <SvgIcon
        class="step-svg max-h-[150px] md:w-[150px]"
        color="#FFF"
        name="step/2"
      />

      <div class="msg absolute bottom-0 left-1/2 -translate-x-1/2">
        <p class="text-white text-center text-sm">選擇適合你的</p>
        <p class="text-white text-center text-sm">HBO GO 方案</p>
      </div>
    </div>
    <div
      class="stepCard flex justify-center flex-col relative h-[250px] md:h-[200px] md:w-[250px]"
    >
      <SvgIcon
        class="step-svg max-h-[150px] md:w-[150px]"
        color="#FFF"
        name="step/3"
      />
      <div class="msg absolute bottom-0 left-1/2 -translate-x-1/2">
        <p class="text-white text-center text-sm">選擇適合你的</p>
        <p class="text-white text-center text-sm">HBO GO 方案</p>
      </div>
    </div>
    <div
      class="stepCard flex justify-center flex-col relative h-[250px] md:h-[200px] md:w-[250px]"
    >
      <SvgIcon
        class="step-svg max-h-[150px] md:w-[150px]"
        color="#FFF"
        name="step/4"
      />
      <div class="msg absolute bottom-0 left-1/2 -translate-x-1/2">
        <p class="text-white text-center text-sm">選擇適合你的</p>
        <p class="text-white text-center text-sm">HBO GO 方案</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.step-svg {
  transform: translateX(-50%) scale(0.9);
  position: absolute;
  left: 50%;
  fill: #fff;
}
.step-svg .cls-1 {
  fill: #fff;
}
.step-svg .cls-2 {
  fill: #9fc3d8;
}
.step-svg .cls-3 {
  fill: #70c0fc;
}
</style>
