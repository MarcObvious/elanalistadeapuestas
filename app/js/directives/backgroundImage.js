function BackgroundImage() {

    return {
        restrict: 'EA',
        templateUrl: 'directives/backgroundImage.html',
        scope: {
            title: '@',
            message: '@backgroundImage'
        },
        link: (scope, element, attrs) => {
            console.log(attrs);

            scope.setBg = function (srcImg) {
                console.log(attrs.backgroundSrc);
                if (!srcImg) {

                    element[0].style.backgroundImage =  'url(' + attrs.backgroundSrc + ')';

                } else {

                    element[0].style.backgroundImage =  'url(' + srcImg + ') no-repeat center center fixed';
                }

                element[0].style['-webkit-background-size'] = 'cover';
                element[0].style['-moz-background-size'] = 'cover';
                element[0].style['-o-background-size'] = 'cover';
                element[0].style['background-size'] = 'cover';
               // element[0].style.backgroundRepeat = attrs.backgroundRepeat;
               // element[0].style.backgroundSize = attrs.backgroundSize;
               // element[0].style.backgroundAttachment = attrs.backgroundAttachment;
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
