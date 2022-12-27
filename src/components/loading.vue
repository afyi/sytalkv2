<script setup lang="ts">
  /*defineProps<{msg: string}>();
  const emits = defineEmits(["increase"]);
  const handelClick = () => {
    emits("increase", "a", "b", "c");
  };*/
</script>

<template>
  <div id="lazy">
    <div class="preloader">
      <div class="sun"><i class="syicon sy-sun"></i></div>
      <div class="cloud"><i class="syicon sy-cloud"></i></div>
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
    </div>
  </div>
</template>

<style lang="scss">
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
  }
  .cloud{
    position: relative;
    z-index: 2;
    width: 70px;
    height: 70px;
    i{
      font-size: 3.5rem;
      color:#9ea1a4;
    }
  }
  .sun{
    width: 30px;
    height: 30px;
    position: absolute;
    left: 49px;
    top: 18px;
    z-index: 1;
    animation: rotate 16s infinite linear;
    i{
      font-size: 2rem;
      text-align: center;
      color:#9ea1a4;
    }
  }
  .rain{
    position: absolute;
    width: 65px;
    height: 70px;
    margin-top: -10px;
    margin-left: 5px;
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