<script setup lang="ts">
import TableCell from "@/components/TableCell.vue";
import generateRandomNumber from "../utils/GenerateRandomNumber";
import {ref, onMounted, onUnmounted} from "vue";
import generateData from "@/utils/generateData";

const cells = generateRandomNumber(10, 50)

const data = generateData(cells)

const list = ref(data)

let timerId

onMounted(() => {
  timerId = setInterval(() => {
    list.value[generateRandomNumber(0, list.value.length)].value = generateRandomNumber(10, 100);
  }, 1000);
})


onUnmounted(() => clearInterval(timerId))

</script>

<template>
  <div class="tableRow">
    <TableCell v-for="item in list" :key="item.id" :cell="item.value" :id="id" />
  </div>
</template>

<style scoped>
  .tableRow {
    display: flex;
  }
</style>
