angular.module('app.controllers', [])

.controller('consultaManualCtrl', function($scope) {

})

.controller('promoEsCtrl', function($scope) {

})

.controller('guiaDeSeEsCtrl', function($scope) {

})

.controller('produtoCtrl', function($scope) {

})

.controller('consultaDePreOsCtrl', function($scope) {

    $scope.takeSelfie = function() {
        alert("Smile!")
    }

})

.controller('BarcodeCtrl', function($scope, $cordovaBarcodeScanner) {

    document.addEventListener("deviceready", function() {

        $cordovaBarcodeScanner
            .scan()
            .then(function(barcodeData) {
                // Success! Barcode data is here
                console.log(barcodeData)
                alert(barcodeData)
            }, function(error) {
                // An error occurred
                console.log(error)
                alert(error)
            });

    }, false);
})

.controller('PictureCtrl', function($scope, $cordovaCamera) {

    document.addEventListener("deviceready", function() {

        var options = {
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.CAMERA,
            allowEdit: true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 100,
            targetHeight: 100,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };

        $cordovaCamera.getPicture(options).then(function(imageData) {
            var image = document.getElementById('myImage');
            image.src = "data:image/jpeg;base64," + imageData;
        }, function(err) {
            // error
            console.log(error)
            alert(error)
        });

    }, false);
})