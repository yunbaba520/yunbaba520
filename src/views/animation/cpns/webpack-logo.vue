<template>
  <div class="wabpack-logo-wrap">
    <div>webpack-logo  css3开发</div>
    <div class="animation">
      <div class="inner">
        <div class="top"></div>
        <div class="bottom"></div>
        <div class="front"></div>
        <div class="back"></div>
        <div class="left"></div>
        <div class="right"></div>
      </div>
      <div class="outer">
        <div class="top"></div>
        <div class="bottom"></div>
        <div class="front"></div>
        <div class="back"></div>
        <div class="left"></div>
        <div class="right"></div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.wabpack-logo-wrap {
  .animation {
    width: 100%;
    height: 200px;
    background-color: #2b3a42;
    position: relative;
    .inner {
      position: absolute;
      top: 50%;
      left: 50%;
      // 不要使用transform，会改变坐标原点
      margin: -25px 0 0 -25px;
      width: 50px;
      height: 50px;
      transform-style: preserve-3d;

      animation: innerLoop 3s ease infinite;
      @keyframes innerLoop {
        0% {
          transform: rotateX(-33deg) rotateY(45deg);

        }
        50%, 100% {
          transform: rotateX(-33deg) rotateY(-315deg);

        }
      }
      div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #175d96;
        border: 1px solid #fff;
      }
      .top {
        transform: rotateX(90deg) translateZ(25px);
      }
      .bottom {
        transform: rotateX(-90deg) translateZ(25px);
      }
      .front {
        transform: translateZ(25px);
      }
      .back {
        transform: rotateY(180deg) translateZ(25px);
      }
      .left {
        transform: rotateY(-90deg) translateZ(25px);
      }
      .right {
        transform: rotateY(90deg) translateZ(25px);
      }
    }
    .outer {
      position: absolute;
      top: 50%;
      left: 50%;
      // 不要使用transform，会改变坐标原点
      margin: -50px 0 0 -50px;
      width: 100px;
      height: 100px;
      transform-style: preserve-3d;

      animation: outerLoop 3s ease infinite;
      @keyframes outerLoop {
        0% {
          transform: rotateX(-33deg) rotateY(45deg);

        }
        50%, 100% {
          transform: rotateX(-33deg) rotateY(405deg);

        }
      }
      div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(141, 214, 249, 0.5);
        border: 1px solid #fff;
      }
      .top {
        transform: rotateX(90deg) translateZ(50px);
      }
      .bottom {
        transform: rotateX(-90deg) translateZ(50px);
      }
      .front {
        transform: translateZ(50px);
      }
      .back {
        transform: rotateY(180deg) translateZ(50px);
      }
      .left {
        transform: rotateY(-90deg) translateZ(50px);
      }
      .right {
        transform: rotateY(90deg) translateZ(50px);
      }
    }
  }

}
</style>
