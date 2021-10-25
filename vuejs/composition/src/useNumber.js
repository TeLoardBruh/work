import { ref, reactive, computed, watch, watchEffect } from "vue";

export function useNumber() {
  const msg = ref("Hello world");
  const a = ref(0);
  const b = ref(0);
  const histroy = ref([]);

  const total = computed(() => {
    return a.value + b.value;
  });

  watch(
    [a, b],
    ([newValueA, newValueB], [oldValueA, oldValueB]) => {
      if (newValueA !== oldValueA) {
        histroy.value.push(`A : ${newValueA} ~ ${oldValueA}`);
      }
      if (newValueB !== oldValueB) {
        histroy.value.push(`B : ${newValueB} ~ ${oldValueB}`);
      }
    },
    {
      // immediate: true,
    }
  );

  //   watchEffect(() => {
  //     console.log(a);
  //   });

  return {
    msg,
    a,
    b,
    histroy,
    total,
  };
}
