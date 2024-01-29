<template>
    <div>
        Center

        <p>姓名：{{ store.name }}</p>
        <p>年龄：{{ store.age }}</p>
        <p>性别：{{ store.sex }}</p>
    </div>
</template>

<script setup>
import { useUsersStore } from '../store/user';

const store = useUsersStore();
</script>
