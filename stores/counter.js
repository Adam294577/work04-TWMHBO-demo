import { defineStore } from "pinia";
export const useFaqStore = defineStore("faq", () => {
  const FaqNavIs = ref("Application");
  const FaqData = reactive({ data: [] });
  const faqContOpenIdx = ref([]);
  const faqContRender = computed(() => {
    const key = FaqNavIs.value;
    const data = FaqData.data[key] ?? [];
    let result = [...data].map((item) => {
      item.active = false;
      return item;
    });
    result.forEach((item) => {
      faqContOpenIdx.value.includes(item.idx)
        ? (item.active = true)
        : (item.active = false);
    });
    return result;
  });

  const handFaqNav = (key) => {
    if (FaqNavIs.value === key) return;
    FaqNavIs.value = key;
    faqContOpenIdx.value = [];
  };
  const handFaqContOpenIdx = (idx) => {
    let Numidx = Number(idx);
    if (faqContOpenIdx.value.indexOf(Numidx) === -1) {
      faqContOpenIdx.value.push(Numidx);
    } else {
      let indexToRemove = faqContOpenIdx.value.indexOf(Numidx);
      faqContOpenIdx.value.splice(indexToRemove, 1);
    }
  };
  return {
    FaqData,
    FaqNavIs,
    faqContOpenIdx,
    faqContRender,
    handFaqNav,
    handFaqContOpenIdx,
  };
});
export const usetHeaderStore = defineStore("header", () => {
  const MenuIconOpen = ref(false);
  const handMenuIcon = () => (MenuIconOpen.value = !MenuIconOpen.value);
  const route = useRoute();
  const nowPathIs = computed(() => route.path);

  const CloseMenuIcon = (url) => {
    if (nowPathIs.value === "/" && url === "/") return;
    MenuIconOpen.value = false;
  };

  return {
    MenuIconOpen,
    handMenuIcon,
    CloseMenuIcon,
  };
});

export const useAdvStore = defineStore("adv", () => {
  const advBool = ref(true);
  const priceContainer = ref(null);
  const priceOffsetTopIs = ref(0);
  const handAdvBool = () => {
    advBool.value = !advBool.value;
  };
  const ScrollPos = ref(null);
  const advIsShow = computed(() =>
    priceOffsetTopIs.value - 800 < ScrollPos.value ? true : false
  );
  const updatePriceOffsetTop = () => {
    priceOffsetTopIs.value = priceContainer.value.$el.offsetTop;
    // console.log("新的adv高度offset", priceOffsetTopIs.value - 800);
  };
  const handScrollPos = () => {
    ScrollPos.value = window.scrollY || window.pageYOffset;
    // console.log("滚轮位置：", ScrollPos.value);
  };
  const scrollToPrice = () => {
    window.scrollTo({ top: priceOffsetTopIs.value });
    handScrollPos();
  };

  return {
    advIsShow,
    priceContainer,
    scrollToPrice,
    advBool,
    handAdvBool,
    handScrollPos,
    updatePriceOffsetTop,
  };
});
export const usePlanPriceStore = defineStore("planprice", () => {
  const PlanPriceData = reactive({ data: [] });
  const PlanPriceRender = computed(() => {
    let result = PlanPriceData.data ?? [];
    result = result.map((item) => {
      item.exclusive = false;
      if (item.deadline === "year") {
        item.exclusive = true;
      }
      return item;
    });
    return result;
  });
  return { PlanPriceData, PlanPriceRender };
});
