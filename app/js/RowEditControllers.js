// myApp.service('RowEditor', RowEditor);
// RowEditor.$inject = [ '$http', '$rootScope', '$uibModal', 'DataFactory'];
// function RowEditor($http, $rootScope, $uibModal, DataFactory) {

myApp.service('RowEditor',[ '$http', '$rootScope', '$uibModal',
  function ($http, $rootScope, $uibModal) {

  let vm = this;

  vm.controllerArray = [ '$http', '$uibModalInstance', 'grid', 'row','Flash', RowEditCtrl ];

  $rootScope.row = {};

  vm.editRowShoppingCentre = editRowShoppingCentre;

  let service = {
    editRowVisit: editRowVisit,
    editRowZone: editRowZone,
    editRowUser: editRowUser,
    editRowRetailer: editRowRetailer,
    editRowBeacon: editRowBeacon,
    editRowLocation: editRowLocation,
    editRowBonusCode: editRowBonusCode,
    editRowFavourite: editRowFavourite,
    editRowLoyaltyReward: editRowLoyaltyReward,
    editRowRating: editRowRating,
    editRowShoppingCentre: editRowShoppingCentre,
    editRowContent: editRowContent,
    editRowUserPoint: editRowUserPoint,

    approveRowUser: approveRowUser,
    approveRowContent: approveRowContent,
    approveRowLoyaltyReward: approveRowLoyaltyReward,
  };



  function editRowVisit(grid, row) {
    $rootScope.addingRow = false;
    $uibModal.open({
      templateUrl : 'js/Edit-Visits-Service.html',
      controller : vm.controllerArray,
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
      controller : vm.controllerArray,
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
      controller : vm.controllerArray,
      controllerAs : 'vm',
      resolve : {
        grid  : function() { return grid; },
        row   : function() { return row;  }
      }
    });
    $rootScope.grid = grid;
    $rootScope.row = row;
  }
  function approveRowUser(grid, row) {
      $rootScope.addingRow = false;
      $uibModal.open({
        templateUrl : 'js/Approve-Users-Service.html',
        controller : vm.controllerArray,
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
      controller : vm.controllerArray,
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
      controller : vm.controllerArray,
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
      controller : vm.controllerArray,
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
      controller : vm.controllerArray,
      controllerAs : 'vm',
      resolve : {
        grid  : function() { return grid; },
        row   : function() { return row;  }
      }
    });
    $rootScope.grid = grid;
    $rootScope.row = row;
  }
  function editRowFavourite(grid, row) {
    $rootScope.addingRow = false;
    $uibModal.open({
      templateUrl : 'js/Edit-Favourites-Service.html',
      controller : vm.controllerArray,
      controllerAs : 'vm',
      resolve : {
        grid  : function() { return grid; },
        row   : function() { return row;  }
      }
    });
    $rootScope.grid = grid;
    $rootScope.row = row;
  }
  function editRowLoyaltyReward(grid, row) {
    $rootScope.addingRow = false;
    $uibModal.open({
      templateUrl : 'js/Edit-LoyaltyRewards-Service.html',
      controller : vm.controllerArray,
      controllerAs : 'vm',
      resolve : {
        grid  : function() { return grid; },
        row   : function() { return row;  }
      }
    });
    $rootScope.grid = grid;
    $rootScope.row = row;
  }
  function approveRowLoyaltyReward(grid, row) {
      $rootScope.addingRow = false;
      $uibModal.open({
        templateUrl : 'js/Approve-LoyaltyRewards-Service.html',
        controller : vm.controllerArray,
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
      controller : vm.controllerArray,
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
      controller : vm.controllerArray,
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
      controller : vm.controllerArray,
      controllerAs : 'vm',
      resolve : {
        grid  : function() { return grid; },
        row   : function() { return row;  }
      }
    });
    $rootScope.grid = grid;
    $rootScope.row = row;
  }
  function approveRowContent(grid, row) {
      $rootScope.addingRow = false;
      $uibModal.open({
        templateUrl : 'js/Approve-Contents-Service.html',
        controller : vm.controllerArray,
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

myApp.controller('RowEditCtrl',RowEditCtrl);
RowEditCtrl.$inject = [ '$http', '$uibModalInstance','grid','row','Flash'];
  function RowEditCtrl($http ,  $uibModalInstance, grid, row, Flash) {

  let vm = this;
  vm.entity = angular.copy(row.entity);
  vm.headers = {headers:{
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Retailer-Type, X-Requested-With',
      'X-Random-Shit':'123123123'
    }};
  let id = null;
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

    approveUser : approveUser,
    approveContent : approveContent,
    approveLoyaltyReward : approveLoyaltyReward,

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
  function saveShoppingCentre() {
      if (vm.entity.shoppingCentreid === 0 || vm.entity.shoppingCentreid === "") { // implies a new entity

        row.entity = angular.extend(vm.entity, row.entity);

        $http.post(urlBase + '/ShoppingCentre/create/' + row.entity.shoppingCentreid,vm.entity )
          .then(function(response) {
              $uibModalInstance.close(row.entity);
            },
            function(response) {
              alert('Cannot add ShoppingCentre (error in console)');
              console.dir(response);
            });

        row.entity = angular.extend(row.entity, vm.entity);
        //real ID come back from response after the save in DB
        row.entity.id = Math.floor(100 + Math.random() * 1000);
        grid.data.push(row.entity);

      } else { // changed entity

        row.entity = angular.extend(vm.entity, row.entity);

        $http.put(urlBase + '/ShoppingCentre/update/' + row.entity.shoppingCentreid,row.entity , vm.headers)

          .then(function(response) {
              Flash.create('success', "Shopping Centre Updated", 2000);
              $uibModalInstance.close(row.entity);
            },
            function(response) {
              Flash.create('danger', "Shopping Centre could Not be Updated : " + response.message, 2000);
              alert('Cannot update ShoppingCentre (error in console)');
              console.dir(response);
            });
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
    if (vm.entity.userid === 0 || vm.entity.userid === "") { // implies a new entity

      row.entity = angular.extend(row.entity, vm.entity);
      // Add Shopping Centre
      let params = getEntity(row.entity);
      $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;

      $http.put(urlBase + '/User/create/' + vm.entity.userid,vm.entity )
        .then(function(response) {
          Flash.create('success', "New User Created", 2000);
          $uibModalInstance.close(row.entity);
        },
        function(response) {
          Flash.create('danger', "User ccould not be added: " + response.message, 2000);
          alert('Cannot add user (error in console)');
          console.dir(response);
        });

      row.entity = angular.extend(row.entity, vm.entity);
      //real ID come back from response after the save in DB
      row.entity.id = Math.floor(100 + Math.random() * 1000);
      grid.data.push(row.entity);

    } else { // changed entity

      row.entity = angular.extend(vm.entity, row.entity);

      $http.put(urlBase + '/User/update/' + row.entity.userid,row.entity , {headers:{
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With',
        'X-Random-Shit':'123123123'
      }
      })
        .then(function(response) {
            Flash.create('success', "User Updated", 2000);
            $uibModalInstance.close(row.entity);
            row.entity = angular.extend(row.entity, vm.entity);
            let index = grid.appScope.vm.serviceGrid.data.indexOf(row.entity);
            grid.appScope.vm.serviceGrid.data.splice(index, 1);
          },
          function(response) {
            Flash.create('danger', "User could Not be Updated : " + response.message, 2000);
            alert('Cannot update user (error in console)');
            console.dir(response);
          });
    }
    $uibModalInstance.close(row.entity);
  }
  function approveUser() {
      if (vm.entity.userid !== 0) { // implies a new entity

        row.entity = angular.extend(vm.entity, row.entity);
        // value needs to be changed back before going to rest to bute size.
        if (row.entity.approved === true)
          row.entity.approved = 1;
        else
          row.entity.approved = 0;
        $http.put(urlBase + '/User/update/' + row.entity.userid,row.entity , {headers:{
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With',
          'X-Random-Shit':'123123123'
        }
        })
          .then(function(response) {
              Flash.create('success', "User Approved", 2000);
              $uibModalInstance.close(row.entity);
              removeRow(row.entity, vm.entity)
            },
            function(response) {
              Flash.create('danger', "User could not be approved : " + response.message, 2000);
              alert('Cannot update user (error in console)');
              console.dir(response);
            });
      }
      $uibModalInstance.close(row.entity);
    }

  function removeUser() {
    console.dir(row)
    if (row.entity.id != '0') {
      row.entity = angular.extend(row.entity, vm.entity);
      let index = grid.appScope.vm.serviceGrid.data.indexOf(row.entity);
      grid.appScope.vm.serviceGrid.data.splice(index, 1);

      $http.delete(urlBase + "/User/delete/" + row.entity.userid)
        .then(function(response) {
          Flash.create('success', "User Deleted", 2000);
          $uibModalInstance.close(row.entity);
      }, function(response) {
          Flash.create('danger', "User could Not be Deleted : " + response.message, 2000);
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
    if (vm.entity.retailerid === 0 || vm.entity.retailerid === "") { // implies a new entity

      row.entity = angular.extend(vm.entity, row.entity);

      $http.post(urlBase + '/Retailer/create/' , row.entity , vm.headers )
        .then(function(response) {
            Flash.create('success', "New Retailer Added", 2000);
            $uibModalInstance.close(row.entity);
            row.entity = angular.extend(row.entity, vm.entity);
          },
          function(response) {
            Flash.create('danger', "New Retailer could Not be Added : " + response.message, 2000);
            alert('Cannot update retailer (error in console)');
            console.dir(response);
          });

      row.entity = angular.extend(row.entity, vm.entity);
      //real ID come back from response after the save in DB
      row.entity.id = Math.floor(100 + Math.random() * 1000);
      grid.data.push(row.entity);

    } else { // changed entity

      row.entity = angular.extend(vm.entity, row.entity);

      $http.put(urlBase + '/Retailer/update/' , row.entity , vm.headers )
        .then(function(response) {
            Flash.create('success', "Retailer Updated : " + response.message, 2000);
            $uibModalInstance.close(row.entity);
          },
          function(response) {
            Flash.create('danger', "Retailer could Not be Updated : " + response.message, 2000);
            alert('Cannot update retailer (error in console)');
            console.dir(response);
          });
    }
    $uibModalInstance.close(row.entity);
  }
  function removeRetailer() {
    console.dir(row)
    if (row.entity.id != '0') {
      row.entity = angular.extend(row.entity, vm.entity);
      let index = grid.appScope.vm.serviceGrid.data.indexOf(row.entity);
      grid.appScope.vm.serviceGrid.data.splice(index, 1);

      $http.delete(urlBase + '/Retailer/delete/'+ row.entity.retailerid , vm.headers)
        .then(function(response) {
            Flash.create('success', "Retailer Deleted: " + response.message, 2000);
            $uibModalInstance.close(row.entity);
        },
        function(response) {
          Flash.create('danger', "Retailer could NOT be deleted : " + response.message, 2000);
          alert('Cannot delete retailer (error in console)');
          console.dir(response);
        });

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
      if (vm.entity.loyaltyRewardid === 0) { // implies a new entity

        row.entity = angular.extend(row.entity, vm.entity);
        // Add Shopping Centre
        let params = getEntity(row.entity);
        $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;

        $http.put(urlBase + '/loyaltyReward/create/' + vm.entity.loyaltyRewardid,vm.entity )
          .then(function(response) {
            Flash.create('success', "New Loyalty Reward Added " , 2000);
            $uibModalInstance.close(row.entity);
          },
          function(response) {
            Flash.create('danger', "Loyalty Reward could Not be Added : " + response.message, 2000);
            alert('Cannot add loyaltyReward (error in console)');
            console.dir(response);
          });

        row.entity = angular.extend(row.entity, vm.entity);
        //real ID come back from response after the save in DB
        row.entity.id = Math.floor(100 + Math.random() * 1000);
        grid.data.push(row.entity);

      } else { // changed entity

        row.entity = angular.extend(vm.entity, row.entity);

        $http.put(urlBase + '/LoyaltyReward/update/' + row.entity.loyaltyRewardid,row.entity , {headers:{
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With',
            'X-Random-Shit':'123123123'
          }
        })
          .then(function(response) {
              Flash.create('success', "Loyalty Reward Updated", 2000);
              $uibModalInstance.close(row.entity);
            },
            function(response) {
              Flash.create('danger', "Loyalty Reward could Not be Updated : " + response.message, 2000);
              alert('Cannot update loyaltyReward (error in console)');
              console.dir(response);
            });
      }
      $uibModalInstance.close(row.entity);
    }
  function approveLoyaltyReward() {
      if (vm.entity.loyaltyRewardid !== 0) { // implies a new entity
        row.entity = angular.extend(vm.entity, row.entity);

        // value needs to be changed back before going to rest to bute size.
        if (row.entity.approved === true)
          row.entity.approved = 1;
        else
          row.entity.approved = 0;


        $http.put(urlBase + '/LoyaltyReward/update/' + row.entity.loyaltyRewardid,row.entity , {headers:{
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With',
          'X-Random-Shit':'123123123'
        }
        })

          .then(function(response) {
              Flash.create('success', "Loyalty Reward Updated ", 2000);

              $uibModalInstance.close(row.entity);
              // delete row entry approved
              removeRow(row.entity, vm.entity)
            },
            function(response) {
              Flash.create('danger', "Loyalty Reward could Not be Updated : " + response.message, 2000);
              alert('Cannot update loyaltyReward (error in console)');
              console.dir(response);
            });
      }
      $uibModalInstance.close(row.entity);
    }
  function removeLoyaltyReward() {
    console.dir(row)
    if (row.entity.id != '0') {
      row.entity = angular.extend(row.entity, vm.entity);
      let index = grid.appScope.vm.serviceGrid.data.indexOf(row.entity);
      grid.appScope.vm.serviceGrid.data.splice(index, 1);
      $http.delete(urlBase + '/LoyaltyReward/delete/' + row.entity.loyaltyRewardid , vm.headers)
        .then(function(response) {
            Flash.create('success', "Loyalty Reward Deleted ", 2000);

            $uibModalInstance.close(row.entity);
            // delete row entry approved
            removeRow(row.entity, vm.entity)
          },
          function(response) {
            Flash.create('danger', "Loyalty Reward could Not be Deleted : " + response.message, 2000);
            alert('Cannot delete loyaltyReward (error in console)');
            console.dir(response);
          });


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
    if (vm.entity.contentid === 0) { // implies a new entity

      row.entity = angular.extend(row.entity, vm.entity);
      // Add Shopping Centre
      let params = getEntity(row.entity);
      $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;

      $http.put(urlBase + '/Content/create/' + vm.entity.contentid,vm.entity )
        .then(function(response) {
            Flash.create('success', "New Content Added", 2000);
          $uibModalInstance.close(row.entity);
        },
          function(response) {
            Flash.create('danger', "New Content could not be added : " + response.message, 2000);
            alert('Cannot add content (error in console)');
            console.dir(response);
        });

      row.entity = angular.extend(row.entity, vm.entity);
      //real ID come back from response after the save in DB
      row.entity.id = Math.floor(100 + Math.random() * 1000);
      grid.data.push(row.entity);

    } else { // changed entity

      row.entity = angular.extend(vm.entity, row.entity);

      $http.put(urlBase + '/Content/update/' + row.entity.contentid,row.entity , {headers:{
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With',
        'X-Random-Shit':'123123123'
      }
      })
        .then(function(response) {
            Flash.create('success', "Content Updated ", 2000);
            $uibModalInstance.close(row.entity);
          },
          function(response) {
            Flash.create('danger', "Content could NOT be Updated : " + response.message, 2000);
            alert('Cannot update content (error in console)');
            console.dir(response);
          });
    }
    $uibModalInstance.close(row.entity);
  }
  function approveContent() {
      if (vm.entity.contentid !== 0) { // implies a new entity
        row.entity = angular.extend(vm.entity, row.entity);
        // value needs to be changed back before going to rest to bute size.
        if (row.entity.approved === true)
          row.entity.approved = 1;
        else
          row.entity.approved = 0;
        $http.put(urlBase + '/Content/update/' + row.entity.contentid,row.entity ,vm.headers )
          .then(function(response) {
              Flash.create('success', "Content Approved ", 2000);
              $uibModalInstance.close(row.entity);
              removeRow(row.entity, vm.entity);
            },
            function(response) {
              Flash.create('danger', "Content could NOT be approved : " + response.message, 2000);
              alert('Cannot update content (error in console)');
              console.dir(response);
            });
      }
      $uibModalInstance.close(row.entity);
    }
  function removeContent() {
    console.dir(row)
    if (row.entity.id != '0') {
      row.entity = angular.extend(row.entity, vm.entity);
      let index = grid.appScope.vm.serviceGrid.data.indexOf(row.entity);
      grid.appScope.vm.serviceGrid.data.splice(index, 1);

      $http.delete(urlBase + '/Content/delete/' + row.entity.contentid , vm.headers)
        .then(function(response) {
            Flash.create('success', "Content Deleted ", 2000);
            $uibModalInstance.close(row.entity);
            // delete row entry approved
            removeRow(row.entity, vm.entity)
          },
          function(response) {
            Flash.create('danger', "Content could Not be Deleted : " + response.message, 2000);
            alert('Cannot delete Content (error in console)');
            console.dir(response);
          });
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
  function removeRow(rowEntity, vmEntity) {
    row.entity = angular.extend(rowEntity, vmEntity);
    let index = grid.appScope.vm.serviceGrid.data.indexOf(row.entity);
    grid.appScope.vm.serviceGrid.data.splice(index, 1);
  }
}
