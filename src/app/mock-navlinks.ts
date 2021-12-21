import { faChartBar, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { Navlink } from "./navlink";

export const NAVLINKS: Navlink[] = [
  { text: "Quiz", link: "/quiz", icon: faQuestion, status: true },
  { text: "Statistik", link: "/stats", icon: faChartBar, status: true }
];