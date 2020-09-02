<template>
<div class="home">
  <div class="topnavAndBanner">
    <Topnav />
    <div class="banner">
      <h1>轱辘UI</h1>
      <h2>一个厉害的 UI 框架</h2>
      <p class="actions">
        <a href="https://github.com">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
  <div class="features">
    <ul>
      <li>
        <svg>
          <use xlink:href="#icon-vue"></use>
        </svg>
        <h3>基于 Vue 3</h3>
        <p>骄傲地使用了 Vue 3 Composition API</p>
      </li>
      <li>
        <svg>
          <use xlink:href="#icon-typescript"></use>
        </svg>
        <h3>基于 TypeScript </h3>
        <p>源代码采用 TypeScript 书写（非严格检查）</p>
      </li>
      <li>
        <svg>
          <use xlink:href="#icon-light"></use>
        </svg>
        <h3>轻量级的 UI 库</h3>
        <p>每个 UI 组件的源代码都极其简洁</p>
      </li>
    </ul>
  </div>
</div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  components: {
    Topnav
  },
};
</script>

<style lang="scss" scoped>
$border-radius: 4px;

.topnavAndBanner {
  background: rgb(227, 255, 253);
  background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);
  clip-path: ellipse(100% 60% at 50% 40%);
}

.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #1bcac1;

  h1,
  h2 {
    text-shadow: 0 0 2px white;
  }

  >.actions {
    padding: 8px 0;

    a {
      margin: 0 8px;
      background: #02bcb0;
      color: white;
      display: inline-block;
      border-radius: $border-radius;
      padding: 8px 24px;
    }
  }
}

.features {
  margin: 64px auto;
  width: 400px;

  @media (min-width: 800px) {
    width: 800px;
  }

  @media (min-width: 1200px) {
    width: 1200px;
  }

  >ul {
    display: flex;
    flex-wrap: wrap;

    >li {
      width: 400px;
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;

      >svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }

      >h3 {
        grid-area: title;
        font-size: 28px;
      }

      >p {
        grid-area: text
      }
    }
  }
}
</style>
