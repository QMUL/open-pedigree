import PedigreeEditor from './script/pedigree';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';

import '../public/vendor/xwiki/xwiki-min.css';
import '../public/vendor/xwiki/fullScreen.css';
import '../public/vendor/xwiki/colibri.css';
import '../public/vendor/phenotips/Widgets.css';
import '../public/vendor/phenotips/DateTimePicker.css';
import '../public/vendor/phenotips/Skin.css';
import '../public/vendor/selectize/selectize.default.css';

var editor;

document.observe('dom:loaded', function () {

  var disorders = [
    { 'value': 'Gigantism', 'text': 'Gigantism', 'color': '#010101'},
    { 'value': 'Acromegaly', 'text': 'Acromegaly', 'color': '#808080' },
    { 'value': 'Prolactinoma', 'text': 'Prolactinoma', 'color': '#FF0000' },
    { 'value': 'NFPA', 'text': 'Non-functioning pituitary adenoma (NFPA)' , 'color': '#A020F0'},
    { 'value': 'Corticotrophgantism', 'text': 'Cushings/corticotrophgantism' , 'color':  '#00FF00'},
    { 'value': 'Gonadatroph', 'text': 'Gonadatroph', 'color':  '#964B00'}
  ]
  var editor = new PedigreeEditor({
    'disorderOptions': {
      'type': 'Static',
      'terms': disorders
    }
  });
});
