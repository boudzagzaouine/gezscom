import "assets/styles/icons.css";
import "assets/styles/uikit.css";
import "assets/styles/style.css";
import "assets/styles/custom.css";
import "assets/styles/globals.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}