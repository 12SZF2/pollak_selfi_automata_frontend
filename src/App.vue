<script setup>

</script>

<template>
  <main class="h-screen w-screen items-center flex flex-col bg-gradient-to-t from-[#424144] to-[#ffffff] font-jura">
    <div class="size-32 top-1 absolute left-2 cursor cursor-pointer">
      <a href="/src/Home.vue"><img src="../pollak_selfie_logo.png" alt="logo"></a>
    </div>
    <div class="place-content-start">
      <h1 class="text-5xl mt-8">Selfie automata</h1>
    </div>
    <div class="flex items-center justify-center border-2 border-slate-800 h-1/2 w-full md:w-1/2 bg-white mt-36">
      <div class="">
          <p class="text-3xl">Selfie előnézet...</p>  
      </div>
    </div>
    <div class="flex-row text-3xl mt-4">
    <input type="button" value="Újra" class="bg-orange-400 border-2 border-stone-950 h-14 w-32 rounded-xl cursor-pointer">
    <input type="button" value="Filterek" class="ml-10 bg-orange-400 border-2 border-stone-950 h-14 w-36 rounded-xl cursor-pointer">
    <input type= "button" value="Tovább" class="ml-10 bg-orange-400 border-2 border-stone-950 h-14 w-32 rounded-xl cursor-pointer">
  </div>
    </main>
</template>