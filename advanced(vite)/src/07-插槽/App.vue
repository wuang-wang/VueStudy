<!--
 * @Description:
 * @Author: 吾昂王
 * @Date: 2024-01-22 13:58:51
-->
<script setup>
import Child from './Child.vue';
components: {
    Child;
}
</script>

<template>
    APP
    <Child>
        <template v-slot:one>
            <div>插槽1</div>
        </template>
        <!-- v-slot 可简写为 # -->
        <template #two>
            <div>插槽2</div>
        </template>
        <div>插槽3</div>
    </Child>
</template>

<style scoped></style>
