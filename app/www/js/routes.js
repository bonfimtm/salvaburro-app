angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.consultaManual', {
    url: '/consulta-manual',
    views: {
      'tab1': {
        templateUrl: 'templates/consultaManual.html',
        controller: 'consultaManualCtrl'
      }
    }
  })

  .state('tabsController.promoEs', {
    url: '/promocoes',
    views: {
      'tab2': {
        templateUrl: 'templates/promoEs.html',
        controller: 'promoEsCtrl'
      }
    }
  })

  .state('tabsController.guiaDeSeEs', {
    url: '/secoes',
    views: {
      'tab3': {
        templateUrl: 'templates/guiaDeSeEs.html',
        controller: 'guiaDeSeEsCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/app',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.produto', {
    url: '/produto',
    params: {
      'barcode': '0'
    },
    views: {
      'tab1': {
        templateUrl: 'templates/produto.html',
        controller: 'produtoCtrl'
      }
    }
  })

  .state('tabsController.consultaDePreOs', {
    url: '/consulta',
    views: {
      'tab1': {
        templateUrl: 'templates/consultaDePreOs.html',
        controller: 'consultaDePreOsCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/app/consulta')

  

});