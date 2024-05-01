<script setup lang="ts">

 defineProps(['cell'])
</script>

<template>
  <div>
    <span>{{cell}}</span>
  </div>
</template>

<style scoped>
  div {
    border: 1px solid blueviolet;
    cursor: pointer;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    margin: 2px;
    transition: 0.3s ease all;
    &:hover {
      transform: scale( 80%);
    }
  }
</style>
