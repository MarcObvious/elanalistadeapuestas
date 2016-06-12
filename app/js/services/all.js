function AllService($http, AppSettings) {
    'ngInject';

    const service = {};

    service.get = function(params) {
        return new Promise((resolve, reject) => {
            var url = AppSettings.apiUrl + 'all/';

            url +=  params.id;

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
    name: 'AllService',
    fn: AllService
};
