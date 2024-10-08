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

function kepkuldes() {
  console.log(email.value.value)
  fetch("https://api-selfie.pollak.info/api/sender/send", {
    method:"POST",
    body: JSON.stringify({
      email: email.value.value,
      image: store.data.image,
    }),
    headers: {
      "Content-Type": "application/json",
    }, 
  })
  router.push("/");
}
</script>
<template>
  <div
    class="flex flex-col items-center justify-center border-2 border-slate-800 h-2/3 md:w-2/3 rounded-xl bg-gradient-to-t from-[#5d5c5f] to-[#ffffff] mt-20"
  >
    <div
      class="flex items-center justify-center border-2 border-slate-800 h-1/2 w-full md:w-1/2 bg-white"
    >
    <canvas
      ref="canvas"
      class="rounded-md absolute"
      width="1840"
      height="380"
    ></canvas>
    </div>
    <div class="text-3xl mt-4 items-center justify-center flex-col flex">
      <p class="text-lg mt-10">
        Írd be az E-mail címed és elküldjük a Selfie-det
      </p>
      <input
        ref = "email"
        type="text"
        value=""
        placeholder="E-mail-cím"
        class="bg-slate-300 rounded-xl mt-3 text-lg w-full h-10 font-semibold"
      />
      <input
        @click="kepkuldes()"
        type="button"
        value="Selfie elküldése"
        class="bg-orange-400 border-2 border-stone-950 h-14 w-2/3 rounded-2xl cursor-pointer mt-20"
      />
    </div>
  </div>
</template>
