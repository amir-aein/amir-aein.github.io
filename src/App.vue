<script setup>
import { RouterLink, RouterView } from "vue-router";
import MyHeader from "./components/MyHeader.vue";
</script>

<template>
  <div class="siteWrapper">
    <MyHeader />
    <Transition name="slide-fade">
      <RouterView />
    </Transition>
  </div>
</template>

<style>
@import "@/assets/base.css";
@import url("https://fonts.googleapis.com/css2?family=Bitter:wght@300;400;700&family=Inter:wght@400;700&display=swap");

.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.5s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
