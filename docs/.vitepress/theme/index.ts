import DefaultTheme from 'vitepress/theme';
import FlowDiagram from './components/FlowDiagram.vue';
import './custom.css';

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.component('FlowDiagram', FlowDiagram);
    },
};
