// --- polyfill
import './components/common/polyfill/polyfill-ie11-nodelist-foreach';
import './components/common/polyfill/polyfill-intersection-observer';
import './components/common/polyfill/polyfill-ie-matches';
import './components/common/polyfill/polyfill-ie-closest';
import './components/common/polyfill/polyfill-assing';
import './components/common/polyfill/polyfill-array-from';

// --- libs
import Scrollbar from 'smooth-scrollbar';
import './components/common/libs/Smooth-scroll/Smooth-croll';

// ---modules
import './components/modules/offers/scripts/offer';

// --- elements
import './components/elements/form/scripts/form';

// --- section
import './components/sections/header/scripts/header';
import './components/sections/for-whom-cards/scripts/for-whom';
import './components/sections/how-works/scripts/how-works';
import './components/sections/loved-for/scripts/loved-for';
import './components/sections/comparison/scripts/comparison';
import './components/sections/advantages/scripts/advantages';
import './components/sections/rates/scripts/rates';
import './components/sections/certificate/scripts/certificate';
import './components/sections/comment/scripts/comment';
import './components/sections/faq/scripts/faq';

//---
import './components/sections/contacts/scripts/contacts';
import './components/sections/modal-callback/scripts/modal-callback';

Scrollbar.initAll({
  alwaysShowTracks: true,
});
