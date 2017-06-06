# Angular Turkish Transform
Angular Turkish Text Transform Filter


## Kullanımı

İlk olarak 'TurkishTransform' müdülümüzü projemize inject ediyoruz.

```
var app = angular.module('app',['TurkishTransform']);
```

İşimiz bitti artık projemizde kullanabiliriz.


<br/>
<br/>

### Örnek Kullanımlar

Örneğin:
```
app.controller('MyController',MyController);

function MyController(){
  var vm = this;
  
  vm.myobject = {
      first  : 'İSTANBUL',
      second : 'istanbul',
      third  : 'istanbul',
      fourth : 'kız kulesi'
  };
}
```
```
<div ng-controller="MyController as vm">
   <div ng-bind="vm.myobject.first | lowercasetr"></div>
</div>
```

Çıktı: 'istanbul' olacaktır.
***
```
<div ng-controller="MyController as vm">
   <div ng-bind="vm.myobject.second | uppercasetr"></div>
</div>
```

Çıktı: 'İSTANBUL' olacaktır.
***
```
<div ng-controller="MyController as vm">
   <div ng-bind="vm.myobject.third | capitalizetr"></div>
</div>
```

Çıktı: 'İstanbul' olacaktır.
***
```
<div ng-controller="MyController as vm">
   <div ng-bind="vm.myobject.fourth | capitalizewordtr"></div>
</div>
```

Çıktı: 'Kız Kulesi' olacaktır.
