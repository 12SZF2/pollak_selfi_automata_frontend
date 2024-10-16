<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <main
    class="h-screen w-screen overflow-hidden items-center flex flex-col bg-gradient-to-t from-[#424144] to-[#ffffff] font-jura"
  >
    <div
      class="top-1 h-2/12 w-2/12 sm:h-1/4 sm:w-1/4 xl:h-40 xl:w-40 absolute left-2 cursor cursor-pointer"
    >
      <RouterLink to="/"
        ><img src="../pollak_selfie_logo.png" alt="logo"
      /></RouterLink>
    </div>
    <div class="place-content-start">
      <h1 class="sm:text-8xl text-3xl sm:mt-80 xl:mt-2 mt-12 font-semibold">
        Selfie automata
      </h1>
    </div>
    <RouterView />
  </main>
</template>
