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
  const router = useRouter();
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
