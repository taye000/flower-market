import {
    Inter,
    Krona_One,
    Roboto,
    Montserrat,
    Open_Sans
  } from "next/font/google";
  
  const inter = Inter({
    style: "normal",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display: "swap",
    subsets: ["latin-ext", "cyrillic-ext", "greek-ext", "vietnamese"],
    preload: true,
    fallback: ["sans-serif"]
  });
  
  const krona = Krona_One({
    style: "normal",
    weight: ["400"],
    display: "swap",
    preload: true,
    fallback: ["sans-serif"],
    subsets: ["latin"]
  });
  
  const roboto = Roboto({
    style: "normal",
    weight: ["100", "300", "400", "500", "700", "900"],
    display: "swap",
    preload: true,
    fallback: ["sans-serif"],
    subsets: ["latin"]
  });
  const montserrat = Montserrat({
    style: "normal",
    weight: ["100", "300", "400", "500", "700", "900"],
    display: "swap",
    preload: true,
    fallback: ["sans-serif"],
    subsets: ["latin"]
  });
  
  const opensans = Open_Sans({
    style: "normal",
    weight: ["300", "400", "500", "700", "800"],
    display: "swap",
    preload: true,
    fallback: ["sans-serif"],
    subsets: ["latin"]
  });
  
  export { inter, krona, roboto, montserrat, opensans };
  