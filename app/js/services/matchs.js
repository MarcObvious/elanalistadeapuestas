function MatchsService($http, AppSettings) {
  'ngInject';

  const service = {};

  service.get = function(params) {
    return new Promise((resolve, reject) => {
      var url = AppSettings.apiUrl + 'match/';

      url +=  params.id;
      url +=   ('/'+ params.year);
      url +=   ('/' + params.round);
      url +=   ('/' + params.competition);

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
