<script>
import MyLogo from "./MyLogo.vue";

export default {
  components: { MyLogo },
  data() {
    return {};
  },
};
</script>

<template>
  <div class="headerWrapper">
    <div class="logoWrapper">
      <MyLogo logoColor="var(--MyMustard)" />
      <div class="textWrapper" id="MAINHEADER">
        <h2>Amirhossein <bold>Aein</bold></h2>
        <p>experience designer</p>
      </div>
    </div>
    <nav class="mainNav">
      <router-link class="MAINMENU" to="/cv">CV</router-link>
      <router-link class="MAINMENU" to="/case-studies"
        >Case Studies</router-link
      >
      <a
        class="MAINMENU"
        href="https://www.linkedin.com/in/amiraein/"
        target="_blank"
        >LinkedIn</a
      >
    </nav>
    <nav class="mobileNav">
      <div class="burgerWrapper">
        <svg
          width="33"
          height="17"
          viewBox="0 0 33 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1.5 1.5H31.5" stroke-width="3" stroke-linecap="round" />
          <path d="M1.5 15H31.5" stroke-width="3" stroke-linecap="round" />
        </svg>
      </div>
    </nav>
    <div class="openMenu">
      <nav class="collapsedMenu">
        <router-link class="MAINMENU" to="/cv">CV</router-link>
        <router-link class="MAINMENU" to="/case-studies"
          >Case Studies</router-link
        >
        <a
          class="MAINMENU"
          href="https://www.linkedin.com/in/amiraein/"
          target="_blank"
          >LinkedIn</a
        >
      </nav>
    </div>
  </div>
</template>

<style scoped>
.headerWrapper {
  padding: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 10;
}
.logoWrapper {
  display: flex;
  flex-flow: row;
  z-index: 20;
}
.logoWrapper .textWrapper {
  display: flex;
  flex-flow: column;
  margin-left: 16px;
}
h2 {
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 500;
}
h2 bold {
  font-weight: 800;
}
h3 {
  font-size: 14px;
}
.mobileNav {
  display: none;
}
.openMenu {
  display: none;
}
.mainNav a {
  padding: 8px 32px;
}
@media only screen and (max-width: 700px) {
  .headerWrapper {
  }
  .headerWrapper .logoWrapper {
    margin-bottom: 30px;
  }
  .headerWrapper .mainNav {
    display: none;
  }
  .mobileNav {
    display: flex;
    margin-top: 15px;
  }
  .mobileNav svg {
    overflow: visible;
  }
  .mobileNav svg path {
    stroke: white;
  }
  .mobileNav.close {
    margin-top: 7.5px;
    z-index: 20;
  }
  .mobileNav.close svg path:first-child {
    transform: rotate(45deg);
  }
  .mobileNav.close svg path:last-child {
    transform: translateY(13px) translateX(-12px) rotate(-45deg);
  }
  .openMenu {
    display: none;
    position: absolute;
    background: black;
    height: calc(100vh - 178.5px);
    width: 100vw;
    z-index: 10;
    top: 178.5px;
    left: 0;
  }
  .openMenu .collapsedMenu {
    position: relative;
    display: flex;
    flex-flow: column;
    color: white;
    font-size: 30px;
    align-items: center;
  }
  .openMenu .collapsedMenu a {
    margin-bottom: 30px;
  }
}
</style>
