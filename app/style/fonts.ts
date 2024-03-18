import { Source_Sans_3, Montserrat, Merriweather} from "next/font/google";

// define 2 weights of a non-variable font
const sourceCodePro400 = Source_Sans_3({ weight: "400", subsets: ["latin"] });
const sourceCodePro700 = Source_Sans_3({ weight: "700", subsets: ["latin"] });
// define a custom local font where GreatVibes-Regular.ttf is stored in the styles folder
// const greatVibes = localFont({ src: './GreatVibes-Regular.ttf' })
const sans = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: "700",
  style: "normal",
});

const serif = Merriweather({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  style: "normal",
});

export {sourceCodePro400, sourceCodePro700, sans, serif };
