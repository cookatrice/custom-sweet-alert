function appCtrl($scope, SweetAlert) {

    function initValue() {
        $scope.appInfo = {
            title: 'Customize Sweet Alert',
            version : '0.5.4'
        };
    }

    $scope.appInit = function () {
        console.log('log...called $scope.appInit()');
        initValue();
    };

    $scope.customAlert1 = function() {
        swal('Hello sweet alert!');
    };
    $scope.customAlert11 = function() {
        swal("Good job!", "You clicked the button!", "success");
    };
    $scope.customAlert12 = function() {
        swal({
            title: "Are you sure?",
            text: "You will not be able to recover this imaginary file! You will not be able to recover this imaginary file!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!",
            customWidth : 900,
            closeOnConfirm: false
        }, function () {
            swal("Deleted!", "Your imaginary file has been deleted.", "success");
        });
    };
    $scope.customAlert13 = function() {
        swal({
            title: "Are you sure?",
            text: "You will not be able to recover this imaginary file!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel plx!",
            closeOnConfirm: false,
            closeOnCancel: false
        }, function (isConfirm) {
            if (isConfirm) {
                swal("Deleted!", "Your imaginary file has been deleted.", "success");
            } else {
                swal("Cancelled", "Your imaginary file is safe :)", "error");
            }
        });
    };
    $scope.customAlert131 = function() {
        swal({
            title: "Sweet!",
            text: "Here's a custom image.",
            imageUrl: "resources/sweetalert/images/thumbs-up.jpg"
        });
    };
    $scope.customAlert132 = function() {
        swal({
            title: "Sweet!",
            text: "Here's a custom image.",
            imageUrl: "resources/sweetalert/images/thumbs-up.jpg",
            imageSize : "600x600"
        });
    };
    $scope.customAlert133 = function() {
        swal({
            title: "Sweet!",
            text: "Here's a custom image.",
            imageUrl: "resources/sweetalert/images/thumbs-up.jpg",
            imageSize : "600x600",
            customWidth : 700
        });
    };
    $scope.customAlert14 = function() {
        swal({
            title: "애국가",
            text: "동해물과 백두산이 마르고 닳도록, 하느님이 보우하사 우리 나라만세.",
            showCancelButton: false,
            confirmButtonText: "확인",
            allowEscapeKey : false,
            template : 'resources/sweetalert/custom-template/cookatrice.html',
            customWidth : 900,
            customHeight : 900
        }, function (isConfirm) {
            if (isConfirm) {
                console.log('yes yes yes');
            } else {
                console.log('no no no');
            }
        });
    };
    $scope.customAlert141 = function() {
        swal({
            title: "voyager style popup",
            text: "SweetAlert also comes with some simple methods that you can call.",
            showCancelButton: false,
            confirmButtonText: "확인",
            template : 'resources/sweetalert/custom-template/voyager-popup.html',
            customWidth : 488,
            customHeight : 361
        }, function (isConfirm) {
            if (isConfirm) {
                console.log('yes yes yes');
            } else {
                console.log('no no no');
            }
        });
    };
    $scope.customAlert142 = function() {
        swal({
            title: "애국가",
            text: "동해물과 백두산이 마르고 닳도록, 하느님이 보우하사 우리 나라만세.",
            showCancelButton: false,
            confirmButtonText: "확인",
            template : 'resources/sweetalert/custom-template/cookatrice.html',
            customHeight : 900
        }, function (isConfirm) {
            if (isConfirm) {
                console.log('yes yes yes');
            } else {
                console.log('no no no');
            }
        });
    };
    $scope.customAlert143 = function() {
        swal({
            title: "애국가",
            text: "동해물과 백두산이 마르고 닳도록, 하느님이 보우하사 우리 나라만세.",
            showCancelButton: false,
            confirmButtonText: "확인",
            template : 'resources/sweetalert/custom-template/cookatrice.html',
            customWidth : 900
        }, function (isConfirm) {
            if (isConfirm) {
                console.log('yes yes yes');
            } else {
                console.log('no no no');
            }
        });
    };


    $scope.customAlert2 = function() {
        SweetAlert.swal("Here's a message");
    };
    $scope.customAlert21 = function() {
        SweetAlert.swal("Good job!", "You clicked the button!", "success");
    };
}
