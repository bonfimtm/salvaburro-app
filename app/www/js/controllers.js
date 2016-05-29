angular.module('app.controllers', [])

.controller('consultaDePreOsCtrl', function($scope, $cordovaBarcodeScanner) {

    $scope.takeSelfie = function() {
        document.addEventListener("deviceready", function() {

            $cordovaBarcodeScanner
                .scan()
                .then(function(barcodeData) {
                    // Success! Barcode data is here
                    console.log(barcodeData)

                    firebase.database().ref("products/" + barcodeData.text).once('value', function(snapshot) {
                        var data = snapshot.val()
                        console.log(data)
                        alert(data.desc + "\n" + data.currency + " " + data.price + "\n" + data.unit)
                    });

                    // $state.go("tabsController.produto" , {
                    //     barcode: barcodeData.text
                    // })
                }, function(error) {
                    // An error occurred
                    console.log(error)
                    alert("error: " + error)
                });

        }, false);
    }

})

.controller('consultaManualCtrl', function($scope) {

})

.controller('produtoCtrl', function($scope, $stateParams) {
    $scope.barcode = $stateParams.barcode

    firebase.database().ref("products/" + $scope.barcode).once('value', function(snapshot) {
        console.log(snapshot.val())
        $scope.prod = snapshot.val()
        $scope.$apply()
    });
})

.controller('promoEsCtrl', function($scope) {

})

.controller('guiaDeSeEsCtrl', function($scope) {

})