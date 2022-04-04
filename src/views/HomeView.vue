<template>
  <div class="homeWrapper">
    <div class="introText">
      <p>Hey! 👋</p>
      <p>
        I’m Amir, and I’m a
        <span class="rotatingTitles">Digital Product Designer</span> based in
        Turkey.
      </p>
      <p>
        You can jump right in and get to the official
        <RouterLink to="/CV">CV</RouterLink>, or if you are not in a hurry,
        check out a couple of
        <RouterLink to="/case-studies">Case Studies</RouterLink>.
      </p>
      <p>
        ...or if you fancy a quick chat, just DM me in
        <a href="https://www.linkedin.com/in/amiraein/" target="_blank"
          >LinkedIn</a
        >.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  dara() {
    return {
      rotating_titles: [
        "Digital Product Designer",
        "Experience Designer",
        "UX/UI Designer",
        "Board Game Designer",
        "Interaction Designer",
      ],
    };
  },
  methods: {
    initBG: function (pageBG) {
      var element = document.getElementById("MAINBODY");
      element.removeAttribute("class");
      element.classList.add(pageBG);
    },
    changeLogo: function (logoColor) {
      var element = document.getElementsByClassName("mainLogoPaths");
      for (let i = 0; i < element.length; i++) {
        element[i].style.cssText += "fill:" + logoColor + ";";
      }
    },
    changeHeader: function (headerColor) {
      var element = document.getElementById("MAINHEADER");
      element.style.cssText += "color:" + headerColor + ";";
    },
    changeMenu: function (menuColor) {
      var element = document.getElementsByClassName("MAINMENU");
      for (let i = 0; i < element.length; i++) {
        element[i].style.cssText += "color:" + menuColor + ";";
      }
    },
    rotateTitles: function () {
      var array = this.rotating_titles;
      for (let i = 0; i < array.length; i++) {}
    },
  },
  beforeMount() {
    this.initBG("blackBG");
    this.changeLogo("var(--MyMustard)");
    this.changeHeader("var(--MyMustard)");
    this.changeMenu("#777");
  },
};
</script>

<style>
.homeWrapper {
  width: 100%;
}
.introText {
  max-width: 1200px;
  padding: 100px;
  margin: auto;
  font-size: 32px;
  font-weight: 200;
  font-family: Bitter;
  min-height: calc(100vh - 150px);
}
.introText p {
  margin-bottom: 30px;
  color: #777;
}
.introText p a {
  font-weight: 800;
  color: var(--MyGreen);
}
.rotatingTitles {
  font-weight: 800;
  color: var(--MyMustard);
}
@media only screen and (max-width: 700px) {
  .introText {
    padding: 50px;
  }
}
</style>
