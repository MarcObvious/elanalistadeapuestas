function MatchsService($http, AppSettings) {
  'ngInject';

  const service = {};

  service.get = function(params) {
    return new Promise((resolve, reject) => {
      var url = AppSettings.apiUrl + 'match/';

      /*Object.keys(params).forEach((key) => {
       url += params[key] + '/';
       });*/
      url +=  params.id;
      url +=  params.year === 'Year' ? '/2015' : ('/'+ params.year);
      url +=  params.round === 'Round' ? '/0' : ('/' + params.round);
      switch (params.competition) {
        case 'BBVA':
          url += '/1';
          break;
        case 'Premier':
          url += '/10';
          break;
        case 'Bundesliga':
          url += '/8';
          break;
        default:
        case 'All':
        case 'Competition':
          url +=   '/0';
          break;

      }

      url +=  '/' + params.team;

      $http.get(url).success((data) => {
        resolve(data.data);
      }).error((err, status) => {
        reject(err, status);
      });
    });
  };

  return service;

}

export default {
  name: 'MatchsService',
  fn: MatchsService
};
