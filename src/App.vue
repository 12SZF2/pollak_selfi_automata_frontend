<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <main
    class="h-screen w-screen overflow-hidden items-center flex flex-col bg-gradient-to-t from-[#424144] to-[#ffffff] font-jura"
  >
    <div class="top-1 h-1/4 w-1/4 absolute left-2 cursor cursor-pointer">
      <RouterLink to="/"
        ><img src="../pollak_selfie_logo.png" alt="logo"
      /></RouterLink>
    </div>
    <div class="place-content-start">
      <h1 class="text-8xl mt-80 font-semibold">Selfie automata</h1>
    </div>
    <RouterView />
  </main>
</template>
