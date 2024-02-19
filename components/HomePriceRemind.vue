<script setup></script>
<template>
  <div
    class="z-50 bg-[#FFF] fixed w-[90%] max-w-[600px] p-4 pb-10 rounded-lg h-[90vh] top-[5vh] left-1/2 -translate-x-1/2"
    v-if="false"
  >
    <LightBoxTitle>貼心提醒</LightBoxTitle>
    <ol class="lightBoxScroll list-decimal px-4 h-[75vh]">
      <li>
        本專案綁約期間以系統認定之專案合約起始日開始起算。本專案綁約期間屆滿後，HBO
        GO 服務繼續有效，若不再使用須依服務契約規定辦理退租手續。
      </li>
      <li>
        申辦本專案，於綁約 12
        個月內，適用以下減免優惠（減免適用項目依台灣大哥大規定），綁約期間內若違反專案規定或取消
        HBO GO 服務，優惠終止：享每月 HBO GO 服務月租減免優惠：【60元】。
      </li>
      <li>
        本服務詳細規範依台灣大哥大月租型 HBO GO 服務條款為準; HBO GO
        服務提供者保留隨時更改服務內容和價格之權利，如有 HBO GO
        服務產品相關問題，請參 HBO GO 使用條款：<nuxt-link
          style="color: #ffa631"
          to="https://www.hbogoasia.tw/terms_of_service"
          target="_blank"
          external
          >https://www.hbogoasia.tw/terms_of_service</nuxt-link
        >，並依 HBO GO 服務官方公告規範為主
      </li>
    </ol>
  </div>
</template>

<style lang="scss" scoped>
.lightBoxScroll {
  --sb-track-color: #ffffff;
  --sb-thumb-color: #ff6b00;
  --sb-size: 4px;
  overflow: hidden;
  overflow-y: scroll;
}

.lightBoxScroll::-webkit-scrollbar {
  width: var(--sb-size);
}

.lightBoxScroll::-webkit-scrollbar-track {
  background: var(--sb-track-color);
  border-radius: 1px;
}

.lightBoxScroll::-webkit-scrollbar-thumb {
  background: var(--sb-thumb-color);
  border-radius: 1px;
}
</style>
