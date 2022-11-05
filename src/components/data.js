import { Route, Router } from "react-router-dom";

const slackUsername = "/python-for-beginners?ref_id=<Hopecodes>";

export const links = [
  {
    name: "Twitter Link",
    link: "https://twitter.com/Hope_thegod",
    additionalText: "",
  },
  {
    id: "btn_zuri",
    name: "Zuri Team",
    link: "https://training.zuri.team/",
    additionalText: "",
  },
  {
    id: "books",
    name: "Zuri Books",
    link: " https://books.zuri.team",
  },
  {
    id: "book_python",
    name: "Python Books",
    link: `https://books.zuri.team${slackUsername}`,
  },
  {
    id: "pitch",
    name: "Background Check for Coders",
    link: " https://background.zuri.team",
  },
  {
    id: "book_design",
    name: "Design Books",
    link: "https://books.zuri.team/design-rules ",
  },
];
