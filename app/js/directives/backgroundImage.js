function BackgroundImage() {

    return {
        restrict: 'EA',
        scope: {
            title: '@',
            message: '@backgroundImage'
        },
        link: (scope, element, attrs) => {
            scope.setBg = function () {
                element[0].style.background =  'url(' + attrs.backgroundSrc + ') no-repeat center center fixed';
                element[0].style['-webkit-background-size'] = 'cover';
                element[0].style['-moz-background-size'] = 'cover';
                element[0].style['-o-background-size'] = 'cover';
                element[0].style['background-size'] = 'cover';
                element[0].style.position = 'fixed';
            };
            scope.setBg();
        }
    };
}

export default {
    name: 'backgroundImage',
    fn: BackgroundImage
};
