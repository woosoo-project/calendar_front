import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

const theme = create({
    brandTitle: 'woosoo-UI',
    brandUrl: 'https://github.com/woosoo-project/calendar_front'
});

addons.setConfig({
    theme
});
