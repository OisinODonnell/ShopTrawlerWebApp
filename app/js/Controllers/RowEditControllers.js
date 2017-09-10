// myApp.service('RowEditor', RowEditor);
// RowEditor.$inject = [ '$http', '$rootScope', '$uibModal', 'DataFactory'];
// function RowEditor($http, $rootScope, $uibModal, DataFactory) {

myApp.service('RowEditor',[ '$http', '$rootScope', '$uibModal',
  function ($http, $rootScope, $uibModal) {

  let vm = this;
  let urlBase = "http://localhost:8080"
  vm.controllerArray = [ '$http', '$uibModalInstance', 'grid', 'row','Flash', RowEditCtrl ];

  $rootScope.row = {};

  vm.editRowShoppingCentre = editRowShoppingCentre;

  let service = {
    editRowBeacon       : editRowBeacon,
    editRowBonusCode    : editRowBonusCode,
    approveRowContent   : approveRowContent,
    editRowContent      : editRowContent,
    editRowFavourite    : editRowFavourite,
    editRowGenerateBonusCode : editRowGenerateBonusCode,
    editRowLocation     : editRowLocation,
    editRowLoyaltyReward: editRowLoyaltyReward,
    approveRowLoyaltyReward : approveRowLoyaltyReward,
    editRowRating       : editRowRating,
    editRowRetailer     : editRowRetailer,
    editRowShoppingCentre: editRowShoppingCentre,
    editRowUser         : editRowUser,
    approveRowUser      : approveRowUser,
    editRowUserPoint    : editRowUserPoint,
    editRowVisit        : editRowVisit,
    editRowZone         : editRowZone,
    upload              : upload,

    addRowContent          : addRowContent,
    deleteRowContent       : deleteRowContent,
    saveRowContent         : saveRowContent,
    addRowLoyaltyReward    : addRowLoyaltyReward,
    deleteRowLoyaltyReward : deleteRowLoyaltyReward,
    saveRowLoyaltyReward   : saveRowLoyaltyReward,
  };

  function saveRowContent(grid, row) {
    console.log("saving Content");
    $rootScope.addingRow = false;
    $uibModal.open({
      templateUrl : 'Views/Edit-Contents-Service.html',
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
  function deleteRowContent(grid, row) {
    console.log("deleting Content");
    $rootScope.addingRow = false;
    $uibModal.open({
      templateUrl : 'Views/Edit-Contents-Service.html',
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
  function addRowContent(grid, row) {
    console.log("adding Content");
    $rootScope.addingRow = false;
    $uibModal.open({
      templateUrl : 'Views/Edit-Contents-Service.html',
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

  function deleteRowLoyaltyReward(grid, row) {
    console.log("deleting LR");
    $rootScope.addingRow = false;
    $uibModal.open({
      templateUrl : 'Views/Edit-LoyaltyRewards-Service.html',
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
  function addRowLoyaltyReward(grid,row) {
    console.log("adding LR");
    $rootScope.addingRow = false;
    $uibModal.open({
      templateUrl : 'Views/Edit-LoyaltyRewards-Service.html',
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
  function saveRowLoyaltyReward(grid,row) {
    console.log("saving LR");
    $rootScope.addingRow = false;
    $uibModal.open({
      templateUrl : 'Views/Edit-LoyaltyRewards-Service.html',
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

  function editRowVisit(grid, row) {
    $rootScope.addingRow = false;
    $uibModal.open({
      templateUrl : 'Views/Edit-Visits-Service.html',
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
      templateUrl : 'Views/Edit-Zones-Service.html',
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
      templateUrl : 'Views/Edit-Users-Service.html',
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
        templateUrl : 'Views/Approve-Users-Service.html',
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

    // $http.get(urlBase + '/Users/NotManagers')
    //   .then(function(resp2){
    //     let users = resp2.data;
    //     // now update the grid before we go back.
    //     grid.rows.forEach(function(user,key){
    //       user.entity.managers = users;
    //       grid.rows[key] = user;
    //     });
    //
    //   });


    $rootScope.addingRow = false;
    $uibModal.open({
      templateUrl : 'Views/Edit-Retailers-Service.html',
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
      templateUrl : 'Views/Edit-Beacons-Service.html',
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
      templateUrl : 'Views/Edit-Locations-Service.html',
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
      templateUrl : 'Views/Edit-BonusCodes-Service.html',
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
  function editRowGenerateBonusCode(grid, row) {
      $rootScope.addingRow = false;
      $uibModal.open({
        templateUrl : 'Views/Edit-GenerateBonusCodes-Service.html',
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
      templateUrl : 'Views/Edit-Favourites-Service.html',
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
    $uibModal.open({
      templateUrl : 'Views/Edit-LoyaltyRewards-Service.html',
      controller : vm.controllerArray,
      controllerAs : 'vm',
      resolve : {
        grid  : function() { return grid; },
        row   : function() { return row;  },
      }
    });
    $rootScope.grid = grid;
    $rootScope.row = row;
  }
  function approveRowLoyaltyReward(grid, row) {
      $rootScope.addingRow = false;
      $uibModal.open({
        templateUrl : 'Views/Approve-LoyaltyRewards-Service.html',
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
      templateUrl : 'Views/Edit-Ratings-Service.html',
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
      templateUrl : 'Views/Edit-ShoppingCentres-Service.html',
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
    $uibModal.open({
      templateUrl : 'Views/Edit-Contents-Service.html',
      controller : vm.controllerArray,
      controllerAs : 'vm',
      resolve : {
        grid  : function() { return grid; },
        row   : function() { return row;  },
        // scope  : function() { return $scope; }
      }
    });
    $rootScope.grid = grid;
    $rootScope.row = row;
  }
  function approveRowContent(grid, row) {
      $rootScope.addingRow = false;
      $uibModal.open({
        templateUrl : 'Views/Approve-Contents-Service.html',
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
      templateUrl : 'Views/Edit-UserPoints-Service.html',
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

  function upload(a,b,c,d) {
    console.log(a,b,c,d);
  }


  return service;

}]);

myApp.controller('RowEditCtrl',RowEditCtrl);
RowEditCtrl.$inject = ['$http', '$uibModalInstance','grid','row','Flash'];
  function RowEditCtrl($http , $uibModalInstance, grid, row, Flash) {

  let vm = this;

  vm.uploadProgress = 0;
  vm.file = {};
  vm.entity = angular.copy(row.entity);
  vm.headers = {headers:{
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Retailer-Type, X-Requested-With',
      'X-Random-Shit':'123123123'
    }};

  let urlBase = "http://localhost:8080"

  let rowEditors = {
    removeBeacon : removeBeacon,
    saveBeacon   : saveBeacon,

    removeBonusCode : removeBonusCode,
    saveBonusCode   : saveBonusCode,

    approveContent : approveContent,
    removeContent  : removeContent,
    saveContent    : saveContent,

    removeFavourite : removeFavourite,
    saveFavourite   : saveFavourite,

    removeLocation : removeLocation,
    saveLocation   : saveLocation,

    approveLoyaltyReward : approveLoyaltyReward,
    removeLoyaltyReward  : removeLoyaltyReward,
    saveLoyaltyReward    : saveLoyaltyReward,

    removeRating : removeRating,
    saveRating   : saveRating,

    removeRetailer : removeRetailer,
    saveRetailer   : saveRetailer,

    removeShoppingCentre : removeShoppingCentre,
    saveShoppingCentre   : saveShoppingCentre,

    approveUser : approveUser,
    removeUser  : removeUser,
    saveUser    : saveUser,

    removeUserPoint : removeUserPoint,
    saveUserPoint   : saveUserPoint,

    saveVisit   : saveVisit,
    removeVisit : removeVisit,

    removeZone : removeZone,
    saveZone   : saveZone,

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
              Flash.create('danger', "Shopping Centre could Not be Updated : " + response.message, 4000);
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
          Flash.create('danger', "User ccould not be added: " + response.message, 4000);
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
            // grid.appScope.vm.serviceGrid.data.splice(index, 1);
          },
          function(response) {
            Flash.create('danger', "User could Not be Updated : " + response.message, 4000);
            alert('Cannot update user (error in console)');
            console.dir(response);
          });
    }
    $uibModalInstance.close(row.entity);
  }
  function approveUser(row) {

      if (row.entity.userid !== 0) { // implies a new entity

        row.entity = angular.extend(vm.entity,row.entity);
        // value needs to be changed back before going to rest to bute size.
        if (row.entity.approved )
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
              $uibModalInstance.close(row.entity);
              if ( row.entity.approved ) {
                Flash.create('success', "User Approved ", 2000);
                removeRow(row.entity, vm.entity);
              } else {
                Flash.create('warning', "User Updated but NOT approved ", 4000);
              }
            },
            function(response) {
              Flash.create('danger', "User could not be approved : " + response.message, 4000);
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
          Flash.create('danger', "User could Not be Deleted : " + response.message, 4000);
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

      row.entity = angular.extend(row.entity, vm.entity);

      $http.post(urlBase + '/Retailer/create/' , row.entity , vm.headers )
        .then(function(response) {
            Flash.create('success', "New Retailer Added", 2000);
            $uibModalInstance.close(row.entity);
            row.entity = angular.extend(row.entity, vm.entity);
          },
          function(response) {
            Flash.create('danger', "New Retailer could Not be Added : " + response.message, 4000);
            alert('Cannot update retailer (error in console)');
            console.dir(response);
          });

      row.entity = angular.extend(row.entity, vm.entity);
      //real ID come back from response after the save in DB
      row.entity.id = Math.floor(100 + Math.random() * 1000);
      grid.data.push(row.entity);

    } else { // changed entity

      row.entity = angular.extend(vm.entity, row.entity);

      // select / ngoptions returns a user opbject,
      if (angular.isObject(row.entity.managerid)) {
        row.entity.managerid = row.entity.managerid.userid;
      }


      $http.put(urlBase + '/Retailer/update/' , row.entity , vm.headers )
        .then(function(response) {
            let retailers = response.data;
            Flash.create('success', "Retailer Updated : " + response.message, 4000);
            $uibModalInstance.close(row.entity);
            // $http.get(urlBase + '/Users/NotManagers')
            //   .then(function(resp2){
            //     let users = resp2.data;
            //     // now update the grid before we go back.
            //     grid.rows.forEach(function(row,key){
            //       row.entity.managers = users;
            //       grid.rows[key] = row;
            //     });
            //     grid.refresh();
            //
            //   })


          },
          function(response) {
            Flash.create('danger', "Retailer could Not be Updated : " + response.message, 4000);
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
            Flash.create('success', "Retailer Deleted: " + response.message, 4000);
            $uibModalInstance.close(row.entity);
        },
        function(response) {
          Flash.create('danger', "Retailer could NOT be deleted : " + response.message, 4000);
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
        row.entity = setDates(row.entity);
        // Add Shopping Centre
        let params = getEntity(row.entity);
        $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;

        $http.put(urlBase + '/loyaltyReward/create/' + vm.entity.loyaltyRewardid,vm.entity )
          .then(function(response) {
            Flash.create('success', "New Loyalty Reward Added " , 2000);
            $uibModalInstance.close(row.entity);
          },
          function(response) {
            Flash.create('danger', "Loyalty Reward could Not be Added : " + response.message, 4000);
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
              Flash.create('danger', "Loyalty Reward could Not be Updated : " + response.message, 4000);
              alert('Cannot update loyaltyReward (error in console)');
              console.dir(response);
            });
      }
      $uibModalInstance.close(row.entity);
    }

  function setDates(entity) {

      entity.startDate = entity.sDate;
      entity.endDate = entity.eDate;
      return entity;

    }

  function approveLoyaltyReward(row) {
      row.entity = setDates(row.entity);
      if (row.entity.loyaltyRewardid !== 0) { // implies a new entity
        row.entity = angular.extend(vm.entity, row.entity);


        // check if the start date is greater than the end date
        // if so show message and leave user in edit row.
        if (row.entity.sDate >= row.entity.eDate)
          Flash.create('danger', "Start Date cannot be greater than end Date, content Not saved", 4000);
        else {

          // value needs to be changed back before going to rest to bute size.
          if (row.entity.approved === true)
            row.entity.approved = 1;
          else
            row.entity.approved = 0;

          $http.put(urlBase + '/LoyaltyReward/update/' + row.entity.loyaltyRewardid, row.entity, {
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
              'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With',
              'X-Random-Shit': '123123123'
            }
          })
            .then(function (response) {
                $uibModalInstance.close(row.entity);
                // delete row entry if approved
                if (row.entity.approved === 1) {
                  Flash.create('success', "User Approved ", 2000);
                  removeRow(row.entity, vm.entity);
                } else {
                  Flash.create('warning', "Loyalty Reward Updated but NOT approved ", 4000);
                }
              },
              function (response) {
                Flash.create('danger', "Loyalty Reward could Not be Updated : " + response.message, 4000);
                alert('Cannot update loyaltyReward (error in console)');
                console.dir(response);
              });
        }
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
            Flash.create('danger', "Loyalty Reward could Not be Deleted : " + response.message, 4000);
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
    row.entity = setDates(row.entity);
    if (vm.entity.contentid === 0) { // implies a new entity

      row.entity = angular.extend(row.entity, vm.entity);

      // check if the start date is greater than the end date
      // if so show message and leave user in edit row.
      if (row.entity.sDate >= row.entity.eDate)
        Flash.create('danger', "Start Date cannot be greater than end Date, content Not saved", 4000);
      else {

        $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;

        $http.put(urlBase + '/Content/create/' + vm.entity.contentid, vm.entity)
          .then(function (response) {
              Flash.create('success', "New Content Added", 2000);
              $uibModalInstance.close(row.entity);
            },
            function (response) {
              Flash.create('danger', "New Content could not be added : " + response.message, 4000);
              alert('Cannot add content (error in console)');
              console.dir(response);
            });

        row.entity = angular.extend(row.entity, vm.entity);
        //real ID come back from response after the save in DB
        row.entity.id = Math.floor(100 + Math.random() * 1000);
        grid.data.push(row.entity);
      }

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
            Flash.create('danger', "Content could NOT be Updated : " + response.message, 4000);
            alert('Cannot update content (error in console)');
            console.dir(response);
          });
    }
    $uibModalInstance.close(row.entity);
  }
  function approveContent() {
    row.entity = setDates(row.entity);
      if (vm.entity.contentid !== 0) { // implies a new entity
        row.entity = angular.extend(vm.entity, row.entity);
        // value needs to be changed back before going to rest to bute size.


        // check if the start date is greater than the end date
        // if so show message and leave user in edit row.
        if (row.entity.sDate >= row.entity.eDate)
          Flash.create('danger', "Start Date cannot be greater than end Date, content Not saved", 4000);
        else {

          row.entity.startDate = row.entity.sDate.getTime();
          row.entity.endDate = row.entity.eDate.getTime()

          // now check if the content has bene approved.
          if (row.entity.approved === true)
            row.entity.approved = 1;
          else
            row.entity.approved = 0;
          // save content
          $http.put(urlBase + '/Content/update/' + row.entity.contentid, row.entity, vm.headers)
            .then(function (response) {
                $uibModalInstance.close(row.entity);
                if (row.entity.approved === 1) {
                  Flash.create('success', "Content Approved ", 2000);
                  removeRow(row.entity, vm.entity);
                } else {
                  Flash.create('warning', "Content Updated but NOT approved ", 4000);
                }
              },
              function (response) {
                Flash.create('danger', "Content could NOT be approved : " + response.message, 4000);
                alert('Cannot update content (error in console)');
                console.dir(response);
              });
        }
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
            Flash.create('danger', "Content could Not be Deleted : " + response.message, 4000);
            alert('Cannot delete Content (error in console)');
            console.dir(response);
          });
    }
    $uibModalInstance.close(row.entity);
  }

  function removeRow(rowEntity, vmEntity) {
      row.entity = angular.extend(rowEntity, vmEntity);
      let index = grid.appScope.vm.serviceGrid.data.indexOf(row.entity);
      grid.appScope.vm.serviceGrid.data.splice(index, 1);
    }



  return rowEditors;

  }
