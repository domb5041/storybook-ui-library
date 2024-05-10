/** @type { import('@storybook/react').Preview } */
import "../global.css";
import "material-symbols"; // https://github.com/marella/material-symbols/tree/main/material-symbols#readme
const preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
