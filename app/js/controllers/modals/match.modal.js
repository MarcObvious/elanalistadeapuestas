function MatchModalCtrl($log, match, matchDetails) {
  'ngInject';

  // ViewModel
  const vm = this;

  var init = function() {
    vm.m = match;
    vm.md = matchDetails;
    vm.bets = matchDetails.bets;
    vm.md.LALGS = vm.md.LALGS ? vm.md.LALGS : 0;
    vm.md.LALGR = vm.md.LALGR ? vm.md.LALGR : 0;
    vm.md.VAVGS = vm.md.VAVGS ? vm.md.VAVGS : 0;
    vm.md.VAVGR = vm.md.VAVGR ? vm.md.VAVGR : 0;

  };

  init();

}

export default {
  name: 'MatchModalCtrl',
  fn: MatchModalCtrl
};
