<script setup>
import { RouterLink } from "vue-router";
import { store } from "../config/store.js";
import { onMounted, ref } from "vue";

const canvas = ref(null);

onMounted(() => {
  const img = new Image();
  img.onload = function () {
    // Draw the image on the canvas, set the canvas size to the image size
    canvas.value.width = 1920/1.924;
    canvas.value.height = 1080/1.924;
    canvas.value
      .getContext("2d")
      .drawImage(img, 0, 0, canvas.value.width, canvas.value.height);

    // Set the canvas size to the image siz
  };
  img.onerror = function () {
    console.error("Failed to load image");
  };
  img.src = store.data.image; // Ensure this is a valid data URL
});
</script>

<template>
  <div
    class="flex items-center justify-center border-2 border-slate-800 h-[565px] w-[1000px] rounded-md bg-white sm:mt-36 xl:mt-10"
  >
    <canvas ref="canvas" class="rounded-md absolute"></canvas>
  </div>
  <div class="flex-row text-5xl sm:mt-36 xl:mt-10">
    <RouterLink to="/">
      <input
        type="button"
        value="Újra"
        class="bg-orange-400 border-2 border-stone-950 h-28 w-52 rounded-xl cursor-pointer"
      />
    </RouterLink>
    <!-- <input
      type="button"
      value="Filterek"
      class="ml-10 bg-orange-400 border-2 border-stone-950 h-14 w-36 rounded-xl cursor-pointer"
    /> -->

    <RouterLink to="/elkuldes">
      <input
        type="button"
        value="Tovább"
        class="ml-10 bg-orange-400 border-2 border-stone-950 h-28 w-52 rounded-xl cursor-pointer"
      />
    </RouterLink>
  </div>
</template>
