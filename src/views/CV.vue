<template>
  <div class="cvWrapper">
    <nav class="cvNav">
      <a class="active" href="#PROFILE">CV Profile</a>
      <a href="#PERSONAL">Personal Info</a>
      <a href="#WORK">Work Experience</a>
      <a href="#EDUCATION">Education</a>
      <a href="#SKILLS">Skills</a>
      <a href="#LANG">Languages</a>
      <a href="#INTEREST">Interests</a>
    </nav>
    <div class="cvContentWrapper">
      <div class="cvSection cvProfile" id="PROFILE">
        <h1>CV Profile</h1>
        <p v-for="item in profile" :key="item">
          {{ item }}
        </p>
      </div>
      <div class="cvSection personalInfo" id="PERSONAL">
        <h1>Personal Info</h1>
        <p>Amirhossein Aein</p>
        <p>Born March 11th, 1989 in Iran</p>
        <br />
        <p>Based in Istanbul ⎯ Turkey</p>
        <br />
        <p>
          You can contact me via
          <a href="mailto:aien0725@gmail.com">email</a> or my
          <a href="https://www.linkedin.com/in/amiraein/" target="_blank"
            >LinkedIn</a
          >
          account.
        </p>
      </div>
      <div class="cvSection workExperience" id="WORK">
        <h1>Work Experiences</h1>
        <div
          class="singleWork"
          v-for="item in work_experiences"
          :key="item.title"
        >
          <h3>{{ item.date }}</h3>
          <h2>{{ item.title }}</h2>
          <h4>{{ item.employee }}</h4>
          <div class="keyWrapper">
            <h4>Key Achievements</h4>
            <p>{{ item.key_achievement }}</p>
          </div>
          <ul v-for="other in item.other_achievements" :key="other">
            <li>{{ other }}</li>
          </ul>
        </div>
      </div>
      <div class="cvSection education" id="EDUCATION">
        <h1>Education</h1>
        <div class="singleWork">
          <h3>2007 - 2009</h3>
          <h2>B.A. in Applied Mathematics ⎯ Unfinished</h2>
          <h4>K.N. Toosi University of Technology, Tehran</h4>
        </div>
      </div>
      <div class="cvSection skills" id="SKILLS">
        <h1>Skills</h1>
        <div class="singleSkill" v-for="item in skills" :key="item.title">
          <h4>{{ item.stars }}</h4>
          <div>
            <h2>{{ item.title }}</h2>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
      <div class="cvSection lang" id="LANG">
        <h1>Languages</h1>
        <div>
          <div class="singleLang" v-for="item in langs" :key="item.lang">
            <h2>{{ item.lang }}</h2>
            <h4>{{ "⎯ " + item.how }}</h4>
          </div>
        </div>
      </div>
      <div class="cvSection interest" id="INTEREST">
        <h1>Interests</h1>
        <h4>
          I like playing board games as well as reading, reviewing, learning,
          and talking about them. I also like to play indie video games.
          Playing casual chess has been a recent interest. I’ve been obsessively
          rock climbing in the past 3 years and I used to paint, which I miss a
          whole lot...
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  beforeMount() {
    this.initBG("yellowBG");
    this.changeLogo("var(--MyMustard)");
    this.changeHeader("var(--MyBlack)");
    this.changeMenu("var(--MyBlack)");
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
      profile:[
        `I am a self-taught experience designer with more than 12 years of experience. Having been involved in design processes on various projects and products, ranging from corporate marketing collateral to developing a community for a local business, I view "design" as a challenge worth overcoming. The solution might be a digital product, a marketing campaign, or any human experience; User-centric design is about the process of tailoring to users.`,
        `I have substantial experience in UX research, prototyping, developing design systems and user interfaces, brand style scapes, and wrestling with complex behavioral challenges. I have designed, developed, and led several projects and products into existence; Taking ownership of the process end to end, working with small teams of designers and developers.`,
        `My experience designing board games and gamified social activities helped me become comfortable with groups, leading social and human-centric activities. I love working, growing, and experiencing alongside other people, and I thrive on helping others and watching individuals improve at something they enjoy doing.`,
        `I am proficient in industry-standard design software such as Figma, Zeplin, Adobe Photoshop, Adobe Illustrator, and Adobe XD and prototyping tools such as Protopie, Maze, Usertesting, and Invision. I am always looking to find new ways to utilize new technology to improve upon the design process, documentation, productivity, and management.`,
        `Similar to my experience as a print advisor a few years back, which guided me to understand and value the nuances of graphic design, my experience in writing code in HTML5, CSS3, Javascript, Vue.JS, Nuxt.JS, and Bootstrap has helped me understand the mindset of a developer.`,
      ],
      langs: [
        {
          how: "Native",
          lang: "🇮🇷 Farsi",
        },
        {
          how: "Fluent",
          lang: "🇺🇸 English",
        },
        {
          how: "Beginner",
          lang: "🇹🇷 Turkish",
        },
      ],
      skills: [
        {
          stars: "🤘",
          title: "Campaign, Event, Solution, and Game Design",
          desc: "Designed and implemented multiple solutions across a variety of platforms, combining games into branding, advertising, and digital design challenges",
        },
        {
          stars: "🖌",
          title: "Design Software",
          desc: "Adobe Photoshop, Adobe Illustrator, Adobe XD, Adobe Indesign",
        },
        {
          stars: "📓",
          title: "Research and Learning",
          desc: "Design principles, processes, and software",
        },
        {
          stars: "🧑‍💻",
          title: "UI Implementation and Front End Web Development",
          desc: "HTML5, CSS3, Javascript, ES6, Vue.js, NUXTJS, Clean code, test-driven development",
        },
        {
          stars: "🧭",
          title: "Design Process",
          desc: "Implemented research, rapid prototyping, and user testing processes for a variety of projects",
        },
        {
          stars: "🐇",
          title: "Working in Agile Teams",
          desc: "Participated in - and mastered - a SCRUM team",
        },
        {
          stars: "🎙",
          title: "Multimedia Software",
          desc: "Adobe Premiere, Final Cut Pro, Adobe Audition, Keynote",
        },
        {
          stars: "📝",
          title: "Documentation",
          desc: "Wrote design proposals, technical documents, tutorials, and video scripts",
        },
      ],
      work_experiences: [
        {
          date: "2021 - 2022",
          title: "Senior Product Designer",
          employee: "Evenset, Toronto, Canada",
          key_achievement:
            " Introduced, developed, and executed comprehensive UX research into Tali AI product development process. This elevated the quality of the shipped product, as well as a practical feedback loop in the product discovery cycle.",
          other_achievements: [
            "Designed and conducted primary research for Tali AI's continuous product discovery phase.",
            "Conducted discovery interviews with clients, from which a complete detailed user story document was made to guide the overall development of the project.",
            "Developed numerous user journeys, low and high-fidelity wireframes, stylized interfaces, design systems, and high fidelity prototypes for clients.",
          ],
        },
        {
          date: "2018 - 2021",
          title: "Board Game Developer & UX Designer",
          employee: "Hoopa Publications, Tehran, Iran",
          key_achievement:
            "Made company’s board game products a unique identity through guidelines for design, marketing, and production material.",
          other_achievements: [
            "Designed, user-tested, and produced complex user experiences for 9+ board games.",
            "Designed new branding material for the company including material palettes, color schemes, packaging guidelines",
            "Designed a character to be physically produced as game components, and used through the company's branding and marketing campaigns.",
            "Developed up to 4 board games per year, collaborating with in-house and out-source departments and teams.",
            "Wrote 7+ teaser trailers for product releases and video tutorials.",
            "Increased published titles from 2 to 5 per year by optimizing pre-production processes.",
          ],
        },
        {
          date: "2016 - 2020",
          title: "Co-Founder, Product Designer & Front-end Develope",
          employee: "Diagram Studio IT Startup, Tehran, Iran",
          key_achievement:
            "Developed an intuitive user experience for cafe owners, by implementing robust user research, UX processes, and user testing.",
          other_achievements: [
            "Designed and implemented Diagram Studio branding material.",
            "Co-founded Namak App Startup, which works as a multifunctional POS web application for coffee shops.",
            "Developed user experience processes such as user journey mapping and wireframing,",
            "Designed user interfaces for 5+ other projects.",
            "Implemented the UI with HTML and CSS for Namak App, as well as 5+ other projects.",
            "Developed the front end of 3+ projects using Vue.js and NUXTJS.",
          ],
        },
        {
          date: "2014 - 2020",
          title: "Founder, General Manager & Experience Designer",
          employee: "Board Cafe, Tehran, Iran",
          key_achievement:
            "Board Cafe was one of the key players of the board gaming hobby in Iran, creating a community that didn't exist in 2014 and turning it into an active community of 150+ gaming spaces, 100+ publishers, and 50+ content creators in 2020.",
          other_achievements: [
            "Founded Board Cafe, the first board game cafe in Tehran.",
            "Designed and implemented branding, print material, and social media campaigns.",
            "Designed and implemented strategies and campaigns to introduce the public to the board gaming hobby.",
            "Designed and implemented a loyalty club and 10+ branded events for Board Cafe.",
            "Wrote, filmed, and edited 10+ teaser and video content for Board Cafe.",
          ],
        },
        {
          date: "2015 - 2018",
          title: "Co-Founder, Creative Director & Content Creator",
          employee: "Roomiz Games, Tehran, Iran",
          key_achievement:
            "Roomiz Games, another key player in the development of the board game community in Iran, held the first International Tabletop day in Iran in 2016, and the first international board game design contest in 2017.",
          other_achievements: [
            "Co-Founded Roomiz Games, the first board game media in Farsi.",
            "Developed a comprehensive brand book for digital, print and marketing material.",
            "Designed and implemented campaigns to introduce the public to the board gaming hobby, such as local and international events, a web series, and a podcast.",
            "Wrote scripts for, produced, and published 150+ written articles, videos, and podcast episodes.",
          ],
        },
        {
          date: "2010 - 2014",
          title: "Co-Founder & Creative Director",
          employee: "Adora Advertising Group, Tehran, Iran",
          key_achievement:
            "Our social media solution for Shiba Co, a jelly gum production company, won critics’ choice awards in the kids and family category at IWMF 2016.",
          other_achievements: [
            "Led a team of 3 designers, designing 15+ brand books along with their print and digital assets.",
            "Developed 15+ interfaces for websites.",
            "Implemented 15+ website UIs with HTML and CSS.",
            "Held strategy, team building, and project management meetings.",
          ],
        },
        {
          date: "2008 - 2010",
          title: "Junior Graphic Designer",
          employee: "Zaman Graphic Designers, Tehran, Iran",
          key_achievement:
            "Learned about the fundamental disciplines of graphic design, and print supervisory.",
          other_achievements: [
            "Designed 50+ logos, brochures, catalogs, and other print material.",
            "Designed 10+ website user interfaces.",
            "Supervises 30+ print jobs in digital print, offset print, and large format print.",
          ],
        },
      ],
    };
  },
};
</script>

<style>
.cvWrapper {
  margin: 100px auto;
  width: calc(100vw - 100px);
  max-width: 1440px;
  display: flex;
  flex-flow: row;
}
.cvNav {
  display: flex;
  flex-flow: column;
  flex: 0 0 auto;
  position: sticky;
  top: 50px;
  height: min-content;
  border: 1px solid var(--MyGrey);
  padding: 40px;
  border-radius: 15px;
}
.cvNav a {
  font-size: 14px;
  line-height: 22px;
  color: var(--MyBlack);
}
.cvNav a.active {
  font-weight: 700;
  color: var(--MyGreen);
}
.cvNav a.active:hover {
  text-decoration: none;
}
.cvNav a.active::before {
  content: "⎯ ";
}
.cvContentWrapper {
  flex: 1 1 100%;
}
.cvSection {
  width: 60%;
  max-width: 800px;
  margin: auto;
  margin-bottom: 50px;
}
.cvProfile {
  font-size: 20px;
}
.cvProfile p {
  margin-bottom: 20px;
}
.personalInfo {
  font-size: 20px;
}
.personalInfo p a {
  text-decoration: underline;
}
.cvSection h1 {
  font-size: 36px;
  margin-bottom: 30px;
  color: var(--MyGreen);
  padding-top: 50px;
}
h3,
h4 {
  font-family: Inter;
  font-weight: 300;
  font-size: 20px;
  margin-bottom: 5px;
}
h2 {
  margin-bottom: 5px;
  font-size: 24px;
}
.singleWork {
  margin-bottom: 30px;
  border-bottom: 1px solid var(--MyGrey);
  padding-bottom: 30px;
}
.singleWork:last-child {
  border-bottom: none;
}
.keyWrapper {
  margin: 35px 0;
}
.keyWrapper h4 {
  font-size: 20px;
  font-weight: 800;
}
.keyWrapper p {
  font-size: 20px;
}
.singleSkill {
  display: flex;
  flex-flow: row;
  margin-bottom: 30px;
}
.singleSkill h4 {
  margin-right: 30px;
  font-size: 30px;
}
.singleSkill div {
  border-bottom: 1px solid var(--MyGrey);
  padding-bottom: 30px;
  width: 100%;
}
.singleSkill:last-child div {
  border-bottom: none;
}
.lang > div {
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.cvProfile h1 {
  margin-top: -50px;
}
@media only screen and (max-width: 700px) {
  .cvNav {
    display: none;
  }
  .cvWrapper {
    width: 100%;
    padding: 50px;
    margin: 0;
  }
  .cvSection{
    margin: 0;
    width: 100%;
  }
}
</style>
