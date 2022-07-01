import userSVG from '@plone/volto/icons/user.svg';
import PersonBlockViewBlock from './PersonBlock/View';
import PersonBlockEditBlock from './PersonBlock/Edit';

const blocks = {
  personBlock: {
    id: 'personBlock',
    title: 'Person Block',
    icon: userSVG,
    group: 'midia',
    view: PersonBlockViewBlock,
    edit: PersonBlockEditBlock,
    restricted: false,
    mostUsed: true,
    sidebarTab: 1,
  },
};

export default blocks;
