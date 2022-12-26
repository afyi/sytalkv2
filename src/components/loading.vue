<script setup lang="ts">
  /*defineProps<{msg: string}>();
  const emits = defineEmits(["increase"]);
  const handelClick = () => {
    emits("increase", "a", "b", "c");
  };*/
</script>

<template>
  <div id="lazy">
    <div class="preloader" style="opacity: 1; ">
      <svg version="1.1" id="sun" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 10 10" style="enable-background:new 0 0 10 10;" xml:space="preserve">
        <g>
          <path style="fill:none;" d="M6.9,3.9C6.5,3.2,5.8,2.8,5,2.8c-0.4,0-0.8,0.1-1.1,0.3C2.8,3.7,2.4,5,3.1,6.1C3.5,6.8,4.2,7.2,5,7.2c0.4,0,0.8-0.1,1.1-0.3c0.5-0.3,0.9-0.8,1-1.4C7.3,5,7.2,4.4,6.9,3.9z M6.9,5.5C6.7,6,6.4,6.4,6,6.7C5.7,6.9,5.3,6.9,5,6.9c-0.7,0-1.3-0.4-1.7-1C2.8,5,3.1,3.8,4,3.3C4.3,3.1,4.7,3,5,3c0.7,0,1.3,0.4,1.7,1C6.9,4.5,7,5,6.9,5.5z"/>
          <path style="fill:none;" d="M8.8,2.8c0-0.1-0.1-0.1-0.2-0.1L7.3,3.5c-0.1,0-0.1,0.1-0.1,0.2c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0,0.1,0L8.7,3C8.8,3,8.8,2.9,8.8,2.8z"/>
          <path style="fill:none;" d="M1.2,7.2c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0,0.1,0l1.2-0.7c0.1,0,0.1-0.1,0.1-0.2S2.6,6.2,2.5,6.3L1.3,7C1.2,7,1.2,7.1,1.2,7.2z"/>
          <path style="fill:none;" d="M6.4,2.7c0.1,0,0.1,0,0.1-0.1L6.9,2c0-0.1,0-0.2-0.1-0.2c-0.1,0-0.2,0-0.2,0.1L6.3,2.5C6.2,2.6,6.3,2.7,6.4,2.7C6.3,2.7,6.4,2.7,6.4,2.7z"/>
          <path style="fill:none;" d="M3.5,7.3L3.1,8c0,0.1,0,0.2,0.1,0.2c0,0,0,0,0.1,0c0.1,0,0.1,0,0.1-0.1l0.3-0.6c0-0.1,0-0.2-0.1-0.2C3.6,7.3,3.5,7.3,3.5,7.3z"/>
          <path style="fill:none;" d="M3.6,2.7C3.6,2.7,3.7,2.7,3.6,2.7c0.1-0.1,0.2-0.2,0.1-0.2L3.4,1.9c0-0.1-0.1-0.1-0.2-0.1C3.1,1.9,3.1,2,3.1,2l0.3,0.6C3.5,2.7,3.5,2.7,3.6,2.7z"/>
          <path style="fill:none;" d="M6.3,7.3c-0.1,0-0.1,0.1-0.1,0.2l0.4,0.6c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0,0.1,0C6.9,8.1,6.9,8,6.9,8L6.5,7.3C6.5,7.3,6.4,7.3,6.3,7.3z"/>
          <path style="fill:none;" d="M2.2,5.1c0.1,0,0.1-0.1,0.1-0.1S2.3,4.9,2.2,4.9H1.5C1.4,4.9,1.4,4.9,1.4,5s0.1,0.1,0.1,0.1C1.5,5.1,2.2,5.1,2.2,5.1z"/>
          <path style="fill:none;" d="M8.5,4.9H7.8C7.7,4.9,7.6,4.9,7.6,5s0.1,0.1,0.1,0.1l0,0h0.7c0.1,0,0.1-0.1,0.1-0.1S8.6,4.9,8.5,4.9L8.5,4.9z"/>
          <path style="fill:none;" d="M5.1,2.2V0.8c0-0.1-0.1-0.1-0.1-0.1S4.9,0.7,4.9,0.8v1.4c0,0.1,0.1,0.1,0.1,0.1S5.1,2.3,5.1,2.2z"/>
          <path style="fill:none;" d="M4.8,7.8v1.4c0,0.1,0.1,0.1,0.1,0.1c0.1,0,0.1-0.1,0.1-0.1V7.8c0-0.1-0.1-0.1-0.1-0.1C4.9,7.6,4.8,7.7,4.8,7.8z"/>
          <path style="fill:none;" d="M2.7,3.5L1.4,2.8c-0.1,0-0.2,0-0.2,0.1c0,0.1,0,0.2,0.1,0.2l1.2,0.7c0,0,0,0,0.1,0c0.1,0,0.1,0,0.1-0.1C2.7,3.6,2.7,3.5,2.7,3.5z"/>
          <path style="fill:none;" d="M8.7,7L7.5,6.3c-0.1,0-0.2,0-0.2,0.1c0,0.1,0,0.2,0.1,0.2l1.2,0.7c0,0,0,0,0.1,0c0.1,0,0.1,0,0.1-0.1C8.8,7.1,8.8,7,8.7,7z"/>
        </g>
      </svg>
      <svg version="1.1" id="cloud" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 110 110" style="enable-background:new 0 0 110 110;" xml:space="preserve">
        <path style="fill:none;" d="M93.8,61.9h-3.1c-0.9,0-1.7-0.7-1.7-1.7c0-7.6-6.2-13.8-13.8-13.8c-1.1,0-2.2,0.1-3.3,0.4c-0.5,0.1-0.9,0-1.3-0.2c-0.4-0.2-0.6-0.6-0.7-1.1c-2.5-12.1-13.3-20.9-25.7-20.9c-13.8,0-25.3,10.8-26.2,24.5c0,0.6-0.4,1.2-1,1.4c-5.1,2.2-8.4,7.2-8.4,12.7c0,7.6,6.2,13.8,13.8,13.8h71.4c4.2,0,7.6-3.4,7.6-7.6C101.5,65.3,98,61.9,93.8,61.9z"/>
      </svg>
      <div class="rain">
        <span class="drop"></span>
        <span class="drop"></span>
        <span class="drop"></span>
        <span class="drop"></span>
        <span class="drop"></span>
        <span class="drop"></span>
        <span class="drop"></span>
        <span class="drop"></span>
        <span class="drop"></span>
        <span class="drop"></span>
      </div>
      <div class="sytalk_loading_text" id="loading_txt">加载中</div>
    </div>
  </div>
</template>

<style lang="scss">
/** loading动画 */
#lazy{
  background:rgba(0,0,0,.2);
  bottom:0;
  left:0;
  position:fixed;
  right:0;
  top:0;
  z-index:9999;
  .preloader{
    position:absolute;
    margin-left:-55px;
    margin-top:-100px;
    height:110px;
    width:110px;
    left:50%;
    top:50%;
    path {
      stroke:#9ea1a4;stroke-width:0.25;
    }
  }
  #cloud{
    position:relative;
    z-index:2;
    path{
      fill:#efefef;
    }
  }
  #sun{
    margin-left:-10px;
    margin-top:6px;
    opacity:0;
    width:60px;
    height:60px;
    position:absolute;
    left:45px;
    top:15px;
    z-index:1;
    animation: rotate 16s infinite linear;
    path{
      stroke-width:0.18;
      fill:#9ea1a4;
    }
  }
  .rain{
    position: absolute;
    width:70px;
    height:70px;
    margin-top:-32px;
    margin-left:19px;
  }
  .drop{
    opacity:1;
    background:#9ea1a4;
    display:block;
    float:left;
    width:3px;
    height:10px;
    margin-left:4px;
    border-radius:0px 0px 6px 6px;
    animation: drop 350ms infinite;
    &:nth-child(1){animation-delay:-130ms;}
    &:nth-child(2){animation-delay:-240ms;}
    &:nth-child(3){animation-delay:-390ms;}
    &:nth-child(4){animation-delay:-525ms;}
    &:nth-child(5){animation-delay:-640ms;}
    &:nth-child(6){animation-delay:-790ms;}
    &:nth-child(7){animation-delay:-900ms;}
    &:nth-child(8){animation-delay:-1050ms;}
    &:nth-child(9){animation-delay:-1130ms;}
    &:nth-child(10){animation-delay:-1300ms;}
  }
}
/** 定义动画 */
@keyframes rotate{0%{transform:rotateZ(0)}100%{transform:rotateZ(360deg)}}
@keyframes drop{50%{height:45px;opacity:0}51%{opacity:0}100%{height:1px;opacity:0}}
</style>