function load(name) {
  return require(`./pages/${name}.vue`).default;
}

function loadKitchenSink(name) {
  return require(`./kitchen-sink/pages/${name}.vue`).default;
}

function loadKitchenSinkFramework7(name) {
  return require(`./kitchen-sink/pages/framework7/${name}.vue`).default;
}

export default [
  { path: 'test/select', component: load('test/select') },
  { path: 'kitchen-sink/index', component: loadKitchenSink('index') },
  { path: 'kitchen-sink/about', component: loadKitchenSink('about') },
  { path: 'kitchen-sink/fileUpload', component: loadKitchenSink('fileUpload') },
  { path: 'kitchen-sink/progress', component: loadKitchenSink('progress') },
  { path: 'kitchen-sink/settings', component: loadKitchenSink('settings') },
  { path: 'kitchen-sink/view/sizeTarget', component: loadKitchenSink('view/sizeTarget') },
  { path: 'kitchen-sink/view/sizeSmall', component: loadKitchenSink('view/sizeSmall') },
  { path: 'kitchen-sink/view/sizeMiddle', component: loadKitchenSink('view/sizeMiddle') },
  { path: 'kitchen-sink/view/sizeLarge', component: loadKitchenSink('view/sizeLarge') },
  { path: 'kitchen-sink/page/openReturn', component: loadKitchenSink('page/openReturn') },
  { path: 'kitchen-sink/page/pageReturn', component: loadKitchenSink('page/pageReturn') },
  { path: 'kitchen-sink/box', component: loadKitchenSink('box') },
  { path: 'kitchen-sink/markdownEditor', component: loadKitchenSink('markdownEditor') },
  { path: 'kitchen-sink/dialog', component: loadKitchenSink('dialog') },
  { path: 'kitchen-sink/framework7/index', component: loadKitchenSinkFramework7('index') },
  { path: 'kitchen-sink/framework7/about', component: loadKitchenSinkFramework7('about') },
  { path: 'kitchen-sink/framework7/accordion', component: loadKitchenSinkFramework7('accordion') },
  { path: 'kitchen-sink/framework7/action-sheet', component: loadKitchenSinkFramework7('action-sheet') },
  { path: 'kitchen-sink/framework7/autocomplete', component: loadKitchenSinkFramework7('autocomplete') },
  { path: 'kitchen-sink/framework7/badge', component: loadKitchenSinkFramework7('badge') },
  { path: 'kitchen-sink/framework7/buttons', component: loadKitchenSinkFramework7('buttons') },
  { path: 'kitchen-sink/framework7/calendar', component: loadKitchenSinkFramework7('calendar') },
  { path: 'kitchen-sink/framework7/calendar-page', component: loadKitchenSinkFramework7('calendar-page') },
  { path: 'kitchen-sink/framework7/cards', component: loadKitchenSinkFramework7('cards') },
  { path: 'kitchen-sink/framework7/cards-expandable', component: loadKitchenSinkFramework7('cards-expandable') },
  { path: 'kitchen-sink/framework7/checkbox', component: loadKitchenSinkFramework7('checkbox') },
  { path: 'kitchen-sink/framework7/chips', component: loadKitchenSinkFramework7('chips') },
  { path: 'kitchen-sink/framework7/color-picker', component: loadKitchenSinkFramework7('color-picker') },
  { path: 'kitchen-sink/framework7/contacts-list', component: loadKitchenSinkFramework7('contacts-list') },
  { path: 'kitchen-sink/framework7/content-block', component: loadKitchenSinkFramework7('content-block') },
  { path: 'kitchen-sink/framework7/data-table', component: loadKitchenSinkFramework7('data-table') },
  { path: 'kitchen-sink/framework7/elevation', component: loadKitchenSinkFramework7('elevation') },
  { path: 'kitchen-sink/framework7/fab-morph', component: loadKitchenSinkFramework7('fab-morph') },
  { path: 'kitchen-sink/framework7/fab', component: loadKitchenSinkFramework7('fab') },
  { path: 'kitchen-sink/framework7/form-storage', component: loadKitchenSinkFramework7('form-storage') },
  { path: 'kitchen-sink/framework7/gauge', component: loadKitchenSinkFramework7('gauge') },
  { path: 'kitchen-sink/framework7/grid', component: loadKitchenSinkFramework7('grid') },
  { path: 'kitchen-sink/framework7/icons', component: loadKitchenSinkFramework7('icons') },
  { path: 'kitchen-sink/framework7/infinite-scroll', component: loadKitchenSinkFramework7('infinite-scroll') },
  { path: 'kitchen-sink/framework7/inputs', component: loadKitchenSinkFramework7('inputs') },
  { path: 'kitchen-sink/framework7/lazy-load', component: loadKitchenSinkFramework7('lazy-load') },
  { path: 'kitchen-sink/framework7/list-index', component: loadKitchenSinkFramework7('list-index') },
  { path: 'kitchen-sink/framework7/list', component: loadKitchenSinkFramework7('list') },
  { path: 'kitchen-sink/framework7/menu', component: loadKitchenSinkFramework7('menu') },
  { path: 'kitchen-sink/framework7/messages', component: loadKitchenSinkFramework7('messages') },
  { path: 'kitchen-sink/framework7/navbar', component: loadKitchenSinkFramework7('navbar') },
  { path: 'kitchen-sink/framework7/navbar-hide-scroll', component: loadKitchenSinkFramework7('navbar-hide-scroll') },
  { path: 'kitchen-sink/framework7/photo-browser', component: loadKitchenSinkFramework7('photo-browser') },
  { path: 'kitchen-sink/framework7/picker', component: loadKitchenSinkFramework7('picker') },
  { path: 'kitchen-sink/framework7/popover', component: loadKitchenSinkFramework7('popover') },
  { path: 'kitchen-sink/framework7/preloader', component: loadKitchenSinkFramework7('preloader') },
  { path: 'kitchen-sink/framework7/progressbar', component: loadKitchenSinkFramework7('progressbar') },
  { path: 'kitchen-sink/framework7/pull-to-refresh', component: loadKitchenSinkFramework7('pull-to-refresh') },
  { path: 'kitchen-sink/framework7/radio', component: loadKitchenSinkFramework7('radio') },
  { path: 'kitchen-sink/framework7/range', component: loadKitchenSinkFramework7('range') },
  { path: 'kitchen-sink/framework7/searchbar-expandable', component: loadKitchenSinkFramework7('searchbar-expandable') },
  { path: 'kitchen-sink/framework7/searchbar', component: loadKitchenSinkFramework7('searchbar') },
  { path: 'kitchen-sink/framework7/sheet-modal', component: loadKitchenSinkFramework7('sheet-modal') },
  { path: 'kitchen-sink/framework7/skeleton', component: loadKitchenSinkFramework7('skeleton') },
  { path: 'kitchen-sink/framework7/smart-select', component: loadKitchenSinkFramework7('smart-select') },
  { path: 'kitchen-sink/framework7/sortable', component: loadKitchenSinkFramework7('sortable') },
  { path: 'kitchen-sink/framework7/stepper', component: loadKitchenSinkFramework7('stepper') },
  { path: 'kitchen-sink/framework7/subnavbar', component: loadKitchenSinkFramework7('subnavbar') },
  { path: 'kitchen-sink/framework7/subnavbar-title', component: loadKitchenSinkFramework7('subnavbar-title') },
  { path: 'kitchen-sink/framework7/swipeout', component: loadKitchenSinkFramework7('swipeout') },
  { path: 'kitchen-sink/framework7/swiper', component: loadKitchenSinkFramework7('swiper') },
  { path: 'kitchen-sink/framework7/swiper-horizontal', component: loadKitchenSinkFramework7('swiper-horizontal') },
  { path: 'kitchen-sink/framework7/swiper-vertical', component: loadKitchenSinkFramework7('swiper-vertical') },
  { path: 'kitchen-sink/framework7/swiper-space-between', component: loadKitchenSinkFramework7('swiper-space-between') },
  { path: 'kitchen-sink/framework7/swiper-multiple', component: loadKitchenSinkFramework7('swiper-multiple') },
  { path: 'kitchen-sink/framework7/swiper-nested', component: loadKitchenSinkFramework7('swiper-nested') },
  { path: 'kitchen-sink/framework7/swiper-loop', component: loadKitchenSinkFramework7('swiper-loop') },
  { path: 'kitchen-sink/framework7/swiper-3d-cube', component: loadKitchenSinkFramework7('swiper-3d-cube') },
  { path: 'kitchen-sink/framework7/swiper-3d-coverflow', component: loadKitchenSinkFramework7('swiper-3d-coverflow') },
  { path: 'kitchen-sink/framework7/swiper-3d-flip', component: loadKitchenSinkFramework7('swiper-3d-flip') },
  { path: 'kitchen-sink/framework7/swiper-fade', component: loadKitchenSinkFramework7('swiper-fade') },
  { path: 'kitchen-sink/framework7/swiper-scrollbar', component: loadKitchenSinkFramework7('swiper-scrollbar') },
  { path: 'kitchen-sink/framework7/swiper-gallery', component: loadKitchenSinkFramework7('swiper-gallery') },
  { path: 'kitchen-sink/framework7/swiper-custom-controls', component: loadKitchenSinkFramework7('swiper-custom-controls') },
  { path: 'kitchen-sink/framework7/swiper-parallax', component: loadKitchenSinkFramework7('swiper-parallax') },
  { path: 'kitchen-sink/framework7/swiper-lazy', component: loadKitchenSinkFramework7('swiper-lazy') },
  { path: 'kitchen-sink/framework7/swiper-pagination-progress', component: loadKitchenSinkFramework7('swiper-pagination-progress') },
  { path: 'kitchen-sink/framework7/swiper-pagination-fraction', component: loadKitchenSinkFramework7('swiper-pagination-fraction') },
  { path: 'kitchen-sink/framework7/swiper-zoom', component: loadKitchenSinkFramework7('swiper-zoom') },
  { path: 'kitchen-sink/framework7/tabs', component: loadKitchenSinkFramework7('tabs') },
  { path: 'kitchen-sink/framework7/tabs-static', component: loadKitchenSinkFramework7('tabs-static') },
  { path: 'kitchen-sink/framework7/tabs-animated', component: loadKitchenSinkFramework7('tabs-animated') },
  { path: 'kitchen-sink/framework7/tabs-swipeable', component: loadKitchenSinkFramework7('tabs-swipeable') },
  { path: 'kitchen-sink/framework7/timeline', component: loadKitchenSinkFramework7('timeline') },
  { path: 'kitchen-sink/framework7/timeline-vertical', component: loadKitchenSinkFramework7('timeline-vertical') },
  { path: 'kitchen-sink/framework7/timeline-horizontal', component: loadKitchenSinkFramework7('timeline-horizontal') },
  { path: 'kitchen-sink/framework7/timeline-horizontal-calendar', component: loadKitchenSinkFramework7('timeline-horizontal-calendar') },
  { path: 'kitchen-sink/framework7/toast', component: loadKitchenSinkFramework7('toast') },
  { path: 'kitchen-sink/framework7/toggle', component: loadKitchenSinkFramework7('toggle') },
  { path: 'kitchen-sink/framework7/toolbar-tabbar', component: loadKitchenSinkFramework7('toolbar-tabbar') },
  { path: 'kitchen-sink/framework7/tabbar', component: loadKitchenSinkFramework7('tabbar') },
  { path: 'kitchen-sink/framework7/tabbar-labels', component: loadKitchenSinkFramework7('tabbar-labels') },
  { path: 'kitchen-sink/framework7/tabbar-scrollable', component: loadKitchenSinkFramework7('tabbar-scrollable') },
  { path: 'kitchen-sink/framework7/toolbar-hide-scroll', component: loadKitchenSinkFramework7('toolbar-hide-scroll') },
  { path: 'kitchen-sink/framework7/tooltip', component: loadKitchenSinkFramework7('tooltip') },
  { path: 'kitchen-sink/framework7/treeview', component: loadKitchenSinkFramework7('treeview') },
  { path: 'kitchen-sink/framework7/virtual-list', component: loadKitchenSinkFramework7('virtual-list') },
];
