import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CV from "../views/CV.vue";
import CaseStudies from "../views/CaseStudies.vue";
import Namak from "../views/Namak.vue";
import Evenset from "../views/Evenset.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/cv",
      name: "cv",
      component: CV,
    },
    {
      path: "/case-studies",
      name: "case studies",
      component: CaseStudies,
    },
    {
      path: "/namak",
      component: Namak,
    },
    {
      path: "/evenset",
      component: Evenset,
    },
  ],
});

export default router;
