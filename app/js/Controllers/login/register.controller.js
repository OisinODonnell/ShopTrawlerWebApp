myApp.controller('RegisterController', ['$location', '$rootScope', 'DataFactory','$scope',
  function ($location, $rootScope, DataFactory,$scope) {
        let vm = this;

        vm.register = register;

        function register() {
            vm.dataLoading = true;
              DataFactory.register(vm.name, vm.email, vm.password)

                .then(function (response) {
                    if (response.data.success === "1") {
                      // let id = Flash.create('success', response.data.message, 0, {class: 'custom-class', id: 'custom-id'}, true);
                        // FlashService.Success('Registration successful', true);
                        $location.path('/login');
                    } else {
                      // let id = Flash.create('danger', response.data.message, 0, {class: 'custom-class', id: 'custom-id'}, true);
                        // FlashService.Error(response.message);
                        vm.dataLoading = false;
                    }
                });
        }


}]);
