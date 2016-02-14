function MatchModalCtrl($log, match) {
    'ngInject';

    // ViewModel
    const vm = this;

    var init = function() {
        vm.title = 'Example 2';
        vm.number = 151551515;
        vm.m = match;
        vm.bets = [];
        vm.m.team1.line_up = [];
        vm.m.team2.line_up = [];
        var i = Math.floor(Math.random()*50);
        for (i; i > 0; i--) {
            vm.bets.push(
                {
                    title: 'Bet '+Math.floor(Math.random()*100),
                    value: Math.floor(Math.random()*100),
                    page: 'BetHouse ' + Math.floor(Math.random()*100),
                    quote: Math.floor(Math.random()*2)
                }
            );
        }
        console.log(vm.m);
        i = 12;
        for (i; i > 0; i--){
            vm.m.team1.line_up.push({name:'Player ' + i, position: Math.floor(Math.random()*100)});
            vm.m.team2.line_up.push({name:'Player ' + i, position: Math.floor(Math.random()*100)});
        }
    };

    init();
   // console.log(match);

}

export default {
    name: 'MatchModalCtrl',
    fn: MatchModalCtrl
};
