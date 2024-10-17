<script setup>
import { RouterLink, useRouter } from "vue-router";
import { store } from "../config/store.js";
import { onMounted, ref } from "vue";

const router = useRouter();
const canvas = ref(null);
const email = ref("");

onMounted(() => {
  const img = new Image();
  img.onload = function () {
    canvas.value.width = 1920/1.924;
    canvas.value.height = 1080/1.924;
    canvas.value
      .getContext("2d")
      .drawImage(img, 0, 0, canvas.value.width, canvas.value.height);
  };
  img.onerror = function () {
    console.error("Failed to load image");
  };
  img.src = store.data.image; // Ensure this is a valid data URL
});

function kepkuldes() {
  fetch("https://api-selfie.pollak.info/api/sender/send", {
    method: "POST",
    body: JSON.stringify({
      email: email.value.value,
      image: store.data.image,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  store.data.image = "";
  router.push("/");
}
</script>
<template>
  <div
    class="flex flex-col items-center justify-center border-2 border-slate-800 h-[1128px] shadow-2xl w-[1000px] rounded-xl bg-gradient-to-t from-[#5d5c5f] to-[#ffffff] sm:mt-20 xl:mt-10"
  >
    <div
      class="flex items-center -mb-24 justify-center border-2 border-slate-800 h-[546px] w-[966px] rounded-xl md:w-1/2 bg-white"
    >
      <canvas
        ref="canvas"
        class="rounded-md absolute"
        width="1000"
        height="800"
      ></canvas>
    </div>
    <div
      class="text-3xl sm:mt-64 xl:10 items-center justify-center flex-col flex"
    >
      <p class="mt-10 text-4xl">
        Írd be az E-mail címed és elküldjük a Szelfidet
      </p>
      <div class="w-full flex sm:flex-col xl:flex-row items-center xl:gap-2">
        <input
          ref="email"
          type="text"
          value=""
          placeholder="E-mail-cím"
          class="bg-slate-300 rounded-2xl sm:mt-1 pl-7 xl:mt-5 text-2xl w-full h-16 font-semibold shadow-xl"
        />
        <input
          @click="kepkuldes()"
          type="button"
          value="Selfie elküldése"
          class="bg-orange-400 border-2 border-stone-950 h-24 w-2/3 text-4xl font-semibold shadow-2xl rounded-2xl cursor-pointer sm:mt-20 mb-20 xl:mt-5"
        />
      </div>
    </div>
  </div>
</template>
