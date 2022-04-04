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
          <h1>About the Product</h1>
          <p>{{ intro.about }}</p>
          <h2>The problem</h2>
          <p>{{ intro.problem_intro }}</p>
          <ul>
            <li v-for="item in intro.problem_points" :key="item">
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
      <section :class="id + ' ' + bg_class + ' solution'">
        <section class="solution contentWrapper contentJustify">
          <div>
            <h1>The solution</h1>
            <p>{{ solution.text }}</p>
          </div>
        </section>
      </section>
      <section class="competitors contentWrapper contentJustify">
        <div class="twoCol">
          <div class="compIntro">
            <h1>Competitor Landscape</h1>
            <p v-for="item in competitors.text" :key="item">
              {{ item }}
            </p>
          </div>
          <div class="imgWrapper"><img :src="competitors.img" alt="" /></div>
        </div>
        <div class="twoCol">
          <div class="swotEntry">
            <h2>Strenghts</h2>
            <ul>
              <li v-for="item in competitors.strength" :key="item">
                {{ item }}
              </li>
            </ul>
          </div>
          <div class="swotEntry">
            <h2>Weaknesses</h2>
            <ul>
              <li v-for="item in competitors.weakness" :key="item">
                {{ item }}
              </li>
            </ul>
          </div>
          <div class="swotEntry">
            <h2>Opportunities</h2>
            <ul>
              <li v-for="item in competitors.opportunity" :key="item">
                {{ item }}
              </li>
            </ul>
          </div>
          <div class="swotEntry">
            <h2>Threats</h2>
            <ul>
              <li v-for="item in competitors.threat" :key="item">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section :class="id + ' ' + bg_light_class">
        <section class="research contentWrapper contentJustify">
          <div class="twoCol">
            <div class="researchIntro">
              <h1>User Research</h1>
              <p>{{ research.text }}</p>
            </div>
            <div class="swotEntry" v-for="item in research.types" :key="item">
              <h2>{{ item.title }}</h2>
              <ul>
                <li v-for="point in item.text" :key="point">
                  {{ point }}
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
      <section class="systemUsers contentWrapper contentJustify">
        <div class="twoCol">
          <div>
            <h1>System Users</h1>
            <p>{{ system_users.text }}</p>
          </div>
          <div class="imgWrapper"><img :src="system_users.img" alt="" /></div>
        </div>
      </section>
      <section :class="id + ' ' + bg_light_class">
        <section class="systemData contentWrapper contentJustify">
          <div class="twoCol">
            <div>
              <h1>System Data Map</h1>
              <p>{{ system_data_map.text }}</p>
            </div>
            <div class="imgWrapper">
              <img :src="system_data_map.img" alt="" />
            </div>
          </div>
        </section>
      </section>
      <section class="lowWire contentWrapper contentJustify">
        <h1>Low Fidelity Wireframes</h1>
        <p>{{ low_wire.text }}</p>
        <div class="imgWrapper">
          <img :src="low_wire.img" alt="" />
        </div>
      </section>
      <section class="highWireBG">
        <section class="highWire contentWrapper contentJustify">
          <h1>High Fidelity Wireframes</h1>
          <p>{{ high_wire.text }}</p>
        </section>
      </section>
      <section class="releases contentWrapper contentJustify">
        <h1>Alpha & Beta Releases</h1>
        <p>{{ releases.text }}</p>
        <div class="releaseData">
          <div v-for="item in releases.data" :key="item">
            <h1>{{ item.value }}</h1>
            <h2>{{ item.label }}</h2>
          </div>
        </div>
      </section>
      <section :class="id + ' ' + bg_light_class">
        <section class="testing contentWrapper contentJustify">
          <h1>Usability Testing</h1>
          <p>{{ testing.text }}</p>
          <div class="cases" v-for="item in testing.cases" :key="item.evidence">
            <div>
              <h2>Evidence</h2>
              <div class="imgWrapper">
                <img :src="item.ev_img" alt="" />
              </div>
              <p style="margin-bottom: 30px; font-style: italic">
                {{ item.context }}
              </p>
              <p>{{ item.evidence }}</p>
            </div>
            <div>
              <h2>Iteration</h2>
              <div class="imgWrapper">
                <img :src="item.it_img" alt="" />
              </div>
              <p>{{ item.iteration }}</p>
            </div>
          </div>
        </section>
      </section>
      <section class="challenges contentWrapper contentJustify">
        <h1>Design Challenges</h1>
        <p>{{ challenges.text }}</p>
        <div class="cases" v-for="item in challenges.cases" :key="item.title">
          <div>
            <h2>{{ item.title }}</h2>
            <p>{{ item.text }}</p>
          </div>
          <div class="imgWrapper">
            <img :src="item.img" alt="" />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  beforeMount() {
    this.initBG("whiteBG");
    this.changeLogo("var(--NamakLightPurple)");
    this.changeHeader("var(--NamakLightPurple)");
    this.changeMenu("var(--NamakLightPurple)");
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
      id: "NAMAK",
      title: "Namak App",
      subtitle: "Financial Web App",
      excerpt:
        "Tali AI is an intelligent EHR integrated solution to enhance and enable the daily workload of family physicians at the point of care.",
      role: "CEO, Product designer",
      img: "../src/assets/namak-hero.png",
      bg_class: "namakBG",
      bg_light_class: "namakLightBG",
      link: "/namak",
      primary_color: "var(--NamakCyan)",
      secondary_color: "var(--NamakLightPurple)",
      tertiary_color: "white",
      intro: {
        about:
          "The idea of the Namak App is an all-in-one cafe/restaurant management solution. Namak came out of frustration of owning and managing Cafe Board, a board game cafe I owned and ran for six years. I was facing complex management and accounting tasks. Someday I got tired of using six different software to manage everything and started working on my own. We worked on the Namak App start-up for 3 years, shipped the MVP, and developed a roadmap. The MVP consisted of PoS, Booking, Accounting, and Customer loyalty modules of the product.",
        problem_intro:
          "As a cafe owner, I was extremely close to the pain points of the current solutions. But I went out and interviewed a number of other Cafe owners, Cafe accountants, and Cashiers for primary research. The key pain points were:",
        problem_points: [
          "There is a separate solution for each individual need. This makes management of a cafe both expensive, and error prone.",
          "The current solutions were designed by outdated standards, meaning poor UX, unpleasant UI, and limited accessibility.",
          "These solutions are desolated, and there are no meaningful integrations provided, meaning data redundancy, duplication, and human errors.",
        ],
        info: {
          timeline: "2018 ⎯ 2021",
          deliverables:
            "Research, ideation, user interviews, low and high fidelity wireframes, high fidelity UI, Branding visual guideline, design system",
        },
      },
      solution: {
        img: "../src/assets/namak-solution.png",
        text: "Namak App is a comprehensive, all-in-one web app that covers everything that is needed to manage a cafe/restaurant. The software is created based on different modules, fully integrated with one another and each one with a single purpose: PoS, Accounting, Reservation, HR, and Customer Loyalty. The idea is for everyone to access a single system, for any need they have.",
      },
      competitors: {
        text: [
          "The competitor landscape for Namak App was pretty dry, as there are no direct competitors to what Namak is set out to accomplish. Having said that, there are known, established solutions that are used for different aspects of managing a cafe.",
          "Sepidz for example is the industry standard for Point of Sale (PoS) and in-house accounting solutions. CCLUB is very popular when it comes to web-based customer loyalty, and Holoo is affordable accounting software that directs its focus to smaller companies and stores. I performed SWOT analysis for these competitors to gauge what and how they are performing in the market. The following is a part of the SWOT for Sepidz.",
        ],
        img: "../src/assets/namak-competitors.jpg",
        strength: [
          "Tries to be as comprehensive a solution as possible",
          "Has a dedicated customer service division",
          "If there is something that the software lacks, they will come up with hacks for customers to resolve their problems",
        ],
        weakness: [
          "Frustrating UX, outdated UI",
          "Outdated, low performing technology",
          "Native PC software, with a hardware license key, manual database backups, and major accessibility issues",
        ],
        opportunity: [
          "Sepidz is part of Hamkaran System, the most prominent software company in Iran",
          "Also provides required hardware such as printers, cash registers, all-in-one computers, etc.",
          "Strong brand authority",
          "Does not face any other major competitors",
        ],
        threat: [
          "IT space is changing rapidly in Iran, leaving no room for outdated software companies.",
          "Sepidz is behind in its technology and management and changing a monolith traditional software company to an agile high tech one is not happening anytime soon.",
          "Tries to target every kind of local shop and retailer, meaning there are no features dedicated to any specific industry.",
        ],
      },
      research: {
        text: "I’ve conducted mostly primary research, as there were no accessible databases to conduct secondary research on in Iran. With my connections as a cafe owner, I did numerous Qualitative interviews, with cafe owners, cafe employees who use this software, accountants specializing in local cafe businesses, and two owners of cafe chains in Tehran. Here are some of the key pain points of various user types:",
        types: [
          {
            title: "Cafe Owner",
            text: [
              "Migrating is expensive",
              "extracting reports is expensive",
              "Tracking activities is not possible, as everyone will end up using one user",
              "In case of a problem, customer services take days",
              "Local and small cafes still use pen and paper because of the cost",
            ],
          },
          {
            title: "Accountants",
            text: [
              "No in-house accountants",
              "Data redundancy, and lack of data integrity",
            ],
          },
          {
            title: "Cashiers/operators",
            text: [
              "Complex UI, resulting in using paper",
              "Shift management is convoluted",
              "Lack of multitasking features",
            ],
          },
        ],
      },
      system_users: {
        text: "For a platform as complex as Namak, the very first step was to define and explore different system users. I came up with 4 different user categories and explored their needs, pain points, and major interactions with the system.",
        img: "../src/assets/namak-users.jpg",
      },
      system_data_map: {
        text: "After gathering user stories based on the aforementioned user categories,  I spent some time with the tech team to define and compartmentalize the system data map. This was a particularly challenging part due to my lack of experience with how the technical sides of things work. Overcoming that challenge, however, helped me to gauge how the technical side of the project works. From this point on, my understanding of the logical and relational aspects of the system made a meaningful impact on the design discovery phases.",
        img: "../src/assets/namak-data.jpg",
      },
      low_wire: {
        text: "I developed a couple of low-fidelity wireframes and asked a number of my employees at the cafe to react to them. The high-level feedback I got in this phase was extremely valuable as it shaped the whole hierarchy of the navigation, as well as crucial places different modules need to be accessible within one another.",
        img: "../src/assets/namak-low.jpg",
      },
      high_wire: {
        text: "AS we continued forward to the prototyping phase, I developed a set of high-fidelity prototypes with minimal attention to aesthetics. This set of prototypes proved useful not only to evaluate and improve the effectiveness of the UX but also this set of designs ended up be the actual designs used in the beta release of the app. This decision helped push back the shipment of the product, and once again prove the value of an MVP to us.",
        img: "../src/assets/namak-high.png",
      },
      releases: {
        text: "We shipped the alpha release, which was only used in my cafe. Numerous rounds of QA later, the product was functional enough to get to the beta release. I was fortunate enough to have many connections in the industry, enabling us to have 5 cafes around Iran to join the beta program. Organic QA, feature requests, and usability testing were just a few key values the beta release added to the project. ",
        data: [
          {
            value: 5,
            label: "Cafes",
          },
          {
            value: 8,
            label: "Cafe Owners",
          },
          {
            value: 14,
            label: "Operators",
          },
          {
            value: 3,
            label: "Accountants",
          },
          {
            value: "4k+",
            label: "Customers",
          },
        ],
      },
      testing: {
        text: "During the beta release, several UX accessibility issues were reported. Gauging the logical and behavioral reasoning of these issues was both challenging, and extremely fun. Here are a couple of examples of these issues and my solutions to them.",
        cases: [
          {
            context:
              "Context: In the Point of Sale (PoS) module, the user interacts with a screen to create and interact with customer invoices. Here, the user could log orders for a given table, customer loyalty aspects, and at the end of a customer's visit, finalize their payment. In this represented screen, there was a sidebar for them to add items from the menu of the cafe to the invoice. Items were categorized and hidden behind the category name.",
            evidence:
              "A user needed to first select a category, and then upon the opening of that category select the menu item. for ease of accessibility, I included a live search bar at the top, so users could find the desired item more easily. This proved to be an ineffective user experience, as users did not want to type the names, and going through the list and finding an item would take so much time.",
            iteration:
              "I changed the design so each item of the menu is more visible, with a specific colored background that would be assigned to the item randomly from a pool of colors. This added a visual indicator for the operator; some even said after continuous use, they were selecting menu items based on the colors as they have organically memorized the position of colors.",
            ev_img: "../src/assets/namak-ev-01.jpg",
            it_img: "../src/assets/namak-it-01.jpg",
          },
          {
            context:
              "Context: To register a new customer to an invoice, the operator had to close their active invoice page, go to the loyalty page, register that customer, get their ID, and go back to the invoice to assign that ID to said invoice.",
            evidence:
              "Users felt that this flow, although logical, takes too much time. Many even came up with the idea of having two tabs open on the browser, one on the loyalty page and the on the invoice page. This pointed out that users need to access both those functionalities at the same time.",
            iteration:
              "I changed the design in a way that contains a condensed version of the customer registration flow right inside the invoice view. By doing this, a user was no longer required to leave the invoice in order to register a new customer.",
            ev_img: "../src/assets/namak-ev-02.jpg",
            it_img: "../src/assets/namak-it-02.jpg",
          },
        ],
      },
      challenges: {
        text: "Namak App was a massive product, even the MVP of it was pretty enormous compared to many other startup projects. This was a result of a competitive advantage we were seeking and that was to provide as many features as possible. There were many features to evaluate, user test, and iterate on. Here are a few aspects that the project proved to be challenging, overcoming each of which was a school of design in itself.",
        cases: [
          {
            title: "1 ⎯ The sheer size of data",
            text: "An all-in-one solution to manage a business has massive amounts of data. On one hand, I had to make accessing this data in the most logical pattern based on the user type, and on the other hand, the whole platform needed to convey simplicity, elegance, and welcoming.",
            img: "../src/assets/namak-challenges01.png",
          },
          {
            title: "2 ⎯ Familiarity",
            text: "Most users of this platform were on the lower side of technological literacy, with past experiences mostly being with personal usages of Windows PCs. I had to find a meaningful way to represent the visual identity of the platform to remind them of the stacking windows of their favorite computers.",
            img: "../src/assets/namak-challenges02.png",
          },
          {
            title: "3 ⎯ Booking a table",
            text: "One challenging module to design was the reservation module. This is a module with which a user, operator, or customer, could assign a table of the physical cafe area to a customer. This was particularly difficult as each cafe had its own layout of tables, on multiple stories, with different capacities. On top of that, one norm in managing table reservations is that waters would change the layout of the area based on the number of guests.",
            img: "../src/assets/namak-challenges03.png",
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: 42px;
  margin-bottom: 30px;
  color: var(--NamakPurple);
}
h2 {
  font-size: 28px;
  margin-bottom: 20px;
  color: var(--NamakPurple);
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
}

.caseHeader h2 {
  font-family: Inter;
  font-size: 18px;
  font-weight: 900;
}
.caseHeader .singleCaseImgWrapper {
  max-width: 700px;
  height: auto;
  margin-top: -100px;
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
}
.intro p {
  margin-bottom: 45px;
}
.intro ul {
  margin-top: -20px;
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
.caseHeader h1 {
  color: var(--NamakCyan);
}
.caseHeader h2 {
  color: var(--NamakLightPurple);
}
.intro aside,
.twoCol .swotEntry {
  background: var(--NamakGrey);
}

.solution div h1 {
  color: white;
}
.research .swotEntry {
  background: white;
}
.highWireBG {
  height: 700px;
  background: var(--NamakGrey) url("../src/assets/namak-high.png") center 300px
    no-repeat;
  background-size: 140vw;
}

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
    transform: scale(1.3) translateX(-20px);
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
  .highWireBG {
    height: 800px;
    background: var(--NamakGrey) url(../src/assets/namak-high.png) center 450px
      no-repeat;
    background-size: 350vw;
  }
  .releases .releaseData div {
    text-align: center;
    margin: 30px 10px;
  }
  .testing .cases > div {
    margin: 0;
    margin-top: 50px;
  }
  .challenges .cases {
    flex-flow: column;
  }
  .challenges .cases div,
  .challenges .cases div:first-child {
    margin: 0;
    flex: none;
  }
}
</style>
