<script setup>
import { RouterLink } from "vue-router";
import { store } from "../config/store.js";
import { onMounted, ref } from "vue";

const canvas = ref(null);

onMounted(() => {
  const img = new Image();
  img.onload = function () {
    canvas.value
      .getContext("2d")
      .drawImage(img, 0, 0, canvas.value.width, canvas.value.height);
  };
  img.onerror = function () {
    console.error("Failed to load image");
  };
  img.src = store.data.image; // Ensure this is a valid data URL
});
</script>

<template>
  <div
    class="flex items-center justify-center border-2 border-slate-800 h-[752px] w-[1000px] bg-white sm:mt-36 xl:mt-10"
  >
    <canvas
      ref="canvas"
      class="rounded-md absolute"
      width="1000"
      height="800"
    ></canvas>
  </div>
  <div class="flex-row text-5xl sm:mt-36 xl:mt-28">
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
