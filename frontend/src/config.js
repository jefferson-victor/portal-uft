import CampusView from './components/View/CampusView';

// All your imports required for the config here BEFORE this line
import '@plone/volto/config';

export default function applyConfig(config) {
  config.settings = {
    ...config.settings,
    isMultilingual: false,
    supportedLanguages: ['pt-br'],
    defaultLanguage: 'pt-br',
  };
  config.views.contentTypesViews = {
    ...config.views.contentTypesViews,
    campus: CampusView,
  };
  return config;
}
