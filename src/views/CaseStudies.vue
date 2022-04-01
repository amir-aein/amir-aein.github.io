<template>
  <div class="caseHubWrapper">
    <section
      v-for="item in studies"
      class="singleCase"
      :class="item.bg_class"
      :id="item.id"
      :key="item.id"
    >
      <div class="caseInnerWrapper">
        <div class="caseInfoWrapper">
          <h1 :style="'color: ' + item.primary_color + ';'">
            {{ item.title }}
          </h1>
          <h2 :style="'color: ' + item.secondary_color + ';'">
            {{ item.subtitle }}
          </h2>
          <p :style="'color: ' + item.secondary_color + ';'">
            {{ item.excerpt }}
          </p>
          <h4 :style="'color: ' + item.secondary_color + ';'">Role</h4>
          <h3 :style="'color: ' + item.tertiary_color + ';'">
            {{ item.role }}
          </h3>
          <RouterLink
            :style="'color: ' + item.secondary_color + ';'"
            class="moreButton"
            :to="item.link"
            >Explore</RouterLink
          >
        </div>
        <div class="singleCaseImgWrapper">
          <img :src="item.img" :alt="item.title" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      studies: [
        {
          id: "NAMAK",
          title: "Namak App",
          subtitle: "Financial Web App",
          excerpt:
            "The idea of the Namak App is an all-in-one cafe/restaurant management solution. Namak came out of frustration of owning and managing Cafe Board, a board game cafe I owned and ran for six years.",
          role: "CEO, Product designer",
          img: "../src/assets/namak-hero.png",
          bg_class: "namakBG",
          link: "/namak",
          primary_color: "var(--NamakCyan)",
          secondary_color: "var(--NamakLightPurple)",
          tertiary_color: "white",
        },
        {
          id: "EVENSET",
          title: "Evenset Co.",
          subtitle: "Software Development Company",
          excerpt:
            "Evenset is a Toronto-based custom software development company. As the lead designer, I was in charge of the design process for clients, from start to finish.",
          role: "Lead Product Designer",
          img: "../src/assets/evenset-hero.png",
          bg_class: "evensetBG",
          link: "/evenset",
          primary_color: "var(--EvensetMint)",
          secondary_color: "var(--EvensetGrey)",
          tertiary_color: "white",
        },
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
  },
  beforeMount() {
    this.changeLogo("var(--MyMustard)");
    this.changeHeader("white");
    this.changeMenu("var(--NamakLightPurple)");
  },
};
</script>

<style>
.caseHubWrapper {
  width: 100%;
}
.singleCase:first-child {
  height: calc(100vh + 148.5px);
}
.singleCase {
  height: 100vh;
  width: 100vw;
  margin-top: -148.5px;
  padding-top: 148.5px;
}
.singleCase .caseInnerWrapper {
  display: flex;
  flex-flow: row;
  width: 80%;
  justify-content: space-around;
  max-width: 1440px;
  margin: auto;
}
.singleCase .singleCaseImgWrapper {
  flex: 1 1 60%;
  overflow: hidden;
}
.singleCase .singleCaseImgWrapper img {
  width: 100%;
  height: auto;
}
.caseInfoWrapper {
  padding-top: 100px;
  flex: 1 0 40%;
}
.caseInfoWrapper h1 {
  font-size: 42px;
  margin-bottom: 12px;
}
.caseInfoWrapper h2 {
  font-family: Inter;
  font-size: 18px;
  font-weight: 900;
  margin-bottom: 30px;
}
.caseInfoWrapper h4 {
  font-size: 16px;
  margin-top: 30px;
}
.caseInfoWrapper h3 {
  font-size: 20px;
  font-family: Bitter;
  font-weight: 600;
}
.moreButton {
  margin-top: 30px;
  font-size: 20px;
  font-weight: 100;
  padding: 16px 32px;
  border-radius: 30px;
  display: inline-flex;
  border: 1px solid;
  text-decoration: none;
  transition: all 0.2s ease-out;
}
.moreButton:hover {
  text-decoration: none;
  font-weight: 100;
  transform: scale(105%);
  -webkit-box-shadow: 0px 7px 27px -9px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 7px 27px -9px rgba(0, 0, 0, 0.5);
}
@media only screen and (max-width: 700px) {
  .singleCase {
    margin-top: -195.5px;
    padding-top: 195.5px;
  }
  .singleCase:first-child {
    height: calc(100vh + 195.5px);
  }
  .caseInfoWrapper {
    padding-top: 50px;
  }
  .singleCaseImgWrapper {
    display: none;
  }
}
</style>
