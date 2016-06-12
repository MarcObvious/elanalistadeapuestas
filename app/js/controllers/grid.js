function GridCtrl($state, $uibModal, $scope, MatchsService, AllService) {
  'ngInject';

  // ViewModel
  const vm = this;

  var getMatchs = function(search){
    search.id = 0;
    MatchsService.get(search).then(function(result) {

      vm.matchs = [];
      angular.forEach(result, function (res) {
        var mat = {
          title: 'Round ' + res.round,
          id: res.id,
          round: res.round,
          lliga: res.lliga,
          temp: res.temp,
          competition: res.competition_name,
          team1: {name:res.local, goals:res.local_goals, shield:res.local_shield, lineup:[]},
          team2: {name:res.visitor, goals:res.visitor_goals, shield:res.visitor_shield, lineup:[]},
        };
        angular.forEach(res.match_id, function (player){

          if (player.TeamId==res.localId){
            mat.team1.lineup.push(player);
          }
          else {
            mat.team2.lineup.push(player);
          }
        });
        vm.matchs.push(mat);

      });

      $scope.$apply();
    });

  };

  var init = function() {
    vm.title = 'Matches';
    vm.matchs = [];
    vm.init=0;
    vm.search = {
      team : '',
      competition: 'Competition',
      round: 'Round',
      year: 'Year'
    };
    getMatchs(vm.search);

  };

  $scope.$watch('grid.search.competition', function(change){
    if (vm.init > 3){
      getMatchs(vm.search);
    }
    ++vm.init;
  });

  $scope.$watch('grid.search.round', function(change){
    if (vm.init > 3){
      getMatchs(vm.search);
    }
    ++vm.init;
  });

  $scope.$watch('grid.search.year', function(change){
    if (vm.init > 3){
      getMatchs(vm.search);
    }
    ++vm.init;
  });

  $scope.$watch('grid.search.team', function(change){
    if (vm.init > 3){
      getMatchs(vm.search);
    }
    ++vm.init;
  });

  vm.openModal = function (match) {
    AllService.get({id: match.id}).then(function(res) {

      $scope.modalInstance = $uibModal.open({
        templateUrl: 'modals/match.modal.html',
        controller: 'MatchModalCtrl as match',
        resolve: {
          matchDetails:  res[0],
          match: match,
        },
        size: 'lg',
        scope: $scope
      });

    });

  };


  init();

  // vm.content = 'It\'s already under construction! see you soon!';

  vm.arrowUp = function(){
    $state.go('Statement', {}, {'location': true, 'reload': true});
  };
  vm.arrowDown = function(){
    $state.go('Statistics', {}, {'location': true, 'reload': true});
  };

}

export default {
  name: 'GridCtrl',
  fn: GridCtrl
};
