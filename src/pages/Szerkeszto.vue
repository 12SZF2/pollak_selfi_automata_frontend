<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    
 <div class="flex items-center justify-center border-2 border-slate-800 h-1/2 w-full md:w-1/2 bg-white mt-36">
      <div class="">
          <p class="text-3xl">Selfie előnézet...</p>  
      </div>
    </div>
    <div class="flex-row text-3xl mt-4">
    <input type="button" value="Újra" class="bg-orange-400 border-2 border-stone-950 h-14 w-32 rounded-xl cursor-pointer">
    <input type="button" value="Filterek" class="ml-10 bg-orange-400 border-2 border-stone-950 h-14 w-36 rounded-xl cursor-pointer">
    <RouterLink to="/elkuldes">
    <input type= "button" value="Tovább" class="ml-10 bg-orange-400 border-2 border-stone-950 h-14 w-32 rounded-xl cursor-pointer">
  </RouterLink>
  </div>

</template>