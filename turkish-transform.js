"use strict";

(function(){

    angular.module('TurkishTransform').filter('uppercasetr', UppercaseTr);
    angular.module('TurkishTransform').filter('lowercasetr', LowercaseTr);
    angular.module('TurkishTransform').filter('capitalizetr', CapitalizeTr);
    angular.module('TurkishTransform').filter('capitalizewordtr', CapitalizeWordTr);

    function UppercaseTr() {
        var filter = filter;

        function filter(item) {
            if (typeof item !== "undefined")
                return item.replace(/ğ/g, 'Ğ')
                    .replace(/ü/g, 'Ü')
                    .replace(/ş/g, 'Ş')
                    .replace(/ı/g, 'I')
                    .replace(/i/g, 'İ')
                    .replace(/ö/g, 'Ö')
                    .replace(/ç/g, 'Ç')
                    .toUpperCase();
        };

        return filter;
    }

    function LowercaseTr() {
        var filter = filter;

        function filter(item) {
            if (typeof item !== "undefined")
                return item.replace(/Ğ/g, 'ğ')
                    .replace(/Ü/g, 'ü')
                    .replace(/Ş/g, 'ş')
                    .replace(/I/g, 'ı')
                    .replace(/İ/g, 'i')
                    .replace(/Ö/g, 'ö')
                    .replace(/Ç/g, 'ç')
                    .toLowerCase();
        };

        return filter;
    }

    function CapitalizeTr($filter) {
        var filter = filter;

        function filter(item) {
            if (typeof item !== "undefined")
                return $filter('uppercasetr')(item.charAt(0)) + $filter('lowercasetr')(item.slice(1));
        };

        return filter;
    }

    function CapitalizeWordTr($filter) {
        var filter = filter;

        function filter(item) {
            if (typeof item !== "undefined")
                var temp = item.split(' ');
                for(var i=0;i < temp.length; i++){
                    temp[i] = $filter('capitalizetr')(temp[i]);
                }
                return temp.join(' ');
        };

        return filter;
    }

})(angular);