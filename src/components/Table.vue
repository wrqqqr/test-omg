<script setup lang="ts">
import TableRow from "./TableRow.vue";
import { useVirtualList } from '@vueuse/core'
import generateRandomNumber from "../utils/GenerateRandomNumber";
import generateData from "@/utils/generateData";

const listRows = generateData(generateRandomNumber(300, 1200))
const rows = generateRandomNumber(300, 1000)

const { list, containerProps, wrapperProps } = useVirtualList(
    listRows,
    {
      itemHeight: 22,
    },
)
console.log(listRows.length)
</script>

<template>
  <section>
    <div v-bind="containerProps" style="height: 1000px">
      <div v-bind="wrapperProps">
        <div v-for="item in list" :key="item.index" style="height: 52px">
          <TableRow />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  section {
    width: 90vw;
    display: flex;
  }
</style>
