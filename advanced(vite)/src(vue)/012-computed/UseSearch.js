import { computed } from 'vue';

export default function UseSearch(state) {
    const computedList = computed(() => {
        return state.dataList.filter((item) => item.includes(state.keyWord));
    });
    return {
        computedList,
    };
}
