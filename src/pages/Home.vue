<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter()
const counter = ref(3)
const isclicked = ref(false)
function visszaszamlalo(){
    isclicked.value = true
    const IntervalRef = setInterval(()=>{
    counter.value--
}, 1000)

setTimeout(()=> {
  clearInterval(IntervalRef)
  counter.value = 3
  router.push('/szerkeszto')
}, 3000)
}


</script>

<template>
    <div class="flex items-center justify-center border-2 border-slate-800 h-1/2 w-full md:w-1/2 bg-white mt-36">
        <div class="absolute left-50% top-50% text-2xl"><link href="https://fonts.googleapis.com/css?family=Bowlby+One+SC|Londrina+Outline" rel='stylesheet' type='text/css' />

<div class="cd-wrapper">
  <div class="cd-outer-top-left">
  <div class="cd-inner-top-left"></div>
</div>
      
<div class="cd-outer-top-right">
  <div class="cd-inner-top-right"></div>
</div>
      
<div class="cd-outer-btm-left">
  <div class="cd-inner-btm-left"></div>
</div>
      
<div class="cd-outer-btm-right">
  <div class="cd-inner-btm-right"></div>
</div>
      
<div class="cd-pointer"></div>
      
<div class="cd-number-wrapper">
  <span :class="{'cd-number-five':isclicked}">5</span>
  <span :class="{'cd-number-four':isclicked}">4</span>
  <span :class="{'cd-number-three':isclicked}">3</span>
  <span :class="{'cd-number-two':isclicked}">2</span>
  <span :class="{'cd-number-one':isclicked}">1</span>
</div></div></div>
        <div class="">
            <p class="text-3xl">Selfie készítése</p>  
        </div>
    </div>
    <div class="flex-row text-3xl mt-4">
        <input type="button" @click="visszaszamlalo" value="Kép készítése" class="bg-orange-400 border-2 border-stone-950 h-14 w-60 rounded-xl cursor-pointer ">

    </div>
            
</template>
<style scoped>

.cd-wrapper {
	width: 350px;
	height: 350px;
	position: fixed;
	top: 50%;
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
	-moz-animation:    cd-pointer-spin 1.2s linear 0s 5 normal;
	-o-animation:      cd-pointer-spin 1.2s linear 0s 5 normal;
	-ms-animation:     cd-pointer-spin 1.2s linear 0s 5 normal;
	animation:         cd-pointer-spin 1.2s linear 0s 5 normal;
}

@-webkit-keyframes cd-pointer-spin {
	from {-webkit-transform: rotate(0deg); -webkit-transform-origin: 50% 93%;}
	to {-webkit-transform: rotate(360deg); -webkit-transform-origin: 50% 93%;}}

@-moz-keyframes cd-pointer-spin {
	from {-moz-transform: rotate(0deg); -moz-transform-origin: 50% 93%;}
	to {-moz-transform: rotate(360deg); -moz-transform-origin: 50% 93%;}}

@-o-keyframes cd-pointer-spin {
	from {-o-transform: rotate(0deg); -o-transform-origin: 50% 93%;}
	to {-o-transform: rotate(360deg); -o-transform-origin: 50% 93%;}}

@-ms-keyframes cd-pointer-spin {
	from {-ms-transform: rotate(0deg); -ms-transform-origin: 50% 93%;}
	to {-ms-transform: rotate(360deg); -ms-transform-origin: 50% 93%;}}

@keyframes cd-pointer-spin {
	from {transform: rotate(0deg); transform-origin: 50% 93%;}
	to {transform: rotate(360deg); transform-origin: 50% 93%;}}
	
.cd-number-wrapper {
	width: 80px;
	height: 189px;
	top: 50%;
	margin: 80px auto 0 auto;
	font-size: 10em;
	font-family: 'Londrina Outline'; /* Bowlby One SC */
}
	
.cd-number-five {
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
	from {-webkit-transform: scale(0.5); opacity: 0;}
	to {  -webkit-transform: scale(1.3); opacity: 1;}}
	
@-moz-keyframes cd-number-five-anim {
	from {-moz-transform: scale(0.5); opacity: 0;}
	to {  -moz-transform: scale(1.3); opacity: 1;}}
	
@-o-keyframes cd-number-five-anim {
	from {-o-transform: scale(0.5); opacity: 0;}
	to {  -o-transform: scale(1.3); opacity: 1;}}
	
@-ms-keyframes cd-number-five-anim {
	from {-ms-transform: scale(0.5); opacity: 0;}
	to {  -ms-transform: scale(1.3); opacity: 1;}}
	
@keyframes cd-number-five-anim {
	from {transform: scale(0.5); opacity: 0;}
	to {  transform: scale(1.3); opacity: 1;}}

.cd-number-four {
	position: absolute;
	opacity: 0;
	-webkit-animation: cd-number-four-anim 1.2s ease 1.2s 1 normal;
	-moz-animation: cd-number-four-anim 1.2s ease 1.2s 1 normal;
	-ms-animation: cd-number-four-anim 1.2s ease 1.2s 1 normal;
	-o-animation: cd-number-four-anim 1.2s ease 1.2s 1 normal;
	animation: cd-number-four-anim 1.2s ease 1.2s 1 normal;
}

@-webkit-keyframes cd-number-four-anim {
	from {-webkit-transform: scale(0.5); opacity: 0;}
	to {  -webkit-transform: scale(1.3); opacity: 1;}}
	
@-moz-keyframes cd-number-four-anim {
	from {-moz-transform: scale(0.5); opacity: 0;}
	to {  -moz-transform: scale(1.3); opacity: 1;}}
	
@-o-keyframes cd-number-four-anim {
	from {-o-transform: scale(0.5); opacity: 0;}
	to {  -o-transform: scale(1.3); opacity: 1;}}
	
@-ms-keyframes cd-number-four-anim {
	from {-ms-transform: scale(0.5); opacity: 0;}
	to {  -ms-transform: scale(1.3); opacity: 1;}}
	
@keyframes cd-number-four-anim {
	from {transform: scale(0.5); opacity: 0;}
	to {  transform: scale(1.3); opacity: 1;}}

.cd-number-three {
	position: absolute;
	opacity: 0;
	-webkit-animation: cd-number-three-anim 1.2s ease 2.4s 1 normal;
	-moz-animation: cd-number-three-anim 1.2s ease 2.4s 1 normal;
	-ms-animation: cd-number-three-anim 1.2s ease 2.4s 1 normal;
	-o-animation: cd-number-three-anim 1.2s ease 2.4s 1 normal;
	animation: cd-number-three-anim 1.2s ease 2.4s 1 normal;
}

@-webkit-keyframes cd-number-three-anim {
	from {-webkit-transform: scale(0.5); opacity: 0;}
	to {  -webkit-transform: scale(1.3); opacity: 1;}}
	
@-moz-keyframes cd-number-three-anim {
	from {-moz-transform: scale(0.5); opacity: 0;}
	to {  -moz-transform: scale(1.3); opacity: 1;}}
	
@-o-keyframes cd-number-three-anim {
	from {-o-transform: scale(0.5); opacity: 0;}
	to {  -o-transform: scale(1.3); opacity: 1;}}
	
@-ms-keyframes cd-number-three-anim {
	from {-ms-transform: scale(0.5); opacity: 0;}
	to {  -ms-transform: scale(1.3); opacity: 1;}}
	
@keyframes cd-number-three-anim {
	from {transform: scale(0.5); opacity: 0;}
	to {  transform: scale(1.3); opacity: 1;}}

.cd-number-two {
	position: absolute;
	opacity: 0;
	-webkit-animation: cd-number-two-anim 1.2s ease 3.6s 1 normal;
	-moz-animation: cd-number-two-anim 1.2s ease 3.6s 1 normal;
	-ms-animation: cd-number-two-anim 1.2s ease 3.6s 1 normal;
	-o-animation: cd-number-two-anim 1.2s ease 3.6s 1 normal;
	animation: cd-number-two-anim 1.2s ease 3.6s 1 normal;
}

@-webkit-keyframes cd-number-two-anim {
	from {-webkit-transform: scale(0.5); opacity: 0;}
	to {  -webkit-transform: scale(1.3); opacity: 1;}}
	
@-moz-keyframes cd-number-two-anim {
	from {-moz-transform: scale(0.5); opacity: 0;}
	to {  -moz-transform: scale(1.3); opacity: 1;}}
	
@-o-keyframes cd-number-two-anim {
	from {-o-transform: scale(0.5); opacity: 0;}
	to {  -o-transform: scale(1.3); opacity: 1;}}
	
@-ms-keyframes cd-number-two-anim {
	from {-ms-transform: scale(0.5); opacity: 0;}
	to {  -ms-transform: scale(1.3); opacity: 1;}}
	
@keyframes cd-number-two-anim {
	from {transform: scale(0.5); opacity: 0;}
	to {  transform: scale(1.3); opacity: 1;}}

.cd-number-one {
	position: absolute;
	opacity: 0;
	-webkit-animation: cd-number-one-anim 1.2s ease 4.8s 1 normal;
	-moz-animation: cd-number-one-anim 1.2s ease 4.8s 1 normal;
	-ms-animation: cd-number-one-anim 1.2s ease 4.8s 1 normal;
	-o-animation: cd-number-one-anim 1.2s ease 4.8s 1 normal;
	animation: cd-number-one-anim 1.2s ease 4.8s 1 normal;
}

@-webkit-keyframes cd-number-one-anim {
	from {-webkit-transform: scale(0.5); opacity: 0;}
	to {  -webkit-transform: scale(1.3); opacity: 1;}}
	
@-moz-keyframes cd-number-one-anim {
	from {-moz-transform: scale(0.5); opacity: 0;}
	to {  -moz-transform: scale(1.3); opacity: 1;}}
	
@-o-keyframes cd-number-one-anim {
	from {-o-transform: scale(0.5); opacity: 0;}
	to {  -o-transform: scale(1.3); opacity: 1;}}
	
@-ms-keyframes cd-number-one-anim {
	from {-ms-transform: scale(0.5); opacity: 0;}
	to {  -ms-transform: scale(1.3); opacity: 1;}}
	
@keyframes cd-number-one-anim {
	from {transform: scale(0.5); opacity: 0;}
	to {  transform: scale(1.3); opacity: 1;}}
</style>