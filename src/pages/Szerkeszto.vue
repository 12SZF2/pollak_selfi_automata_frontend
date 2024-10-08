<script setup>
import { RouterLink } from "vue-router";
import { store } from "../config/store.js";
import { onMounted, ref } from "vue";

const canvas = ref(null);

onMounted(() => {
  const img = new Image();
  img.onload = function () {
    console.log("Img loaded");
    canvas.value
      .getContext("2d")
      .drawImage(img, 0, 0, canvas.value.width, canvas.value.height);
  };
  img.onerror = function () {
    console.error("Failed to load image");
  };
  img.src = store.data.image; // Ensure this is a valid data URL
  console.log(img.src);
});
</script>

<template>
  <div
    class="flex items-center justify-center border-2 border-slate-800 h-1/2 w-full md:w-1/2 bg-white mt-36"
  >
    <canvas
      ref="canvas"
      class="rounded-md absolute"
      width="640"
      height="480"
    ></canvas>
  </div>
  <div class="flex-row text-3xl mt-4">
    <input
      type="button"
      value="Újra"
      class="bg-orange-400 border-2 border-stone-950 h-14 w-32 rounded-xl cursor-pointer"
    />
    <input
      type="button"
      value="Filterek"
      class="ml-10 bg-orange-400 border-2 border-stone-950 h-14 w-36 rounded-xl cursor-pointer"
    />
    <RouterLink to="/elkuldes">
      <input
        type="button"
        value="Tovább"
        class="ml-10 bg-orange-400 border-2 border-stone-950 h-14 w-32 rounded-xl cursor-pointer"
      />
    </RouterLink>
  </div>
</template>
