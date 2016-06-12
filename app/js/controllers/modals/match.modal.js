function MatchModalCtrl($log, match, matchDetails) {
  'ngInject';

  // ViewModel
  const vm = this;

  var init = function() {
    vm.m = match;
    vm.md = matchDetails;
    vm.md.LALGS = vm.md.LALGS ? vm.md.LALGS : 0;
    vm.md.LALGR = vm.md.LALGR ? vm.md.LALGR : 0;
    vm.md.VAVGS = vm.md.VAVGS ? vm.md.VAVGS : 0;
    vm.md.VAVGR = vm.md.VAVGR ? vm.md.VAVGR : 0;

    vm.bets = [];
    vm.bets.push(
      {
        title: 'Winner',
        value: Math.random() <= 0.33 ? 'Local' : (Math.random() <= 0.66 ? 'Visitor': 'Draw'),
        prob:  (Math.random()).toFixed(5),
        quote: Math.floor(Math.random()*3)+1
      }
    );

    vm.bets.push(
      {
        title: 'Total Goals',
        value: Math.floor(Math.random()*10),
        prob:   (Math.random()).toFixed(5),
        quote: Math.floor(Math.random()*3)+1
      }
    );

    vm.bets.push(
      {
        title: 'Total Cards',
        value: Math.floor(Math.random()*10),
        prob:   (Math.random()).toFixed(5),
        quote: Math.floor(Math.random()*3)+1
      }
    );

  };

  init();

}

export default {
  name: 'MatchModalCtrl',
  fn: MatchModalCtrl
};
