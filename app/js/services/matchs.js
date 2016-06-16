function MatchsService($http, AppSettings) {
  'ngInject';

  const service = {};

  service.get = function(params) {
    return new Promise((resolve, reject) => {
      var url = AppSettings.apiUrl + 'match/';

      url +=   params.id;
      url +=   typeof(params.year) != 'undefined' ? ('/'+ params.year) : '';
      url +=   typeof(params.round) != 'undefined' ? ('/' + params.round) : '';
      url +=   typeof(params.competition) != 'undefined' ? ('/' + params.competition) : '';

      url +=  params.competition ? '/' + params.team : '';

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
