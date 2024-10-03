<script setup>
import { RouterLink, RouterView } from 'vue-router';


</script>

<template>
  <main class="h-screen w-screen items-center flex flex-col bg-gradient-to-t from-[#424144] to-[#ffffff] font-jura">
    <div class="size-32 top-1 absolute left-2 cursor cursor-pointer">
      <RouterLink to="/"><img src="../pollak_selfie_logo.png" alt="logo"></RouterLink>
    </div>
    <div class="place-content-start">
      <h1 class="text-5xl mt-8">Selfie automata</h1>
    </div>
    <RouterView />
    </main>
</template>