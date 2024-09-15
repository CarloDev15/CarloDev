import { ref, toValue } from 'vue';

const useFetch = (url) => {
  const isFetching = ref(true);
  const data = ref([]);
  const error = ref(null);
  const status = ref();


  fetch(toValue(url))
    .then(async (res) => {
      status.value = res.status;

      return await res.json();
    })
    .then((json) => (data.value = json))
    .catch((err) => (error.value = err))
    .finally(() => (isFetching.value = false));


  return { isFetching, data, error };
};

export default useFetch;
