import { googleFont } from "@mongez/dom";
import { current } from "@mongez/react";

if (current("localeCode") === "ar") {
  // load Cairo font from google for Arabic language
  googleFont(
    "https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap",
  );
} else {
  // load Questrial font from google for Other languages
  googleFont(
    "https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap",
  );
}

googleFont("https://fonts.googleapis.com/css2?family=Norican&display=swap");
