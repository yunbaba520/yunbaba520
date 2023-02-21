<template>
  <div class="platform-data-one-wrap">
    <div>数据平台2.5D动画 css3实现</div>
    <div class="animation-wrap">
      <div class="animation">
        <img
          class="tuB"
          src="@/assets/img/animation/platform-data-one/tuB.png"
        />
        <img
          class="tuC"
          src="@/assets/img/animation/platform-data-one/tuC.png"
        />
        <img
          class="guangA"
          src="@/assets/img/animation/platform-data-one/guang.png"
        />
        <img
          class="guangB"
          src="@/assets/img/animation/platform-data-one/guang.png"
        />

        <img
          class="lingxA"
          src="@/assets/img/animation/platform-data-one/lingxA.png"
        />
        <img
          class="lingxB"
          src="@/assets/img/animation/platform-data-one/lingxB.png"
        />
        <img
          class="lingxC"
          src="@/assets/img/animation/platform-data-one/lingxC.png"
        />
        <img
          class="lingxD"
          src="@/assets/img/animation/platform-data-one/lingxD.png"
        />
        <img
          class="lingxE"
          src="@/assets/img/animation/platform-data-one/lingxE.png"
        />
        <img
          class="lingxF"
          src="@/assets/img/animation/platform-data-one/lingxF.png"
        />

        <img
          class="ma tuAn"
          src="@/assets/img/animation/platform-data-one/tuAn.png"
        />
        <img
          class="ma tuMing"
          src="@/assets/img/animation/platform-data-one/tuMing.png"
        />
        <img
          class="ren"
          src="@/assets/img/animation/platform-data-one/ren.png"
        />

        <img
          class="chaunB"
          src="@/assets/img/animation/platform-data-one/chaunB.png"
        />
        <img
          class="chaunC"
          src="@/assets/img/animation/platform-data-one/chaunB.png"
        />
        <img
          class="tuA"
          src="@/assets/img/animation/platform-data-one/tuA.png"
        />
        <img
          class="tuAa"
          src="@/assets/img/animation/platform-data-one/tuA.png"
        />

        <img
          class="ziA"
          src="@/assets/img/animation/platform-data-one/ziA.png"
        />
        <img
          class="ziB"
          src="@/assets/img/animation/platform-data-one/ziB.png"
        />
        <img
          class="ziC"
          src="@/assets/img/animation/platform-data-one/ziC.png"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.platform-data-one-wrap {
  .animation-wrap {
    position: relative;
    min-height: 500px;
    min-width: 100%;
    background: url('@/assets/img/animation/platform-data-one/banbj.jpeg');
    background-repeat: no-repeat;
    background-position: center;
    .animation {
      width: 444px;
      height: 430px;
      position: absolute;
      right: 70px;
      top: 40px;
      background: url('@/assets/img/animation/platform-data-one/banner.png');
      background-repeat: no-repeat;
      background-position: center;

      transform-style: preserve-3d;
      .tuB {
        position: absolute;
        top: 123px;
        left: 111px;
        animation: tuB 2s ease infinite;
      }
      .tuC {
        position: absolute;
        top: 208px;
        left: 168px;
        opacity: 1;
        animation: tuC 1.6s linear infinite;
      }
      @keyframes tuC {
        0% {
          opacity: 1;
        }
        80% {
          opacity: 1;
        }
        100% {
          opacity: 0;
          transform: translateX(40px) translateY(25px);
        }
      }
      @keyframes tuB {
        0% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-20px);
        }
        100% {
          transform: translateY(0);
        }
      }
      .guangA {
        position: absolute;
        top: 289px;
        left: 279px;
        animation: guangA 1.3s linear infinite;
      }

      .guangB {
        position: absolute;
        top: 243px;
        left: 239px;
        animation: guangB 1.1s linear infinite;
      }
      @keyframes guangA {
        from {
          transform: translate(0, 0);
        }

        50% {
          transform: translate(-55px, -34px);
          opacity: 0;
        }

        to {
          transform: translate(-55px, -34px);
          opacity: 0;
        }
      }
      @keyframes guangB {
        from {
          transform: translate(0, 0);
        }

        50% {
          opacity: 1;
        }

        to {
          transform: translate(60px, 33px);
          opacity: 0;
        }
      }

      .lingxA {
        position: absolute;
        top: 194px;
        left: 126px;
        animation: lingxA 2s ease infinite;
      }
      @keyframes lingxA {
        0% {
          opacity: 1;
          transform: translateY(-8px);
        }
        60% {
          opacity: 1;
        }
        100% {
          opacity: 0;
          transform: translateY(-80px);
        }
      }
      .lingxB {
        position: absolute;
        top: 163px;
        left: 79px;
        opacity: 1;
        animation: lingxB 2.2s linear infinite;
      }
      @keyframes lingxB {
        from {
          transform: translateY(-8px);
          opacity: 1;
        }

        40% {
          opacity: 1;
        }

        60%,
        to {
          transform: translateY(-60px);
          opacity: 0;
        }
      }
      .lingxC {
        position: absolute;
        top: 179px;
        left: 189px;
        opacity: 1;
        animation: lingxC 1.7s linear infinite;
      }
      @keyframes lingxC {
        from {
          transform: translateY(-8px);
          opacity: 1;
        }

        30% {
          opacity: 1;
        }

        50%,
        to {
          transform: translateY(-50px);
          opacity: 0;
        }
      }
      .lingxD {
        position: absolute;
        top: 103px;
        left: 160px;
        opacity: 1;
        animation: lingxC 2.7s linear infinite;
      }
      .lingxE {
        position: absolute;
        top: 104px;
        left: 95px;
        opacity: 1;
        animation: lingxB 1.2s linear infinite;
      }
      .lingxF {
        position: absolute;
        top: 84px;
        left: 144px;
        opacity: 1;
        animation: lingxA 1.4s linear infinite;
      }

      .ma {
        position: absolute;
        top: 227px;
        left: 303px;
      }

      .tuMing {
        opacity: 0;
        animation: tuMing 0.6s linear infinite;
      }
      @keyframes tuMing {
        /* 0 1 0  0 1 0 */
        /* 0 1 0 1  */
        from {
          opacity: 0;
        }

        50% {
          opacity: 1;
        }

        to {
          opacity: 0;
        }
      }
      .ren {
        position: absolute;
        top: 263px;
        left: 330px;
      }

      .chaunB {
        position: absolute;
        top: 18px;
        left: 318px;
        animation: chaunB 1.2s linear infinite;
      }

      .chaunC {
        position: absolute;
        top: 40px;
        left: 318px;
        animation: chaunC 0.7s linear infinite;
      }

      .tuA {
        position: absolute;
        top: 120px;
        left: 316px;
        animation: tuA 1.3s linear infinite;
      }

      .tuAa {
        position: absolute;
        top: 120px;
        left: 316px;
        animation: tuAa 1.3s linear infinite;
      }

      .ziA {
        position: absolute;
        top: 94px;
        left: 320px;
        animation: ziA 2.6s linear infinite;
      }

      .ziB {
        position: absolute;
        top: 124px;
        left: 339px;
        animation: ziB 2s linear infinite;
      }

      .ziC {
        position: absolute;
        top: 71px;
        left: 349px;
        animation: ziC 1.7s linear infinite;
      }

      @keyframes chaunB {
        to {
          transform: translateY(-70px);
          opacity: 0;
        }
      }

      @keyframes chaunC {
        to {
          transform: translateY(-40px);
          opacity: 0;
        }
      }

      @keyframes tuA {
        50% {
          opacity: 1;
        }

        to {
          transform: translateY(-120px);
          opacity: 0;
        }
      }

      @keyframes tuAa {
        30% {
          opacity: 1;
          transform: translateY(0px);
        }

        50% {
          opacity: 1;
        }

        to {
          transform: translateY(-60px);
          opacity: 0;
        }
      }

      /* 字母上移动画 */
      @keyframes ziA {
        /* 0 10 20 30 40 50 60 70 80 90 100*/
        /* 0 -4  0  4  0 -4  0  4  0  0   0*/
        0%,
        20%,
        40%,
        60%,
        80% {
          transform: translateY(0);
        }

        10%,
        50% {
          transform: translateY(-4px);
        }

        30%,
        70% {
          transform: translateY(4px);
        }
      }

      @keyframes ziB {
        0%,
        20%,
        40%,
        60%,
        80% {
          transform: translateY(0);
        }

        10%,
        50% {
          transform: translateY(3px);
        }

        30%,
        70% {
          transform: translateY(-3px);
        }
      }

      @keyframes ziC {
        0%,
        20%,
        40%,
        60%,
        80% {
          transform: translateY(0);
        }

        10%,
        50% {
          transform: translateY(-2px);
        }

        30%,
        70% {
          transform: translateY(3px);
        }
      }
    }
  }
}
</style>
