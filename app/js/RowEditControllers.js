// myApp.service('RowEditor', RowEditor);
// RowEditor.$inject = [ '$http', '$rootScope', '$uibModal', 'DataFactory'];
// function RowEditor($http, $rootScope, $uibModal, DataFactory) {

myApp.service('RowEditor',[ '$http', '$rootScope', '$uibModal',
  function ($http, $rootScope, $uibModal) {

  let vm = this;

  $rootScope.row = {};

  vm.editRowShoppingCentre = editRowShoppingCentre;

  let service = {
  editRowVisit : editRowVisit,
  editRowZone : editRowZone,
  editRowUser : editRowUser,
  editRowRetailer : editRowRetailer,
  editRowBeacon : editRowBeacon,
  editRowLocation : editRowLocation,
  editRowBonusCode : editRowBonusCode,
  editRowFavourite : editRowFavourite,
  editRowLoyaltyReward : editRowLoyaltyReward,
  editRowRating : editRowRating,
  editRowShoppingCentre : editRowShoppingCentre,
  editRowContent : editRowContent,
  editRowUserPoint : editRowUserPoint,
  };


  function editRowVisit(grid, row) {
    $rootScope.addingRow = false;
    $uibModal.open({
      templateUrl : 'js/Edit-Visits-Service.html',
      controller : [ '$http', '$uibModalInstance', 'grid', 'row', RowEditCtrl ],
      controllerAs : 'vm',
      resolve : {
        grid  : function() { return grid; },
        row   : function() { return row;  }
      }
    });
    $rootScope.grid = grid;
    $rootScope.row = row;
  }
  function editRowZone(grid, row) {
    $rootScope.addingRow = false;
    $uibModal.open({
      templateUrl : 'js/Edit-Zones-Service.html',
      controller : [ '$http', '$uibModalInstance', 'grid', 'row', RowEditCtrl ],
      controllerAs : 'vm',
      resolve : {
        grid  : function() { return grid; },
        row   : function() { return row;  }
      }
    });
    $rootScope.grid = grid;
    $rootScope.row = row;
  }
  function editRowUser(grid, row) {
    $rootScope.addingRow = false;
    $uibModal.open({
      templateUrl : 'js/Edit-Users-Service.html',
      controller : [ '$http', '$uibModalInstance', 'grid', 'row', RowEditCtrl ],
      controllerAs : 'vm',
      resolve : {
        grid  : function() { return grid; },
        row   : function() { return row;  }
      }
    });
    $rootScope.grid = grid;
    $rootScope.row = row;
  }
  function editRowRetailer(grid, row) {
    $rootScope.addingRow = false;
    $uibModal.open({
      templateUrl : 'js/Edit-Retailers-Service.html',
      controller : [ '$http', '$uibModalInstance', 'grid', 'row', RowEditCtrl ],
      controllerAs : 'vm',
      resolve : {
        grid  : function() { return grid; },
        row   : function() { return row;  }
      }
    });
    $rootScope.grid = grid;
    $rootScope.row = row;
  }
  function editRowBeacon(grid, row) {
    $rootScope.addingRow = false;
    $uibModal.open({
      templateUrl : 'js/Edit-Beacons-Service.html',
      controller : [ '$http', '$uibModalInstance', 'grid', 'row', RowEditCtrl ],
      controllerAs : 'vm',
      resolve : {
        grid  : function() { return grid; },
        row   : function() { return row;  }
      }
    });
    $rootScope.grid = grid;
    $rootScope.row = row;
  }
  function editRowLocation(grid, row) {
    $rootScope.addingRow = false;
    $uibModal.open({
      templateUrl : 'js/Edit-Locations-Service.html',
      controller : [ '$http', '$uibModalInstance', 'grid', 'row', RowEditCtrl ],
      controllerAs : 'vm',
      resolve : {
        grid  : function() { return grid; },
        row   : function() { return row;  }
      }
    });
    $rootScope.grid = grid;
    $rootScope.row = row;
  }
  function editRowBonusCode(grid, row) {
    $rootScope.addingRow = false;
    $uibModal.open({
      templateUrl : 'js/Edit-BonusCodes-Service.html',
      controller : [ '$http', '$uibModalInstance', 'grid', 'row', RowEditCtrl ],
      controllerAs : 'vm',
      resolve : {
        grid  : function() { return grid; },
        row   : function() { return row;  }
      }
    });
  }
  function editRowFavourite(grid, row) {
    $rootScope.addingRow = false;
    $uibModal.open({
      templateUrl : 'js/Edit-Favourites-Service.html',
      controller : [ '$http', '$uibModalInstance', 'grid', 'row', RowEditCtrl ],
      controllerAs : 'vm',
      resolve : {
        grid  : function() { return grid; },
        row   : function() { return row;  }
      }
    });
  }
  function editRowLoyaltyReward(grid, row) {
    $rootScope.addingRow = false;
    $uibModal.open({
      templateUrl : 'js/Edit-LoyaltyRewards-Service.html',
      controller : [ '$http', '$uibModalInstance', 'grid', 'row', RowEditCtrl ],
      controllerAs : 'vm',
      resolve : {
        grid  : function() { return grid; },
        row   : function() { return row;  }
      }
    });
    $rootScope.grid = grid;
    $rootScope.row = row;
  }
  function editRowRating(grid, row) {
    $rootScope.addingRow = false;
    $uibModal.open({
      templateUrl : 'js/Edit-Ratings-Service.html',
      controller : [ '$http', '$uibModalInstance', 'grid', 'row', RowEditCtrl ],
      controllerAs : 'vm',
      resolve : {
        grid  : function() { return grid; },
        row   : function() { return row;  }
      }
    });
  }
  function editRowShoppingCentre(grid, row) {
    $rootScope.addingRow = false;
    $uibModal.open({
      templateUrl : 'js/Edit-ShoppingCentres-Service.html',
      controller : [ '$http', '$uibModalInstance', 'grid', 'row', RowEditCtrl ],
      controllerAs : 'vm',
      resolve : {
        grid  : function() { return grid; },
        row   : function() { return row;  }
      }
    });
    $rootScope.grid = grid;
    $rootScope.row = row;
  }
  function editRowContent(grid, row) {
    $rootScope.addingRow = false;
    $uibModal.open({
      templateUrl : 'js/Edit-Contents-Service.html',
      controller : [ '$http', '$uibModalInstance', 'grid', 'row', RowEditCtrl ],
      controllerAs : 'vm',
      resolve : {
        grid  : function() { return grid; },
        row   : function() { return row;  }
      }
    });
    $rootScope.grid = grid;
    $rootScope.row = row;
  }
  function editRowUserPoint(grid, row) {
    $rootScope.addingRow = false;
    $uibModal.open({
      templateUrl : 'js/Edit-UserPoints-Service.html',
      controller : [ '$http', '$uibModalInstance', 'grid', 'row', RowEditCtrl ],
      controllerAs : 'vm',
      resolve : {
        grid  : function() { return grid; },
        row   : function() { return row;  }
      }
    });
    $rootScope.grid = grid;
    $rootScope.row = row;
  }

  return service;

}]);

// RowEditControllers for each entity

// myApp.controller('RowEditCtrl', RowEditCtrl);
// RowEditCtrl.$inject = [ '$http', '$uibModalInstance', '$rootScope'];
// function RowEditCtrl($http ,  $uibModalInstance, grid, row, $rootScope) {

myApp.controller('RowEditCtrl',RowEditCtrl);
RowEditCtrl.$inject = [ '$http', '$uibModalInstance'];
  function RowEditCtrl($http ,  $uibModalInstance, grid, row) {

  let vm = this;
  vm.entity = angular.copy(row.entity);

  let urlBase = "http://localhost:8080"

  let rowEditors = {
    saveVisit : saveVisit,
    saveUser : saveUser,
    saveUserPoint : saveUserPoint,
    saveRetailer : saveRetailer,
    saveBonusCode : saveBonusCode,
    saveFavourite : saveFavourite,
    saveLoyaltyReward : saveLoyaltyReward,
    saveLocation : saveLocation,
    saveBeacon : saveBeacon,
    saveZone : saveZone,
    saveShoppingCentre : saveShoppingCentre,
    saveContent : saveContent,
    saveRating : saveRating,

    removeVisit : removeVisit,
    removeUser : removeUser,
    removeUserPoint : removeUserPoint,
    removeRetailer : removeRetailer,
    removeBonusCode : removeBonusCode,
    removeFavourite : removeFavourite,
    removeLoyaltyReward : removeLoyaltyReward,
    removeLocation : removeLocation,
    removeBeacon : removeBeacon,
    removeShoppingCentre : removeShoppingCentre,
    removeZone : removeZone,
    removeContent : removeContent,
    removeRating : removeRating,

};



  function removeShoppingCentre() {
    console.dir(row);
    if (row.entity.id != '0') {
      row.entity = angular.extend(row.entity, vm.entity);
      let index = grid.appScope.vm.serviceGrid.data.indexOf(row.entity);
      grid.appScope.vm.serviceGrid.data.splice(index, 1);
      /*
       * $http.delete('http://localhost:8080/service/delete/'+row.entity.id).success(function(response) { $uibModalInstance.close(row.entity); }).error(function(response) { alert('Cannot delete row (error in console)'); console.dir(response); });
       */
    }
    $uibModalInstance.close(row.entity);
  }
  function saveRating() {
    if (row.entity.id == '0') {
      /*
       * $http.post('http://localhost:8080/service/save', row.entity).success(function(response) { $uibModalInstance.close(row.entity); }).error(function(response) { alert('Cannot edit row (error in console)'); console.dir(response); });
       */
      row.entity = angular.extend(row.entity, vm.entity);
      //real ID come back from response after the save in DB
      row.entity.id = Math.floor(100 + Math.random() * 1000);
      grid.data.push(row.entity);
    } else {
      row.entity = angular.extend(row.entity, vm.entity);
      /*
       * $http.post('http://localhost:8080/service/save', row.entity).success(function(response) { $uibModalInstance.close(row.entity); }).error(function(response) { alert('Cannot edit row (error in console)'); console.dir(response); });
       */
    }
    $uibModalInstance.close(row.entity);
  }

  function removeRating() {
    console.dir(row)
    if (row.entity.id != '0') {
      row.entity = angular.extend(row.entity, vm.entity);
      let index = grid.appScope.vm.serviceGrid.data.indexOf(row.entity);
      grid.appScope.vm.serviceGrid.data.splice(index, 1);
      /*
       * $http.delete('http://localhost:8080/service/delete/'+row.entity.id).success(function(response) { $uibModalInstance.close(row.entity); }).error(function(response) { alert('Cannot delete row (error in console)'); console.dir(response); });
       */
    }
    $uibModalInstance.close(row.entity);
  }


  function saveShoppingCentre() {
    if (vm.entity.shoppingCentreid === 0) { // implies a new entity

      row.entity = angular.extend(row.entity, vm.entity);
      // Add Shopping Centre
      let params = getEntity(row.entity);
      $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;

      $http.put(urlBase + '/ShoppingCentre/update/' + vm.entity.shoppingCentreid,vm.entity )
        .then(function(response) {
          $uibModalInstance.close(row.entity);
        })
        .error(function(response) {
          alert('Cannot add ShoppingCentre (error in console)');
          console.dir(response);
        });

      row.entity = angular.extend(row.entity, vm.entity);
      //real ID come back from response after the save in DB
      row.entity.id = Math.floor(100 + Math.random() * 1000);
      grid.data.push(row.entity);

    } else { // changed entity

      row.entity = angular.extend(vm.entity, row.entity);

      let params = getEntity(row.entity);
      // update Shopping Centre
      let updatedRow = row.entity;

      $http.put(urlBase + '/ShoppingCentre/update/' + row.entity.shoppingCentreid,row.entity , {headers:{
        'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With',
          'X-Random-Shit':'123123123'
      }
      })

      // $http.put(urlBase + '/ShoppingCentre/update/' , params ,{headers: {
      //   'Content-Type': 'application/json'}
      // })
      // $http.get(urlBase + '/ShoppingCentre/update/' + vm.entity )
        .then(function(response) {
          $uibModalInstance.close(row.entity);
        },
          function(response) {
            alert('Cannot update ShoppingCentre (error in console)');
            console.dir(response);
      });
    }
    $uibModalInstance.close(row.entity);
  }

  function getEntity(updates, attrList) {
    let newEntity = attrList;
    let str = "";
    for(let key in updates) {
      if (!$.isArray(updates[key])) {
        str += "/" + updates[key]
      }
    }
    return str;
  }

  function saveVisit() {
    if (row.entity.id == '0') {
      /*
       * $http.post('http://localhost:8080/service/save', row.entity).success(function(response) { $uibModalInstance.close(row.entity); }).error(function(response) { alert('Cannot edit row (error in console)'); console.dir(response); });
       */
      row.entity = angular.extend(row.entity, vm.entity);
      //real ID come back from response after the save in DB
      row.entity.id = Math.floor(100 + Math.random() * 1000);
      grid.data.push(row.entity);
    } else {
      row.entity = angular.extend(row.entity, vm.entity);
      /*
       * $http.post('http://localhost:8080/service/save', row.entity).success(function(response) { $uibModalInstance.close(row.entity); }).error(function(response) { alert('Cannot edit row (error in console)'); console.dir(response); });
       */
    }
    $uibModalInstance.close(row.entity);
  }
  function removeVisit() {
    console.dir(row);
    if (row.entity.id != '0') {
      row.entity = angular.extend(row.entity, vm.entity);
      let index = grid.appScope.vm.serviceGrid.data.indexOf(row.entity);
      grid.appScope.vm.serviceGrid.data.splice(index, 1);
      /*
       * $http.delete('http://localhost:8080/service/delete/'+row.entity.id).success(function(response) { $uibModalInstance.close(row.entity); }).error(function(response) { alert('Cannot delete row (error in console)'); console.dir(response); });
       */
    }
    $uibModalInstance.close(row.entity);
  }
  function saveUser() {
    if (row.entity.id == '0') {

      DataFactory.addUser(row.entity).then(function(response) {
        $uibModalInstance.close(row.entity);
      }).error(function(response) {
        alert('Cannot add new user (error in console)');
        console.dir(response);
      });

      row.entity = angular.extend(row.entity, vm.entity);
      //real ID come back from response after the save in DB
      row.entity.id = Math.floor(100 + Math.random() * 1000);
      grid.data.push(row.entity);
    } else {
      row.entity = angular.extend(row.entity, vm.entity);
      /*
       * $http.post('http://localhost:8080/service/save', row.entity).success(function(response) { $uibModalInstance.close(row.entity); }).error(function(response) { alert('Cannot edit row (error in console)'); console.dir(response); });
       */
    }
    $uibModalInstance.close(row.entity);
  }
  function removeUser() {
    console.dir(row)
    if (row.entity.id != '0') {
      row.entity = angular.extend(row.entity, vm.entity);
      let index = grid.appScope.vm.serviceGrid.data.indexOf(row.entity);
      grid.appScope.vm.serviceGrid.data.splice(index, 1);

      DataFactory.deleteUserById(row.entity.userid).then(function(response) {
          $uibModalInstance.close(row.entity);
      }).error(function(response) {
        alert('Cannot delete row (error in console)'); console.dir(response);
      });
           }
      $uibModalInstance.close(row.entity);
  }
  function saveUserPoint() {
    if (row.entity.id == '0') {
      /*
       * $http.post('http://localhost:8080/service/save', row.entity).success(function(response) { $uibModalInstance.close(row.entity); }).error(function(response) { alert('Cannot edit row (error in console)'); console.dir(response); });
       */
      row.entity = angular.extend(row.entity, vm.entity);
      //real ID come back from response after the save in DB
      row.entity.id = Math.floor(100 + Math.random() * 1000);
      grid.data.push(row.entity);
    } else {
      row.entity = angular.extend(row.entity, vm.entity);
      /*
       * $http.post('http://localhost:8080/service/save', row.entity).success(function(response) { $uibModalInstance.close(row.entity); }).error(function(response) { alert('Cannot edit row (error in console)'); console.dir(response); });
       */
    }
    $uibModalInstance.close(row.entity);
  }
  function removeUserPoint() {
    console.dir(row)
    if (row.entity.id != '0') {
      row.entity = angular.extend(row.entity, vm.entity);
      let index = grid.appScope.vm.serviceGrid.data.indexOf(row.entity);
      grid.appScope.vm.serviceGrid.data.splice(index, 1);
      /*
       * $http.delete('http://localhost:8080/service/delete/'+row.entity.id).success(function(response) { $uibModalInstance.close(row.entity); }).error(function(response) { alert('Cannot delete row (error in console)'); console.dir(response); });
       */
    }
    $uibModalInstance.close(row.entity);
  }
  function saveRetailer() {
    if (row.entity.id == '0') {
      /*
       * $http.post('http://localhost:8080/service/save', row.entity).success(function(response) { $uibModalInstance.close(row.entity); }).error(function(response) { alert('Cannot edit row (error in console)'); console.dir(response); });
       */
      row.entity = angular.extend(row.entity, vm.entity);
      //real ID come back from response after the save in DB
      row.entity.id = Math.floor(100 + Math.random() * 1000);
      grid.data.push(row.entity);
    } else {
      row.entity = angular.extend(row.entity, vm.entity);
      /*
       * $http.post('http://localhost:8080/service/save', row.entity).success(function(response) { $uibModalInstance.close(row.entity); }).error(function(response) { alert('Cannot edit row (error in console)'); console.dir(response); });
       */
    }
    $uibModalInstance.close(row.entity);
  }
  function removeRetailer() {
    console.dir(row)
    if (row.entity.id != '0') {
      row.entity = angular.extend(row.entity, vm.entity);
      let index = grid.appScope.vm.serviceGrid.data.indexOf(row.entity);
      grid.appScope.vm.serviceGrid.data.splice(index, 1);
      /*
       * $http.delete('http://localhost:8080/service/delete/'+row.entity.id).success(function(response) { $uibModalInstance.close(row.entity); }).error(function(response) { alert('Cannot delete row (error in console)'); console.dir(response); });
       */
    }
    $uibModalInstance.close(row.entity);
  }
  function saveBonusCode() {
    if (row.entity.id == '0') {
      /*
       * $http.post('http://localhost:8080/service/save', row.entity).success(function(response) { $uibModalInstance.close(row.entity); }).error(function(response) { alert('Cannot edit row (error in console)'); console.dir(response); });
       */
      row.entity = angular.extend(row.entity, vm.entity);
      //real ID come back from response after the save in DB
      row.entity.id = Math.floor(100 + Math.random() * 1000);
      grid.data.push(row.entity);
    } else {
      row.entity = angular.extend(row.entity, vm.entity);
      /*
       * $http.post('http://localhost:8080/service/save', row.entity).success(function(response) { $uibModalInstance.close(row.entity); }).error(function(response) { alert('Cannot edit row (error in console)'); console.dir(response); });
       */
    }
    $uibModalInstance.close(row.entity);
  }
  function removeBonusCode() {
    console.dir(row)
    if (row.entity.id != '0') {
      row.entity = angular.extend(row.entity, vm.entity);
      let index = grid.appScope.vm.serviceGrid.data.indexOf(row.entity);
      grid.appScope.vm.serviceGrid.data.splice(index, 1);
      /*
       * $http.delete('http://localhost:8080/service/delete/'+row.entity.id).success(function(response) { $uibModalInstance.close(row.entity); }).error(function(response) { alert('Cannot delete row (error in console)'); console.dir(response); });
       */
    }
    $uibModalInstance.close(row.entity);
  }
  function saveFavourite() {
    if (row.entity.id == '0') {
      /*
       * $http.post('http://localhost:8080/service/save', row.entity).success(function(response) { $uibModalInstance.close(row.entity); }).error(function(response) { alert('Cannot edit row (error in console)'); console.dir(response); });
       */
      row.entity = angular.extend(row.entity, vm.entity);
      //real ID come back from response after the save in DB
      row.entity.id = Math.floor(100 + Math.random() * 1000);
      grid.data.push(row.entity);
    } else {
      row.entity = angular.extend(row.entity, vm.entity);
      /*
       * $http.post('http://localhost:8080/service/save', row.entity).success(function(response) { $uibModalInstance.close(row.entity); }).error(function(response) { alert('Cannot edit row (error in console)'); console.dir(response); });
       */
    }
    $uibModalInstance.close(row.entity);
  }
  function removeFavourite() {
    console.dir(row)
    if (row.entity.id != '0') {
      row.entity = angular.extend(row.entity, vm.entity);
      let index = grid.appScope.vm.serviceGrid.data.indexOf(row.entity);
      grid.appScope.vm.serviceGrid.data.splice(index, 1);
      /*
       * $http.delete('http://localhost:8080/service/delete/'+row.entity.id).success(function(response) { $uibModalInstance.close(row.entity); }).error(function(response) { alert('Cannot delete row (error in console)'); console.dir(response); });
       */
    }
    $uibModalInstance.close(row.entity);
  }
  function saveLoyaltyReward() {
    if (row.entity.id == '0') {
      /*
       * $http.post('http://localhost:8080/service/save', row.entity).success(function(response) { $uibModalInstance.close(row.entity); }).error(function(response) { alert('Cannot edit row (error in console)'); console.dir(response); });
       */
      row.entity = angular.extend(row.entity, vm.entity);
      //real ID come back from response after the save in DB
      row.entity.id = Math.floor(100 + Math.random() * 1000);
      grid.data.push(row.entity);
    } else {
      row.entity = angular.extend(row.entity, vm.entity);
      /*
       * $http.post('http://localhost:8080/service/save', row.entity).success(function(response) { $uibModalInstance.close(row.entity); }).error(function(response) { alert('Cannot edit row (error in console)'); console.dir(response); });
       */
    }
    $uibModalInstance.close(row.entity);
  }
  function removeLoyaltyReward() {
    console.dir(row)
    if (row.entity.id != '0') {
      row.entity = angular.extend(row.entity, vm.entity);
      let index = grid.appScope.vm.serviceGrid.data.indexOf(row.entity);
      grid.appScope.vm.serviceGrid.data.splice(index, 1);
      /*
       * $http.delete('http://localhost:8080/service/delete/'+row.entity.id).success(function(response) { $uibModalInstance.close(row.entity); }).error(function(response) { alert('Cannot delete row (error in console)'); console.dir(response); });
       */
    }
    $uibModalInstance.close(row.entity);
  }
  function saveLocation() {
    if (row.entity.id == '0') {
      /*
       * $http.post('http://localhost:8080/service/save', row.entity).success(function(response) { $uibModalInstance.close(row.entity); }).error(function(response) { alert('Cannot edit row (error in console)'); console.dir(response); });
       */
      row.entity = angular.extend(row.entity, vm.entity);
      //real ID come back from response after the save in DB
      row.entity.id = Math.floor(100 + Math.random() * 1000);
      grid.data.push(row.entity);
    } else {
      row.entity = angular.extend(row.entity, vm.entity);
      /*
       * $http.post('http://localhost:8080/service/save', row.entity).success(function(response) { $uibModalInstance.close(row.entity); }).error(function(response) { alert('Cannot edit row (error in console)'); console.dir(response); });
       */
    }
    $uibModalInstance.close(row.entity);
  }
  function removeLocation() {
    console.dir(row)
    if (row.entity.id != '0') {
      row.entity = angular.extend(row.entity, vm.entity);
      let index = grid.appScope.vm.serviceGrid.data.indexOf(row.entity);
      grid.appScope.vm.serviceGrid.data.splice(index, 1);
      /*
       * $http.delete('http://localhost:8080/service/delete/'+row.entity.id).success(function(response) { $uibModalInstance.close(row.entity); }).error(function(response) { alert('Cannot delete row (error in console)'); console.dir(response); });
       */
    }
    $uibModalInstance.close(row.entity);
  }
  function saveBeacon() {
    if (row.entity.id == '0') {
      /*
       * $http.post('http://localhost:8080/service/save', row.entity).success(function(response) { $uibModalInstance.close(row.entity); }).error(function(response) { alert('Cannot edit row (error in console)'); console.dir(response); });
       */
      row.entity = angular.extend(row.entity, vm.entity);
      //real ID come back from response after the save in DB
      row.entity.id = Math.floor(100 + Math.random() * 1000);
      grid.data.push(row.entity);
    } else {
      row.entity = angular.extend(row.entity, vm.entity);
      /*
       * $http.post('http://localhost:8080/service/save', row.entity).success(function(response) { $uibModalInstance.close(row.entity); }).error(function(response) { alert('Cannot edit row (error in console)'); console.dir(response); });
       */
    }
    $uibModalInstance.close(row.entity);
  }
  function removeBeacon() {
    console.dir(row)
    if (row.entity.id != '0') {
      row.entity = angular.extend(row.entity, vm.entity);
      let index = grid.appScope.vm.serviceGrid.data.indexOf(row.entity);
      grid.appScope.vm.serviceGrid.data.splice(index, 1);
      /*
       * $http.delete('http://localhost:8080/service/delete/'+row.entity.id).success(function(response) { $uibModalInstance.close(row.entity); }).error(function(response) { alert('Cannot delete row (error in console)'); console.dir(response); });
       */
    }
    $uibModalInstance.close(row.entity);
  }
  function saveZone() {
    if (row.entity.id == '0') {
      /*
       * $http.post('http://localhost:8080/service/save', row.entity).success(function(response) { $uibModalInstance.close(row.entity); }).error(function(response) { alert('Cannot edit row (error in console)'); console.dir(response); });
       */
      row.entity = angular.extend(row.entity, vm.entity);
      //real ID come back from response after the save in DB
      row.entity.id = Math.floor(100 + Math.random() * 1000);
      grid.data.push(row.entity);
    } else {
      row.entity = angular.extend(row.entity, vm.entity);
      /*
       * $http.post('http://localhost:8080/service/save', row.entity).success(function(response) { $uibModalInstance.close(row.entity); }).error(function(response) { alert('Cannot edit row (error in console)'); console.dir(response); });
       */
    }
    $uibModalInstance.close(row.entity);
  }
  function removeZone() {
    console.dir(row)
    if (row.entity.id != '0') {
      row.entity = angular.extend(row.entity, vm.entity);
      let index = grid.appScope.vm.serviceGrid.data.indexOf(row.entity);
      grid.appScope.vm.serviceGrid.data.splice(index, 1);
      /*
       * $http.delete('http://localhost:8080/service/delete/'+row.entity.id).success(function(response) { $uibModalInstance.close(row.entity); }).error(function(response) { alert('Cannot delete row (error in console)'); console.dir(response); });
       */
    }
    $uibModalInstance.close(row.entity);
  }



  function saveContent() {
    if (row.entity.id == '0') {
      /*
       * $http.post('http://localhost:8080/service/save', row.entity).success(function(response) { $uibModalInstance.close(row.entity); }).error(function(response) { alert('Cannot edit row (error in console)'); console.dir(response); });
       */
      row.entity = angular.extend(row.entity, vm.entity);
      //real ID come back from response after the save in DB
      row.entity.id = Math.floor(100 + Math.random() * 1000);
      grid.data.push(row.entity);
    } else {
      row.entity = angular.extend(row.entity, vm.entity);
      /*
       * $http.post('http://localhost:8080/service/save', row.entity).success(function(response) { $uibModalInstance.close(row.entity); }).error(function(response) { alert('Cannot edit row (error in console)'); console.dir(response); });
       */
    }
    $uibModalInstance.close(row.entity);
  }
  function removeContent() {
    console.dir(row)
    if (row.entity.id != '0') {
      row.entity = angular.extend(row.entity, vm.entity);
      let index = grid.appScope.vm.serviceGrid.data.indexOf(row.entity);
      grid.appScope.vm.serviceGrid.data.splice(index, 1);
      /*
       * $http.delete('http://localhost:8080/service/delete/'+row.entity.id).success(function(response) { $uibModalInstance.close(row.entity); }).error(function(response) { alert('Cannot delete row (error in console)'); console.dir(response); });
       */
    }
    $uibModalInstance.close(row.entity);
  }

  return rowEditors;


  function paramString(entity) {
    let newEntity = {};

    for (var key in entity) {
      if (p.hasOwnProperty(key)) {

        if (!entity[key].isArray())
          newEntity.key = entity[key];

      }
    }

  return newEntity

  }



}
