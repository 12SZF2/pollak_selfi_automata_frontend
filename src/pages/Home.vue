<script setup>
import { ref, onMounted } from "vue";
import { store } from "../config/store.js";
import { useRouter } from "vue-router";
// import Upscaler from "upscaler";
// import * as models from "@upscalerjs/esrgan-thick";
const router = useRouter();
const counter = ref(3);
const isclicked = ref(false);
const video = ref(null);
const canvas = ref(null);
// const upscaler = new Upscaler({
//   model: models.x8,
// });

let image_data_url = "";

function visszaszamlalo() {
  isclicked.value = true;
  const IntervalRef = setInterval(() => {
    counter.value--;
  }, 1000);

  setTimeout(() => {
    clearInterval(IntervalRef);
    counter.value = 5;
    takePicture();
    store.data.image = image_data_url;
    router.push("/szerkeszto");
  }, 5500);
}

onMounted(() => {
  // upscaler.warmup({ patchSize: 4, padding: 0 }).then(() => {
  //   console.log("All warmed up");
  // });

  navigator.mediaDevices
    .getUserMedia({ video: { width: 1920, height: 1080 }, audio: false })
    .then((stream) => {
      video.value.srcObject = stream;
      video.value.play();

      // Set video width and height to canvas
      video.value.addEventListener("loadedmetadata", () => {
        canvas.value.width = video.value.videoWidth;
        canvas.value.height = video.value.videoHeight;
        console.log(video.value.videoWidth, video.value.videoHeight);
      });
    })
    .catch((err) => {
      console.error("Error accessing media devices.", err);
    });

  // Ensure video is ready before taking a picture
  video.value.addEventListener("playing", () => {
    // If you want to auto-take picture after some time, you can do so here.
  });
});
function takePicture() {
  if (video.value && video.value.readyState === 4) {
    // Check if video is ready
    canvas.value
      .getContext("2d")
      .drawImage(video.value, 0, 0, canvas.value.width, canvas.value.height);
    // image_data_url = canvas.value.toDataURL("image/jpeg");
    var watermarkImage = new Image();
    watermarkImage.src = new URL(
      "../../pollak_selfie_logo.png",
      import.meta.url
    ).href; // Source of your watermark image
    image_data_url = watermarkedDataURL(canvas.value, watermarkImage);
    // upscaler
    //   .upscale(image_data_url, {
    //     patchSize: 4,
    //     padding: 0,
    //   })
    //   .then((upscaleImgSRC) => {
    //     console.log(upscaleImgSRC);
    //     store.data.image = upscaleImgSRC;
    //   });
    console.log(canvas.value.width, canvas.value.height);
  } else {
    console.warn("Video is not ready yet.");
  }
}
function watermarkedDataURL(canvas, watermarkImage) {
  var tempCanvas = document.createElement("canvas");
  var tempCtx = tempCanvas.getContext("2d");
  var cw, ch;

  // Set canvas dimensions
  cw = tempCanvas.width = canvas.width;
  ch = tempCanvas.height = canvas.height;

  // Draw the original canvas image
  tempCtx.drawImage(canvas, 0, 0);

  // Set the global alpha for transparency
  tempCtx.globalAlpha = 0.5;

  // Draw the watermark image
  var imgWidth = 200;
  var imgHeight = 200;

  // Position the watermark image (bottom right corner)
  tempCtx.drawImage(
    watermarkImage,
    cw - imgWidth - 10,
    ch - imgHeight - 10,
    imgWidth,
    imgHeight
  );

  // Reset global alpha to fully opaque for any further drawing if needed
  tempCtx.globalAlpha = 1.0;

  // Return the data URL of the watermarked image
  return tempCanvas.toDataURL();
}
</script>

<template>
  <div
    class="flex items-center justify-center border-2 mt-3 sm:mt-28 xl:mt-10 border-slate-800 h-[546px] w-[966px] rounded-xl bg-white"
  >
    <div class="absolute left-[50%] top-[2000px] text-2xl">
      <link
        href="https://fonts.googleapis.com/css?family=Bowlby+One+SC|Londrina+Outline"
        rel="stylesheet"
        type="text/css"
      />

      <div class="cd-wrapper">
        <div class="cd-pointer"></div>

        <div class="cd-number-wrapper">
          <span class="none" :class="{ 'cd-number-five': isclicked }">5</span>
          <span class="none" :class="{ 'cd-number-four': isclicked }">4</span>
          <span class="none" :class="{ 'cd-number-three': isclicked }">3</span>
          <span class="none" :class="{ 'cd-number-two': isclicked }">2</span>
          <span class="none" :class="{ 'cd-number-one': isclicked }">1</span>
        </div>
      </div>
    </div>
    <div class="flex justify-center h-full">
      <video autoplay="true" ref="video" class="rounded-md w-[960px]"></video>
      <canvas ref="canvas" class="rounded-md absolute hidden"></canvas>
    </div>
  </div>
  <div
    class="flex flex-row sm:text-5xl text-2xl mt-2 sm:mt-[100px] xl:mt-10 w-full justify-center font-semibold items-center"
  >
    <input
      type="button"
      @click="visszaszamlalo()"
      value="Kép készítése"
      class="bg-orange-400 border-2 border-stone-950 p-2 w-full sm:h-28 sm:w-2/3 rounded-xl cursor-pointer meret"
    />
  </div>
</template>
<style scoped>
.cd-wrapper {
  width: 350px;
  height: 350px;
  position: fixed;
  top: 47%;
  left: 50%;
  margin-top: -175px;
  margin-left: -175px;
}

.cd-outer-top-left {
  position: absolute;
  width: 173px;
  height: 173px;
  border-right: 2px solid #ffffff;
  border-bottom: 2px solid #ffffff;
  top: 0;
  left: 0;
}

.cd-outer-top-right {
  position: absolute;
  width: 173px;
  height: 173px;
  top: 0;
  right: 0;
  border-left: 2px solid #ffffff;
  border-bottom: 2px solid #ffffff;
}

.cd-outer-btm-left {
  position: absolute;
  width: 173px;
  height: 173px;
  bottom: 0;
  left: 0;
  border-right: 2px solid #ffffff;
  border-top: 2px solid #ffffff;
}

.cd-outer-btm-right {
  position: absolute;
  width: 173px;
  height: 173px;
  float: right;
  bottom: 0;
  right: 0;
  border-left: 2px solid #ffffff;
  border-top: 2px solid #ffffff;
}

.cd-inner-top-left {
  position: absolute;
  width: 140px;
  height: 140px;
  bottom: 0;
  right: 0;
  border-top-left-radius: 180px;
}

.cd-inner-top-right {
  position: absolute;
  width: 140px;
  height: 140px;
  bottom: 0;
  left: 0;
  border-top-right-radius: 180px;
}

.cd-inner-btm-left {
  position: absolute;
  width: 140px;
  height: 140px;
  top: 0;
  right: 0;
  border-bottom-left-radius: 180px;
}

.cd-inner-btm-right {
  position: absolute;
  width: 140px;
  height: 140px;
  top: 0;
  left: 0;
  border-bottom-right-radius: 180px;
}

.cd-pointer {
  position: absolute;
  left: 50%;
  top: 30px;
  margin-left: -11px;
  width: 22px;
  height: 156px;
  -webkit-animation: cd-pointer-spin 1.2s linear 0s 5 normal;
  -moz-animation: cd-pointer-spin 1.2s linear 0s 5 normal;
  -o-animation: cd-pointer-spin 1.2s linear 0s 5 normal;
  -ms-animation: cd-pointer-spin 1.2s linear 0s 5 normal;
  animation: cd-pointer-spin 1.2s linear 0s 5 normal;
}

@-webkit-keyframes cd-pointer-spin {
  from {
    -webkit-transform: rotate(0deg);
    -webkit-transform-origin: 50% 93%;
  }
  to {
    -webkit-transform: rotate(360deg);
    -webkit-transform-origin: 50% 93%;
  }
}

@-moz-keyframes cd-pointer-spin {
  from {
    -moz-transform: rotate(0deg);
    -moz-transform-origin: 50% 93%;
  }
  to {
    -moz-transform: rotate(360deg);
    -moz-transform-origin: 50% 93%;
  }
}

@-o-keyframes cd-pointer-spin {
  from {
    -o-transform: rotate(0deg);
    -o-transform-origin: 50% 93%;
  }
  to {
    -o-transform: rotate(360deg);
    -o-transform-origin: 50% 93%;
  }
}

@-ms-keyframes cd-pointer-spin {
  from {
    -ms-transform: rotate(0deg);
    -ms-transform-origin: 50% 93%;
  }
  to {
    -ms-transform: rotate(360deg);
    -ms-transform-origin: 50% 93%;
  }
}

@keyframes cd-pointer-spin {
  from {
    transform: rotate(0deg);
    transform-origin: 50% 93%;
  }
  to {
    transform: rotate(360deg);
    transform-origin: 50% 93%;
  }
}

.cd-number-wrapper {
  width: 80px;
  height: 189px;
  top: 30%;
  margin: 80px auto 0 auto;
  font-size: 10em;
  font-family: "Londrina Outline"; /* Bowlby One SC */
}

.cd-number-five {
  display: block !important;
  position: absolute;
  opacity: 0;
  margin: 0 auto 0 auto;
  -webkit-animation: cd-number-five-anim 1.2s ease 0s 1 normal;
  -moz-animation: cd-number-five-anim 1.2s ease 0s 1 normal;
  -ms-animation: cd-number-five-anim 1.2s ease 0s 1 normal;
  -o-animation: cd-number-five-anim 1.2s ease 0s 1 normal;
  animation: cd-number-five-anim 1.2s ease 0s 1 normal;
}

@-webkit-keyframes cd-number-five-anim {
  from {
    -webkit-transform: scale(0.5);
    opacity: 0;
  }
  to {
    -webkit-transform: scale(1.3);
    opacity: 1;
  }
}

@-moz-keyframes cd-number-five-anim {
  from {
    -moz-transform: scale(0.5);
    opacity: 0;
  }
  to {
    -moz-transform: scale(1.3);
    opacity: 1;
  }
}

@-o-keyframes cd-number-five-anim {
  from {
    -o-transform: scale(0.5);
    opacity: 0;
  }
  to {
    -o-transform: scale(1.3);
    opacity: 1;
  }
}

@-ms-keyframes cd-number-five-anim {
  from {
    -ms-transform: scale(0.5);
    opacity: 0;
  }
  to {
    -ms-transform: scale(1.3);
    opacity: 1;
  }
}

@keyframes cd-number-five-anim {
  from {
    transform: scale(0.5);
    opacity: 0;
  }
  to {
    transform: scale(1.3);
    opacity: 1;
  }
}

.cd-number-four {
  display: block !important;
  position: absolute;
  opacity: 0;
  -webkit-animation: cd-number-four-anim 1.2s ease 1.2s 1 normal;
  -moz-animation: cd-number-four-anim 1.2s ease 1.2s 1 normal;
  -ms-animation: cd-number-four-anim 1.2s ease 1.2s 1 normal;
  -o-animation: cd-number-four-anim 1.2s ease 1.2s 1 normal;
  animation: cd-number-four-anim 1.2s ease 1.2s 1 normal;
}

@-webkit-keyframes cd-number-four-anim {
  from {
    -webkit-transform: scale(0.5);
    opacity: 0;
  }
  to {
    -webkit-transform: scale(1.3);
    opacity: 1;
  }
}

@-moz-keyframes cd-number-four-anim {
  from {
    -moz-transform: scale(0.5);
    opacity: 0;
  }
  to {
    -moz-transform: scale(1.3);
    opacity: 1;
  }
}

@-o-keyframes cd-number-four-anim {
  from {
    -o-transform: scale(0.5);
    opacity: 0;
  }
  to {
    -o-transform: scale(1.3);
    opacity: 1;
  }
}

@-ms-keyframes cd-number-four-anim {
  from {
    -ms-transform: scale(0.5);
    opacity: 0;
  }
  to {
    -ms-transform: scale(1.3);
    opacity: 1;
  }
}

@keyframes cd-number-four-anim {
  from {
    transform: scale(0.5);
    opacity: 0;
  }
  to {
    transform: scale(1.3);
    opacity: 1;
  }
}

.cd-number-three {
  display: block !important;
  position: absolute;
  opacity: 0;
  -webkit-animation: cd-number-three-anim 1.2s ease 2.4s 1 normal;
  -moz-animation: cd-number-three-anim 1.2s ease 2.4s 1 normal;
  -ms-animation: cd-number-three-anim 1.2s ease 2.4s 1 normal;
  -o-animation: cd-number-three-anim 1.2s ease 2.4s 1 normal;
  animation: cd-number-three-anim 1.2s ease 2.4s 1 normal;
}

@-webkit-keyframes cd-number-three-anim {
  from {
    -webkit-transform: scale(0.5);
    opacity: 0;
  }
  to {
    -webkit-transform: scale(1.3);
    opacity: 1;
  }
}

@-moz-keyframes cd-number-three-anim {
  from {
    -moz-transform: scale(0.5);
    opacity: 0;
  }
  to {
    -moz-transform: scale(1.3);
    opacity: 1;
  }
}

@-o-keyframes cd-number-three-anim {
  from {
    -o-transform: scale(0.5);
    opacity: 0;
  }
  to {
    -o-transform: scale(1.3);
    opacity: 1;
  }
}

@-ms-keyframes cd-number-three-anim {
  from {
    -ms-transform: scale(0.5);
    opacity: 0;
  }
  to {
    -ms-transform: scale(1.3);
    opacity: 1;
  }
}

@keyframes cd-number-three-anim {
  from {
    transform: scale(0.5);
    opacity: 0;
  }
  to {
    transform: scale(1.3);
    opacity: 1;
  }
}

.cd-number-two {
  display: block !important;
  position: absolute;
  opacity: 0;
  -webkit-animation: cd-number-two-anim 1.2s ease 3.6s 1 normal;
  -moz-animation: cd-number-two-anim 1.2s ease 3.6s 1 normal;
  -ms-animation: cd-number-two-anim 1.2s ease 3.6s 1 normal;
  -o-animation: cd-number-two-anim 1.2s ease 3.6s 1 normal;
  animation: cd-number-two-anim 1.2s ease 3.6s 1 normal;
}

@-webkit-keyframes cd-number-two-anim {
  from {
    -webkit-transform: scale(0.5);
    opacity: 0;
  }
  to {
    -webkit-transform: scale(1.3);
    opacity: 1;
  }
}

@-moz-keyframes cd-number-two-anim {
  from {
    -moz-transform: scale(0.5);
    opacity: 0;
  }
  to {
    -moz-transform: scale(1.3);
    opacity: 1;
  }
}

@-o-keyframes cd-number-two-anim {
  from {
    -o-transform: scale(0.5);
    opacity: 0;
  }
  to {
    -o-transform: scale(1.3);
    opacity: 1;
  }
}

@-ms-keyframes cd-number-two-anim {
  from {
    -ms-transform: scale(0.5);
    opacity: 0;
  }
  to {
    -ms-transform: scale(1.3);
    opacity: 1;
  }
}

@keyframes cd-number-two-anim {
  from {
    transform: scale(0.5);
    opacity: 0;
  }
  to {
    transform: scale(1.3);
    opacity: 1;
  }
}

.cd-number-one {
  display: block !important;
  position: absolute;
  opacity: 0;
  -webkit-animation: cd-number-one-anim 1.2s ease 4.8s 1 normal;
  -moz-animation: cd-number-one-anim 1.2s ease 4.8s 1 normal;
  -ms-animation: cd-number-one-anim 1.2s ease 4.8s 1 normal;
  -o-animation: cd-number-one-anim 1.2s ease 4.8s 1 normal;
  animation: cd-number-one-anim 1.2s ease 4.8s 1 normal;
}

@-webkit-keyframes cd-number-one-anim {
  from {
    -webkit-transform: scale(0.5);
    opacity: 0;
  }
  to {
    -webkit-transform: scale(1.3);
    opacity: 1;
  }
}

@-moz-keyframes cd-number-one-anim {
  from {
    -moz-transform: scale(0.5);
    opacity: 0;
  }
  to {
    -moz-transform: scale(1.3);
    opacity: 1;
  }
}

@-o-keyframes cd-number-one-anim {
  from {
    -o-transform: scale(0.5);
    opacity: 0;
  }
  to {
    -o-transform: scale(1.3);
    opacity: 1;
  }
}

@-ms-keyframes cd-number-one-anim {
  from {
    -ms-transform: scale(0.5);
    opacity: 0;
  }
  to {
    -ms-transform: scale(1.3);
    opacity: 1;
  }
}

@keyframes cd-number-one-anim {
  from {
    transform: scale(0.5);
    opacity: 0;
  }
  to {
    transform: scale(1.3);
    opacity: 1;
  }
}

.none {
  display: none;
}
</style>
