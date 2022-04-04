<template>
  <div class="caseWrapper">
    <aside></aside>

    <main>
      <section :class="id + ' ' + bg_class">
        <div class="contentWrapper caseHeader contentJustify">
          <div>
            <h1>{{ title }}</h1>
            <h2>{{ subtitle }}</h2>
            <div class="mobileCaseImgWrapper">
              <img :src="img" :alt="title" />
            </div>
          </div>
          <div class="singleCaseImgWrapper">
            <img :src="img" :alt="title" />
          </div>
        </div>
      </section>
      <section class="intro contentWrapper contentJustify">
        <main>
          <h1>About the Company</h1>
          <p v-for="item in intro.about" :key="item">
            {{ item }}
            </p>
          <h4>Some of my responsibilities</h4>
          <ul>
            <li v-for="item in intro.responsibilities" :key="item">
              {{ item }}
            </li>
          </ul>
        </main>
        <aside>
          <h2>My Role</h2>
          <p>{{ role }}</p>
          <h2>Timeline</h2>
          <p>{{ intro.info.timeline }}</p>
          <h2>Deliverables</h2>
          <p>{{ intro.info.deliverables }}</p>
        </aside>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  beforeMount() {
    this.initBG("whiteBG");
    this.changeLogo("var(--EvensetMint)");
    this.changeHeader("var(--EvensetGrey)");
    this.changeMenu("var(--EvensetGrey)");
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
  data() {
    return {
      id: "EVENSET",
      title: "Evenset Co",
      subtitle: "Software Development Company",
      excerpt:
        "Evenset is a Toronto-based custom software development company. As the lead designer, I was in charge of the design process for clients, from start to finish.",
      role: "Lead Product Designer",
      img: "../src/assets/evenset-hero.png",
      bg_class: "evensetBG",
      bg_light_class: "evensetLightBG",
      link: "/evenset",
      primary_color: "var(--EvensetBlue)",
      secondary_color: "var(--EvensetMint)",
      tertiary_color: "white",
      intro: {
        about: [
          `Evenset is a Toronto-based custom software development company. As a young and dynamic firm, we have established a track record among our clients for being reliable, responsive, and committed to delivering the highest quality service. We provide a seamless experience of having a professional team of brilliant software developers beside your project, creating your mobile and web application idea, while letting you focus on the part you are best at.`,
          `As the company's lead product designer, I was in charge of a small design team. During my experience at Evenset, I was involved in client work for Aycoutay Health App, Action Against Hunger Initiative, Tali AI, and the process of the Evenset Company's rebranding.`,
        ],
        responsibilities: [
          `Designing and executing primary and secondary UX research.`,
          `Developing user stories by interviewing product owners and users from the client-side.`,
          `Developing user flows and low-fidelity wireframes and prototypes to evaluate design hypotheses.`,
          `Developing high-fidelity wireframes and prototypes for accessibility testing.`,
          `Developing high fidelity user interfaces and design systems, and proper design specification documentation for developer handoffs.`,
          `Developing mood boards, stylescapes, and brand books for Evenset company.`,
        ],
        info: {
          timeline: "2018 ⎯ 2021",
          deliverables:
            "Research, ideation, user interviews, low and high fidelity wireframes, high fidelity UI, Branding visual guideline, design system",
        },
      },
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: 42px;
  margin-bottom: 30px;
  color: var(--EvensetBlue);
}
h2 {
  font-size: 28px;
  margin-bottom: 20px;
  color: var(--EvensetBlue);
}
.contentJustify {
  width: 80%;
  justify-content: space-around;
  max-width: 1440px;
  margin: auto;
}
.caseHeader {
  display: flex;
  flex-flow: row;
  height: 400px;
  margin-top: -150px;
  padding-top: 200px !important;
  justify-content: space-between;
}

.caseHeader h1 {
  margin-bottom: 10px;
  color: var(--EvensetMint);
}

.caseHeader h2 {
  font-family: Inter;
  font-size: 18px;
  font-weight: 900;
  color: var(--EvensetGrey);
}
.caseHeader .singleCaseImgWrapper {
  max-width: 700px;
  height: auto;
  margin-top: -100px;
  z-index: 200;
  transform: scale(80%);
}
.mobileCaseImgWrapper {
  display: none;
}

.intro {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  max-width: 1440px;
  padding: 0 !important;
  margin-top: 100px;
  margin-bottom: 100px;
}
.intro p {
  margin-bottom: 45px;
}
.intro ul {
  margin-top: 20px;
  padding-left: 25px;
}
ul li {
  list-style-type: none;
  margin-bottom: 20px;
}
ul li::marker {
  content: "⎯  ";
  vertical-align: bottom;
}
.intro aside p:last-child {
  margin-bottom: 0;
}
.intro main {
  flex: 0 1 50%;
}
.intro aside {
  margin-top: 100px;
  flex: 0 1 40%;
  padding: 35px;
  border-radius: 10px;
  background: var(--EvensetLightGrey);
}
.solution div {
  max-width: 35%;
  color: white;
}
.twoCol {
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 50px;
}
.twoCol .compIntro {
  flex: 0 1 50%;
}
.twoCol .imgWrapper {
  flex: 0 1 40%;
}
.twoCol .swotEntry {
  flex: 0 1 49%;
  padding: 35px;
  border-radius: 10px;
  margin-bottom: 2%;
}
.twoCol .swotEntry h2 {
  margin-bottom: 30px;
}
.contentWrapper {
  padding: 100px 0;
}
.research .twoCol {
  margin-bottom: 0;
}
.researchIntro {
  flex: 0 1 40%;
}
.systemUsers .imgWrapper {
  flex: 1 0 100%;
}
.systemData .twoCol > div {
  flex: 0 1 50%;
}

.releases .releaseData {
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 60px;
}
.releases .releaseData div {
  flex: 1 0 auto;
}
.releases .releaseData h1 {
  color: var(--NamakPurple);
  font-size: 60px;
  font-weight: 100;
  margin-bottom: 0;
}
.releases .releaseData h2 {
  color: var(--NamakPurple);
}
.testing .cases {
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
}
.testing .cases > div {
  flex: 1 0 400px;
  margin: 100px 50px 50px 0;
}
.testing .cases .imgWrapper {
  margin-bottom: 20px;
}
.challenges .cases {
  display: flex;
  flex-flow: row;
  margin-top: 100px;
}
.challenges .cases div:first-child {
  flex: 0 1 600px;
  margin-right: 100px;
}

/*--------------------------------------------------- NAMAK SPECIFIC ---------------------------------------------------*/


@media only screen and (max-width: 700px) {
  .caseWrapper {
    margin-top: -199.5px;
  }
  .caseHeader {
    height: initial;
    margin-bottom: 50px;
  }
  .caseHeader .singleCaseImgWrapper {
    display: none;
  }
  .caseHeader {
    height: 450px;
  }
  .caseHeader .mobileCaseImgWrapper {
    display: block;
    transform: translateY(40px);
  }
  .contentWrapper {
    padding: 100px 0;
    flex-flow: column;
  }
  .intro {
    margin-top: 250px;
  }
  .intro aside {
    margin: 50px 0;
  }
  .solution div {
    max-width: initial;
    padding-bottom: 500px;
  }
  .namakBG.solution {
    background: rgb(128, 112, 185);
    background: url("../src/assets/namak-solution.png") -150px 350px no-repeat,
      -moz-linear-gradient(275deg, rgba(128, 112, 185, 1) 0%, rgba(
              58,
              41,
              121,
              1
            )
            100%);
    background: url("../src/assets/namak-solution.png") -150px 350px no-repeat,
      -webkit-linear-gradient(275deg, rgba(128, 112, 185, 1) 0%, rgba(
              58,
              41,
              121,
              1
            )
            100%);
    background: url("../src/assets/namak-solution.png") -150px 350px no-repeat,
      linear-gradient(
        275deg,
        rgba(128, 112, 185, 1) 0%,
        rgba(58, 41, 121, 1) 100%
      );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#8070b9",endColorstr="#3a2979",GradientType=1);
  }
  .twoCol {
    flex-flow: column;
  }
  .contentWrapper p {
    margin-bottom: 50px;
  }
}
</style>
