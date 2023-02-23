<template>
  <div class="platform-assets-two">
    <div>资产平台2.5D css3实现</div>
    <div class="animation-wrap">
      <div class="animation">
        <img
          class="bj"
          src="@/assets/img/animation/platform-assets-two/moveBj.png"
        />
        <img
          class="houLiang houLiangA"
          src="@/assets/img/animation/platform-assets-two/houLiang.png"
        />
        <img
          class="houLiang houLiangB"
          src="@/assets/img/animation/platform-assets-two/houLiang.png"
        />
        <img
          class="houLiang houLiangC"
          src="@/assets/img/animation/platform-assets-two/houLiang.png"
        />
        <div class="leftAn">
          <img src="@/assets/img/animation/platform-assets-two/leftAn.png" />
          <img
            class="houLiangD"
            src="@/assets/img/animation/platform-assets-two/leftLiang.png"
          />
        </div>
        <div class="rightAn">
          <img src="@/assets/img/animation/platform-assets-two/rightAn.png" />
          <img
            class="houLiangD"
            src="@/assets/img/animation/platform-assets-two/rightLiang.png"
          />
        </div>
        <div class="rightAna">
          <img src="@/assets/img/animation/platform-assets-two/rightAn.png" />
          <img
            class="houLiangD"
            src="@/assets/img/animation/platform-assets-two/rightLiang.png"
          />
        </div>

        <img
          class="leftYd"
          src="@/assets/img/animation/platform-assets-two/leftYd.png"
        />
        <img
          class="leftYdA"
          src="@/assets/img/animation/platform-assets-two/leftYdA.png"
        />

        <img
          class="rightLuj"
          src="@/assets/img/animation/platform-assets-two/rightLuj.png"
        />
        <img
          class="rightYd"
          src="@/assets/img/animation/platform-assets-two/rightYd.png"
        />
        <img
          class="rightYdA"
          src="@/assets/img/animation/platform-assets-two/rightYdA.png"
        />

        <div class="leftLing">
          <img
            class="leftTbA"
            src="@/assets/img/animation/platform-assets-two/leftTbA.png"
          />
          <img
            class="leftTbB"
            src="@/assets/img/animation/platform-assets-two/leftTbB.png"
          />
          <img
            class="guangA"
            src="@/assets/img/animation/platform-assets-two/guangA.png"
          />
          <img
            class="guangB"
            src="@/assets/img/animation/platform-assets-two/guangA.png"
          />
          <img
            class="guangC"
            src="@/assets/img/animation/platform-assets-two/guangA.png"
          />
          <img
            class="guangD"
            src="@/assets/img/animation/platform-assets-two/guangA.png"
          />
        </div>

        <div class="rightLing">
          <img
            class="rightTbA"
            src="@/assets/img/animation/platform-assets-two/rightTbA.png"
          />
          <img
            class="rightTbB"
            src="@/assets/img/animation/platform-assets-two/rightTbB.png"
          />
          <img
            class="guangA"
            src="@/assets/img/animation/platform-assets-two/guangA.png"
          />
          <img
            class="guangB"
            src="@/assets/img/animation/platform-assets-two/guangA.png"
          />
          <img
            class="guangC"
            src="@/assets/img/animation/platform-assets-two/guangA.png"
          />
          <img
            class="guangD"
            src="@/assets/img/animation/platform-assets-two/guangA.png"
          />
        </div>

        <img
          class="ren"
          src="@/assets/img/animation/platform-assets-two/ren.png"
        />
        <img
          class="xsPing"
          src="@/assets/img/animation/platform-assets-two/xsPing.png"
        />

        <div class="gucenter">
          <img
            class="centerA"
            src="@/assets/img/animation/platform-assets-two/centerA.png"
          />
          <img
            class="xiazai"
            src="@/assets/img/animation/platform-assets-two/xiazai.png"
          />
          <img
            class="guA"
            src="@/assets/img/animation/platform-assets-two/guangA.png"
          />
          <img
            class="guB"
            src="@/assets/img/animation/platform-assets-two/guangA.png"
          />
          <img
            class="guC"
            src="@/assets/img/animation/platform-assets-two/guangA.png"
          />
          <img
            class="guD"
            src="@/assets/img/animation/platform-assets-two/guangA.png"
          />
          <img
            class="guE"
            src="@/assets/img/animation/platform-assets-two/guangA.png"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.platform-assets-two {
  .animation-wrap {
    position: relative;
    min-width: 100%;
    min-height: 500px;
    width: auto;
    height: auto;
    background: url('@/assets/img/animation/platform-assets-two/banBj.jpeg');
    background-position: center;
    background-repeat: no-repeat;
    .animation {
      position: absolute;
      top: 0;
      right: 0;
      width: 460px;
      height: 500px;
      .bj {
        position: absolute;
        left: 0;
        bottom: 0;
      }
      .houLiang {
        position: absolute;
        opacity: 0;
      }
      .houLiangA {
        top: 244px;
        left: 92px;
        animation: houLiangA 1.2s infinite;
      }
      .houLiangB {
        top: 226px;
        left: 306px;
        animation: houLiangA 2.8s infinite;
      }
      .houLiangC {
        top: 226px;
        left: 337px;
        animation: houLiangA 2s infinite;
      }
      @keyframes houLiangA {
        0% {
          opacity: 0;
        }
        50% {
          opacity: 1;
        }
      }
      .houLiangD {
        position: absolute;
        left: 4px;
        top: 2px;
        opacity: 0;
      }
      .leftAn {
        position: absolute;
        top: 352px;
        left: 29px;
        .houLiangD {
          animation: houLiangA 3s infinite;
        }
      }
      .rightAn {
        position: absolute;
        bottom: 90px;
        left: 277px;
        .houLiangD {
          animation: houLiangA 2.8s infinite;
        }
      }
      .rightAna {
        position: absolute;
        bottom: 90px;
        left: 216px;
        .houLiangD {
          animation: houLiangA 2.1s infinite;
        }
      }

      .leftYd {
        position: absolute;
        top: 297px;
        left: 27px;
        animation: leftYd 2.4s linear infinite forwards;
      }
      .leftYdA {
        position: absolute;
        top: 335px;
        left: 109px;
        animation: leftYdA 2.4s linear infinite forwards;
        opacity: 0;
      }
      /* 左边线的光斑移动 */
      @keyframes leftYd {
        0% {
          transform: translate(0, 0);
          opacity: 1;
        }

        39% {
          opacity: 1;
        }

        /* 关键点 */
        41.67%,
        100% {
          transform: translate(49px, 28px);
          opacity: 0;
        }
      }
      /* 左边线的光斑移动 */
      @keyframes leftYdA {
        /* 关键点 */
        41.67% {
          transform: translate(0);
          opacity: 0;
        }

        43%,
        60% {
          opacity: 1;
        }

        62.5%,
        100% {
          transform: translate(20px, -13px);
          opacity: 0;
        }
      }
      .rightLuj {
        position: absolute;
        top: 285px;
        right: 0;
      }
      .rightYd {
        position: absolute;
        top: 331px;
        left: 418px;
        animation: rightYd 2.4s linear infinite forwards;
      }
      .rightYdA {
        position: absolute;
        top: 274px;
        left: 319px;
        animation: rightYdA 2.4s linear infinite forwards;
        opacity: 0;
      }
      @keyframes rightYd {
        0% {
          transform: translate(0, 0);
          opacity: 1;
        }

        39% {
          opacity: 1;
        }

        41.67%,
        100% {
          transform: translate(-77px, -47px);
          opacity: 0;
        }
      }
      @keyframes rightYdA {
        41.67% {
          transform: translate(0);
          opacity: 0;
        }

        43%,
        51% {
          opacity: 1;
        }

        54.17%,
        100% {
          transform: translate(-15px, 8px);
          opacity: 0;
        }
      }

      .leftLing {
        position: absolute;
        left: 2px;
        top: 138px;
        width: 85px;
        height: 190px;
        background-image: url('@/assets/img/animation/platform-assets-two/leftDi.png');
        background-position: center bottom;
        background-repeat: no-repeat;
        .leftTbA {
          position: absolute;
          left: 14px;
          top: 72px;
          animation: leftTbA 2.2s infinite;
        }
        .leftTbB {
          position: absolute;
          left: 44px;
          top: 102px;
          animation: leftTbA 2.2s linear infinite;
        }
      }

      .guangA {
        position: absolute;
        left: 40px;
        top: 65px;
        animation: guangA 2.2s linear infinite;
      }

      .guangB {
        position: absolute;
        left: 50px;
        top: 85px;
        animation: guangB 1.4s linear infinite;
      }

      .guangC {
        position: absolute;
        left: 76px;
        top: 90px;
        animation: guangB 1.8s linear infinite;
      }

      .guangD {
        position: absolute;
        left: 10px;
        top: 95px;
        animation: guangA 1.6s linear infinite;
      }

      .rightLing {
        position: absolute;
        right: 2px;
        top: 175px;
        width: 84px;
        height: 190px;
        background-image: url('@/assets/img/animation/platform-assets-two/rightDi.png');
        background-position: center bottom;
        background-repeat: no-repeat;
        .guangC {
          left: 75px;
        }
        .rightTbA {
          position: absolute;
          top: 61px;
          right: 46px;
          animation: rightTbA 2.2s linear infinite;
        }
        .rightTbB {
          position: absolute;
          top: 85px;
          right: 16px;
          animation: rightTbA 1.8s infinite;
        }
      }
      /*光线 上移动  */
      @keyframes guangA {
        40% {
          opacity: 1;
        }

        70%,
        100% {
          transform: translateY(-70px);
          opacity: 0;
        }
      }
      @keyframes guangB {
        30% {
          opacity: 1;
        }

        80%,
        100% {
          transform: translateY(-55px);
          opacity: 0;
        }
      }
      /* 左边文件夹等icon 浮动 */
      @keyframes leftTbA {
        35% {
          transform: translateY(7px);
        }

        80% {
          transform: translateY(-3px);
        }
      }
      /* 云朵的浮动 */
      @keyframes rightTbA {
        30% {
          transform: translateY(-2px);
        }

        70% {
          transform: translateY(6px);
        }
      }

      .ren {
        position: absolute;
        left: 301px;
        top: 319px;
      }
      .xsPing {
        position: absolute;
        left: 250px;
        top: 294px;
        animation: xsPing 1.5s linear infinite;
        opacity: 0;
      }
      @keyframes xsPing {
        0% {
          transform: translate(0, 0);
          opacity: 0;
        }

        1% {
          opacity: 0.5;
        }

        80%,
        100% {
          transform: translate(14px, 4px);
          opacity: 1;
        }
      }

      .gucenter {
        position: absolute;
        left: 135px;
        top: 109px;
        width: 156px;
        height: 170px;
        .centerA {
          position: absolute;
          top: 95px;
          left: 39px;
          animation: centerA 1.6s linear infinite forwards;
        }
        .guA {
          position: absolute;
          top: 41px;
          left: 9px;
          animation: guA 2.4s linear infinite forwards;
          opacity: 0;
        }
        .guB {
          position: absolute;
          top: 103px;
          left: 36px;
          animation: guB 2.4s linear infinite forwards;
          opacity: 0;
        }
        .guC {
          position: absolute;
          top: 82px;
          left: 53px;
          animation: guC 2.4s linear infinite forwards;
          opacity: 0;
        }
        .guD {
          position: absolute;
          top: 54px;
          left: 152px;
          animation: guB 2.4s linear infinite forwards;
          opacity: 0;
        }
        .guE {
          position: absolute;
          top: 51px;
          left: 139px;
          animation: guA 2.4s linear infinite forwards;
          opacity: 0;
        }
        .xiazai {
          position: absolute;
          top: 0;
          left: 26px;
          animation: xiazai 2.4s linear infinite forwards;
          opacity: 0;
        }
        /*中间红包 和 硬币 */
        @keyframes centerA {
          35%,
          85% {
            transform: translateY(-6px);
          }

          50%,
          100%,
          85% {
            transform: translateY(2px);
          }
        }
        /* 中间光线 */
        @keyframes guA {
          41.67% {
            opacity: 0;
            transform: translateY(0);
          }

          44%,
          60% {
            opacity: 1;
          }

          62.5% {
            opacity: 0;
            transform: translateY(-40px);
          }

          63%,
          100% {
            opacity: 1;
            transform: translateY(-40px);
          }
        }

        @keyframes guB {
          39.67% {
            opacity: 0;
            transform: translateY(0);
          }

          46%,
          59% {
            opacity: 1;
          }

          62.5% {
            opacity: 0;
            transform: translateY(-40px);
          }

          63%,
          100% {
            opacity: 1;
            transform: translateY(-40px);
          }
        }
        @keyframes guC {
          45.67% {
            opacity: 0;
            transform: translateY(0);
          }

          48%,
          58% {
            opacity: 1;
          }

          62.5% {
            opacity: 0;
            transform: translateY(-40px);
          }

          63%,
          100% {
            opacity: 1;
            transform: translateY(-40px);
          }
        }
        /* 中间面板 */
        @keyframes xiazai {
          62.5%,
          100% {
            opacity: 20%;
          }

          85% {
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>
