'use strict';  
var appConfig = window.appConfig || {};

appConfig.menu_speed = 200;
appConfig.smartSkin = "smart-style-0";
appConfig.sound_path = "sound/";
appConfig.sound_on = true; 
  

/*
* DEBUGGING MODE
* debugState = true; will spit all debuging message inside browser console.
* The colors are best displayed in chrome browser.
*/

  
appConfig.debugState = false;	
appConfig.debugStyle = 'font-weight: bold; color: #00f;';
appConfig.debugStyle_green = 'font-weight: bold; font-style:italic; color: #46C246;';
appConfig.debugStyle_red = 'font-weight: bold; color: #ed1c24;';
appConfig.debugStyle_warning = 'background-color:yellow';
appConfig.debugStyle_success = 'background-color:green; font-weight:bold; color:#fff;';
appConfig.debugStyle_error = 'background-color:#ed1c24; font-weight:bold; color:#fff;';


appConfig.voice_command = true;
appConfig.voice_command_auto = false;

/*
 *  Sets the language to the default 'en-US'. (supports over 50 languages 
 *  by google)
 * 
 *  Afrikaans         ['af-ZA']
 *  Bahasa Indonesia  ['id-ID']
 *  Bahasa Melayu     ['ms-MY']
 *  CatalГ            ['ca-ES']
 *  ДЊeЕЎtina         ['cs-CZ']
 *  Deutsch           ['de-DE']
 *  English           ['en-AU', 'Australia']
 *                    ['en-CA', 'Canada']
 *                    ['en-IN', 'India']
 *                    ['en-NZ', 'New Zealand']
 *                    ['en-ZA', 'South Africa']
 *                    ['en-GB', 'United Kingdom']
 *                    ['en-US', 'United States']
 *  EspaГ±ol          ['es-AR', 'Argentina']
 *                    ['es-BO', 'Bolivia']
 *                    ['es-CL', 'Chile']
 *                    ['es-CO', 'Colombia']
 *                    ['es-CR', 'Costa Rica']
 *                    ['es-EC', 'Ecuador']
 *                    ['es-SV', 'El Salvador']
 *                    ['es-ES', 'EspaГ±a']
 *                    ['es-US', 'Estados Unidos']
 *                    ['es-GT', 'Guatemala']
 *                    ['es-HN', 'Honduras']
 *                    ['es-MX', 'MГ©xico']
 *                    ['es-NI', 'Nicaragua']
 *                    ['es-PA', 'PanamГЎ']
 *                    ['es-PY', 'Paraguay']
 *                    ['es-PE', 'PerГє']
 *                    ['es-PR', 'Puerto Rico']
 *                    ['es-DO', 'RepГєblica Dominicana']
 *                    ['es-UY', 'Uruguay']
 *                    ['es-VE', 'Venezuela']
 *  Euskara           ['eu-ES']
 *  FranГ§ais         ['fr-FR']
 *  Galego            ['gl-ES']
 *  Hrvatski          ['hr_HR']
 *  IsiZulu           ['zu-ZA']
 *  ГЌslenska         ['is-IS']
 *  Italiano          ['it-IT', 'Italia']
 *                    ['it-CH', 'Svizzera']
 *  Magyar            ['hu-HU']
 *  Nederlands        ['nl-NL']
 *  Norsk bokmГҐl     ['nb-NO']
 *  Polski            ['pl-PL']
 *  PortuguГЄs        ['pt-BR', 'Brasil']
 *                    ['pt-PT', 'Portugal']
 *  RomГўnДѓ          ['ro-RO']
 *  SlovenДЌina       ['sk-SK']
 *  Suomi             ['fi-FI']
 *  Svenska           ['sv-SE']
 *  TГјrkГ§e          ['tr-TR']
 *  Р±СЉР»РіР°СЂСЃРєРё['bg-BG']
 *  PСѓСЃСЃРєРёР№     ['ru-RU']
 *  РЎСЂРїСЃРєРё      ['sr-RS']
 *  н•њкµ­м–ґ         ['ko-KR']
 *  дё­ж–‡            ['cmn-Hans-CN', 'ж™®йЂљиЇќ (дё­е›Ѕе¤§й™†)']
 *                    ['cmn-Hans-HK', 'ж™®йЂљиЇќ (й¦™жёЇ)']
 *                    ['cmn-Hant-TW', 'дё­ж–‡ (еЏ°зЃЈ)']
 *                    ['yue-Hant-HK', 'зІµиЄћ (й¦™жёЇ)']
 *  ж—Ґжњ¬иЄћ         ['ja-JP']
 *  Lingua latД«na    ['la']
 */
appConfig.voice_command_lang = 'en-US';
/*
 *  Use localstorage to remember on/off (best used with HTML Version)
 */ 
appConfig.voice_localStorage = false;
/*
 * Voice Commands
 * Defines all voice command variables and functions
 */ 
appConfig.apiRootUrl = 'api';

window.appConfig = appConfig;

/*
* END APP.appConfig
*/
'use strict';

$.sound_path = appConfig.sound_path;
$.sound_on = appConfig.sound_on;


$(function () {

    // moment.js default language
    moment.locale('en')

    angular.bootstrap(document, ['app']);
 
});

'use strict';

/**
 * @ngdoc overview
 * @name app [smartadminApp]
 * @description
 * # app [smartadminApp]
 *
 * Main module of the application.
 */

angular.module('app', [
    'ngSanitize',
    'ngAnimate',
    'restangular',
    'ui.router',
    'ui.bootstrap',
	'ngMask',
    // Smartadmin Angular Common Module
    'SmartAdmin',

    // App
    'app.auth',
    'app.layout',
    'app.chat',
    'app.dashboard',
    'app.smartAdmin',
	'app.adminDashboard',
//--app modules (amit)---//
	'app.studentDashboard',
	'app.teacherDashboard',
	'app.setUser',
	'app.myexams',
	'app.attemptExam',
	'app.manageClass',
	'app.editAttemptExam', 
	'app.importStudent',
	'app.importTeacher',
	'app.studentRoaster',
	'app.roasterReports',
	'app.usageReports',
//--app modules (shweta)---//	
	'app.addStudent',
	'app.tables',
	'app.allStudents',
	'app.addExam',
	'app.editExam',
	'app.allExams',
	'app.editStudent',
	'app.addTeacher',
	'app.allTeachers',
	'app.editTeacher',
	'app.addCustomClass',
	'app.allCustomClasses',
	'app.editCustomClass',
	'app.allClassStudents',
	'app.viewReports',
	'app.userguide',
	'app.importChart',
	//'app.allTeacherStudents',
	'app.logout',
])
.directive('loading',   ['$http' ,function ($http)
		{
		return {
			restrict: 'A',
			link: function (scope, elm, attrs)
			{
				scope.isLoading = function () {
					return $http.pendingRequests.length > 0;
				};
	
				scope.$watch(scope.isLoading, function (v)
				{
					if(v){
						elm.show();
					}else{
						elm.hide();
					}
				});
			}
		};
	}
])
.directive('capitalizeFirst', function($parse) {
   return {
     require: 'ngModel',
     link: function(scope, element, attrs, modelCtrl) {
        var capitalize = function(inputValue) {
           if (inputValue === undefined) { inputValue = ''; }
           var capitalized = inputValue.charAt(0).toUpperCase() +
                             inputValue.substring(1);
           if(capitalized !== inputValue) {
              modelCtrl.$setViewValue(capitalized);
              modelCtrl.$render();
            }         
            return capitalized;
         }
         modelCtrl.$parsers.push(capitalize);
         capitalize($parse(attrs.ngModel)(scope)); // capitalize initial value
     }
   };
})
.directive('focus',
function($timeout) {
 return {
 scope : {
   trigger : '@focus'
 },
 link : function(scope, element) {
  scope.$watch('trigger', function(value) {
    if (value === "true") {
      $timeout(function() {
       element[0].focus();
      });
   }
 });
 }
};
})
.config(function ($provide, $httpProvider, RestangularProvider) {


    // Intercept http calls.
    $provide.factory('ErrorHttpInterceptor', function ($q) {
        var errorCounter = 0;
        function notifyError(rejection){
            console.log(rejection);
            $.bigBox({
                title: rejection.status + ' ' + rejection.statusText,
                content: rejection.data,
                color: "#C46A69",
                icon: "fa fa-warning shake animated",
                number: ++errorCounter,
                timeout: 6000
            });
        }

        return {
            // On request failure
            requestError: function (rejection) {
                // show notification
                notifyError(rejection);

                // Return the promise rejection.
                return $q.reject(rejection);
            },

            // On response failure
            responseError: function (rejection) {
                // show notification
                notifyError(rejection);
                // Return the promise rejection.
                return $q.reject(rejection);
            }
        };
    });

    // Add the interceptor to the $httpProvider.
    $httpProvider.interceptors.push('ErrorHttpInterceptor');

    RestangularProvider.setBaseUrl(location.pathname.replace(/[^\/]+?$/, ''));

})
.constant('APP_CONFIG', window.appConfig)

.run(function ($rootScope
    , $state, $stateParams
    ) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    // editableOptions.theme = 'bs3';

});


"use strict";

angular.module('app.tables', [ 'ui.router', 'datatables', 'datatables.bootstrap']);

angular.module('app.tables').config(function ($stateProvider) {

    $stateProvider
        .state('app.tables', {
            abstract: true,
            data: {
                title: 'Tables'
            }
        })

        .state('app.tables.normal', {
            url: '/tables/normal',
            data: {
                title: 'Normal Tables'
            },
            views: {
                "content@app": {
                    templateUrl: "app/tables/views/normal.html"

                }
            }
        })

        .state('app.tables.datatables', {
            url: '/tables/datatables',
            data: {
                title: 'Data Tables'
            },
            views: {
                "content@app": {
                    controller: 'DatatablesCtrl as datatables',
                    templateUrl: "app/tables/views/datatables.html"
                }
            }
        })

        .state('app.tables.jqgrid', {
            url: '/tables/jqgrid',
            data: {
                title: 'Jquery Grid'
            },
            views: {
                "content@app": {
                    controller: 'JqGridCtrl',
                    templateUrl: "app/tables/views/jqgrid.html"
                }
            },
            resolve: {
                scripts: function(lazyScript){
                    return lazyScript.register([
                        'smartadmin-plugin/legacy/jqgrid/js/minified/jquery.jqGrid.min.js',
                        'smartadmin-plugin/legacy/jqgrid/js/i18n/grid.locale-en.js'
                    ])

                }
            }
        })
});

angular.module('app.tables').controller('DatatablesCtrl', function(DTOptionsBuilder, DTColumnBuilder){


    this.standardOptions = DTOptionsBuilder
        .fromSource('api/tables/datatables.standard.json')
         //Add Bootstrap compatibility
        .withDOM("<'dt-toolbar'<'col-xs-12 col-sm-6'f><'col-sm-6 col-xs-12 hidden-xs'l>r>" +
            "t" +
            "<'dt-toolbar-footer'<'col-sm-6 col-xs-12 hidden-xs'i><'col-xs-12 col-sm-6'p>>")
        .withBootstrap();
    this.standardColumns = [
        DTColumnBuilder.newColumn('id').withClass('text-danger'),
        DTColumnBuilder.newColumn('name'),
        DTColumnBuilder.newColumn('phone'),
        DTColumnBuilder.newColumn('company'),
        DTColumnBuilder.newColumn('zip'),
        DTColumnBuilder.newColumn('city'),
        DTColumnBuilder.newColumn('date')
    ];


});
'use strict';

angular.module('app').directive('datatableBasic', function ($compile) {
    return {
        restrict: 'A',
        scope: {
            tableOptions: '='
        },
        link: function (scope, element, attributes) {
            /* // DOM Position key index //

             l - Length changing (dropdown)
             f - Filtering input (search)
             t - The Table! (datatable)
             i - Information (records)
             p - Pagination (paging)
             r - pRocessing
             < and > - div elements
             <"#id" and > - div with an id
             <"class" and > - div with a class
             <"#id.class" and > - div with an id and class

             Also see: http://legacy.datatables.net/usage/features
             */

            var options = {
                "sDom": "<'dt-toolbar'<'col-xs-12 col-sm-6'f><'col-sm-6 col-xs-12 hidden-xs'l>r>" +
                    "t" +
                    "<'dt-toolbar-footer'<'col-sm-6 col-xs-12 hidden-xs'i><'col-xs-12 col-sm-6'p>>",
                oLanguage:{
                    "sSearch": "<span class='input-group-addon input-sm'><i class='glyphicon glyphicon-search'></i></span> ",
                    "sLengthMenu": "_MENU_"
                },
                "autoWidth": false,
                "smartResponsiveHelper": null,
                "preDrawCallback": function () {
                    // Initialize the responsive datatables helper once.
                    if (!this.smartResponsiveHelper) {
                        this.smartResponsiveHelper = new ResponsiveDatatablesHelper(element, {
                            tablet: 1024,
                            phone: 480
                        });
                    }
                },
                "rowCallback": function (nRow) {
                    this.smartResponsiveHelper.createExpandIcon(nRow);
                },
                "drawCallback": function (oSettings) {
                    this.smartResponsiveHelper.respond();
                }
            };

            if(attributes.tableOptions){
                options = angular.extend(options, scope.tableOptions)
            }

            var _dataTable;

            var childFormat = element.find('.smart-datatable-child-format');
            if(childFormat.length){
                var childFormatTemplate = childFormat.remove().html();
                element.on('click', childFormat.data('childControl'), function () {
                    var tr = $(this).closest('tr');

                    var row = _dataTable.row( tr );
                    if ( row.child.isShown() ) {
                        // This row is already open - close it
                        row.child.hide();
                        tr.removeClass('shown');
                    }
                    else {
                        // Open this row
                        var childScope = scope.$new();
                        childScope.d = row.data();
                        var html = $compile(childFormatTemplate)(childScope);
                        row.child( html ).show();
                        tr.addClass('shown');
                    }
                })
            }



            _dataTable =  element.DataTable(options);

            if(attributes.bindFilters){
                element.parent().find("div.toolbar").html('<div class="text-right"><img src="styles/img/logo.png" alt="SmartAdmin" style="width: 111px; margin-top: 3px; margin-right: 10px;"></div>');

                element.on( 'keyup change', 'thead th input[type=text]', function () {

                    _dataTable
                        .column( $(this).parent().index()+':visible' )
                        .search( this.value )
                        .draw();

                } );
            }
        }
    }
});
"use strict";

angular.module('app.auth', [
    'ui.router'
//        ,
//        'ezfb',
//        'googleplus'
]).config(function ($stateProvider
//        , ezfbProvider
//        , GooglePlusProvider
    ) {
//        GooglePlusProvider.init({
//            clientId: authKeys.googleClientId
//        });
//
//        ezfbProvider.setInitParams({
//            appId: authKeys.facebookAppId
//        });
    $stateProvider.state('realLogin', {
        url: '/real-login',

        views: {
            root: {
                templateUrl: "app/auth/login/login.html",
                controller: 'LoginCtrl'
            }
        },
        data: {
            title: 'Login',
            rootId: 'extra-page'
        }

    })

    .state('login', {
        url: '/login',
        views: {
            root: {
                templateUrl: 'app/auth/views/login.html'
            }
        },
        data: {
            title: 'Login',
            htmlId: 'extr-page'
        },
        resolve: {
            srcipts: function(lazyScript){
                return lazyScript.register([
                    'build/vendor.ui.js'
                ])

            }
        }
    })

    .state('register', {
        url: '/register',
        views: {
            root: {
                templateUrl: 'app/auth/views/register.html'
            }
        },
        data: {
            title: 'Register',
            htmlId: 'extr-page'
        }
    })

    .state('forgotPassword', {
        url: '/forgot-password',
        views: {
            root: {
                templateUrl: 'app/auth/views/forgot-password.html'
            }
        },
        data: {
            title: 'Forgot Password',
            htmlId: 'extr-page'
        }
    })

    .state('lock', {
        url: '/lock',
        views: {
            root: {
                templateUrl: 'app/auth/views/lock.html'
            }
        },
        data: {
            title: 'Locked Screen',
            htmlId: 'lock-page'
        }
    })


}).constant('authKeys', {
    googleClientId: '',
    facebookAppId: ''
});

//=============STUDENT ROASTER(amit)==============//


'use strict';

angular.module('app.studentRoaster', [
    'ui.router',
    'ngResource'
])

.config(function ($stateProvider) {
    $stateProvider
        .state('app.studentRoaster', {
            url: '/studentRoaster',
            views: {
                "content@app": {
                    controller: 'roasterCtrl',
                    templateUrl: 'app/studentRoaster.html',
					resolve: {
                        examsData: function($http, APP_CONFIG,$rootScope){
							return  $http.post($rootScope.baseurl+'Main/getExamsRoaster');
						}
                    } 
                }
            },
            data:{
                title: 'Dashboard'
            }
        })
});

'use strict';
angular.module('app.studentRoaster').controller('roasterCtrl', function ($scope, $interval, $http, $rootScope,examsData,$state) {
	
	$scope.roasterData = examsData.data;
	//console.log($scope.roasterData.active_arr);
	/* =============== ACTIVE ROASTER ======================== */
	angular.forEach($scope.roasterData.active_arr, function (value, key) 
	{ 
		var url = $rootScope.baseurl ;
		/* var final_link =  '<a onclick=\'angular.element(this).scope().roasterReports("'+ value.id +'");\' target="_blank" data-ui-sref-active="active" class="btn btn-primary" title="View report" style="margin-bottom: 5px; margin-left : 5px;"><i class="fa fa-file"></i> </a>'; */
		
		var final_link = '<a onclick=\'angular.element(this).scope().roasterReports("'+ value.id +'");\' target="_blank" data-ui-sref-active="active" class="btn btn-primary" title="View Roster" style="margin-bottom: 5px; margin-left : 5px;"><i class="fa fa-list fa-lg"></i> </a>';
		if(!(value.hasOwnProperty('roaster'))){
			$scope.roasterData.active_arr.find(key => key.id == value.id).roaster = 0;
		}
		$scope.roasterData.active_arr.find(key => key.id == value.id).final_link = final_link;
    });
	$scope.roasterData.active_arr = $scope.roasterData.active_arr.reverse();
	$scope.tableOptions =  {  
        "data": $scope.roasterData.active_arr,
        "iDisplayLength": 25,
        "columns": [
            { "data": "name" , "defaultContent": '' },
            { "data": "roaster"  , "defaultContent": ''}, 
            { "data": "final_link"  , "defaultContent": ''}, 
            
        ],
        "order": [[2, 'asc']],
		"stripeClasses": [ 'info', ' ' ],
		
    } 
	/* =========================END ACTIVE ROASTER============ */
	
	/* =============== IN-ACTIVE ROASTER ======================== */
	angular.forEach($scope.roasterData.inactive_arr, function (value, key) 
	{ 
		var url = $rootScope.baseurl ;
		var final_link =  '<a onclick=\'angular.element(this).scope().roasterReports("'+ value.id +'");\' target="_blank" data-ui-sref-active="active" class="btn btn-primary" title="View Roaster" style="margin-bottom: 5px; margin-left : 5px;"><i class="fa fa-list fa-lg"></i> </a>';
		$scope.roasterData.inactive_arr.find(key => key.id == value.id).final_link = final_link;
		
		
		if(!(value.hasOwnProperty('roaster'))){
			$scope.roasterData.inactive_arr.find(key => key.id == value.id).roaster = 0;
		}
    });
	$scope.roasterData.inactive_arr = $scope.roasterData.inactive_arr.reverse();
	$scope.tableOptions1 =  {  
        "data": $scope.roasterData.inactive_arr,
        "iDisplayLength": 25,
        "columns": [
            { "data": "name" , "defaultContent": '' },
            { "data": "roaster"  , "defaultContent": ''}, 
            { "data": "final_link"  , "defaultContent": ''}, 
            
        ],
        "order": [[2, 'asc']],
		"stripeClasses": [ 'info', ' ' ],
		
    } 
	/* =====END ACTIVE ROASTER============ */
	$scope.active = true;
	 $scope.active_class = function(btn_status) { 
		 if(btn_status=='active'){
			 $scope.active = true;
		 }else{
			 $scope.active = false;
		 }
    };
	
	
	$scope.roasterReports = function(id){
		$state.go('app.roasterReports',{class_id : id});
	} 

});
/* =============== end ======================== */

//=============Usage Report(amit)==============//

'use strict';

angular.module('app.usageReports', [
    'ui.router',
    'ngResource'
])

.config(function ($stateProvider) {
    $stateProvider
        .state('app.usageReports', {
            url: '/usageReports/',
            views: {
                "content@app": {
                    controller: 'usageReportCtrl',
                    templateUrl: 'app/usageReports.html',
					resolve: {
                        /* usageData: function($http, APP_CONFIG,$rootScope,$stateParams){
							return  $http.get($rootScope.baseurl+'Main/roasterReports', { params: { class_id : $stateParams.class_id }});
						} */
                    } 
                }
            },
            data:{
                title: 'Dashboard'
            }
        })
});

'use strict';
angular.module('app.usageReports').controller('usageReportCtrl', function ($scope, $interval, $http, $rootScope,$state) { 
	$scope.url = $rootScope.baseurl+"Main/usageReports" ;
	
	
	

});


//================== End ============================//
//=============Roaster Report(amit)==============//

'use strict';

angular.module('app.roasterReports', [
    'ui.router',
    'ngResource'
])
.filter('numKeys', function() {
    return function(json) {
        var keys = Object.keys(json)
        return keys.length;
    }
})
.config(function ($stateProvider) {
    $stateProvider
        .state('app.roasterReports', {
            url: '/roasterReports/:class_id',
            views: {
                "content@app": {
                    controller: 'roasterReportCtrl',
                    templateUrl: 'app/roasterReports.html',
					resolve: {
                        usageData: function($http, APP_CONFIG,$rootScope,$stateParams){
							return  $http.get($rootScope.baseurl+'Main/roasterReports', { params: { class_id : $stateParams.class_id }});
						}
                    } 
                }
            },
            data:{
                title: 'Dashboard'
            }
        })
});

'use strict';
angular.module('app.roasterReports').controller('roasterReportCtrl', function ($scope, $interval, $http, $rootScope,$state,usageData ,$timeout) {	
	$scope.data = usageData.data;
	/* angular.forEach($scope.data, function (value, key){
		angular.forEach(value, function (sub_val, sub_key) 
		{  
			if(sub_val.hasOwnProperty('subject_results')){ 
					var subject_results = JSON.parse(sub_val.subject_results);
					$scope.data[key][sub_key].subject_results = subject_results;
			} 
		});
	
	});  */
	$scope.check_arr = function(arr){
		var arr_length = arr.length ;
		if(arr.length==0){
			return true;
		}else{
			return false;	
		} 
	}
	$scope.has_index = function(data){
		var keys = Object.keys(data)
		var key_length = keys.length;
		if(key_length<4){
			return true;
		}else{
			return false;
		}
	}
	$scope.deleteExam = function(examid){ 
		var result = confirm('Do you really want to delete this exam ?'); 
		if(result==true){ 
			$http({	
				method:'POST',
				url : $rootScope.baseurl+'deleteStudentExam',
				data : { examid : examid },
				}).then(function(res){ 
					$scope.examdata = res.data;
					$scope.success_msg = true;
					$timeout(function() {
						$state.go('app.manageClass');	
					}, 2000);
					
				},function(res)
				{ 
				});
			}else{
			return false;
		}
	}
	
	/* angular.forEach($scope.roasterData, function (value, key) 
	{ 
		var url = $rootScope.baseurl ;
		var final_link =  '<a onclick=\'angular.element(this).scope().roasterReports("'+ value.exam_id +'");\' target="_blank" data-ui-sref-active="active" class="btn btn-primary" title="View report" style="margin-bottom: 5px; margin-left : 5px;"><i class="fa fa-file"></i> </a>';
		 
		$scope.roasterData.find(key => key.exam_id == value.exam_id).final_link = final_link;
		
    }); */

	/* $scope.tableOptions =  {  
        "data": $scope.roasterData,
        "iDisplayLength": 10,
        "columns": [
            { "data": "title" , "defaultContent": '' },
            { "data": "roaster"  , "defaultContent": ''}, 
            { "data": "final_link"  , "defaultContent": ''}, 
            
        ],
        "order": [[0, 'asc']],
		"stripeClasses": [ 'info', ' ' ],
		
    }  */
	


});


//================== End ============================//

//=============Import Csv Prepstar(amit)==============//


'use strict';

angular.module('app.importStudent', [
    'ui.router',
    'ngResource'
])

.config(function ($stateProvider) {
    $stateProvider
        .state('app.importStudent', {
            url: '/importStudent',
            views: {
                "content@app": {
                    controller: 'importCSVCtrl',
                    templateUrl: 'app/importStudent.html',
						
                }
            },
            data:{
                title: 'Dashboard'
            }
        })
});

'use strict';
angular.module('app.importStudent').controller('importCSVCtrl', function ($scope, $interval, $http, $rootScope ,$timeout ,$state) {
	$http({	
			method:'POST',
			url : $rootScope.baseurl+'get_last_uid',
			data :  {
				role : 'student',
			},
		}).then(function(res){ 
			//	console.log(res);
				$scope.last_student_uid = res.data[0]['student_uid'];
		},function(res)
		{ 
		
		});
	$scope.importStudent = function(form) {
        //alert('dsfdsfds');
        var filename = document.getElementById("file");
        if (filename.value.length < 1 ){
           $scope.warning =true;
				$timeout(function() {
					$scope.warning = false;
				}, 5000); 
			return false;
        } else {
            $scope.title = "Confirm file";
            var file = filename.files[0];
            var fileSize = 0;
            if (filename.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
					var students = new Array();
                    var rows = e.target.result.split("\n");
					
					for (var i = 1; i < rows.length; i++) {
						var cells = rows[i].split(",");
						if (cells.length > 1) {
							var student = {};
							student.first_name = cells[0];
							student.last_name = cells[1];
							student.email = cells[2];
							student.phone = cells[3];
							student.address_1 = cells[4];
							student.address_2 = cells[5];
							student.address_3 = cells[6];
							student.city = cells[7];
							student.state = cells[8];
							student.country = cells[9];
							student.postal_code = cells[10];
							student.student_uid = cells[11];
							students.push(student);
						}	
					}
					$http({	
						method:'POST',
						url : $rootScope.baseurl+'import_data',
						data :  students,
					}).then(function(res){ 
						//console.log(res);
						if(res.data=="error in CSV"){
							$scope.csv_err = true;
							$timeout(function() {
								$scope.csv_err = false;
							}, 5000);
						}else if(res){
							$scope.success_msg =true;
							$timeout(function() {
								$state.go('app.allStudents');
							}, 2000);
						}else{
							$scope.error_msg =true;
						}
					},function(res)
					{ 
					});
                }
                reader.readAsText(filename.files[0]);
             
            }
        }
    }
	$scope.close_form_is = function(){
		$state.go('app.allStudents');
	}

});



//=============Import Csv teacher Prepstar(amit)==============//


'use strict';

angular.module('app.importTeacher', [
    'ui.router',
    'ngResource'
])

.config(function ($stateProvider) {
    $stateProvider
        .state('app.importTeacher', {
            url: '/importTeacher',
            views: {
                "content@app": {
                    controller: 'importTCSVCtrl',
                    templateUrl: 'app/importTeacher.html'
                }
            },
            data:{
                title: 'Dashboard'
            }
        })
});

'use strict';
angular.module('app.importTeacher').controller('importTCSVCtrl', function ($scope, $interval, $http, $rootScope ,$timeout ,$state) {
	$http({	
			method:'POST',
			url : $rootScope.baseurl+'get_last_uid',
			data :  {
				role : 'teacher',
			},
		}).then(function(res){ 
			//	console.log(res);
			$scope.last_teacher_uid = res.data[0]['teacher_uid'];
		},function(res)
		{ 
		
		});
	$scope.importTeacher = function(form) {
        //alert('dsfdsfds');
        var filename = document.getElementById("file");
        if (filename.value.length < 1 ){
            $scope.warning =true;
				$timeout(function() {
					$scope.warning = false;
				}, 5000); 
			return false;
        } else {
            $scope.title = "Confirm file";
            var file = filename.files[0];
            var fileSize = 0;
            if (filename.files[0]) {
                  
                var reader = new FileReader();
                reader.onload = function (e) {
					var teachers = new Array();
                    var rows = e.target.result.split("\n");
					
					for (var i = 1; i < rows.length; i++) {
						var cells = rows[i].split(",");
						if (cells.length > 1) {
							var teacher = {};
							teacher.first_name = cells[0];
							teacher.last_name = cells[1];
							teacher.email = cells[2];
							teacher.phone = cells[3];
							teacher.address_1 = cells[4];
							teacher.address_2 = cells[5];
							teacher.address_3 = cells[6];
							teacher.city = cells[7];
							teacher.state = cells[8];
							teacher.country = cells[9];
							teacher.postal_code = cells[10];
							teacher.teacher_uid = cells[11];
							teachers.push(teacher);
						}
					}
					$http({	
						method:'POST',
						url : $rootScope.baseurl+'import_teacher_data',
						data :  teachers,
					}).then(function(res){ 
					//	console.log(res);
						if(res.data=="error in CSV"){
							$scope.csv_err = true;
							$timeout(function() {
								$scope.csv_err = false;
							}, 5000);
						}else if(res){
							$scope.success_msg =true;
							$timeout(function() {
								$state.go('app.allTeachers');
							}, 2000);
						}else{
							$scope.error_msg =true;
						}
					},function(res)
					{ 
					});
                }
                reader.readAsText(filename.files[0]);
             
            }
        }
    }
	$scope.close_form_i = function(){
		$state.go('app.allTeachers');
	}

});



'use strict';

angular.module('app.importChart', [
    'ui.router',
    'ngResource'
])

.config(function ($stateProvider) {
    $stateProvider
        .state('app.importChart', {
            url: '/importChart',
            views: {
                "content@app": {
                    controller: 'importChartCtrl',
                    templateUrl: 'app/importChart.html',
					/* resolve: {
                        sessionData: function($http, APP_CONFIG,$rootScope){
							return  $http.post($rootScope.baseurl+'/getSessionUser');
						}
                    }  */
                }
            },
            data:{
                title: 'Import Chart'
            }
        })
});

'use strict';
angular.module('app.importChart').controller('importChartCtrl', function ($scope, $interval, $http, $rootScope ,$timeout ,$state) {
	$scope.chartData = {};
	$scope.check_chart = function(){//console.log('check chart');
		var chart_name = $scope.chartData.name;
		$http({	
				method:'POST',
				url : $rootScope.baseurl+'check_chart',
				data : {
					chart_name : chart_name,
				}  ,
			}).then(function(res){ 
				//console.log(res);
				if(res.data == "exist"){
					$scope.exist_msg =true;
					$timeout(function() {
							$scope.success_msg = false;	
							}, 2000);	
					
				}else{
					$scope.exist_msg =false;
				} 
			},function(res)
			{ 
			}); 
	}
	$scope.importChart = function(form) {
        var filename = document.getElementById("file");
        if (filename.value.length < 1 ){
            $scope.warning =true;
				$timeout(function() {
					$scope.warning = false;
				}, 5000); 
			return false;
        } else {
            var file = filename.files[0];
            var fileSize = 0;
            if (filename.files[0]) {
                  
                var reader = new FileReader();
                reader.onload = function (e) {
					var chart_data = new Array();
                    var rows = e.target.result.split("\n");
					
					for (var i = 1; i < rows.length; i++) {
						var cells = rows[i].split(",");
						if (cells.length > 1) {
							var chart = {};
							chart.subject = cells[0];
							chart.min_score = cells[1];
							chart.max_score = cells[2];
							chart.scale_score = cells[3];
							chart_data.push(chart);
						}
					}
					$http({	
						method:'POST',
						url : $rootScope.baseurl+'addConversionChart',
						data : {
								chart_data :chart_data,
								chart_name : $scope.chartData.name,
						},
					}).then(function(res){ 
						//console.log(res);
						if(res){
							$scope.success_msg =true;
							 $timeout(function() {
								$state.go('app.allExams');
							}, 2000); 
						}else{
							$scope.error_msg =true;
						}
					},function(res)
					{ 
					});
                }
                reader.readAsText(filename.files[0]);
             
            }
        }
    }
	

});





//================== End ============================//

//=============custom modules Prepstar==============//


'use strict';

angular.module('app.dashboard', [
    'ui.router',
    'ngResource'
])

.config(function ($stateProvider) {
    $stateProvider
        .state('app.dashboard', {
            url: '/dashboard',
            views: {
                "content@app": {
                    controller: 'DashboardCtrl',
                    templateUrl: 'app/dashboard.html',
					resolve: {
                        sessionData: function($http, APP_CONFIG,$rootScope){
							return  $http.post($rootScope.baseurl+'/getSessionUser');
						}
                    } 
                }
            },
            data:{
                title: 'Dashboard'
            }
        })
});

//==============================My exams(amit)================//

'use strict';

angular.module('app.myexams', [
    'ui.router',
    'ngResource'
])

.config(function ($stateProvider) {
    $stateProvider
        .state('app.myexams', {
            url: '/myexams',
            views: {
                "content@app": {
                    controller: 'myExamsCtrl',
					templateUrl: 'app/myexams.html',
					resolve: {
                        examData: function($http, APP_CONFIG,$rootScope){
							return  $http.post($rootScope.baseurl+'/getallLiveExams');
						}
                    } 
                }
            },
            data:{
                title: ''
            }
        });
});

'use strict';
angular.module('app.myexams').controller('myExamsCtrl', function ($scope, $interval, $http, $rootScope ,examData ,$state ,$compile) {
	$scope.attemptdata = examData.data.attempted_data; 
	//console.log($scope.attemptdata);
	angular.forEach($scope.attemptdata, function (value, key) 
	{ 
		var url = $rootScope.baseurl ;
		//var subjects_result = '<h6 ng-repeat="(key, value) in data">{{key}}{{value}}</h1>';
		
		//var download_pdf =  '<a href="'+url+'Main/download_pdf/'+ value.results_id +'" data-ui-sref-active="active" class="btn btn-primary" title="Download Report" style="margin-bottom: 5px; margin-left : 5px;"><i class="fa fa-file-pdf-o" ></i> </a>';
		 
		var edit_url = '<a onclick=\'angular.element(this).scope().edit_attempt_exam("'+ value.id +'");\' class="btn btn-primary" data-tooltip-placement="bottom"  title="Edit Exam"  data-uib-tooltip="Edit"><i class="fa fa-edit fa-lg"></i></a>';
		$scope.attemptdata.find(key => key.id == value.id).edit_url = edit_url; 
		
		var final_link =  '<a href="'+url+'Main/generate_reports/'+value.results_id+'" data-ui-sref-active="active" class="btn btn-primary" title="View report" target="_blank"><i class="fa fa-file-text-o fa-lg" ></i> </a>  <a href="'+url+'Main/download_pdf/'+ value.results_id +'" data-ui-sref-active="active" target="_blank" class="btn btn-primary" title="Download PDf Report" "><i class="fa fa-file-pdf-o fa-lg" ></i> </a>';
		/* console.log(final_link); */
		$scope.attemptdata.find(key => key.id == value.id).final_link = final_link;
		//$scope.attemptdata.find(key => key.id == value.id).download_pdf = download_pdf;
		var scores = '';
		angular.forEach(value.sub_result,function(val_,key_){
			angular.forEach(val_,function(sub_v , sub_k){
				scores += '<b>'+ sub_k +': </b> '+ sub_v +'&nbsp;&nbsp;&nbsp; ';
			});			
		});
		$scope.attemptdata.find(key => key.id == value.id).score = scores;
	});
	 $scope.attemptdata =  $scope.attemptdata.reverse();
	$scope.tableOptions =  {  
        "data": $scope.attemptdata,
        "iDisplayLength": 25,
        "columns": [
            { "data": "exam_code" , "defaultContent": '' },
            { "data": "edit_url"  , "defaultContent": '',"class":"text-center"},
            { "data": "final_link"  , "defaultContent": '',"class":"text-center"},
            //{ "data": "download_pdf"  , "defaultContent": ''},
            { "data": "score" , "defaultContent": '',"class":"text-center" },
            { "data": "composite_score" , "defaultContent": '',"class":"text-center" },
            { "data": "date" , "defaultContent": '' },
            
        ],
        "order": [[2, 'desc']],
		"stripeClasses": [ 'info', ' ' ],
		
    }
	
	$scope.edit_attempt_exam = function(id){
		angular.forEach($scope.attemptdata, function (value, key) 
		{  
			if(value.id == id){
				$scope.attemptdata = value ; 
			} 
		});
		$state.go('app.editAttemptExam',{id : id}); 
	}
	//console.log($scope.attemptdata);
	
	$scope.get_all_exams = function(class_id){
		//console.log(class_id);
		$http({	
			method:'POST',
			url : $rootScope.baseurl+'getExamslist',
			}).then(function(res){ 

				$scope.examdata = res.data;
				console.log(res.data);
				
			},function(res)
			{ 
			});
		
		
	}
	
	$scope.showExam = function(id){ 
		angular.element('#examModal').addClass('close_modal');
		angular.element('body').removeClass('modal-open');
		angular.element('.modal-backdrop').addClass('fade close_modal');
		$state.go('app.attemptExam',{ exam_id : id });
	}
});



//==============================End================================//

//==============================Edit exam(amit)================//
'use strict';

angular.module('app.editAttemptExam', [
    'ui.router',
    'ngResource'
])

.config(function ($stateProvider) {
    $stateProvider
        .state('app.editAttemptExam', {
            url: '/editAttemptExam/:id', 
            views: {
                "content@app": {
                    controller: 'editAttemptCtrl',
					templateUrl: 'app/edit_attempt_exam.html',
					resolve: {
                        examData: function($http, APP_CONFIG ,$stateParams ,$rootScope){
                         return $http.get($rootScope.baseurl+'get_attempted_exam', { params: { id : $stateParams.id }});
						} 
                    } 
                }
            },
            data:{
                title: ''
            }
        });
});

'use strict';
angular.module('app.editAttemptExam').controller('editAttemptCtrl', function ($scope, $interval, $http, $rootScope,examData,$state,$stateParams ,$filter ,$window ) {
	/* $scope.examAnswers = examData.data;
	console.log($scope.examAnswers); */
	
	$scope.subjectdata = examData.data.subjects_data;
	$scope.questions = examData.data.exam_data[0]; 
	$scope.resultList = JSON.parse($scope.questions.attempted_ques);
	$scope.questiondata = {};
	angular.forEach($scope.resultList, function (value1, key1) 
	{ 
		$scope.questiondata[key1] = [];
		angular.forEach(value1, function (value2, key2) 
		{
			var options = value2; 
			$scope.questiondata[key1][key2] = options;
		});
	});
//	$scope.questiondata = [];


	$scope.subjectname = [];
	angular.forEach($scope.subjectdata, function (value, key) 
		{ 
			$scope.test_count = []; 
			$scope.total_questions = value.total_questions ;
			for (var i = 1; i <= $scope.total_questions; i++) {
			$scope.test_count.push(i);
			}
				$scope.subjectname.push({ 
						id : value.id , 
						name : value.name,
						categories : JSON.parse( value.categories ),
						test_count : $scope.test_count,
					});
			var subjectname = value.name ; 
			$scope.questions.question = []; 
				$scope.question = $scope.questions.attempted_ques ;
				/* console.log($scope.question); */
			
		}); 
	$scope.questions = {};
	$scope.submitExam = function() {
		var question_data = $scope.questiondata;
		///console.log(question_data); 
		 $http({	
			method:'POST',
			url : $rootScope.baseurl+'update_attempted_exam',
			data : { question_data : question_data,
					 exam_id : $stateParams.id },
			}).then(function(res){ console.log(res);
				 if(res.data){
					$window.history.back();
				} 	
				//console.log(res.data);
				
			},function(res)
			{ 
			});
    }
	$scope.checkKeyPressed = function(subject_name, count , $event ){
		
		var keyPressed = $event.key; 
		var aa = $filter('uppercase')(keyPressed) ;
		if(count%2 != '0'){
			 if(keyPressed=='a' || keyPressed=='A' || keyPressed=='b' || keyPressed=='B' || keyPressed=='c' || keyPressed=='C' || keyPressed=='d' || keyPressed=='D' ||(keyPressed=='e' && subject_name=='Mathematics') || (keyPressed=='E' && subject_name=='Mathematics')){
				if($scope.questiondata[subject_name] == undefined){
					$scope.questiondata[subject_name] = [];
				}
				 $scope.questiondata[subject_name][count] = $filter('uppercase')(keyPressed);
				 	var tabbables = document.querySelectorAll(".tabable");
						 for(var i=0; i<tabbables.length-1; i++) { 
							 if(tabbables[i]==$event.currentTarget){ 
									tabbables[i+1].focus(); 
									break;
								}
						} 
			 }
		}else{
			if(keyPressed=='a' || keyPressed=='f' || keyPressed=='A' || keyPressed=='F' ){ 
				if($scope.questiondata[subject_name] == undefined){
						$scope.questiondata[subject_name] = [];
				}
				 $scope.questiondata[subject_name][count] = 'A';
				 	var tabbables = document.querySelectorAll(".tabable");
						 for(var i=0; i<tabbables.length-1; i++) { 
							 if(tabbables[i]==$event.currentTarget){ 
									tabbables[i+1].focus(); 
									break;
								}
						} 
			 }else if(keyPressed=='b'|| keyPressed=='g' || keyPressed=='B' || keyPressed=='G' ){
				 if($scope.questiondata[subject_name] == undefined){
					$scope.questiondata[subject_name] = [];
				}
				  $scope.questiondata[subject_name][count] = 'B';
				  	var tabbables = document.querySelectorAll(".tabable");
						 for(var i=0; i<tabbables.length-1; i++) { 
							 if(tabbables[i]==$event.currentTarget){ 
									tabbables[i+1].focus(); 
									break;
								}
						} 
			 }
			 else if(keyPressed=='c'|| keyPressed=='h' || keyPressed=='C' || keyPressed=='H' ){
				 if($scope.questiondata[subject_name] == undefined){
					$scope.questiondata[subject_name] = [];
				}
				  $scope.questiondata[subject_name][count] = 'C';
				  	var tabbables = document.querySelectorAll(".tabable");
						 for(var i=0; i<tabbables.length-1; i++) { 
							 if(tabbables[i]==$event.currentTarget){ 
									tabbables[i+1].focus(); 
									break;
								}
						} 
			 }
			 else if(keyPressed=='d'|| keyPressed=='j' || keyPressed=='D' || keyPressed=='J' ){
				 if($scope.questiondata[subject_name] == undefined){
					$scope.questiondata[subject_name] = [];
				}
				  $scope.questiondata[subject_name][count] = 'D';
				  	var tabbables = document.querySelectorAll(".tabable");
						 for(var i=0; i<tabbables.length-1; i++) { 
							 if(tabbables[i]==$event.currentTarget){ 
									tabbables[i+1].focus(); 
									break;
								}
						} 
			 }
			 else if((keyPressed=='e'|| keyPressed=='k' || keyPressed=='E'|| keyPressed=='K' )&& subject_name=='Mathematics'){
				 if($scope.questiondata[subject_name] == undefined){
					$scope.questiondata[subject_name] = [];
				}
				  $scope.questiondata[subject_name][count] = 'E';
				  	var tabbables = document.querySelectorAll(".tabable");
						 for(var i=0; i<tabbables.length-1; i++) { 
							 if(tabbables[i]==$event.currentTarget){ 
									tabbables[i+1].focus(); 
									break;
								}
						} 
			 }
			 
		}
	}
	$scope.close_edit_form = function(){
		$window.history.back();
	}
	$scope.parseInt = parseInt;
});

//==============================End================================//
//==============================Attempt Quiz(amit)================//

'use strict';

angular.module('app.attemptExam', [
    'ui.router',
    'ngResource'
])

.config(function ($stateProvider) {
    $stateProvider
        .state('app.attemptExam', {
            url: '/attemptexam/:exam_id',
            views: {
                "content@app": {
                    controller: 'attemptExamsCtrl',
					templateUrl: 'app/attemptexam.html',
					resolve: {
                       examData: function($http, APP_CONFIG ,$stateParams ,$rootScope){
                         return $http.get($rootScope.baseurl+'getExamsQues', { params: { id : $stateParams.exam_id }}); 	
                        }
                    } 
					
                }
            },
            data:{
                title: ''
            }
        });
});

'use strict';
angular.module('app.attemptExam').controller('attemptExamsCtrl', function ($scope, $interval, $http, $rootScope ,examData ,$state ,$filter ,$window ,$location) {
	//console.log(examData.data);
	$scope.questiondata = {};
	$scope.examData = examData.data.subjects_data;
	$scope.exam_id = examData.data.exam_id;
	$scope.subjectdata = [];
	angular.forEach($scope.examData, function(value, key){		
		$scope.test_count = []; 
		$scope.subjectname = value.name;
		$scope.total_questions = value.total_questions;
		for (var i = 1; i <= $scope.total_questions; i++) {			
			$scope.test_count.push(i);			
		}
		$scope.subjectdata.push({ 
			name : $scope.subjectname,
			test_count : $scope.test_count,
		})
		  
    });
	 $scope.setFocus = function(subject ,count){
	///	 console.log(subject);
//console.log(count);
		if(subject == 'English' && count == '1'){
			$scope.set_focus = true;
		}else{
			$scope.set_focus = false
		}
	} 
	 $scope.checkKeyPressed = function(subject_name, count , $event  ){
		var keyPressed = $event.key; 
	
		if(count%2 != '0'){
			 if(keyPressed=='a' || keyPressed=='A' || keyPressed=='b' || keyPressed=='B' || keyPressed=='c' || keyPressed=='C' || keyPressed=='d' || keyPressed=='D' ||(keyPressed=='e' && subject_name=='Mathematics') || (keyPressed=='E' && subject_name=='Mathematics')){
				if($scope.questiondata[subject_name] == undefined){
					$scope.questiondata[subject_name] = [];
				}
				 $scope.questiondata[subject_name][count] = $filter('uppercase')(keyPressed);
				 	var tabbables = document.querySelectorAll(".tabable");
						 for(var i=0; i<tabbables.length-1; i++) { 
							 if(tabbables[i]==$event.currentTarget){ 
									tabbables[i+1].focus(); 
									break;
								}
						} 
			 }
		}else{
			if(keyPressed=='a' || keyPressed=='f' || keyPressed=='A' || keyPressed=='F' ){ 
				if($scope.questiondata[subject_name] == undefined){
						$scope.questiondata[subject_name] = [];
				}
				 $scope.questiondata[subject_name][count] = 'A';
				 	var tabbables = document.querySelectorAll(".tabable");
						 for(var i=0; i<tabbables.length-1; i++) { 
							 if(tabbables[i]==$event.currentTarget){ 
									tabbables[i+1].focus(); 
									break;
								}
						} 
			 }else if(keyPressed=='b'|| keyPressed=='g' || keyPressed=='B' || keyPressed=='G' ){
				 if($scope.questiondata[subject_name] == undefined){
					$scope.questiondata[subject_name] = [];
				}
				  $scope.questiondata[subject_name][count] = 'B';
				  	var tabbables = document.querySelectorAll(".tabable");
						 for(var i=0; i<tabbables.length-1; i++) { 
							 if(tabbables[i]==$event.currentTarget){ 
									tabbables[i+1].focus(); 
									break;
								}
						} 
			 }
			 else if(keyPressed=='c'|| keyPressed=='h' || keyPressed=='C' || keyPressed=='H' ){
				 if($scope.questiondata[subject_name] == undefined){
					$scope.questiondata[subject_name] = [];
				}
				  $scope.questiondata[subject_name][count] = 'C';
				  	var tabbables = document.querySelectorAll(".tabable");
						 for(var i=0; i<tabbables.length-1; i++) { 
							 if(tabbables[i]==$event.currentTarget){ 
									tabbables[i+1].focus(); 
									break;
								}
						} 
			 }
			 else if(keyPressed=='d'|| keyPressed=='j' || keyPressed=='D' || keyPressed=='J' ){
				 if($scope.questiondata[subject_name] == undefined){
					$scope.questiondata[subject_name] = [];
				}
				  $scope.questiondata[subject_name][count] = 'D';
				  	var tabbables = document.querySelectorAll(".tabable");
						 for(var i=0; i<tabbables.length-1; i++) { 
							 if(tabbables[i]==$event.currentTarget){ 
									tabbables[i+1].focus(); 
									break;
								}
						} 
			 }
			 else if((keyPressed=='e'|| keyPressed=='k' || keyPressed=='E'|| keyPressed=='K' )&& subject_name=='Mathematics'){
				 if($scope.questiondata[subject_name] == undefined){
					$scope.questiondata[subject_name] = [];
				}
				  $scope.questiondata[subject_name][count] = 'E';
				  	var tabbables = document.querySelectorAll(".tabable");
						 for(var i=0; i<tabbables.length-1; i++) { 
							 if(tabbables[i]==$event.currentTarget){ 
									tabbables[i+1].focus(); 
									break;
								}
						} 
			 }
			 
		}
	}
	
	$scope.submitExam = function() { 
		if($rootScope.student_exam_id != undefined || $rootScope.student_exam_id != null || $rootScope.student_exam_id != '' ){
			$scope.student_id  =  $rootScope.student_exam_id;
		}else{
			$scope.student_id = '';
		}
		var question_data = $scope.questiondata;
		$http({	
			method:'POST',
			url : $rootScope.baseurl+'submit_exam',
			data : { question_data : question_data,
					 exam_id : $scope.exam_id ,
					 student_id : $scope.student_id
					 },
			}).then(function(res){// console.log(res.data);
				if(res.data){
					$window.history.back();
				} 	
			//	console.log(res.data);
			},function(res)
			{ 
			});
    }
	$scope.close_exam_form = function(){
		$window.history.back();
	}
	$scope.parseInt = parseInt;
	
});



//==============================End================================//



//==============================set user in session (shweta)================//


'use strict';

angular.module('app.setUser', [
    'ui.router',
    'ngResource'
])

.config(function ($stateProvider) {
    $stateProvider
        .state('app.setUser', {
            url: '/',
            views: {
                "content@app": {
                    controller: 'setUserCtrl',
					resolve: {
                        sessionData: function($http, APP_CONFIG,$rootScope){ 
							return  $http.post($rootScope.baseurl+'/getSessionUser');
						}
                    } 
                }
            },
            data:{
                title: ''  
            }
        });
});


'use strict';

angular.module('app.setUser').controller('setUserCtrl', function ($scope, $interval ,sessionData ,$state) {
	$scope.userdata = sessionData.data;// console.log($scope.userdata);
	if($scope.userdata == "admin"){
		$state.go('app.adminDashboard');
	}
	else if($scope.userdata == "student"){
		$state.go('app.studentDashboard');
	}
	else if($scope.userdata == "teacher"){
		$state.go('app.teacherDashboard');
	}else{
		$window.location.href = $rootScope.baseurl;
	}
});


//===========================end set sessionuser===============================//

//=======================admin dashboard (shweta)==================================//

'use strict';

angular.module('app.adminDashboard', [
    'ui.router',
    'ngResource'
])

.config(function ($stateProvider) {
    $stateProvider
        .state('app.adminDashboard', {
            url: '/adminDashboard',
            views: {
                "content@app": {
                    controller: 'adminDashboardCtrl',
                    templateUrl: 'app/adminDashboard.html',
					resolve: {
                        adminData: function($http, APP_CONFIG ,$rootScope){
							return $http.post($rootScope.baseurl+'/getUserId');
						}
                    }
                }
            },
            data:{
                title: ''
            }
        });
});


'use strict';

angular.module('app.adminDashboard').controller('adminDashboardCtrl', function ($scope, $interval ,adminData ,$http ,$timeout ,$rootScope) {
	var user_id = adminData.data;
$rootScope.user_role = 'admin'; 
	$http({	
			method:'POST',
			url : $rootScope.baseurl+'getUserData',
			data : { user_id : user_id }
			}).then(function(res){
				$scope.admin_data = res.data;
				$scope.country_d = $scope.admin_data.country ;
				if( $scope.admin_data.country == 'Canada'){
					$scope.admin_data.country = '38';
				}
				else if( $scope.admin_data.country == 'Mexico'){
					$scope.admin_data.country = '142';
				}
				else if( $scope.admin_data.country == 'United States'){
					$scope.admin_data.country = '231';
				}else{
					$scope.admin_data.country = 'other';
				}					
				var country = $scope.admin_data.country ;	
				if(country != 'other'){
					$http({	
						method:'POST',
						url : $rootScope.baseurl+'getStates',
						data :  {
									country : country
								} ,
							}).then(function(res){ 
								$scope.states = res.data;
							},function(res)
							{ 
							});
				}		
			},function(res)
			{ 
			});
	$http({	
			method:'POST',
			url : $rootScope.baseurl+'getStatistics',
			}).then(function(res){
				$scope.stats_data = res.data;
				$scope.company_data = res.data.company_data[0];
			},function(res)
			{ 
			});	
		$scope.edit_details = function(){
			$scope.editForm  = true;
		}		
		$scope.close_form = function(){
			$scope.editForm  = false;
		}
		$scope.edit_company_details = function(){
			$scope.editCompanyForm  = true;
		}		
		$scope.close_company_form = function(){
			$scope.editCompanyForm  = false;
		}
		$scope.setstate = function(){
			var country = $scope.admin_data.country ; 
			if(country != 'other'){
				$http({	
					method:'POST',
					url : $rootScope.baseurl+'getStates',
					data :  {
								country : country
							} ,
					}).then(function(res){ 
						$scope.states = res.data;
					},function(res)
					{ 
					});
			}
		}	
	$scope.updateUser = function(){	
		if( $scope.admin_data.country == '38'){
			$scope.admin_data.country = 'Canada';
		}
		else if( $scope.admin_data.country == '142'){
			$scope.admin_data.country = 'Mexico';
		}
		else if( $scope.admin_data.country == '231'){
			$scope.admin_data.country = 'United States';
		}else{
			$scope.admin_data.country = 'other';
		}	
		$scope.country_d = $scope.admin_data.country ;	
		$http({	
			method:'POST',
			url : $rootScope.baseurl+'updateUser',
			data :  $scope.admin_data ,
			}).then(function(res){ 
				var result = res.data;
				$scope.editForm = false;				
				if(result =="1"){
					$scope.success_msg = true;
					$timeout(function() {
							$scope.success_msg = false;
						}, 5000);
				$scope.admin_data.countr		
				if( $scope.admin_data.country == 'Canada'){
					$scope.admin_data.country = '38';
				}
				else if( $scope.admin_data.country == 'Mexico'){
					$scope.admin_data.country = '142';
				}
				else if( $scope.admin_data.country == 'United States'){
					$scope.admin_data.country = '231';
				}else{
					$scope.admin_data.country = 'other';
				}	
				}else{
					$scope.error_msg = true;
					$timeout(function() {
							$scope.error_msg = false;
						}, 5000);	
				} 
			},function(res)
			{ 
			});
	}
	$scope.updateCompany = function(){
		$http({	
			method:'POST',
			url : $rootScope.baseurl+'updateCompany',
			data :  $scope.company_data ,
			}).then(function(res){ 
				var result = res.data;  //console.log(res);
				$scope.editCompanyForm  = false;		
				if(result =="1"){
					$scope.success_comp_msg = true;
					$timeout(function() {
							$scope.success_comp_msg = false;
						}, 5000);
				}else{
					$scope.error_comp_msg = true;
					$timeout(function() {
							$scope.error_comp_msg = false;
						}, 5000);
				}
			},function(res)
			{ 
			});
	}	
			
});
'use strict';

angular.module('app.addStudent', [
    'ui.router',
    'ngResource'
])

.config(function ($stateProvider) {
    $stateProvider
        .state('app.addStudent', {
            url: '/addStudent',
            views: {
                "content@app": {
                    controller: 'addStudentCtrl',
                    templateUrl: 'app/addStudent.html', 
                }
            },
            data:{
                title: 'Add Student'
            }
        });
});

'use strict';

angular.module('app.addStudent').controller('addStudentCtrl', function ($scope, $interval ,$http ,$timeout ,$rootScope ,$state) {
	
	$scope.studentData = {};
	$scope.studentData.active = true;
	$scope.studentData.password =  Math.floor(1000 + Math.random() * 9000);
	$http({	
			method:'POST',
			url : $rootScope.baseurl+'getClasses',
			}).then(function(res){ 
				$scope.classes = res.data;
					
			},function(res)
			{ 
			});
	$scope.setstate = function(){
		var country = $scope.studentData.country ; 
		if(country != 'other'){
			$http({	
				method:'POST',
				url : $rootScope.baseurl+'getStates',
				data :  {
							country : country
						} ,
				}).then(function(res){ 
					$scope.states = res.data;
				},function(res)
				{ 
				});
		}
	}
	
	$scope.username_generate = function(){
		var first_name = $scope.studentData.first_name;
		var user_name = first_name.charAt(0)+$scope.studentData.last_name;
		$scope.studentData.username = user_name ;
	}
	
	$scope.addStudent = function(){  
		$scope.role = {role : 'student'};
		angular.extend($scope.studentData ,$scope.role );
		if( $scope.studentData.country == '38'){
			$scope.studentData.country = 'Canada';
		}
		else if( $scope.studentData.country == '142'){
			$scope.studentData.country = 'Mexico';
		}
		else if( $scope.studentData.country == '231'){
			$scope.studentData.country = 'United States';
		}else{
			$scope.studentData.country = 'other';
		}		
		$http({	
			method:'POST',
			url : $rootScope.baseurl+'addStudent',
			data :  $scope.studentData ,
		}).then(function(res){ 
//			console.log(res);   
			if(res){
				$scope.success_msg =true;
				$timeout(function() {
					/* if($rootScope.user_role == 'admin'){
							$state.go('app.allStudents');
					}else if($rootScope.user_role == 'teacher'){
						$state.go('app.allTeacherStudents');
					} */
					$state.go('app.allStudents');
						}, 2000);	
				
			}else{
				$scope.error_msg =true;
			}
		},function(res)
		{ 
		});
	}
	$scope.auto_generate = function(){
		var password =   Math.floor(1000 + Math.random() * 9000);
		$scope.studentData.password = password ;
	}
	$scope.check_user = function(){
		var user_name = $scope.studentData.username;
		 $http({
			method : 'POST',
			url : $rootScope.baseurl+'check_user',
			data : {
				user_name : user_name,
			} ,
			}).then(function(res){
				if(res.data=="true"){
					$scope.user_exist = true;
				}
				else{
					$scope.user_exist = false;
				}
			},function(res)
			{ 
		}) 
	}	
	$scope.check_email = function(){
		$scope.hide_loader = true;
		var email = $scope.studentData.email;
		 $http({
			method : 'POST',
			url : $rootScope.baseurl+'check_email',
			data : {
				email : email,
			} ,
			}).then(function(res){
				if(res.data=="true"){
					$scope.email_exist = true;
				}
				else{
					$scope.email_exist = false;
				}
			},function(res)
			{ 
		}) 
	}
	$scope.close_form_s = function(){
		$state.go('app.allStudents');
	}	
});



'use strict';

angular.module('app.allStudents', [
    'ui.router',
    'ngResource',
])

.config(function ($stateProvider) {
    $stateProvider
        .state('app.allStudents', {
            url: '/allStudents',
            views: {
                "content@app": {
                    controller: 'allStudentsCtrl',
                    templateUrl: 'app/allStudents.html',
					resolve: {
                        studentData: function($http, APP_CONFIG ,$rootScope){
							return  $http.post($rootScope.baseurl+'getAllStudents');
						}
                    } 
                }
            },
            data:{
                title: 'All Students'
            }
			
        });
});

'use strict';

angular.module('app.allStudents').controller('allStudentsCtrl', function ($scope, $interval , $http, $compile , $state ,$timeout ,studentData ,$rootScope ,$window) {   
$scope.url = $rootScope.baseurl;
	$scope.studentData = studentData.data;
	//console.log($scope.studentData);
	$http({	
			method:'POST',
			url : $rootScope.baseurl+'getClasses',
		}).then(function(res){ 
			$scope.classes = res.data;
		},function(res)
		{ 
		});
	angular.forEach($scope.studentData, function (value, key) 
	{  	
		//var address = value.address_1 +'  '+ value.address_2 +'  '+ value.address_3+' '+value.city +'  '+ value.state +'  '+ value.country+'  '+ value.postal_code;
		//$scope.studentData.find(key => key.id == value.id).address =  address;
		$scope.studentData.find(key => key.id == value.id).name = value.first_name+' '+value.last_name;
		if( value.active == "1" ){
			$scope.studentData.find(key => key.id == value.id).active = '<label class="label label-success ">Active</label>';
		}else{
			$scope.studentData.find(key => key.id == value.id).active = '<label class="label label-danger">InActive</label>';
		}
		angular.forEach($scope.classes, function (value, key){
			if( $scope.classes.id == value.class_id){
				$scope.studentData.find(key => key.id == value.id).class =  $scope.classes.name;
			}
		});
		var show_details = '<a href="#" class="btn btn-primary" data-toggle="modal" data-target="#view_details" onclick=\'angular.element(this).scope().setSelectedData("'+ value.id +'");\'"  title="View Profile"><i class="fa fa-user fa-lg"></i></a>';
		
		//var reports_link =  '<a onclick=\'angular.element(this).scope().view_reports("'+ value.id +'");\' class="btn btn-primary" data-tooltip-placement="bottom"  data-uib-tooltip="View Reports"  title="View reports"><i class="fa fa-file-pdf-o fa-lg"></i></a>';

	//== variable (edit_url) containing buttons for	edit ,delete and sending mal ============//
	    
		var edit_url = '<a onclick=\'angular.element(this).scope().edit_student("'+ value.id +'");\' class="btn btn-primary" data-tooltip-placement="bottom"  data-uib-tooltip="Edit"  title="Edit"><i class="fa fa-edit fa-lg"></i></a>  <a onclick=\'angular.element(this).scope().credentials_email("'+ value.id +'");\' class="btn btn-primary" data-tooltip-placement="bottom"  data-uib-tooltip="Send Mail"  title="Send Account Details"><i class="fa fa-send fa-lg"></i></a>  <a onclick=\'angular.element(this).scope().delete_student("'+ value.id +'");\' class="btn btn-danger" data-tooltip-placement="bottom"  data-uib-tooltip="Delete"  title="Delete Account"><i class="fa fa-trash-o fa-lg"></i></a> ';
		
		var score_exam = '<a onclick=\'angular.element(this).scope().get_all_exams("'+ value.id +'");\' data-toggle="modal" data-target="#examModal" class="btn btn-primary" data-tooltip-placement="bottom"  data-uib-tooltip="Score Exam"  title="Score Exam"><i class="fa fa-clipboard fa-lg"></i></a>  <a onclick=\'angular.element(this).scope().view_reports("'+ value.id +'");\' class="btn btn-primary" data-tooltip-placement="bottom"  data-uib-tooltip="View Reports"  title="View reports"><i class="fa fa-file-pdf-o fa-lg"></i></a>';
		
	//	var delete_student = '<a onclick=\'angular.element(this).scope().delete_student("'+ value.id +'");\' class="btn btn-danger" data-tooltip-placement="bottom"  data-uib-tooltip="Delete"  title="Delete Account"><i class="fa fa-trash-o fa-lg"></i></a>';
		
		//var credentials_email = '<a onclick=\'angular.element(this).scope().credentials_email("'+ value.id +'");\' class="btn btn-primary" data-tooltip-placement="bottom"  data-uib-tooltip="Send Mail"  title="Send Account Details"><i class="fa fa-send fa-lg"></i></a>';
		  
		$scope.studentData.find(key => key.id == value.id).edit_url = edit_url;
		$scope.studentData.find(key => key.id == value.id).show_details = show_details;
		//$scope.studentData.find(key => key.id == value.id).view_reports = reports_link;
		$scope.studentData.find(key => key.id == value.id).score_exam = score_exam;
		//$scope.studentData.find(key => key.id == value.id).delete_student = delete_student;
		//$scope.studentData.find(key => key.id == value.id).credentials_email = credentials_email;
    });
	$scope.setSelectedData = function(id){
		angular.forEach($scope.studentData, function (value, key){
			if(id == value.id){
				$scope.studentDetails = value;
				if($scope.studentDetails.class_id != ""){
					$scope.studentDetails.student_class = $.grep($scope.classes, function (classe) {
						return classe.id == $scope.studentDetails.class_id;
					})[0].name;
				}
			}
		})
	}
	$scope.student_exam_id = '';
	$scope.get_all_exams = function(student_id){
		$rootScope.student_exam_id = student_id ;
		$http({	
			method:'POST',
			url : $rootScope.baseurl+'getExamslist',
			}).then(function(res){ 

				$scope.examdata = res.data;
			//	console.log(res.data);
				
			},function(res)
			{ 
			});
		
		
	}
	$scope.delete_student = function(id){
		var result = confirm('Do you want to delete this account .');
		if(result == true){
			$http({
				method:'POST',
				url : $rootScope.baseurl+'deleteUSer',
				data : {
					user_id : id,
				}
				}).then(function(res){ //console.log(res);
					$scope.result = res.data;
					if($scope.result == "1"){
						$scope.success_msg = true;
						$timeout(function() {	
						$window.location.reload();
					}, 2000);
					}else{
						$scope.err_msg = true;
					}
				},function(res)
				{ 
				});
		}else{
			return false;
		}
	}
	
	$scope.credentials_email = function(id){
			$http({
				method:'POST',
				url : $rootScope.baseurl+'send_credentials',
				data : {
					student_id : id,
				}
				}).then(function(res){ //console.log(res);
					$scope.result = res.data;
					if($scope.result == "NO email"){
						$scope.email_msg = true;
						$timeout(function() {	
							$scope.email_msg = false;
						}, 6000);
					}else if($scope.result == "1") {
						$scope.sucess_email = true;
						$timeout(function() {	
							$scope.sucess_email = false;
						}, 4000);
					}else {
						$scope.err_msg = true;
					} 
				},function(res)
				{ 
				});
	}
	
	$scope.showExam = function(id , student_id){ 
		angular.element('#examModal').addClass('close_modal');
		angular.element('body').removeClass('modal-open');
		angular.element('.modal-backdrop').addClass('fade close_modal');
		$state.go('app.attemptExam',{ exam_id : id });
		
	}
	$scope.view_reports = function(id){
		$state.go('app.viewReports',{ student_id : id })
	}
	$scope.studentData = $scope.studentData.reverse();

		$scope.tableOptions =  {  
        "data": $scope.studentData,
        "iDisplayLength": 25,
        "columns": [
            { "data": "show_details" , "defaultContent": '' ,"class": "text-center"},
            { "data": "name" , "defaultContent": '' },
            { "data": "username"  , "defaultContent": ''},
            { "data": "password"  , "defaultContent": ''},
            { "data": "email" , "defaultContent": ''},
            { "data": "phone" , "defaultContent": ''},
            { "data": "active" , "defaultContent": '' ,"class": "text-center" },
			{ "data": "score_exam" , "defaultContent": '',"class": "text-center" },
            { "data": "edit_url" , "defaultContent": '' , "class": "text-center"},
           // { "data": "view_reports" , "defaultContent": '' },
          //  { "data": "delete_student" , "defaultContent": '' },
           // { "data": "credentials_email" , "defaultContent": '' },
        ],
        "order": [[7, 'asc']],
		"stripeClasses": [ 'info', ' ' ],
    }
	$scope.edit_student = function(id){
		$state.go('app.editStudent',{student_id : id});
	}
		
});


'use strict';

angular.module('app.viewReports', [
    'ui.router',
    'ngResource',
])

.config(function ($stateProvider) {
    $stateProvider
        .state('app.viewReports', {
            url: '/view_reports/:student_id',
            views: {
                "content@app": {
                    controller: 'viewReportsCtrl',
                    templateUrl: 'app/viewReports.html',
					resolve: {
                        studentData: function($http, APP_CONFIG ,$rootScope ,$stateParams){
							return  $http.get($rootScope.baseurl+'view_reports',{ params : { id : $stateParams.student_id }});
						}
                    } 
                }
            },
            data:{
                title: 'View Reports '
            }
			
        });
});

'use strict';

angular.module('app.viewReports').controller('viewReportsCtrl', function ($scope, $interval , $http, $compile , $state ,$timeout ,studentData ,$rootScope) { 
	$scope.student_data = studentData.data.studentData; console.log($scope.student_data);
	angular.forEach($scope.student_data, function (value, key) 
	{  
		var url = $rootScope.baseurl ;
		var edit_url = '<a onclick=\'angular.element(this).scope().edit_attempt_exam("'+ value.id +'");\' class="btn btn-primary" data-tooltip-placement="bottom"  title="Edit Exam"  data-uib-tooltip="Edit"><i class="fa fa-edit fa-lg"></i></a>';
		
		$scope.student_data.find(key => key.id == value.id).edit_url = edit_url; 
		
		 var download_pdf =  '<a href="'+url+'Main/generate_reports/'+ value.id +'" target="_blank" data-ui-sref-active="active" class="btn btn-primary" title="View report" style="margin-bottom: 5px; margin-left : 5px;"><i class="fa fa-file-text-o fa-lg"></i> </a>  <a target="_blank" href="'+url+'Main/download_pdf/'+ value.id +'" data-ui-sref-active="active" class="btn btn-primary" title="Download Report" style="margin-bottom: 5px; margin-left : 5px;"><i class="fa fa-file-pdf-o fa-lg" ></i> </a>  ';
		 
		/*  var final_link =  '<a href="'+url+'Main/generate_reports/'+ value.id +'" target="_blank" data-ui-sref-active="active" class="btn btn-primary" title="View report" style="margin-bottom: 5px; margin-left : 5px;"><i class="fa fa-file"></i> </a>'; */
		var scores = '';
		 angular.forEach(value.sub_result,function(val_,key_){
			angular.forEach(val_,function(sub_v , sub_k){
				scores += '<b>'+ sub_k +': </b> '+ sub_v +'&nbsp;&nbsp;&nbsp; ';
			});			
		});
		$scope.student_data.find(key => key.id == value.id).score = scores;
		//$scope.student_data.find(key => key.id == value.id).view_reports = final_link;
		$scope.student_data.find(key => key.id == value.id).download_pdf = download_pdf;
    });
	$scope.edit_attempt_exam = function(id){
		$state.go('app.editAttemptExam',{id : id}); 
	}
	$scope.download_pdf = function(student_id , exam_id ){ 
		$http({	
			method:'POST',
			url : $rootScope.baseurl+'download_pdf', 
			data : {
					student_id : student_id ,
					exam_id : exam_id ,
			}
		}).then(function(res){ 
			$scope.data = res; //console.log($scope.data);
		},function(res)
		{ 
		});
	}
	
	$scope.student_data = $scope.student_data.reverse();
	$scope.tableOptions =  {  
        "data": $scope.student_data,
        "iDisplayLength": 25,
        "columns": [
            { "data": "exam_code" , "defaultContent": '' },           
            { "data": "edit_url" , "defaultContent": '' },           
          //  { "data": "view_reports" , "defaultContent": '' },
            { "data": "download_pdf" , "defaultContent": '' },
            { "data": "score" , "defaultContent": '' },
            { "data": "composite_score" , "defaultContent": '' },
            { "data": "date" , "defaultContent": '' },
        ],
        "order": [[1, 'asc']],
		"stripeClasses": [ 'info', ' ' ],
		
    }
});

'use strict';

angular.module('app.editStudent', [
    'ui.router',
    'ngResource'
])

.config(function ($stateProvider) {
    $stateProvider
        .state('app.editStudent', {
            url: '/editStudent/:student_id',
            views: {
                "content@app": {
                    controller: 'editStudentCtrl',
                    templateUrl: 'app/editStudent.html',
					 resolve: {
                       studentData: function($http, APP_CONFIG ,$stateParams ,$rootScope){
                         return $http.get($rootScope.baseurl+'getUSer', { params: { id : $stateParams.student_id }}); 	
                        }
                    } 
                }
            },
            data:{
                title: 'Edit Student Details'
            }, 
            
        });
});

'use strict';

angular.module('app.editStudent').controller('editStudentCtrl', function ($scope, $interval ,$http ,$timeout ,$rootScope ,studentData ,$state){
	$scope.studentData = studentData.data.user_data[0]; 
	$scope.classes = studentData.data.class_data;
	if( $scope.studentData.country == 'Canada'){
		$scope.studentData.country = '38';
	}
	else if( $scope.studentData.country == 'Mexico'){
		$scope.studentData.country = '142';
	}
	else if( $scope.studentData.country == 'United States'){
		$scope.studentData.country = '231';
	}else{
		$scope.studentData.country = 'other';
	}	
	if($scope.studentData.active == 1){
		$scope.studentData.active = true;
	}else{
		$scope.studentData.active = false;
	}
	$http({	
				method:'POST',
				url : $rootScope.baseurl+'getStates',
				data :  {
							country : $scope.studentData.country 
						} ,
				}).then(function(res){ 
					$scope.states = res.data;
				},function(res)
				{ 
				});
	$scope.setstate = function(){
		var country = $scope.studentData.country ; 
		if(country != 'other'){
			$http({	
				method:'POST',
				url : $rootScope.baseurl+'getStates',
				data :  {
							country : country
						} ,
				}).then(function(res){ 
					$scope.states = res.data;
				},function(res)
				{ 
				});
		}
	}
	$scope.check_mail_update = function(){
		$http({	
				method:'POST',
				url : $rootScope.baseurl+'check_mail_update',
				data :  {
							email :  $scope.studentData.email,
							id : $scope.studentData.id,
						} ,
				}).then(function(res){ 
					//	console.log( res );
						if(res.data=="error"){
							$scope.email_exist = true;
						}else{
							$scope.email_exist = false;
						}
				},function(res)
				{ 
				});
	}
	$scope.updateStudent = function(){
		if( $scope.studentData.country == '38'){
			$scope.studentData.country = 'Canada';
		}
		else if( $scope.studentData.country == '142'){
			$scope.studentData.country = 'Mexico';
		}
		else if( $scope.studentData.country == '231'){
			$scope.studentData.country = 'United States';
		}else{
			$scope.studentData.country = 'other';
		}	
		$http({	
			method:'POST',
			url : $rootScope.baseurl+'updateUser',
			data :  $scope.studentData ,
		}).then(function(res){ //console.log(res.data);
			if(res){
				$scope.success_msg =true;
				$timeout(function() {
					$state.go('app.allStudents');
						}, 2000);
				}else{
					$scope.error_msg =true;
				}
		},function(res)
		{ 
		});
	}
	$scope.auto_generate = function(){
		var password =   Math.floor(1000 + Math.random() * 9000);
		$scope.studentData.password = password ;
	}
	$scope.cancel_update = function(){ //console.log($rootScope.user_role);
		/* if($rootScope.user_role == 'admin'){
			$state.go('app.allStudents');
		}else if($rootScope.user_role == 'teacher'){
			$state.go('app.allTeacherStudents');
		} */
		$state.go('app.allStudents');
	}
});
//--------------Add exam -------------------//
'use strict';

angular.module('app.addExam', [
    'ui.router',
    'ngResource'
])

.config(function ($stateProvider) {
    $stateProvider
        .state('app.addExam', {
            url: '/addExam',
            views: {
                "content@app": {
                    controller: 'addExamCtrl',
                    templateUrl: 'app/addExam.html',
					resolve: {
                        subjects: function($http, APP_CONFIG ,$rootScope){
							return  $http.post($rootScope.baseurl+'getSubjects');
						}
                    } 
                }
            },
            data:{
                title: 'Add Exam'
            },
			
        });
});
'use strict';

angular.module('app.addExam').controller('addExamCtrl', function ($scope, $interval ,$http ,$timeout ,$rootScope ,subjects ,$state ,$filter) {
	$scope.examData = {};
	$scope.subjects = subjects.data;
	$scope.subjectname = [];
	$http({
			method : 'POST',
			url : $rootScope.baseurl+'getConversionCharts',
			}).then(function(res){

				if(res.data){
					$scope.chartData = res.data;
				}
				else{
					$scope.chartData_msg = true;
				}
			},function(res)
			{ 
		});
	
	angular.forEach($scope.subjects, function (value, key) 
	{  
		var sub_arr = []; 
		var sb = JSON.parse( value.subcategories );
		$scope.test_count = []; 
		$scope.total_questions = value.total_questions ;
		for (var i = 1; i <= $scope.total_questions; i++) {
			$scope.test_count.push(i);
		}
		angular.forEach(sb ,function(v , k){
			sub_arr.push(v);
		});
		$scope.subjectname.push({ 
			id : value.id , 
			name : value.name,
			categories : JSON.parse( value.categories ),
			subcategories : sub_arr,
			test_count : $scope.test_count,
		})
		
	});
	$scope.check_exam = function(){
		var exam_code = $scope.examData.exam_code;
		//console.log(exam_code);
		 $http({
			method : 'POST',
			url : $rootScope.baseurl+'check_exam',
			data : {
				'exam_code' : exam_code,
			} ,
			}).then(function(res){
			//	console.log(res);
				if(res.data=="true"){
					$scope.code_exist = true;
					$scope.error_code = true;
				}
				else{
					$scope.code_exist = false;
					$scope.error_code = false ;
				}
			},function(res)
			{ 
		}) 
	}
	$scope.addExam =function(exam_live){ 
		$scope.live = {live : exam_live};
		angular.extend($scope.examData ,$scope.live ); 
		/* if(!($scope.examData.hasOwnProperty('question'))){
			$scope.examData.question = 'empty_questions';
		} */
		$http({
			method : 'POST',
			url : $rootScope.baseurl+'addExam',
			data : $scope.examData ,
			}).then(function(res){
				//console.log(res);
				if(res){
					$scope.success_msg = true;
					$timeout(function() {
						$state.go('app.allExams');
					}, 2000);
				}else{
					$scope.error_msg = true;
					$timeout(function() {
						$scope.error_msg = false;
					}, 5000);
				}
			},function(res)
			{ 
		})   
	}
});

//--------------ALL exams -------------------//
'use strict';

angular.module('app.allExams', [
    'ui.router',
    'ngResource'
])

.config(function ($stateProvider) {
    $stateProvider
        .state('app.allExams', {
            url: '/allExams',
            views: {
                "content@app": {
                    controller: 'allExamCtrl',
                    templateUrl: 'app/allExams.html',
					resolve: {
                        exams: function($http, APP_CONFIG ,$rootScope){
							return  $http.post($rootScope.baseurl+'getallExams');
						}
                    } 
                }
            },
            data:{
                title: 'All Exams'
            }  
        });
});

'use strict';

angular.module('app.allExams').controller('allExamCtrl', function ($scope, $interval ,$http ,$timeout ,$rootScope ,exams ,$state ,$compile ,$window) { 
	$scope.exams = exams.data.exams_data; //console.log($scope.exams);
	$scope.subjects = exams.data.subject_data;
	$scope.charts_data = exams.data.charts_data; //console.log($scope.charts_data);
	angular.forEach($scope.exams, function (value, key) 
	{    
		angular.forEach($scope.charts_data, function (value_c, key_c) 
		{ 
			if(value.chart == value_c.id){
				$scope.exams.find(key => key.id == value.id).chart = value_c.name;
			}
		});
		//var delete_url = '<a onclick=\'angular.element(this).scope().delete_exam("'+ value.id +'");\' class="btn btn-danger"  title="Delete"><i class="fa fa-trash-o fa-lg"></i></a>';
		
		if( value.live == "yes" ){
			$scope.exams.find(key => key.id == value.id).live_f = '<label class="label label-success ">YES</label>';
		}else{
			$scope.exams.find(key => key.id == value.id).live_f = '<label class="label label-danger ">NO</label>';
		}
		var edit_url = '<a onclick=\'angular.element(this).scope().edit_exam("'+ value.id +'");\' class="btn btn-primary"  title="Edit"><i class="fa fa-edit fa-lg"></i></a>  <a onclick=\'angular.element(this).scope().delete_exam("'+ value.id +'");\' class="btn btn-danger"  title="Delete"><i class="fa fa-trash-o fa-lg"></i></a>';
		
		//$scope.exams.find(key => key.id == value.id).delete_url = delete_url;
		$scope.exams.find(key => key.id == value.id).edit_url = edit_url;
    })
	$scope.exams = $scope.exams.reverse();
	$scope.tableOptions =  {  
        "data": $scope.exams,
        "iDisplayLength": 25,
        "columns": [
            { "data": "exam_code" , "defaultContent": '' },
            { "data": "chart"  , "defaultContent": ''},
            { "data": "live_f"  , "defaultContent": ''},
			//{ "data": "delete_url"  , "defaultContent": ''},
            { "data": "edit_url"  , "defaultContent": '' ,"class":"text-center"},
        ],
        "order": [[3, 'asc']],
		"stripeClasses": [ 'info', ' ' ],
    }
	$scope.delete_exam = function(id){
	var result = confirm('Do you really want to delete this exam ?'); 
		if(result==true){ 
				$http({
					method : 'POST',
					url : $rootScope.baseurl+'deleteExam',
					data : {
						exam_id : id
					} ,
				}).then(function(res){ //console.log(res);
					if(res.data =="1"){
						$scope.success_msg = true;
						$timeout(function() {
						//$state.go('app.allExams');
						$window.location.reload();
					}, 2000);
					}else{
						$scope.error_msg = true;
						$timeout(function() {
						$state.go('app.allExams');
					}, 2000);
					}
				},function(res)
				{ 
			})  
		}else{
			return false;
		}
	}
	$scope.edit_exam = function(id){
		$state.go('app.editExam',{exam_id : id});
	}
});
'use strict';

angular.module('app.editExam', [
    'ui.router',
    'ngResource'
])
.config(function ($stateProvider) {
    $stateProvider
        .state('app.editExam', {
            url: '/editExam/:exam_id',
            views: {
                "content@app": {
                    controller: 'editExamCtrl',
                    templateUrl: 'app/editExam.html',
					 resolve: {
                       examData: function($http, APP_CONFIG ,$stateParams ,$rootScope){
                         return $http.get($rootScope.baseurl+'getExam', { params: { exam_id : $stateParams.exam_id }}); 	
                        }
                    } 
                }
            },
            data:{
                title: 'Edit Exams'
            }, 
            
        });
});

'use strict';

angular.module('app.editExam').controller('editExamCtrl', function ($scope, $interval ,$http ,$timeout ,$rootScope ,examData ,$state){
//console.log( examData.data);
	$scope.examData = examData.data.exam_data[0];
	$scope.questions = examData.data.question_data;
	$scope.subjects = examData.data.subject_data;
	$scope.chartData = examData.data.chart_data;
	$scope.examData.question = {};
	$scope.subjectname = [];
	$scope.subjects = examData.data.subject_data;
	$scope.test_count = [];
	angular.forEach($scope.subjects, function (value, key) 
	{  
		if(value.id==$scope.examData.subject ){
			$scope.categories = JSON.parse( value.categories );
			$scope.total_questions = value.total_questions ;
			for (var i = 1; i <= $scope.total_questions; i++) {
				$scope.test_count.push(i);
			}
		} 
	});	
	angular.forEach($scope.subjects, function (value, key) 
	{  
		var sub_arr = []; 
		var sb = JSON.parse( value.subcategories );
		$scope.test_count = []; 
		$scope.total_questions = value.total_questions ;
		for (var i = 1; i <= $scope.total_questions; i++) {
			$scope.test_count.push(i);
		}
		angular.forEach(sb ,function(v , k){
			sub_arr.push(v);
		});  
		$scope.subjectname.push({ 
			id : value.id , 
			name : value.name,
			categories : JSON.parse( value.categories ),
			subcategories : sub_arr,
			test_count : $scope.test_count,
		})
		$scope.examData.question[value.name] = [];
		angular.forEach($scope.questions, function (question_value, key) 
		{ 
			if(value.name == question_value.subject){
				var question_number = question_value.question_number; 
				$scope.examData.question[value.name][question_number] = question_value ;
					if($scope.examData.question[value.name][question_number]['2by2catgeory']==1){
						$scope.examData.question[value.name][question_number]['2by2catgeory'] = true;
					}else{
						$scope.examData.question[value.name][question_number]['2by2catgeory'] = false;
					}
			}
			
		});	
		
	});
	$scope.setSubject = function(){
		$scope.test_count = []; 
		angular.forEach($scope.subjects, function (value, key) 
		{  
			if(value.id==$scope.examData.subject ){
				$scope.categories = JSON.parse( value.categories );
				$scope.total_questions = value.total_questions ;
				for (var i = 1; i <= $scope.total_questions; i++) {
					$scope.test_count.push(i);
				}
			} 
		});		
	}
	
	$scope.updateExam = function(exam_live){ 
		$scope.live = {live : exam_live};
		angular.extend($scope.examData ,$scope.live );
	 $http({
			method : 'POST',
			url : $rootScope.baseurl+'updateExam',
			data : $scope.examData ,
			}).then(function(res){
				//console.log(res);
				if(res){
					$scope.success_msg = true;
					$timeout(function() {
						$state.go('app.allExams');
					}, 2000);
				}else{
					$scope.error_msg = true;
					$timeout(function() {
						$scope.error_msg = false;
					}, 2000);
				}
			},function(res)
			{ 
		})  
	}
	$scope.close_form = function(){
		$state.go('app.allExams');
	}	
});

'use strict';

angular.module('app.addTeacher', [
    'ui.router',
    'ngResource'
])

.config(function ($stateProvider) {
    $stateProvider
        .state('app.addTeacher', {
            url: '/addTeacher',
            views: {
                "content@app": {
                    controller: 'addTeacherCtrl',
                    templateUrl: 'app/addTeacher.html', 
					resolve: {
                       classData: function($http, APP_CONFIG ,$stateParams ,$rootScope){
                         return $http.get($rootScope.baseurl+'getClasses'); 	
                        }
                    } 
                }
            },
            data:{
                title: 'Add Teacher'
            }
        });
});

'use strict';

angular.module('app.addTeacher').controller('addTeacherCtrl', function ($scope, $interval ,$http ,$timeout ,$rootScope ,$state ,classData) {
	$scope.teacherData = {};
	$scope.teacherData.active = true;
	$scope.teacherData.password =  Math.floor(1000 + Math.random() * 9000);
	$scope.classes = classData.data; 
	$scope.show_checkboxes = false;
	$scope.showCheckboxes = function(){
		$scope.show_checkboxes = !$scope.show_checkboxes; 
	}
	$scope.teacherData.class_id = [];
	$scope.select_class = function(class_id){
		var result = $.grep($scope.teacherData.class_id, function (classe) { 
                    return classe == class_id;
                })[0]; 
		if(result==undefined){
			var selectedclass = $.grep($scope.classes, function (classe) {
						return classe.id == class_id;
					})[0].id;
			$scope.teacherData.class_id.push(selectedclass); 	
		}else{
			for(var i =0;i<= $scope.teacherData.class_id.length - 1; i++){
				if($scope.teacherData.class_id[i] == class_id){
						$scope.teacherData.class_id.splice(i,1);
				}
			}
		}	
	}
	
	$scope.get_states = function(){
		var country = $scope.teacherData.country ; 
		if(country != 'other'){
			$http({	
				method:'POST',
				url : $rootScope.baseurl+'getStates',
				data :  {
							country : country
						} ,
				}).then(function(res){ 
					$scope.states = res.data; 
				},function(res)
				{ 
				});
		}
	}
	$scope.username_generate_teacher = function(){
		
		var first_name = $scope.teacherData.first_name;
		var user_name = first_name.charAt(0)+$scope.teacherData.last_name;
		$scope.teacherData.username = user_name ;
	}
	$scope.addTeacher = function(){  
		$scope.role = {role : 'teacher'};
		angular.extend($scope.teacherData ,$scope.role );
		if( $scope.teacherData.country == '38'){
			$scope.teacherData.country = 'Canada';
		}
		else if( $scope.teacherData.country == '142'){
			$scope.teacherData.country = 'Mexico';
		}
		else if( $scope.teacherData.country == '231'){
			$scope.teacherData.country = 'United States';
		}else{
			$scope.teacherData.country = 'other';
		}			
		$http({	
			method:'POST',
			url : $rootScope.baseurl+'addTeacher',
			data :  $scope.teacherData ,
		}).then(function(res){ 
			//console.log(res);
			if(res){
				$scope.success_msg =true;
				$timeout(function() {
							$state.go('app.allTeachers');
						}, 2000);	
				
			}else{
				$scope.error_msg =true;
			}
		},function(res)
		{ 
		});
	}
	$scope.auto_generate_password = function(){ 
		var password =   Math.floor(1000 + Math.random() * 9000);
		$scope.teacherData.password = password ;
	}
	$scope.check_username = function(){
		var user_name = $scope.teacherData.username;
		 $http({
			method : 'POST',
			url : $rootScope.baseurl+'check_user',
			data : {
				user_name : user_name,
			} ,
			}).then(function(res){
				if(res.data=="true"){
					$scope.user_exist = true;
				}
				else{
					$scope.user_exist = false;
				}
			},function(res)
			{ 
		}) 
	}	
	$scope.check_user_email = function(){
		var email = $scope.teacherData.email;
		 $http({
			method : 'POST',
			url : $rootScope.baseurl+'check_email',
			data : {
				email : email,
			} ,
			}).then(function(res){
				if(res.data=="true"){
					$scope.email_exist = true;
				}
				else{
					$scope.email_exist = false;
				}
			},function(res)
			{ 
		}) 
	}
	$scope.close_form_t = function(){
		$state.go('app.allTeachers');
	}	
});



'use strict';

angular.module('app.allTeachers', [
    'ui.router',
    'ngResource',
])

.config(function ($stateProvider) {
    $stateProvider
        .state('app.allTeachers', {
            url: '/allTeachers',
            views: {
                "content@app": {
                    controller: 'allTeachersCtrl',
                    templateUrl: 'app/allTeachers.html',
					resolve: {
                        teacherData: function($http, APP_CONFIG ,$rootScope){
							return  $http.post($rootScope.baseurl+'getAllTeachersClass');
						}
                    } 
                }
            },
            data:{
                title: 'All Teachers'
            }
			
        });
});

'use strict';

angular.module('app.allTeachers').controller('allTeachersCtrl', function ($scope, $interval , $http, $compile , $state ,$timeout ,teacherData ,$rootScope ,$window) {   
	$scope.url = $rootScope.baseurl
	$scope.teacherData = teacherData.data.teacher_data;
	$scope.classes = teacherData.data.class_data;
	
	//console.log($scope.classes);
	angular.forEach($scope.teacherData, function (value, key) 
	{  	
		//var address = value.address_1 +'  '+ value.address_2 +'  '+ value.address_3+' '+value.city +'  '+ value.state +'  '+ value.country+'  '+ value.postal_code;
		//$scope.teacherData.find(key => key.id == value.id).address =  address;
		$scope.teacherData.find(key => key.id == value.id).name = value.first_name+' '+value.last_name;
		if( value.active == "1" ){
			$scope.teacherData.find(key => key.id == value.id).active = '<label class="label label-success ">Active</label>';
		}else{
			$scope.teacherData.find(key => key.id == value.id).active = '<label class="label label-danger ">InActive</label>';
		}
		/* angular.forEach($scope.classes, function (value, key){
			if( $scope.classes.id == value.class_id){
				$scope.teacherData.find(key => key.id == value.id).class =  $scope.classes.name;
			}
		}); */
		var show_details = '<a href="#" class="btn btn-primary" data-toggle="modal" data-target="#view_details" onclick=\'angular.element(this).scope().setSelectedData("'+ value.id +'");\'"  title="View Profile"><i class="fa fa-user fa-lg"></i></a>';
		
		var edit_url = '<a onclick=\'angular.element(this).scope().edit_teacher("'+ value.id +'");\' class="btn btn-primary"  title="Edit" data-tooltip-placement="bottom"  data-uib-tooltip="Edit"><i class="fa fa-edit fa-lg"></i></a>  <a onclick=\'angular.element(this).scope().delete_teacher("'+ value.id +'");\' class="btn btn-danger" data-tooltip-placement="bottom"  data-uib-tooltip="Delete"  title="Delete Account"><i class="fa fa-trash-o fa-lg"></i></a> '  ;
		$scope.teacherData.find(key => key.id == value.id).edit_url = edit_url;
		$scope.teacherData.find(key => key.id == value.id).show_details = show_details;
    });
	
	$scope.setSelectedData = function(id){ 
		angular.forEach($scope.teacherData, function (value, key){
			if(id == value.id){
				$scope.teacherDetails = value;
				$scope.teacherDetails.teacher_class = [];
				if(value.class_id.length>0){ 
					$scope.class_s = JSON.parse(value.class_id);
					angular.forEach($scope.class_s, function (value_c, key_c){
							var cl_id =	$.grep($scope.classes, function (classe) {
								return classe.id == value_c;
							}); //console.log(cl_id);
							if(cl_id.length >0){
								if(cl_id != null || cl_id != undefined ||  cl_id != '' ){
									$scope.teacherDetails.teacher_class.push( cl_id[0].name );
								}
							}
						})
				}
			}
		});
		//console.log($scope.teacherDetails);
	}
	
	//======== Change request for delete teacher (5 june 19) ===============//
	
	$scope.delete_teacher = function(id){
		var result = confirm('Do you want to delete this account .');
		if(result == true){
			$http({
				method:'POST',
				url : $rootScope.baseurl+'deleteUSer',
				data : {
					user_id : id,
				}
				}).then(function(res){ console.log(res);
					$scope.result = res.data;
					if($scope.result == "1"){
						$scope.success_msg = true;
						$timeout(function() {	
						$window.location.reload();
					}, 2000);
					}else{
						$scope.err_msg = true;
					}
				},function(res)
				{ 
				});
		}else{
			return false;
		}
	}
	$scope.teacherData = $scope.teacherData.reverse();
		$scope.tableOptions =  {  
        "data": $scope.teacherData,
        "iDisplayLength": 25,
        "columns": [
            { "data": "show_details" , "defaultContent": '' ,"class": "text-center"},
            { "data": "name" , "defaultContent": '' },
            { "data": "username"  , "defaultContent": ''},
            { "data": "password"  , "defaultContent": ''},
            { "data": "email" , "defaultContent": ''},
            { "data": "phone" , "defaultContent": ''},
           // { "data": "class" , "defaultContent": ''},
         //   { "data": "address" , "defaultContent": ''},
            { "data": "active" , "defaultContent": '' ,"class":"text-center" },
            { "data": "edit_url" , "defaultContent": '' ,"class": "text-center"},
        ],
        "order": [[6, 'asc']],
		"stripeClasses": [ 'info', ' ' ],
		
    }
	$scope.edit_teacher = function(id){
		$state.go('app.editTeacher',{teacher_id : id});
	}
			
});

'use strict';

angular.module('app.editTeacher', [
    'ui.router',
    'ngResource'
])

.config(function ($stateProvider) {
    $stateProvider
        .state('app.editTeacher', {
            url: '/editTeacher/:teacher_id',
            views: {
                "content@app": {
                    controller: 'editTeacherCtrl',
                    templateUrl: 'app/editTeacher.html',
					 resolve: {
                       teacherData: function($http, APP_CONFIG ,$stateParams ,$rootScope){
                         return $http.get($rootScope.baseurl+'getUSer', { params: { id : $stateParams.teacher_id }}); 	
                        }
                    } 
                }
            },
            data:{
                title: 'Edit Teacher Details'
            }, 
            
        });
});

'use strict';

angular.module('app.editTeacher').controller('editTeacherCtrl', function ($scope, $interval ,$http ,$timeout ,$rootScope ,teacherData ,$state){
	$scope.teacherData = teacherData.data.user_data[0]; 
	$scope.class_data = teacherData.data.class_data;
	if(($scope.teacherData.class_id).length>0){
		$scope.teacherData.class_id = JSON.parse($scope.teacherData.class_id);
	}
	angular.forEach($scope.class_data,function(value,key){
		if(($scope.teacherData.class_id).length>0){
			angular.forEach($scope.teacherData.class_id,function(sub_val,sub_key){
				if(value.id == sub_val){
					$scope.class_data.find(key => key.id == value.id).checked = "checked";
				}
			});
		}	
		if(!($scope.class_data[key].hasOwnProperty('checked'))){
			$scope.class_data.find(key => key.id == value.id).checked = "";
		}		
	});
	$scope.new_classes = $scope.class_data ; 
	
	if( $scope.teacherData.country == 'Canada'){
		$scope.teacherData.country = '38';
	}
	else if( $scope.teacherData.country == 'Mexico'){
		$scope.teacherData.country = '142';
	}
	else if( $scope.teacherData.country == 'United States'){
		$scope.teacherData.country = '231';
	}else{
		$scope.teacherData.country = 'other';
	}	
	if($scope.teacherData.active == '1'){
		$scope.teacherData.active = true;
	}else{
		$scope.teacherData.active = false;
	}
	$scope.check_mail_update = function(){
		$http({	
				method:'POST',
				url : $rootScope.baseurl+'check_mail_update',
				data :  {
							email :  $scope.teacherData.email,
							id : $scope.teacherData.id,
						} ,
				}).then(function(res){ 
						//console.log( res );
						if(res.data=="error"){
							$scope.email_exist = true;
						}else{
							$scope.email_exist = false;
						}
				},function(res)
				{ 
				});
	}
	
	$http({	
				method:'POST',
				url : $rootScope.baseurl+'getStates',
				data :  {
							country : $scope.teacherData.country 
						} ,
				}).then(function(res){ 
					$scope.states = res.data;
				},function(res)
				{ 
				});
	$scope.show_checkboxes = false;
	$scope.showCheckboxes = function(){
		$scope.show_checkboxes = !$scope.show_checkboxes; 
	}
	$scope.select_class = function(class_id){
		var result = $.grep($scope.teacherData.class_id, function (classe) { 
                    return classe == class_id;
                })[0]; 
		if(result==undefined){
			var selectedclass = $.grep($scope.new_classes, function (classe) {
						return classe.id == class_id;
					})[0].id;
			$scope.teacherData.class_id.push(selectedclass); 	
		}else{
			for(var i =0;i<= $scope.teacherData.class_id.length - 1; i++){
				if($scope.teacherData.class_id[i] == class_id){
						$scope.teacherData.class_id.splice(i,1);
				}
			}
		}
		
	}
	$scope.setstate = function(){
		var country = $scope.teacherData.country ; 
		if(country != 'other'){
			$http({	
				method:'POST',
				url : $rootScope.baseurl+'getStates',
				data :  {
							country : country
						} ,
				}).then(function(res){ 
					$scope.states = res.data;
				},function(res)
				{ 
				});
		}
	}
	$scope.updateTeacher = function(){
		if( $scope.teacherData.country == '38'){
			$scope.teacherData.country = 'Canada';
		}
		else if( $scope.teacherData.country == '142'){
			$scope.teacherData.country = 'Mexico';
		}
		else if( $scope.teacherData.country == '231'){
			$scope.teacherData.country = 'United States';
		}else{
			$scope.teacherData.country = 'other';
		}	//console.log($scope.teacherData);
		$http({	 
			method:'POST',
			url : $rootScope.baseurl+'updateUser',
			data :  $scope.teacherData ,
		}).then(function(res){ 
			if(res){
				$scope.success_msg =true;
				$timeout(function() {
							$state.go('app.allTeachers');
						}, 2000);
				}else{
					$scope.error_msg =true;
				}
		},function(res)
		{ 
		});
	}
	$scope.generate_password = function(){
		var password =   Math.floor(1000 + Math.random() * 9000);
		$scope.teacherData.password = password ;
	}
	$scope.cancel_update = function(){
		$state.go('app.allTeachers');
	}
});

'use strict';

angular.module('app.addCustomClass', [
    'ui.router',
    'ngResource'
])

.config(function ($stateProvider) {
    $stateProvider
        .state('app.addCustomClass', {
            url: '/addClass',
            views: {
                "content@app": {
                    controller: 'addCustomClassCtrl',
                    templateUrl: 'app/addClass.html', 
					resolve: {
                        UsersData: function($http, APP_CONFIG ,$rootScope){
							return  $http.post($rootScope.baseurl+'getClassUsers');
						}
                    }
                }
            },
            data:{
                title: 'Add Class'
            }
        });
});

'use strict';

angular.module('app.addCustomClass').controller('addCustomClassCtrl', function ($scope, $interval ,$http ,$timeout ,$rootScope ,$state ,UsersData) {
	$scope.show_checkboxes = false;
	$scope.showCheckboxes = function(){
		$scope.show_checkboxes = !$scope.show_checkboxes; 
	}
	
	$scope.teachers = UsersData.data.teachers; 
	$scope.students = UsersData.data.students; 
	$scope.classData = {};
	$scope.classData.active = true;
	$scope.selected_studentsname = [];
	$scope.select_student = function(student_id){ 
		if($scope.selected_studentsname.length >=0){
				$scope.show_students =true;
		}else{
			$scope.show_students = false;
		}
		var result = $.grep($scope.selected_studentsname, function (student) {  	
                    return student.id == student_id;
                })[0]; 
		if(result==undefined){ 
			var selectedstud = $.grep($scope.students, function (student) {
						return student.id == student_id;
					})[0];
			$scope.selected_studentsname.push(selectedstud); 	
		 }else{ 
			for(var i =0;i<= $scope.selected_studentsname.length - 1; i++){
				if($scope.selected_studentsname[i].id == student_id){
						$scope.selected_studentsname.splice(i,1);
				}
			 } 
		}	
	}
	$scope.unique_class = function(){
		var classname = $scope.classData.name;
		 $http({
			method : 'POST',
			url : $rootScope.baseurl+'check_class',
			data : {
				classname : classname,
			} ,
			}).then(function(res){
				if(res.data=="true"){
					$scope.class_exist = true;
				}
				else{
					$scope.class_exist = false;
				}
			},function(res)
			{ 
		}) 
	}
	/* $scope.select_student = function(){ 
		if($scope.selected_studentsname.length >=0){
			$scope.show_students =true;
		}else{
			$scope.show_students = false;
		}
		var student_id = $scope.classData.student;
		var id = student_id[student_id.length - 1];
		var result = $.grep($scope.selected_studentsname, function (students) {
                    return students.id == id;
                })[0]; 
		if(result == undefined ){	
			var name = $.grep($scope.students, function (students) {
                    return students.id == id;
                })[0];
			var fullname = name.first_name+' '+name.last_name ;
			$scope.selected_studentsname.push({id : id ,name : fullname});
		}else{
			for(var i =0;i<= $scope.selected_studentsname.length - 1; i++){
						if($scope.selected_studentsname[i].id == id){
							$scope.selected_studentsname.splice(i,1);
						}
				}
		}	
		
	}
	 */
	 
	$scope.students_cs = new Array();
	$scope.set_csv = function(){
		var filename = document.getElementById("csvfile"); 
        if (filename.value!=''){
            $scope.title = "Confirm file";
            var file = filename.files[0];
            var fileSize = 0; 
            if (filename.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    var rows = e.target.result.split("\n");
					for (var i = 1; i < rows.length; i++) {
						var cells = rows[i].split(",");
						if (cells.length > 1) {
							var student = {};
							student.first_name = cells[0];
							student.last_name = cells[1]; 
							student.email = cells[2];
							student.phone = cells[3];
							student.address_1 = cells[4];
							student.address_2 = cells[5];
							student.address_3 = cells[6];
							student.city = cells[7];
							student.state = cells[8];
							student.country = cells[9];
							student.postal_code = cells[10];
							student.student_uid = cells[11];
							$scope.students_cs.push(student);
						}
					}
                }
                reader.readAsText(filename.files[0]);
             
            }
        }
	}
	$scope.addClass = function(){
	$scope.studentsData = {students : $scope.selected_studentsname} ;
	angular.extend($scope.classData ,$scope.studentsData ); 
		if($scope.students_cs != '' || $scope.students_cs != null || $scope.students_cs != undefined){
			$scope.students_csv = {students_csv : $scope.students_cs}; 
			angular.extend($scope.classData ,$scope.students_csv );
		}else{
			$scope.students_csv = {students_csv : []}; 
			angular.extend($scope.classData ,$scope.students_csv );
		} 
			 $http({	
				method:'POST',
				url : $rootScope.baseurl+'addClass',
				data :  $scope.classData ,
			}).then(function(res){ 
				//console.log(res);
				if(res.data=="error in CSV"){
						$scope.csv_err = true;
							$timeout(function() {
								$scope.csv_err = false;
							}, 5000);
				}else if(res.data == "success"){
					$scope.success_msg =true;
					$timeout(function() {
								$state.go('app.allCustomClasses');
							}, 2000);
				}else{
					$scope.error_msg =true;
				}
			},function(res)
			{ 
			}); 
		
	}
	$scope.reset_form = function(){
		$scope.classData ='';
		$scope.selected_studentsname='';
	}
});



'use strict';

angular.module('app.allCustomClasses', [
    'ui.router',
    'ngResource',
])

.config(function ($stateProvider) {
    $stateProvider
        .state('app.allCustomClasses', {
            url: '/allClasses',
            views: {
                "content@app": {
                    controller: 'allCustomClassesCtrl',
                    templateUrl: 'app/allClasses.html',
					resolve: {
                        classData: function($http, APP_CONFIG ,$rootScope){
							return  $http.post($rootScope.baseurl+'getAllClasses');
						}
                    } 
                }
            },
            data:{
                title: 'All Classes'
            }
			
        });
});

'use strict';

angular.module('app.allCustomClasses').controller('allCustomClassesCtrl', function ($scope, $interval , $http, $compile , $state ,$timeout ,classData ,$rootScope ,$window) {   
	$scope.classData = classData.data; //console.log($scope.classData);
	angular.forEach($scope.classData, function (value, key) 
	{  	
		//var address = value.address_1 +'  '+ value.address_2 +'  '+ value.address_3+' '+value.city +'  '+ value.state +'  '+ value.country+'  '+ value.postal_code;
		//$scope.teacherData.find(key => key.id == value.id).address =  address;
		if( value.active == "1" ){
			$scope.classData.find(key => key.id == value.id).active = '<label class="label label-success">Active</label>';
		}else{
			$scope.classData.find(key => key.id == value.id).active = '<label class="label label-danger">InActive</label>';
		}
	//	var edit_url = '<a onclick=\'angular.element(this).scope().edit_class("'+ value.id +'");\' class="btn btn-primary" data-tooltip-placement="bottom"  data-uib-tooltip="Edit"  title="Edit"><i class="fa fa-edit fa-lg"></i></a>';
		//$scope.classData.find(key => key.id == value.id).edit_url = edit_url;
		
		var view_students = '<a onclick=\'angular.element(this).scope().view_students("'+ value.id +'");\' class="btn btn-primary" data-tooltip-placement="bottom"  data-uib-tooltip="Edit"  title="View Class Students"><i class="fa fa-list fa-lg"></i></a>  <a onclick=\'angular.element(this).scope().edit_class("'+ value.id +'");\' class="btn btn-primary" data-tooltip-placement="bottom"  data-uib-tooltip="Edit"  title="Edit"><i class="fa fa-edit fa-lg"></i></a>  <a onclick=\'angular.element(this).scope().delete_class("'+ value.id +'");\' class="btn btn-danger" data-tooltip-placement="bottom"  data-uib-tooltip="Delete Class"  title="Delete Class"><i class="fa fa-trash-o fa-lg"></i></a>';
		
	//	var delete_class = '<a onclick=\'angular.element(this).scope().delete_class("'+ value.id +'");\' class="btn btn-danger" data-tooltip-placement="bottom"  data-uib-tooltip="Delete Class"  title="Delete Class"><i class="fa fa-trash-o fa-lg"></i></a>';
		
		$scope.classData.find(key => key.id == value.id).view_students = view_students;
		//$scope.classData.find(key => key.id == value.id).delete_class = delete_class;
    });
	$scope.classData = $scope.classData.reverse();
		$scope.tableOptions =  {  
        "data": $scope.classData,
        "iDisplayLength": 25,
        "columns": [
            { "data": "name" , "defaultContent": '' },
            { "data": "active" , "defaultContent": '' },
            { "data": "view_students" , "defaultContent": '' ,"class": "text-center"},
          //  { "data": "edit_url" , "defaultContent": '' ,"class": "text-center"},
          //  { "data": "delete_class" , "defaultContent": '' ,"class": "text-center"},
        ],
        "order": [[2, 'asc']],
		"stripeClasses": [ 'info', ' ' ],
		
    }
	$scope.delete_class = function(id){
		var result = confirm('Do you want to delete this class.');
		if(result == true){
			$http({	
			method:'POST',
			url : $rootScope.baseurl+'deleteClass',
			data :{
					class_id : id,
			},
		}).then(function(res){ // console.log(res.data);
				$window.location.reload();
		},function(res)
		{ 
		});
		}else{
			return false;
		}
	}
	$scope.edit_class = function(id){
		$state.go('app.editCustomClass',{class_id : id});
	}
	$scope.view_students =function(id){
		$state.go('app.allClassStudents',{class_id : id});
	}
			
});

'use strict';

angular.module('app.editCustomClass', [
    'ui.router',
    'ngResource'
])

.config(function ($stateProvider) {
    $stateProvider
        .state('app.editCustomClass', {
            url: '/editClass/:class_id',
            views: {
                "content@app": {
                    controller: 'editCustomClassCtrl',
                    templateUrl: 'app/editClass.html',
					 resolve: {
                       classData: function($http, APP_CONFIG ,$stateParams ,$rootScope){
                         return $http.get($rootScope.baseurl+'getSingleClass', { params: { id : $stateParams.class_id }}); 	
                        }
                    } 
                }
            },
            data:{
                title: 'Edit Class Details'
            }, 
            
        });
});

'use strict';

angular.module('app.editCustomClass').controller('editCustomClassCtrl', function ($scope, $interval ,$http ,$timeout ,$rootScope ,classData ,$state){
	$scope.classData = classData.data[0];
	$scope.teacher_id = '';
	if($scope.classData.active == 1){
		$scope.classData.active = true;
	}else{
		$scope.classData.active = false;
	}
	$scope.students = [];
	$scope.pre_students = [];
	$scope.selected_studentsname = [];
	$scope.classData.pre_teacher = '';
	$http({	 
			method:'POST',
			url : $rootScope.baseurl+'getClassUsers',
		}).then(function(res){ 
			if(res){
				$scope.teachers = res.data.teachers; 
				$scope.allstudents = res.data.students; 
				angular.forEach($scope.teachers,function(value , key){
					if(value.class_id.length > 0){
						$scope.t_class = JSON.parse(value.class_id);
						angular.forEach($scope.t_class , function(sub_val , sub_key){
							if(sub_val == $scope.classData.id){
								$scope.classData.teacher = value.id;
								$scope.classData.pre_teacher = value.id;
							} 
						}); 
					}
				}); 
				angular.forEach($scope.allstudents,function(value , key){
					if(value.class_id == $scope.classData.id){
						var name = value.first_name+' '+value.last_name;
						$scope.selected_studentsname.push({id : value.id ,name : name }); 
						$scope.show_students = true;
						value.checked = "checked";
					}
					if(!(value.hasOwnProperty('checked'))){
						value.checked = "";
					} 
					$scope.students.push(value);
				}); 
			}
		},function(res)
		{ 
		});	
	$scope.show_checkboxes = false;
	$scope.showCheckboxes = function(){
		$scope.show_checkboxes = !$scope.show_checkboxes; 
	}
	$scope.select_student = function(student_id){ 
		if($scope.selected_studentsname.length >=0){
				$scope.show_students =true;
		}else{
			$scope.show_students = false;
		}
		var result = $.grep($scope.selected_studentsname, function (student) {  	
                    return student.id == student_id;
                })[0]; 
		if(result==undefined){ 
			var selectedstud = $.grep($scope.students, function (student) {
						return student.id == student_id;
					})[0];
			var fullname = selectedstud.first_name+' '+selectedstud.last_name;		
			$scope.selected_studentsname.push({id : selectedstud.id ,name: fullname }); 	
		 }else{ 
			for(var i =0;i<= $scope.selected_studentsname.length - 1; i++){
				if($scope.selected_studentsname[i].id == student_id){
						$scope.selected_studentsname.splice(i,1);
						$scope.pre_students.push({id : student_id });
				}
			 } 
		}	
	}	
	$scope.updateClass = function(){
		$scope.studentsData = {students : $scope.selected_studentsname}
		$scope.prestudentsData = {pre_students : $scope.pre_students}
		angular.extend($scope.classData ,$scope.studentsData ); 
		angular.extend($scope.classData ,$scope.prestudentsData ); 
		
		//console.log($scope.classData);
		$http({	
			method:'POST',
			url : $rootScope.baseurl+'updateClassdata',
			data :  $scope.classData ,
		}).then(function(res){ console.log(res);
			if(res){
				$scope.success_msg =true;
				$timeout(function() {
							$state.go('app.allCustomClasses');
						}, 2000);
				}else{
					$scope.error_msg =true;
				}
		},function(res)
		{ 
		});
	}
	$scope.cancel_update_form = function(){
		$state.go('app.allCustomClasses');
	}
});
'use strict';

angular.module('app.allClassStudents', [
    'ui.router',
    'ngResource'
])

.config(function ($stateProvider) {
    $stateProvider
        .state('app.allClassStudents', {
            url: '/allClassStudents/:class_id',
            views: {
                "content@app": {
                    controller: 'allClassStudentsCtrl',
                    templateUrl: 'app/allClassStudents.html',
					 resolve: {
                       classData: function($http, APP_CONFIG ,$stateParams ,$rootScope){
                         return $http.get($rootScope.baseurl+'getSingleClassUSers', { params: { id : $stateParams.class_id }}); 	
                        }
                    } 
                }
            },
            data:{
                title: 'Class Roster'
            }, 
            
        });
});

'use strict';

angular.module('app.allClassStudents').controller('allClassStudentsCtrl', function ($scope, $interval ,$http ,$timeout ,$rootScope ,classData ,$state ,$window){
	$scope.studentData = classData.data; 
	if($scope.studentData.length > 0){
			$scope.studentclass_id = $scope.studentData[0].class_id ;
	}			
	angular.forEach($scope.studentData, function (value, key) 
	{ 
		var reports_link =  '<a onclick=\'angular.element(this).scope().view_reports("'+ value.id +'");\' class="btn btn-primary" data-tooltip-placement="bottom"  data-uib-tooltip="View Reports"  title="View reports"><i class="fa  fa-list fa-lg"></i></a>';
		var remove_class =  '<a onclick=\'angular.element(this).scope().remove_class("'+ value.id +'");\' class="btn btn-primary" data-tooltip-placement="bottom"  data-uib-tooltip="Remove Student "  title="Remove Student"><i class="fa fa-list fa-lg"></i></a>';
		
		$scope.studentData.find(key => key.id == value.id).reports_link = reports_link;
		$scope.studentData.find(key => key.id == value.id).remove_class = remove_class;
		$scope.studentData.find(key => key.id == value.id).name = value.first_name+' '+value.last_name;
		if( value.active == "1" ){
			$scope.studentData.find(key => key.id == value.id).active = '<label class="label label-success">Active</label>';
		}else{
			$scope.studentData.find(key => key.id == value.id).active = '<label class="label label-danger">InActive</label>';
		}
		angular.forEach($scope.classes, function (value, key){
			if( $scope.classes.id == value.class_id){
				$scope.studentData.find(key => key.id == value.id).class =  $scope.classes.name;
			}
		});
    });
	$scope.view_reports = function(id){
		$state.go('app.viewReports',{ student_id : id })
	}
	$scope.remove_class = function(id){
		var result = confirm("Do you want to remove this student's account from class.");
		if(result == true){
			$http({
				method:'POST',
				url : $rootScope.baseurl+'UpdateUSerClass',
				data : {
					student_id : id,
				}
				}).then(function(res){  //console.log(res.data);
					$scope.result = res.data;
					if($scope.result == "1"){
						$scope.success_msg = true;
						$timeout(function() {	
						$state.go('app.allCustomClasses');
					}, 2000);
					}else{
						$scope.err_msg = true;
					}
				},function(res)
				{ 
				});
		}else{
			return false;
		}
	}
	
	$scope.studentData = $scope.studentData.reverse();
		$scope.tableOptions =  {  
        "data": $scope.studentData,
        "iDisplayLength": 25,
        "columns": [
            { "data": "name" , "defaultContent": '' },
            { "data": "username"  , "defaultContent": ''},
            { "data": "password"  , "defaultContent": ''},
            { "data": "email" , "defaultContent": ''},
           // { "data": "phone" , "defaultContent": ''},
           // { "data": "class" , "defaultContent": ''},
         //   { "data": "address" , "defaultContent": ''},
            { "data": "active" , "defaultContent": '' },
            { "data": "reports_link" , "defaultContent": '' },
            { "data": "remove_class" , "defaultContent": '' },
        ],
        "order": [[4, 'asc']],
		"stripeClasses": [ 'info', ' ' ],
		
    }
});
//=========================end admin dashboard======================//
//========================= student dashboard  ======================//
'use strict';

angular.module('app.studentDashboard', [
    'ui.router',
    'ngResource'
])

.config(function ($stateProvider) {
    $stateProvider
        .state('app.studentDashboard', {
            url: '/studentDashboard',
            views: {
                "content@app": {
                    controller: 'studentDashboardCtrl',
                    templateUrl: 'app/studentDashboard.html',
					resolve: {
                         studentData: function($http, APP_CONFIG ,$rootScope){
							return $http.post($rootScope.baseurl+'/getUserId');
							
						}
                    } 
                }
            },
            data:{
                title: 'Dashboard'
            }  
        });
});

'use strict';

angular.module('app.studentDashboard').controller('studentDashboardCtrl', function ($scope, $interval,$http,studentData ,$timeout,$rootScope) {
	var user_id = studentData.data;
	$http({	
			method:'POST',
			url : $rootScope.baseurl+'getUserData',
			data : { user_id : user_id }
			}).then(function(res){ 
				$scope.user_data = res.data;
				$scope.classid = $scope.user_data.class_id;
				/* ============= */
				$http({	
						method:'POST',
						url : $rootScope.baseurl+'getClass',
						data :  {
									class_id : $scope.classid
								} ,
							}).then(function(res){ 
								$scope.class_name = res.data;
								//console.log(res.data);
							},function(res)
							{ 
							});
				
				/* =============== */
				
				$scope.country_d = $scope.user_data.country ;
				if( $scope.user_data.country == 'Canada'){
					$scope.user_data.country = '38';
				}
				else if( $scope.user_data.country == 'Mexico'){
					$scope.user_data.country = '142';
				}
				else if( $scope.user_data.country == 'United States'){
					$scope.user_data.country = '231';
				}else{
					$scope.user_data.country = 'other';
				}					
				var country = $scope.user_data.country ;	
				if(country != 'other'){
					$http({	
						method:'POST',
						url : $rootScope.baseurl+'getStates',
						data :  {
									country : country
								} ,
							}).then(function(res){ 
								$scope.states = res.data;
							},function(res)
							{ 
							});
				}		
			},function(res)
			{ 
			});
			
	$http({	
			method:'POST',
			url : $rootScope.baseurl+'getClasses',
		}).then(function(res){ 
			$scope.classes = res.data;
		},function(res)
		{ 
		});		
			
	$scope.edit_profile = function(){
		$scope.editForm = true;
	}
	$scope.close_form = function(){
		$scope.editForm = false;
	}
	
	$scope.check_mail_update = function(){
		$http({	
				method:'POST',
				url : $rootScope.baseurl+'check_mail_update',
				data :  {
							email :  $scope.user_data.email,
							id : $scope.user_data.id,
						} ,
				}).then(function(res){ 
					//	console.log( res );
						if(res.data=="error"){
							$scope.email_exist = true;
						}else{
							$scope.email_exist = false;
						}
				},function(res)
				{ 
				});
	}
	$scope.setstate = function(){
		var country = $scope.user_data.country ; 
		if(country != 'other'){
			$http({	
				method:'POST',
				url : $rootScope.baseurl+'getStates',
				data :  {
							country : country
						} ,
				}).then(function(res){ 
					$scope.states = res.data;
					
				},function(res)
				{ 
				});
		}
		
	}
	
	$scope.editstudent = function(){
		//console.log($scope.user_data);
		if( $scope.user_data.country == '38'){
			$scope.user_data.country = 'Canada';
		}
		else if( $scope.user_data.country == '142'){
			$scope.user_data.country = 'Mexico';
		}
		else if( $scope.user_data.country == '231'){
			$scope.user_data.country = 'United States';
		}else{
			$scope.user_data.country = 'other';
		}
		var student_data= $scope.user_data;
		$scope.country_d = $scope.user_data.country ;				
		$http({		
				method:'POST',
				url : $rootScope.baseurl+"/updateUser",
				data : student_data,
			
			}).then(function(res){
				//console.log(res.data);
				$scope.editForm = false;
				if( res.data == true){
					$scope.successMessage = "Profile Updated Successfully";
					$scope.successMessagebool = true;
					$timeout(function() {
						$scope.successMessagebool = false;
					}, 2000);
					if( $scope.user_data.country == 'Canada'){
					$scope.user_data.country = '38';
				}
				else if( $scope.user_data.country == 'Mexico'){
					$scope.user_data.country = '142';
				}
				else if( $scope.user_data.country == 'United States'){
					$scope.user_data.country = '231';
				}else{
					$scope.user_data.country = 'other';
				}	
				}else{
					$scope.successMessage = "Error occured";
					$scope.successMessagebool1 = true;
					$timeout(function() {
						$scope.successMessagebool1 = false;
					}, 2000);
				}
			},function(res)
			{
						
			}); 
	}		
			
			
			
	
});
//==========================   logout (shweta)   ==============//
'use strict';

angular.module('app.logout', [
    'ui.router',
    'ngResource'
])

.config(function ($stateProvider) {
    $stateProvider
        .state('app.logout', {
            url: '/logout',
            views: {
                "content@app": {
                    controller: 'logoutCtrl', 
                }
            },
            data:{
                title: 'Dashboard'
            }
        });
});
'use strict';

angular.module('app.logout').controller('logoutCtrl', function ($scope, $interval,$http ,$window,$rootScope) {
	$http({	
			method:'POST',
			url : $rootScope.baseurl+'logout',
			}).then(function(res){
				$window.location.href = $rootScope.baseurl;
			},function(res)
			{ 
		});
});
/*================== Manage Class by amit====================*/

'use strict';

angular.module('app.manageClass', [
    'ui.router',
    'ngResource'
])

.config(function ($stateProvider) {
    $stateProvider
        .state('app.manageClass', {
            url: '/manageClass',
            views: {
                "content@app": {
                    controller: 'manageClassCtrl',
                    templateUrl: 'app/manageClass.html',
					resolve: {
                         teacherData: function($http, APP_CONFIG ,$rootScope){
							return $http.post($rootScope.baseurl+'/getTeacherId');
							
						}
                    } 
                }
            },
            data:{
                title: 'Dashboard'
            }
        });
});

'use strict';

angular.module('app.manageClass').controller('manageClassCtrl', function ($scope, $interval , teacherData , $http ,$rootScope ,$state ) {
	$scope.user_data = teacherData.data;
	$scope.classes = [];
	if(!($scope.user_data[0]=="")){
		angular.forEach($scope.user_data,function(value,key){
			$scope.classes.push(value[0]);
		});
	}
//	console.log($scope.classes);
	if( $scope.classes.length>0 ){
		angular.forEach($scope.classes,function(value,key){
			if( value.active == "1" ){
				$scope.classes.find(key => key.id == value.id).active = '<label class="label label-success">Active</label>';
			}else{
				$scope.classes.find(key => key.id == value.id).active = '<label class="label label-danger">InActive</label>';
			}	
			var all_students =  '<a onclick=\'angular.element(this).scope().view_students("'+ value.id +'");\' class="btn btn-primary" data-tooltip-placement="bottom"  data-uib-tooltip="View Reports"  title="View reports">View Class Roster</a>';
			$scope.classes.find(key => key.id == value.id).all_students = all_students;
		})
	}
	$scope.classes = $scope.classes.reverse();
	$scope.tableOptions =  {  
        "data": $scope.classes,
        "iDisplayLength": 25,
        "columns": [
            { "data": "name" , "defaultContent": '' },
            { "data": "active" , "defaultContent": '' },
            { "data": "all_students" , "defaultContent": '' },
        ],
        "order": [[2, 'asc']],
		"stripeClasses": [ 'info', ' ' ],
		
    }
	$scope.view_students =function(id){
		$state.go('app.roasterReports',{class_id : id});
	}	
});



/*================== end ==================*/




'use strict';

angular.module('app.teacherDashboard', [
    'ui.router',
    'ngResource'
])

.config(function ($stateProvider) {
    $stateProvider
        .state('app.teacherDashboard', {
            url: '/teacher_dashboard',
            views: {
                "content@app": {
                    controller: 'teacherDashboardCtrl',
                    templateUrl: 'app/teacherDashboard.html',
					resolve: {
                        teacherData: function($http, APP_CONFIG,$rootScope){
							return  $http.post($rootScope.baseurl+'/getUserId');
						}
                    } 
                }
            },
            data:{
                title: 'Dashboard'
            }
        });
});

'use strict';

angular.module('app.teacherDashboard').controller('teacherDashboardCtrl', function ($scope, $interval,$http,teacherData ,$rootScope ,$timeout) {
	var user_id = teacherData.data; 
	$rootScope.user_role = 'teacher'; 
	$scope.data = 'test';
	$http({	
			method:'POST',
			url : $rootScope.baseurl+'getUserData',
			data : { user_id : user_id }
			}).then(function(res){ 
				$scope.user_data = res.data;
				$scope.country_d = $scope.user_data.country ;
				if( $scope.user_data.country == 'Canada'){
					$scope.user_data.country = '38';
				}
				else if( $scope.user_data.country == 'Mexico'){
					$scope.user_data.country = '142';
				}
				else if( $scope.user_data.country == 'United States'){
					$scope.user_data.country = '231';
				}else{
					$scope.user_data.country = 'other';
				}					
				var country = $scope.user_data.country ;
					$http({	
						method:'POST',
						url : $rootScope.baseurl+'getStates',
						data :  {
									country : country
								} ,
							}).then(function(res){ 
								$scope.states = res.data;
								$scope.classid = $scope.user_data.class_id	
								$http({	
									method:'POST',
									url : $rootScope.baseurl+'getTeacherClass',
									data :  {
												class_id : $scope.classid
											} ,
										}).then(function(res){ 
											$scope.class_name = res.data;
											//console.log(res.data);
										},function(res)
										{ 
										});
							},function(res)
							{ 
							});
						
			},function(res)
			{ 
			});
	$scope.edit_profile = function(){
		$scope.editForm = true;
	}
	/* 
	$http({	
			method:'POST',
			url : $rootScope.baseurl+'getClasses',
		}).then(function(res){ 
			$scope.classes = res.data;
		},function(res)
		{ 
		}); */
	
	$scope.setstate = function(){
		var country = $scope.user_data.country ; 
		if(country != 'other'){
			$http({	
				method:'POST',
				url : $rootScope.baseurl+'getStates',
				data :  {
							country : country
						} ,
				}).then(function(res){ 
					$scope.states = res.data;
					
				},function(res)
				{ 
				});
		}
		
	}
	
	$scope.close_form = function(){
		$scope.editForm = false;
	}
	
	$scope.edit_teacher = function(){ //console.log($scope.user_data);
		if( $scope.user_data.country == '38'){
			$scope.user_data.country = 'Canada';
		}
		else if( $scope.user_data.country == '142'){
			$scope.user_data.country = 'Mexico';
		}
		else if( $scope.user_data.country == '231'){
			$scope.user_data.country = 'United States';
		}else{
			$scope.user_data.country = 'other';
		}	
		$scope.country_d = $scope.user_data.country ;
		var teacher_data= $scope.user_data;
			//console.log(teacher_data);		
		$http({		
				method:'POST',
				url : $rootScope.baseurl+"/updateUser",
				data : teacher_data,
			
			}).then(function(res){
			//	console.log(res.data);
				$scope.editForm = false;
				if( res.data == true){
					$scope.successMessage = "Detail Updated Successfully";
					$scope.successMessagebool = true;
					$timeout(function() {
						$scope.successMessagebool = false;
					}, 2000);
					if( $scope.user_data.country == 'Canada'){
					$scope.user_data.country = '38';
				}
				else if( $scope.user_data.country == 'Mexico'){
					$scope.user_data.country = '142';
				}
				else if( $scope.user_data.country == 'United States'){
					$scope.user_data.country = '231';
				}else{
					$scope.user_data.country = 'other';
				}	
				}else{
					$scope.successMessage = "Error occured";
					$scope.successMessagebool1 = true;
					$timeout(function() {
						$scope.successMessagebool1 = false;
					}, 2000);
				}
			},function(res)
			{
						
			}); 
	}		
	
	
	$scope.check_mail_update = function(){
		$http({	
				method:'POST',
				url : $rootScope.baseurl+'check_mail_update',
				data :  {
							email :  $scope.user_data.email,
							id : $scope.user_data.id,
						} ,
				}).then(function(res){ 
					//	console.log( res );
						if(res.data=="error"){
							$scope.email_exist = true;
						}else{
							$scope.email_exist = false;
						}
				},function(res)
				{ 
				});
	}
	

});

'use strict';

angular.module('app.userguide', [
    'ui.router',
    'ngResource'
])

.config(function ($stateProvider) {
    $stateProvider
        .state('app.userguide', {
            url: '/userguide',
            views: {
                "content@app": {
                    controller: 'userguideCtrl',
                    templateUrl: 'app/userguide.html',
                    
                }
            },
            data:{
                title: 'Dashboard'
            }
        });
});

'use strict';

angular.module('app.userguide').controller('userguideCtrl', function ($scope, $interval  , $http ,$rootScope ,$state ) {
	$scope.url = $rootScope.baseurl ;
});



"use strict";


angular.module('app.layout', ['ui.router'])

.config(function ($stateProvider, $urlRouterProvider) {
	
    $stateProvider
        .state('app', {
            abstract: true,
            views: {
                root: {
					controller: 'layoutCtrl',
                    templateUrl: 'app/layout/layout.tpl.html',
					resolve: {
                        sessionData: function($http, APP_CONFIG ,$location ,$rootScope){ 
						$rootScope.baseurl = $location.protocol() + "://" + $location.host()+'/PrepStar/'; 
							return  $http.post($rootScope.baseurl+'/getSessionUser');
						}
                    } 
                }
            }
        });

    $urlRouterProvider.otherwise('/');

})
'use strict';

angular.module('app.layout').controller('layoutCtrl', function ($scope, $interval ,sessionData) {
	$scope.session_user = sessionData.data;
	//console.log($scope.session_user);
});


//=======================End custom modules Prepstar ============================//
    //.config(function(uiGmapGoogleMapApiProvider) {
    //    uiGmapGoogleMapApiProvider.configure({
    //        //    key: 'your api key',
    //        v: '3.20', //defaults to latest 3.X anyhow
    //        libraries: 'weather,geometry,visualization'
    //    });
    //})


"use strict";


angular.module('app.smartAdmin', ['ui.router']);


angular.module('app.smartAdmin').config(function ($stateProvider) {

    $stateProvider
        .state('app.smartAdmin', {
            abstract: true,
            data: {
                title: 'SmartAdmin Intel'
            }
        })

        .state('app.smartAdmin.appLayout', {
            url: '/app-layout',
            data: {
                title: 'App Layout'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/smart-admin/views/app-layout.html'
                }
            }
        })

        .state('app.smartAdmin.diffVer', {
            url: '/different-versions',
            data: {
                title: 'Different Versions'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/smart-admin/views/different-versions.html'
                }
            }
        })

        .state('app.smartAdmin.appLayouts', {
            url: '/app-layouts',
            data: {
                title: 'App Layouts'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/smart-admin/views/app-layouts.html'
                }
            }
        })

        .state('app.smartAdmin.prebuiltSkins', {
            url: '/prebuilt-skins',
            data: {
                title: 'Prebuilt Skins'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/smart-admin/views/prebuilt-skins.html'
                }
            }
        })
});

(function(){
    "use strict";

    angular.module('SmartAdmin', [
        "SmartAdmin.Forms",
        "SmartAdmin.Layout",
        "SmartAdmin.UI",
    ]);
})();
    "use strict";


angular.module('app.chat', ['ngSanitize'])
.run(function ($templateCache) {
	 $templateCache.removeAll();
}) .filter('unsafe', ['$sce', function ($sce) {
    return function (val) {  
        return $sce.trustAsHtml(val);
    };
}]);
(function(){
    "use strict";

    angular.module('SmartAdmin.Forms', []);
})();
(function(){
    "use strict";

    angular.module('SmartAdmin.Layout', []);
})();
(function(){
    "use strict";

    angular.module('SmartAdmin.UI', []);
})();
'use strict';

angular.module('app.dashboard').controller('DashboardCtrl', function ($scope, $interval) {

});

/*

'use strict';

angular.module('app.allTeacherStudents', [
    'ui.router',
    'ngResource',
])

.config(function ($stateProvider) {
    $stateProvider
        .state('app.allTeacherStudents', {
            url: '/all_Students',
            views: {
                "content@app": {
                    controller: 'allTeacherStudentsCtrl',
                    templateUrl: 'app/allStudents.html',
					resolve: {
                        studentData: function($http, APP_CONFIG ,$rootScope){
							return  $http.post($rootScope.baseurl+'getallTeacherStudents');
						}
                    } 
                }
            },
            data:{
                title: 'All Students'
            }
			
        });
});
 
'use strict';

angular.module('app.allTeacherStudents').controller('allTeacherStudentsCtrl', function ($scope, $interval , $http, $compile , $state ,$timeout ,studentData ,$rootScope) {   
	$scope.url = $rootScope.baseurl;
	$scope.studentData = studentData.data; 
	$scope.students_data = []; 
	angular.forEach($scope.studentData,function(value,key){
		angular.forEach(value,function(st_value,st_key){
			$scope.students_data.push(st_value);
			
		})
	})
	$http({	
			method:'POST',
			url : $rootScope.baseurl+'getClasses',
		}).then(function(res){ 
			$scope.classes = res.data;
		},function(res)
		{ 
		});
	angular.forEach($scope.students_data, function (value, key) 
	{  	
		$scope.students_data.find(key => key.id == value.id).name = value.first_name+' '+value.last_name;
		if( value.active == "1" ){
			$scope.students_data.find(key => key.id == value.id).active = 'Active';
		}else{
			$scope.students_data.find(key => key.id == value.id).active = 'Inactive';
		}
		angular.forEach($scope.classes, function (value, key){
			if( $scope.classes.id == value.class_id){
				$scope.students_data.find(key => key.id == value.id).class =  $scope.classes.name;
			}
		});
		var show_details = '<a href="#" class="btn btn-primary" data-toggle="modal" data-target="#view_details" onclick=\'angular.element(this).scope().setSelectedData("'+ value.id +'");\'"  title="View Profile"><i class="fa fa-list fa-lg"></i></a>';
		
		var reports_link =  '<a onclick=\'angular.element(this).scope().view_reports("'+ value.id +'");\' class="btn btn-primary" data-tooltip-placement="bottom"  data-uib-tooltip="View Reports"  title="View reports"><i class="fa  fa-list fa-lg"></i></a>';
		
		var edit_url = '<a onclick=\'angular.element(this).scope().edit_student("'+ value.id +'");\' class="btn btn-primary" data-tooltip-placement="bottom"  data-uib-tooltip="Edit"  title="Edit"><i class="fa fa-edit fa-lg"></i></a>';
		$scope.students_data.find(key => key.id == value.id).edit_url = edit_url;
		$scope.students_data.find(key => key.id == value.id).show_details = show_details;
		$scope.students_data.find(key => key.id == value.id).view_reports = reports_link;
    });
	$scope.setSelectedData = function(id){
		angular.forEach($scope.students_data, function (value, key){
			if(id == value.id){
				$scope.studentDetails = value;
				$scope.studentDetails.student_class = $.grep($scope.classes, function (classe) {
                    return classe.id == $scope.studentDetails.class_id;
                })[0].name;
				
			}
		})
	}
	$scope.view_reports = function(id){
		$state.go('app.viewReports',{ student_id : id })
	}
		$scope.tableOptions =  {  
        "data": $scope.students_data,
        "iDisplayLength": 10,
        "columns": [
            { "data": "name" , "defaultContent": '' },
            { "data": "username"  , "defaultContent": ''},
            { "data": "password"  , "defaultContent": ''},
            { "data": "email" , "defaultContent": ''},
            { "data": "phone" , "defaultContent": ''},
           // { "data": "class" , "defaultContent": ''},
         //   { "data": "address" , "defaultContent": ''},
            { "data": "active" , "defaultContent": '' },
            { "data": "show_details" , "defaultContent": '' },
            { "data": "edit_url" , "defaultContent": '' },
            { "data": "view_reports" , "defaultContent": '' },
        ],
        "order": [[0, 'asc']],
		"stripeClasses": [ 'info', ' ' ],
		
    }
	$scope.edit_student = function(id){
		$state.go('app.editStudent',{student_id : id});
	}
			
});
 */
"use strict";

angular.module('app.auth').directive('loginInfo', function(User){

    return {
        restrict: 'A',
        templateUrl: 'app/auth/directives/login-info.tpl.html',
        link: function(scope, element){
            User.initialized.then(function(){
                scope.user = User
            });
        }
    }
})

"use strict";

angular.module('app.auth').controller('LoginCtrl', function ($scope, $state, GooglePlus, User, ezfb) {

    $scope.$on('event:google-plus-signin-success', function (event, authResult) {
        if (authResult.status.method == 'PROMPT') {
            GooglePlus.getUser().then(function (user) {
                User.username = user.name;
                User.picture = user.picture;
                $state.go('app.dashboard');
            });
        }
    });

    $scope.$on('event:facebook-signin-success', function (event, authResult) {
        ezfb.api('/me', function (res) {
            User.username = res.name;
            User.picture = 'https://graph.facebook.com/' + res.id + '/picture';
            $state.go('app.dashboard');
        });
    });
})



'use strict';

angular.module('app.auth').factory('User', function ($http, $q, APP_CONFIG) {
    var dfd = $q.defer();

    var UserModel = {
        initialized: dfd.promise,
        username: undefined,
        picture: undefined
    };
     $http.get(APP_CONFIG.apiRootUrl + '/user.json').then(function(response){
         UserModel.username = response.data.username;
         UserModel.picture= response.data.picture;
         dfd.resolve(UserModel)
     });

    return UserModel;
});

"use strict";	

angular.module('app').controller("ActivitiesCtrl", function ActivitiesCtrl($scope, $log, activityService){

	$scope.activeTab = 'default';
	$scope.currentActivityItems = [];
	
	// Getting different type of activites
	activityService.get(function(data){

		$scope.activities = data.activities;
		
	});


	$scope.isActive = function(tab){
		return $scope.activeTab === tab;
	};

	$scope.setTab = function(activityType){
		$scope.activeTab = activityType;

		activityService.getbytype(activityType, function(data) {

			$scope.currentActivityItems = data.data;

		});

	};

});
"use strict";

angular.module('app').directive('activitiesDropdownToggle', function($log) {

	var link = function($scope,$element, attrs){
		var ajax_dropdown = null;

		$element.on('click',function(){
			var badge = $(this).find('.badge');

			if (badge.hasClass('bg-color-red')) {

				badge.removeClass('bg-color-red').text(0);

			}

			ajax_dropdown = $(this).next('.ajax-dropdown');

			if (!ajax_dropdown.is(':visible')) {

				ajax_dropdown.fadeIn(150);

				$(this).addClass('active');

			}
			 else {
				
				ajax_dropdown.fadeOut(150);
				
				$(this).removeClass('active');

			}

		})

		$(document).mouseup(function(e) {
			if (ajax_dropdown && !ajax_dropdown.is(e.target) && ajax_dropdown.has(e.target).length === 0) {
				ajax_dropdown.fadeOut(150);
				$element.removeClass('active');
			}
		});
	}
	
	return{
		restrict:'EA',
		link:link
	}
});
"use strict";

angular.module('app').factory('activityService', function($http, $log, APP_CONFIG) {

	function getActivities(callback){

		$http.get(APP_CONFIG.apiRootUrl + '/activities/activity.json').success(function(data){

			callback(data);
				
		}).error(function(){

			$log.log('Error');
			callback([]);

		});

	}

	function getActivitiesByType(type, callback){

		$http.get(APP_CONFIG.apiRootUrl + '/activities/activity-' + type + '.json').success(function(data){

			callback(data);
				
		}).error(function(){

			$log.log('Error');
			callback([]);

		});

	}
	
	return{
		get:function(callback){
			getActivities(callback);
		},
		getbytype:function(type,callback){
			getActivitiesByType(type, callback);
		}
	}
});
"use strict";

angular.module('app').factory('Project', function($http, APP_CONFIG){
    return {
        list: $http.get(APP_CONFIG.apiRootUrl + '/projects.json')
    }
});
"use strict";

angular.module('app').directive('recentProjects', function(Project){
    return {
        restrict: "EA",
        replace: true,
        templateUrl: "app/dashboard/projects/recent-projects.tpl.html",
        scope: true,
        link: function(scope, element){

            Project.list.then(function(response){
                scope.projects = response.data;
            });
            scope.clearProjects = function(){
                scope.projects = [];
            }
        }
    }
});
"use strict";

angular.module('app').controller('TodoCtrl', function ($scope, $timeout, Todo) {
    $scope.newTodo = undefined;

    $scope.states = ['Critical', 'Important', 'Completed'];

    $scope.todos = Todo.getList().$object;

    // $scope.$watch('todos', function(){ }, true)

    $scope.toggleAdd = function () {
        if (!$scope.newTodo) {
            $scope.newTodo = {
                state: 'Important'
            };
        } else {
            $scope.newTodo = undefined;
        }
    };

    $scope.createTodo = function () {
        $scope.todos.push(
           Todo.normalize($scope.newTodo)
        );
        $scope.newTodo = undefined;

    };

    $scope.deleteTodo = function (todo) {
        todo.remove().then(function () {
            $scope.todos.splice($scope.todos.indexOf(todo), 1);
        });

    };

});
"use strict";

angular.module('app').controller("LanguagesCtrl",  function LanguagesCtrl($scope, $rootScope, $log, Language){

    $rootScope.lang = {};
    
    Language.getLanguages(function(data){

        $rootScope.currentLanguage = data[0];

        $rootScope.languages = data;

        Language.getLang(data[0].key,function(data){

            $rootScope.lang = data;
        });

    });

    $scope.selectLanguage = function(language){
        $rootScope.currentLanguage = language;
        
        Language.getLang(language.key,function(data){

            $rootScope.lang = data;
            
        });
    }

    $rootScope.getWord = function(key){
        if(angular.isDefined($rootScope.lang[key])){
            return $rootScope.lang[key];
        } 
        else {
            return key;
        }
    }

});
"use strict";

angular.module('app').factory('Language', function($http, APP_CONFIG){

	function getLanguage(key, callback) {

		$http.get(APP_CONFIG.apiRootUrl + '/langs/' + key + '.json').success(function(data){

			callback(data);
			
		}).error(function(){

			$log.log('Error');
			callback([]);

		});

	}

	function getLanguages(callback) {

		$http.get(APP_CONFIG.apiRootUrl + '/languages.json').success(function(data){

			callback(data);
			
		}).error(function(){

			$log.log('Error');
			callback([]);

		});

	}

	return {
		getLang: function(type, callback) {
			getLanguage(type, callback);
		},
		getLanguages:function(callback){
			getLanguages(callback);
		}
	}

});
"use strict";

angular.module('app').directive('languageSelector', function(Language){
    return {
        restrict: "EA",
        replace: true,
        templateUrl: "app/layout/language/language-selector.tpl.html",
        scope: true
    }
});
"use strict";

angular.module('app').directive('toggleShortcut', function($log,$timeout) {

	var initDomEvents = function($element){

		var shortcut_dropdown = $('#shortcut');

		$element.on('click',function(){
		
			if (shortcut_dropdown.is(":visible")) {
				shortcut_buttons_hide();
			} else {
				shortcut_buttons_show();
			}

		})

		shortcut_dropdown.find('a').click(function(e) {
			e.preventDefault();
			window.location = $(this).attr('href');
			setTimeout(shortcut_buttons_hide, 300);
		});

		

		// SHORTCUT buttons goes away if mouse is clicked outside of the area
		$(document).mouseup(function(e) {
			if (shortcut_dropdown && !shortcut_dropdown.is(e.target) && shortcut_dropdown.has(e.target).length === 0) {
				shortcut_buttons_hide();
			}
		});

		// SHORTCUT ANIMATE HIDE
		function shortcut_buttons_hide() {
			shortcut_dropdown.animate({
				height : "hide"
			}, 300, "easeOutCirc");
			$('body').removeClass('shortcut-on');

		}

		// SHORTCUT ANIMATE SHOW
		function shortcut_buttons_show() {
			shortcut_dropdown.animate({
				height : "show"
			}, 200, "easeOutCirc");
			$('body').addClass('shortcut-on');
		}
	}

	var link = function($scope,$element){
		$timeout(function(){
			initDomEvents($element);
		});
	}

	return{
		restrict:'EA',
		link:link
	}
})
/**
 * Created by griga on 2/9/16.
 */

'use strict';

/*
 * CONVERT DIALOG TITLE TO HTML
 * REF: http://stackoverflow.com/questions/14488774/using-html-in-a-dialogs-title-in-jquery-ui-1-10
 */
$.widget("ui.dialog", $.extend({}, $.ui.dialog.prototype, {
    _title: function (title) {
        if (!this.options.title) {
            title.html("&#160;");
        } else {
            title.html(this.options.title);
        }
    }
}));


"use strict";

angular.module('app.auth').directive('facebookSignin', function ($rootScope, ezfb) {
    return {
        replace: true,
        restrict: 'E',
        template: '<a class="btn btn-block btn-social btn-facebook"><i class="fa fa-facebook"></i> Sign in with Facebook</a>',
        link: function(scope, element){
            element.on('click', function(){
                ezfb.login(function (res) {
                    if (res.authResponse) {
                        $rootScope.$broadcast('event:facebook-signin-success', res.authResponse);
                    }
                }, {scope: 'public_profile'});
            })

        }
    }
});
"use strict";

angular.module('app.auth').directive('googleSignin', function ($rootScope, GooglePlus) {
    return {
        restrict: 'E',
        template: '<a class="g-signin btn btn-block btn-social btn-google-plus"><i class="fa fa-google-plus"></i> Sign in with Google</a>',
        replace: true,
        link: function (scope, element) {
            element.on('click', function(){
                GooglePlus.login().then(function (authResult) {
                    $rootScope.$broadcast('event:google-plus-signin-success', authResult);

                }, function (err) {
                    $rootScope.$broadcast('event:google-plus-signin-failure', err);

                });
            })
        }
    };
});

"use strict";

 angular.module('app').directive('todoList', function ($timeout, Todo) {

    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/dashboard/todo/directives/todo-list.tpl.html',
        scope: {
            todos: '='
        },
        link: function (scope, element, attributes) {
            scope.title = attributes.title
            scope.icon = attributes.icon
            scope.state = attributes.state
            scope.filter = {
                state: scope.state
            }

            element.find('.todo').sortable({
                handle: '.handle',
                connectWith: ".todo",
                receive: function (event, ui) {

                    console.log(ui.item.scope().todo,scope.state)
                    var todo = ui.item.scope().todo;
                    var state = scope.state
                    // // console.log(ui.item, todo, state)
                    // // console.log(state, todo)
                    if (todo && state) {
                        todo.setState(state);
                         // ui.sender.sortable("cancel");
                        // scope.$apply();
                    } else {
                        console.log('Wat', todo, state);
                    }
                    
                }
            }).disableSelection();

        }
    }
});
"use strict";

angular.module('app').factory('Todo', function (Restangular, APP_CONFIG, $httpBackend) {

    var normalize = function(todo) {
        if(!todo._id){
            todo._id = _.unique('todo')
        }
        todo.toggle = function(){
            if (!todo.completedAt) {
                todo.state = 'Completed';
                todo.completedAt = JSON.stringify(new Date());
            } else {
                todo.state = 'Critical';
                todo.completedAt = null;
            }
        };

        todo.setState = function(state){
            todo.state = state;
            if (state == 'Completed') {
                todo.completedAt = JSON.stringify(new Date());
            } else {
                todo.completedAt = null;
            }
        };

        return todo;
    };

    var Todo = Restangular.all(APP_CONFIG.apiRootUrl + '/todos.json');

    Restangular.extendModel(APP_CONFIG.apiRootUrl + '/todos.json', normalize);
    Todo.normalize = normalize;

    return Todo
});
"use strict";

angular.module('SmartAdmin.Layout').directive('fullScreen', function(){
    return {
        restrict: 'A',
        link: function(scope, element){
            var $body = $('body');
            var toggleFullSceen = function(e){
                if (!$body.hasClass("full-screen")) {
                    $body.addClass("full-screen");
                    if (document.documentElement.requestFullscreen) {
                        document.documentElement.requestFullscreen();
                    } else if (document.documentElement.mozRequestFullScreen) {
                        document.documentElement.mozRequestFullScreen();
                    } else if (document.documentElement.webkitRequestFullscreen) {
                        document.documentElement.webkitRequestFullscreen();
                    } else if (document.documentElement.msRequestFullscreen) {
                        document.documentElement.msRequestFullscreen();
                    }
                } else {
                    $body.removeClass("full-screen");
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    } else if (document.webkitExitFullscreen) {
                        document.webkitExitFullscreen();
                    }
                }
            };

            element.on('click', toggleFullSceen);

        }
    }
});
"use strict";

angular.module('SmartAdmin.Layout').directive('minifyMenu', function(){
    return {
        restrict: 'A',
        link: function(scope, element){
                var $body = $('body');
            var minifyMenu = function() {
                if (!$body.hasClass("menu-on-top")) {
                    $body.toggleClass("minified");
                    $body.removeClass("hidden-menu");
                    $('html').removeClass("hidden-menu-mobile-lock");
                }
            };

            element.on('click', minifyMenu);
        }
    }
})
'use strict';

angular.module('SmartAdmin.Layout').directive('reloadState', function ($rootScope) {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('reload-state data-reload-state');
            tElement.on('click', function (e) {
                $rootScope.$state.transitionTo($rootScope.$state.current, $rootScope.$stateParams, {
                    reload: true,
                    inherit: false,
                    notify: true
                });
                e.preventDefault();
            })
        }
    }
});

"use strict";

angular.module('SmartAdmin.Layout').directive('resetWidgets', function($state){

    return {
        restrict: 'A',
        link: function(scope, element){
            element.on('click', function(){
                $.SmartMessageBox({
                    title : "<i class='fa fa-refresh' style='color:green'></i> Clear Local Storage",
                    content : "Would you like to RESET all your saved widgets and clear LocalStorage?1",
                    buttons : '[No][Yes]'
                }, function(ButtonPressed) {
                    if (ButtonPressed == "Yes" && localStorage) {
                        localStorage.clear();
                        location.reload()
                    }
                });

            });
        }
    }

});

'use strict';

angular.module('SmartAdmin.Layout').directive('searchMobile', function () {
    return {
        restrict: 'A',
        compile: function (element, attributes) {
            element.removeAttr('search-mobile data-search-mobile');

            element.on('click', function (e) {
                $('body').addClass('search-mobile');
                e.preventDefault();
            });

            $('#cancel-search-js').on('click', function (e) {
                $('body').removeClass('search-mobile');
                e.preventDefault();
            });
        }
    }
});
"use strict";

angular.module('SmartAdmin.Layout').directive('toggleMenu', function(){
    return {
        restrict: 'A',
        link: function(scope, element){
            var $body = $('body');

            var toggleMenu = function(){
                if (!$body.hasClass("menu-on-top")){
                    $('html').toggleClass("hidden-menu-mobile-lock");
                    $body.toggleClass("hidden-menu");
                    $body.removeClass("minified");
                } else if ( $body.hasClass("menu-on-top") && $body.hasClass("mobile-view-activated") ) {
                    $('html').toggleClass("hidden-menu-mobile-lock");
                    $body.toggleClass("hidden-menu");
                    $body.removeClass("minified");
                }
            };

            element.on('click', toggleMenu);

            scope.$on('requestToggleMenu', function(){
                toggleMenu();
            });
        }
    }
});
'use strict';

angular.module('SmartAdmin.Layout').directive('bigBreadcrumbs', function () {
    return {
        restrict: 'EA',
        replace: true,
        template: '<div><h1 class="page-title txt-color-blueDark"></h1></div>',
        scope: {
            items: '=',
            icon: '@'
        },
        link: function (scope, element) {
            var first = _.first(scope.items);

            var icon = scope.icon || 'home';
            element.find('h1').append('<i class="fa-fw fa fa-' + icon + '"></i> ' + first);
            _.rest(scope.items).forEach(function (item) {
                element.find('h1').append(' <span>> ' + item + '</span>')
            })
        }
    }
});

'use strict';

angular.module('SmartAdmin.Layout').directive('dismisser', function () {
    return {
        restrict: 'A',
        compile: function (element) {
            element.removeAttr('dismisser data-dissmiser')
            var closer = '<button class="close">&times;</button>';
            element.prepend(closer);
            element.on('click', '>button.close', function(){
                element.fadeOut('fast',function(){ $(this).remove(); });

            })
        }
    }
});
'use strict';

angular.module('SmartAdmin.Layout').directive('hrefVoid', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attributes) {
            element.attr('href','#');
            element.on('click', function(e){
                e.preventDefault();
                e.stopPropagation();
            })
        }
    }
});
'use strict';

/*
* Directive for toggling a ng-model with a button
* Source: https://gist.github.com/aeife/9374784
*/

angular.module('SmartAdmin.Layout').directive('radioToggle', function ($log) {
    return {
        scope: {
            model: "=ngModel",
            value: "@value"
        },
        link: function(scope, element, attrs) {

            element.parent().on('click', function() {
                scope.model = scope.value;
                scope.$apply();
            });
        }
    }
});
/**
 * DETECT MOBILE DEVICES
 * Description: Detects mobile device - if any of the listed device is
 *
 * detected class is inserted to <tElement>.
 *
 *  (so far this is covering most hand held devices)
 */
'use strict';

angular.module('SmartAdmin.Layout').directive('smartDeviceDetect', function () {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('smart-device-detect data-smart-device-detect');

            var isMobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
            
            tElement.toggleClass('desktop-detected', !isMobile);
            tElement.toggleClass('mobile-detected', isMobile);


        }
    }
});
/**
 *
 * Description: Directive utilizes FastClick library.
 *
 *
 * FastClick is a simple, easy-to-use library for eliminating the
 * 300ms delay between a physical tap and the firing of a click event on mobile browsers.
 * FastClick doesn't attach any listeners on desktop browsers.
 * @link: https://github.com/ftlabs/fastclick
 *
 * On mobile devices 'needsclick' class is attached to <tElement>
 *
 */


'use strict';

angular.module('SmartAdmin.Layout').directive('smartFastClick', function () {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('smart-fast-click data-smart-fast-click');

            FastClick.attach(tElement);

            if(!FastClick.notNeeded())
                tElement.addClass('needsclick')
        }
    }
});

'use strict';

angular.module('SmartAdmin.Layout').directive('smartFitAppView', function ($rootScope, SmartCss) {
    return {
        restrict: 'A',
        compile: function (element, attributes) {
            element.removeAttr('smart-fit-app-view data-smart-fit-app-view leading-y data-leading-y');

            var leadingY = attributes.leadingY ? parseInt(attributes.leadingY) : 0;

            var selector = attributes.smartFitAppView;

            if(SmartCss.appViewSize && SmartCss.appViewSize.height){
                var height =  SmartCss.appViewSize.height - leadingY < 252 ? 252 :  SmartCss.appViewSize.height - leadingY;
                SmartCss.add(selector, 'height', height+'px');
            }

            var listenerDestroy = $rootScope.$on('$smartContentResize', function (event, data) {
                var height = data.height - leadingY < 252 ? 252 : data.height - leadingY;
                SmartCss.add(selector, 'height', height+'px');
            });

            element.on('$destroy', function () {
                listenerDestroy();
                SmartCss.remove(selector, 'height');
            });


        }
    }
});

"use strict";

angular.module('SmartAdmin.Layout').directive('smartInclude', function () {
        return {
            replace: true,
            restrict: 'A',
            templateUrl: function (element, attr) {
                return attr.smartInclude;
            },
            compile: function(element){
                element[0].className = element[0].className.replace(/placeholder[^\s]+/g, '');
            }
        };
    }
);


'use strict';

angular.module('SmartAdmin.Layout').directive('smartLayout', function ($rootScope, $timeout, $interval, $q, SmartCss, APP_CONFIG) {
    
    var _debug = 0;

    function getDocHeight() {
        var D = document;
        return Math.max(
            D.body.scrollHeight, D.documentElement.scrollHeight,
            D.body.offsetHeight, D.documentElement.offsetHeight,
            D.body.clientHeight, D.documentElement.clientHeight
        );
    }

    var initialized = false, 
           initializedResolver = $q.defer();
    initializedResolver.promise.then(function () {
        initialized = true;
    });

    var $window = $(window),
        $document = $(document),
        $html = $('html'),
        $body = $('body'),
        $navigation ,
        $menu,
        $ribbon,
        $footer,
        $contentAnimContainer;


    (function applyConfigSkin(){
        if(APP_CONFIG.smartSkin){
            $body.removeClass(_.pluck(APP_CONFIG.skins, 'name').join(' '));
            $body.addClass(APP_CONFIG.smartSkin);
        }
    })();


    return {
        priority: 2014,
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('smart-layout data-smart-layout');

            var appViewHeight = 0 ,
                appViewWidth = 0,
                calcWidth,
                calcHeight,
                deltaX,
                deltaY;

            var forceResizeTrigger = false;

            function resizeListener() {

//                    full window height appHeight = Math.max($menu.outerHeight() - 10, getDocHeight() - 10);

                var menuHeight = $body.hasClass('menu-on-top') && $menu.is(':visible') ? $menu.height() : 0;
                var menuWidth = !$body.hasClass('menu-on-top') && $menu.is(':visible') ? $menu.width() + $menu.offset().left : 0;

                var $content = $('#content');
                var contentXPad = $content.outerWidth(true) - $content.width();
                var contentYPad = $content.outerHeight(true) - $content.height();


                calcWidth = $window.width() - menuWidth - contentXPad;
                calcHeight = $window.height() - menuHeight - contentYPad - $navigation.height() - $ribbon.height() - $footer.height();

                deltaX = appViewWidth - calcWidth;
                deltaY = appViewHeight - calcHeight;
                if (Math.abs(deltaX) || Math.abs(deltaY) || forceResizeTrigger) {

                    //console.log('exec', calcWidth, calcHeight);
                    $rootScope.$broadcast('$smartContentResize', {
                        width: calcWidth,
                        height: calcHeight,
                        deltaX: deltaX,
                        deltaY: deltaY
                    });
                    appViewWidth = calcWidth;
                    appViewHeight = calcHeight;
                    forceResizeTrigger = false;
                }
            }


            var looping = false;
            $interval(function () {
                if (looping) loop();
            }, 300);

            var debouncedRun = _.debounce(function () {
                run(300)
            }, 300);

            function run(delay) {
                initializedResolver.promise.then(function () {
                    attachOnResize(delay);
                });
            }

            run(10);

            function detachOnResize() {
                looping = false;
            }

            function attachOnResize(delay) {
                $timeout(function () {
                    looping = true;
                }, delay);
            }

            function loop() {
                $body.toggleClass('mobile-view-activated', $window.width() < 979);

                if ($window.width() < 979)
                    $body.removeClass('minified');

                resizeListener();
            }

            function handleHtmlId(toState) {
                if (toState.data && toState.data.htmlId) $html.attr('id', toState.data.htmlId);
                else $html.removeAttr('id');
            }

            $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
                //console.log(1, '$stateChangeStart', event, toState, toParams, fromState, fromParams);

                handleHtmlId(toState);
                detachOnResize();
            });

            // initialized with 1 cause we came here with one $viewContentLoading request
            var viewContentLoading = 1;
            $rootScope.$on('$viewContentLoading', function (event, viewConfig) {
                //console.log(2, '$viewContentLoading', event, viewConfig);
                viewContentLoading++;
            });

            $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
                //console.log(3, '$stateChangeSuccess', event, toState, toParams, fromState, fromParams);
                forceResizeTrigger = true;
            });

            $rootScope.$on('$viewContentLoaded', function (event) {
                //console.log(4, '$viewContentLoaded', event);
                viewContentLoading--;

                if (viewContentLoading == 0 && initialized) {
                    debouncedRun();
                }
            });
        }
    }
});



'use strict';

angular.module('SmartAdmin.Layout').directive('smartPageTitle', function ($rootScope, $timeout) {
    return {
        restrict: 'A',
        compile: function (element, attributes) {
            element.removeAttr('smart-page-title data-smart-page-title');

            var defaultTitle = attributes.smartPageTitle;
            var listener = function(event, toState, toParams, fromState, fromParams) {
                var title = defaultTitle;
                if (toState.data && toState.data.title) title = toState.data.title + ' | ' + title;
                // Set asynchronously so page changes before title does
                $timeout(function() {
                    $('html head title').text(title);
                });
            };

            $rootScope.$on('$stateChangeStart', listener);

        }
    }
});
'use strict';

angular.module('SmartAdmin.Layout').directive('smartRouterAnimationWrap', function ($rootScope,$timeout) {
    return {
        restrict: 'A',
        compile: function (element, attributes) {
            element.removeAttr('smart-router-animation-wrap data-smart-router-animation-wrap wrap-for data-wrap-for');

            element.addClass('router-animation-container');


            var $loader = $('<div class="router-animation-loader"><i class="fa fa-gear fa-4x fa-spin"></i></div>')
                .css({
                    position: 'absolute',
                    top: 50,
                    left: 10
                }).hide().appendTo(element);


            var animateElementSelector = attributes.wrapFor;
            var viewsToMatch = attributes.smartRouterAnimationWrap.split(/\s/);

            var needRunContentViewAnimEnd = false;
            function contentViewAnimStart() {
                needRunContentViewAnimEnd = true;
                element.css({
                    height: element.height() + 'px',
                    overflow: 'hidden'
                }).addClass('active');
                $loader.fadeIn();

                $(animateElementSelector).addClass('animated faster fadeOutDown');
            }

            function contentViewAnimEnd() {
                if(needRunContentViewAnimEnd){
                    element.css({
                        height: 'auto',
                        overflow: 'visible'
                    }).removeClass('active');
                    

                    $(animateElementSelector).addClass('animated faster fadeInUp');

                    needRunContentViewAnimEnd = false;

                    $timeout(function(){
                        $(animateElementSelector).removeClass('animated');
                    },10);
                }
                $loader.fadeOut();
            }


            var destroyForStart = $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
                var isAnimRequired = _.any(viewsToMatch, function(view){
                   return _.has(toState.views, view) || _.has(fromState.views, view);
                });
                if(isAnimRequired){
                    contentViewAnimStart()
                }
            });

            var destroyForEnd = $rootScope.$on('$viewContentLoaded', function (event) {
                contentViewAnimEnd();
            });

            element.on('$destroy', function(){
                destroyForStart();
                destroyForEnd();

            });



        }
    }
});
angular.module('SmartAdmin.Layout').directive('speechRecognition', function ($log) {
	'use strict';

	$.root_ = $('body');
	var root, commands;

    root = window;
    window.appConfig = window.appConfig || {};

	if (appConfig.voice_command) {
		commands = appConfig.commands;
	}


	/*
	 * SMART VOICE
	 */

	var SpeechRecognition = root.SpeechRecognition || root.webkitSpeechRecognition || root.mozSpeechRecognition || root.msSpeechRecognition || root.oSpeechRecognition;

// ref: http://updates.html5rocks.com/2013/01/Voice-Driven-Web-Apps-Introduction-to-the-Web-Speech-API


// function
	$.speechApp = (function(speech) {

		speech.start = function() {

			// Add our commands to smartSpeechRecognition
			smartSpeechRecognition.addCommands(commands);

			if (smartSpeechRecognition) {
				// activate plugin
				smartSpeechRecognition.start();
				// add btn class
				$.root_.addClass("voice-command-active");
				// play sound
				$.speechApp.playON();
				// set localStorage when switch is on manually
				if (appConfig.voice_localStorage) {
					localStorage.setItem('sm-setautovoice', 'true');
				}

			} else {
				// if plugin not found
				alert("speech plugin not loaded");
			}

		};
		speech.stop = function() {

			if (smartSpeechRecognition) {
				// deactivate plugin
				smartSpeechRecognition.abort();
				// remove btn class
				$.root_.removeClass("voice-command-active");
				// sound
				$.speechApp.playOFF();
				// del localStorage when switch if off manually
				if (appConfig.voice_localStorage) {
					localStorage.setItem('sm-setautovoice', 'false');
				}
				// remove popover if visible
				if ($('#speech-btn .popover').is(':visible')) {
					$('#speech-btn .popover').fadeOut(250);
				}
			}

		};

		// play sound
		speech.playON = function() {

			var audioElement = document.createElement('audio');

			if (navigator.userAgent.match('Firefox/'))
				audioElement.setAttribute('src', appConfig.sound_path + 'voice_on' + ".ogg");
			else
				audioElement.setAttribute('src', appConfig.sound_path + 'voice_on' + ".mp3");

			//$.get();
			audioElement.addEventListener("load", function() {
				audioElement.play();
			}, true);

			if (appConfig.sound_on) {
				audioElement.pause();
				audioElement.play();
			}
		};

		speech.playOFF = function() {

			var audioElement = document.createElement('audio');

			if (navigator.userAgent.match('Firefox/'))
				audioElement.setAttribute('src', appConfig.sound_path + 'voice_off' + ".ogg");
			else
				audioElement.setAttribute('src', appConfig.sound_path + 'voice_off' + ".mp3");

			$.get();
			audioElement.addEventListener("load", function() {
				audioElement.play();
			}, true);

			if (appConfig.sound_on) {
				audioElement.pause();
				audioElement.play();
			}
		};

		speech.playConfirmation = function() {

			var audioElement = document.createElement('audio');

			if (navigator.userAgent.match('Firefox/'))
				audioElement.setAttribute('src', appConfig.sound_path + 'voice_alert' + ".ogg");
			else
				audioElement.setAttribute('src', appConfig.sound_path + 'voice_alert' + ".mp3");

			$.get();
			audioElement.addEventListener("load", function() {
				audioElement.play();
			}, true);

			if (appConfig.sound_on) {
				audioElement.pause();
				audioElement.play();
			}
		};

		return speech;

	})({});



	/*
	 * SPEECH RECOGNITION ENGINE
	 * Copyright (c) 2013 Tal Ater
	 * Modified by MyOrange
	 * All modifications made are hereby copyright (c) 2014 MyOrange
	 */

	(function(undefined) {"use strict";

		// Check browser support
		// This is done as early as possible, to make it as fast as possible for unsupported browsers
		if (!SpeechRecognition) {
			root.smartSpeechRecognition = null;
			return undefined;
		}

		var commandsList = [], recognition, callbacks = {
				start : [],
				error : [],
				end : [],
				result : [],
				resultMatch : [],
				resultNoMatch : [],
				errorNetwork : [],
				errorPermissionBlocked : [],
				errorPermissionDenied : []
			}, autoRestart, lastStartedAt = 0,
		//debugState = false, // decleared in app.appConfig.js
		//appConfig.debugStyle = 'font-weight: bold; color: #00f;', // decleared in app.appConfig.js

		// The command matching code is a modified version of Backbone.Router by Jeremy Ashkenas, under the MIT license.
			optionalParam = /\s*\((.*?)\)\s*/g, optionalRegex = /(\(\?:[^)]+\))\?/g, namedParam = /(\(\?)?:\w+/g, splatParam = /\*\w+/g, escapeRegExp = /[\-{}\[\]+?.,\\\^$|#]/g, commandToRegExp = function(command) {
				command = command.replace(escapeRegExp, '\\$&').replace(optionalParam, '(?:$1)?').replace(namedParam, function(match, optional) {
					return optional ? match : '([^\\s]+)';
				}).replace(splatParam, '(.*?)').replace(optionalRegex, '\\s*$1?\\s*');
				return new RegExp('^' + command + '$', 'i');
			};

		// This method receives an array of callbacks to iterate over, and invokes each of them
		var invokeCallbacks = function(callbacks) {
			callbacks.forEach(function(callback) {
				callback.callback.apply(callback.context);
			});
		};

		var initIfNeeded = function() {
			if (!isInitialized()) {
				root.smartSpeechRecognition.init({}, false);
			}
		};

		var isInitialized = function() {
			return recognition !== undefined;
		};

		root.smartSpeechRecognition = {
			// Initialize smartSpeechRecognition with a list of commands to recognize.
			// e.g. smartSpeechRecognition.init({'hello :name': helloFunction})
			// smartSpeechRecognition understands commands with named variables, splats, and optional words.
			init : function(commands, resetCommands) {

				// resetCommands defaults to true
				if (resetCommands === undefined) {
					resetCommands = true;
				} else {
					resetCommands = !!resetCommands;
				}

				// Abort previous instances of recognition already running
				if (recognition && recognition.abort) {
					recognition.abort();
				}

				// initiate SpeechRecognition
				recognition = new SpeechRecognition();

				// Set the max number of alternative transcripts to try and match with a command
				recognition.maxAlternatives = 5;
				recognition.continuous = true;
				// Sets the language to the default 'en-US'. This can be changed with smartSpeechRecognition.setLanguage()
				recognition.lang = appConfig.voice_command_lang || 'en-US';

				recognition.onstart = function() {
					invokeCallbacks(callbacks.start);
					//debugState
					if (appConfig.debugState) {
						root.console.log('%c ✔ SUCCESS: User allowed access the microphone service to start ', appConfig.debugStyle_success);
						root.console.log('Language setting is set to: ' + recognition.lang, appConfig.debugStyle);
					}
					$.root_.removeClass("service-not-allowed");
					$.root_.addClass("service-allowed");
				};

				recognition.onerror = function(event) {
					invokeCallbacks(callbacks.error);
					switch (event.error) {
						case 'network':
							invokeCallbacks(callbacks.errorNetwork);
							break;
						case 'not-allowed':
						case 'service-not-allowed':
							// if permission to use the mic is denied, turn off auto-restart
							autoRestart = false;
							$.root_.removeClass("service-allowed");
							$.root_.addClass("service-not-allowed");
							//debugState
							if (appConfig.debugState) {
								root.console.log('%c WARNING: Microphone was not detected (either user denied access or it is not installed properly) ', appConfig.debugStyle_warning);
							}
							// determine if permission was denied by user or automatically.
							if (new Date().getTime() - lastStartedAt < 200) {
								invokeCallbacks(callbacks.errorPermissionBlocked);
							} else {
								invokeCallbacks(callbacks.errorPermissionDenied);
								//console.log("You need your mic to be active")
							}
							break;
					}
				};

				recognition.onend = function() {
					invokeCallbacks(callbacks.end);
					// smartSpeechRecognition will auto restart if it is closed automatically and not by user action.
					if (autoRestart) {
						// play nicely with the browser, and never restart smartSpeechRecognition automatically more than once per second
						var timeSinceLastStart = new Date().getTime() - lastStartedAt;
						if (timeSinceLastStart < 1000) {
							setTimeout(root.smartSpeechRecognition.start, 1000 - timeSinceLastStart);
						} else {
							root.smartSpeechRecognition.start();
						}
					}
				};

				recognition.onresult = function(event) {
					invokeCallbacks(callbacks.result);

					var results = event.results[event.resultIndex], commandText;

					// go over each of the 5 results and alternative results received (we've set maxAlternatives to 5 above)
					for (var i = 0; i < results.length; i++) {
						// the text recognized
						commandText = results[i].transcript.trim();
						if (appConfig.debugState) {
							root.console.log('Speech recognized: %c' + commandText, appConfig.debugStyle);
						}

						// try and match recognized text to one of the commands on the list
						for (var j = 0, l = commandsList.length; j < l; j++) {
							var result = commandsList[j].command.exec(commandText);
							if (result) {
								var parameters = result.slice(1);
								if (appConfig.debugState) {
									root.console.log('command matched: %c' + commandsList[j].originalPhrase, appConfig.debugStyle);
									if (parameters.length) {
										root.console.log('with parameters', parameters);
									}
								}
								// execute the matched command
								commandsList[j].callback.apply(this, parameters);
								invokeCallbacks(callbacks.resultMatch);

								// for commands "sound on", "stop" and "mute" do not play sound or display message
								//var myMatchedCommand = commandsList[j].originalPhrase;

								var ignoreCallsFor = ["sound on", "mute", "stop"];

								if (ignoreCallsFor.indexOf(commandsList[j].originalPhrase) < 0) {
									// play sound when match found
									console.log(2);
									$.smallBox({
										title : (commandsList[j].originalPhrase),
										content : "loading...",
										color : "#333",
										sound_file : 'voice_alert',
										timeout : 2000
									});

									if ($('#speech-btn .popover').is(':visible')) {
										$('#speech-btn .popover').fadeOut(250);
									}
								}// end if

								return true;
							}
						} // end for
					}// end for

					invokeCallbacks(callbacks.resultNoMatch);
					//console.log("no match found for: " + commandText)
					$.smallBox({
						title : "Error: <strong>" + ' " ' + commandText + ' " ' + "</strong> no match found!",
						content : "Please speak clearly into the microphone",
						color : "#a90329",
						timeout : 5000,
						icon : "fa fa-microphone"
					});
					if ($('#speech-btn .popover').is(':visible')) {
						$('#speech-btn .popover').fadeOut(250);
					}
					return false;
				};

				// build commands list
				if (resetCommands) {
					commandsList = [];
				}
				if (commands.length) {
					this.addCommands(commands);
				}
			},

			// Start listening (asking for permission first, if needed).
			// Call this after you've initialized smartSpeechRecognition with commands.
			// Receives an optional options object:
			// { autoRestart: true }
			start : function(options) {
				initIfNeeded();
				options = options || {};
				if (options.autoRestart !== undefined) {
					autoRestart = !!options.autoRestart;
				} else {
					autoRestart = true;
				}
				lastStartedAt = new Date().getTime();
				recognition.start();
			},

			// abort the listening session (aka stop)
			abort : function() {
				autoRestart = false;
				if (isInitialized) {
					recognition.abort();
				}
			},

			// Turn on output of debug messages to the console. Ugly, but super-handy!
			debug : function(newState) {
				if (arguments.length > 0) {
					appConfig.debugState = !!newState;
				} else {
					appConfig.debugState = true;
				}
			},

			// Set the language the user will speak in. If not called, defaults to 'en-US'.
			// e.g. 'fr-FR' (French-France), 'es-CR' (Español-Costa Rica)
			setLanguage : function(language) {
				initIfNeeded();
				recognition.lang = language;
			},

			// Add additional commands that smartSpeechRecognition will respond to. Similar in syntax to smartSpeechRecognition.init()
			addCommands : function(commands) {
				var cb, command;

				initIfNeeded();

				for (var phrase in commands) {
					if (commands.hasOwnProperty(phrase)) {
						cb = root[commands[phrase]] || commands[phrase];
						if ( typeof cb !== 'function') {
							continue;
						}
						//convert command to regex
						command = commandToRegExp(phrase);

						commandsList.push({
							command : command,
							callback : cb,
							originalPhrase : phrase
						});
					}
				}
				if (appConfig.debugState) {
					root.console.log('Commands successfully loaded: %c' + commandsList.length, appConfig.debugStyle);
				}
			},

			// Remove existing commands. Called with a single phrase, array of phrases, or methodically. Pass no params to remove all commands.
			removeCommands : function(commandsToRemove) {
				if (commandsToRemove === undefined) {
					commandsList = [];
					return;
				}
				commandsToRemove = Array.isArray(commandsToRemove) ? commandsToRemove : [commandsToRemove];
				commandsList = commandsList.filter(function(command) {
					for (var i = 0; i < commandsToRemove.length; i++) {
						if (commandsToRemove[i] === command.originalPhrase) {
							return false;
						}
					}
					return true;
				});
			},

			// Lets the user add a callback of one of 9 types:
			// start, error, end, result, resultMatch, resultNoMatch, errorNetwork, errorPermissionBlocked, errorPermissionDenied
			// Can also optionally receive a context for the callback function as the third argument
			addCallback : function(type, callback, context) {
				if (callbacks[type] === undefined) {
					return;
				}
				var cb = root[callback] || callback;
				if ( typeof cb !== 'function') {
					return;
				}
				callbacks[type].push({
					callback : cb,
					context : context || this
				});
			}
		};

	}).call(this);

	var autoStart = function() {

		smartSpeechRecognition.addCommands(commands);

		if (smartSpeechRecognition) {
			// activate plugin
			smartSpeechRecognition.start();
			// add btn class
			$.root_.addClass("voice-command-active");
			// set localStorage when switch is on manually
			if (appConfig.voice_localStorage) {
				localStorage.setItem('sm-setautovoice', 'true');
			}

		} else {
			// if plugin not found
			alert("speech plugin not loaded");
		}
	}
// if already running with localstorage
	if (SpeechRecognition && appConfig.voice_command && localStorage.getItem('sm-setautovoice') == 'true') {
		autoStart();
	}

// auto start
	if (SpeechRecognition && appConfig.voice_command_auto && appConfig.voice_command) {
		autoStart();
	}


	var link = function(scope, element) {


		if (SpeechRecognition && appConfig.voice_command) {

			// create dynamic modal instance
			var modal = $('<div class="modal fade" id="voiceModal" tabindex="-1" role="dialog" aria-labelledby="remoteModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"></div></div></div>');
			// attach to body
			modal.appendTo("body");

			element.on("click", function(e) {

            	if ($.root_.hasClass("voice-command-active")) {
					$.speechApp.stop();
					//$('#speech-btn > span > a > i').removeClass().addClass('fa fa-microphone-slash');
				} else {
					$.speechApp.start();
					//add popover
					$('#speech-btn .popover').fadeIn(350);
					//$('#speech-btn > span > a > i').removeClass().addClass('fa fa-microphone')

				}

				e.preventDefault();

            });

			//remove popover
			$(document).mouseup(function(e) {
				if (!$('#speech-btn .popover').is(e.target) && $('#speech-btn .popover').has(e.target).length === 0) {
					$('#speech-btn .popover').fadeOut(250);
				}
			});


			$("#speech-help-btn").on("click", function() {
				commands.help();
			});

		}
		else {
			$("#speech-btn").addClass("display-none");
		}


	}



    return {
        restrict: 'AE',
        link: link
    }
});

'use strict';

angular.module('SmartAdmin.Layout').directive('stateBreadcrumbs', function ($rootScope, $state) {


    return {
        restrict: 'EA',
        replace: true,
        template: '<ol class="breadcrumb"><li>Home</li></ol>',
        link: function (scope, element) {

            function setBreadcrumbs(breadcrumbs) {
                var html = '<li>Home</li>';
                angular.forEach(breadcrumbs, function (crumb) {
                    html += '<li>' + crumb + '</li>'
                });
                element.html(html)
            }

            function fetchBreadcrumbs(stateName, breadcrunbs) {

                var state = $state.get(stateName);

                if (state && state.data && state.data.title && breadcrunbs.indexOf(state.data.title) == -1) {
                    breadcrunbs.unshift(state.data.title)
                }

                var parentName = stateName.replace(/.?\w+$/, '');
                if (parentName) {
                    return fetchBreadcrumbs(parentName, breadcrunbs);
                } else {
                    return breadcrunbs;
                }
            }

            function processState(state) {
                var breadcrumbs;
                if (state.data && state.data.breadcrumbs) {
                    breadcrumbs = state.data.breadcrumbs;
                } else {
                    breadcrumbs = fetchBreadcrumbs(state.name, []);
                }
                setBreadcrumbs(breadcrumbs);
            }

            processState($state.current);

            $rootScope.$on('$stateChangeStart', function (event, state) {
                processState(state);
            })
        }
    }
});
'use strict';
/* 
angular.module('SmartAdmin.Layout').factory('lazyScript', function($q, $http){

    var cache = {};

    function isPending(scriptName){
        return (cache.hasOwnProperty(scriptName) && cache[scriptName].promise && cache[scriptName].promise.$$state.pending)
    }

    function isRegistered(scriptName){
        return cache.hasOwnProperty(scriptName)
    }
    function loadScript(scriptName){
        if(!cache[scriptName]){
            cache[scriptName] = $q.defer();
            var el = document.createElement( 'script' );
            el.onload = function(script){
                console.log('script is lazy loaded:', scriptName)
                cache[scriptName].resolve(scriptName);
            };
            el.src = scriptName;
            var x = document.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(el, x);
            
        }
        return cache[scriptName].promise;

    }

    function register(scriptName){
        if(isPending(scriptName)){
            return cache[scriptName].promise
        }
        if(isRegistered(scriptName)){
            return $q.resolve(scriptName);
        } else {
            var dfd = $q.defer();

            loadScript(scriptName).then(function(){
                dfd.resolve(scriptName);
            });

            return dfd.promise; 

        }
    }
    return {
        register: function (scripts) {
            
            var dfd = $q.defer();
            var promises = [];
            if (angular.isString(scripts))
                scripts = [scripts];

            angular.forEach(scripts, function(script){
                promises.push(register(script));
            })

            $q.all(promises).then(function(resolves){
                dfd.resolve(resolves);
            })
            return dfd.promise;

        }
    };
}); */
'use strict';

angular.module('SmartAdmin.Layout').factory('SmartCss', function ($rootScope, $timeout) {

    var sheet = (function () {
        // Create the <style> tag
        var style = document.createElement("style");

        // Add a media (and/or media query) here if you'd like!
        // style.setAttribute("media", "screen")
        // style.setAttribute("media", "@media only screen and (max-width : 1024px)")

        // WebKit hack :(
        style.appendChild(document.createTextNode(""));

        // Add the <style> element to the page
        document.head.appendChild(style);

        return style.sheet;
    })();

    var _styles = {};


    var SmartCss = {
        writeRule: function(selector){
            SmartCss.deleteRuleFor(selector);
            if(_.has(_styles, selector)){
                var css = selector + '{ ' + _.map(_styles[selector], function(v, k){
                    return  k + ':' +  v + ';'
                }).join(' ') +'}';
                sheet.insertRule(css, _.size(_styles) - 1);
            }
        },
        add: function (selector, property, value, delay) {
            if(!_.has(_styles, selector))
                _styles[selector] = {};

            if(value == undefined || value == null || value == '')
                delete _styles[selector][property];
            else
                _styles[selector][property] = value;


            if(_.keys(_styles[selector]).length == 0)
                delete _styles[selector];

            if(!delay)
                delay = 0;
            $timeout(function(){
                SmartCss.writeRule(selector);
            }, delay);

        },
        remove: function(selector, property, delay){
            SmartCss.add(selector, property, null, delay);
        },
        deleteRuleFor: function (selector) {
            _(sheet.rules).forEach(function (rule, idx) {
                if (rule.selectorText == selector) {
                    sheet.deleteRule(idx);
                }
            });
        },
        appViewSize: null
    };

    $rootScope.$on('$smartContentResize', function (event, data) {
        SmartCss.appViewSize = data;
    });

    return SmartCss;

});





"use strict";

angular.module('SmartAdmin.UI').directive('smartPopoverHtml', function () {
    return {
        restrict: "A",
        link: function(scope, element, attributes){
            var options = {};
            options.content = attributes.smartPopoverHtml;
            options.placement = attributes.popoverPlacement || 'top';
            options.html = true;
            options.trigger =  attributes.popoverTrigger || 'click';
            options.title =  attributes.popoverTitle || attributes.title;
            element.popover(options)

        }

    };
});


"use strict";

angular.module('SmartAdmin.UI').directive('smartTooltipHtml', function () {
        return {
            restrict: 'A',
            link: function(scope, element, attributes){
                element.tooltip({
                    placement: attributes.tooltipPlacement || 'top',
                    html: true,
                    title: attributes.smartTooltipHtml
                })
            }
        };
    }
);

"use strict";


angular.module('SmartAdmin.Forms').directive('bootstrapAttributeForm', function(){

    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/bootstrap-validation/bootstrap-attribute-form.tpl.html',
        link: function(scope, form){
            form.bootstrapValidator();


        }

    }
});
"use strict";


angular.module('SmartAdmin.Forms').directive('bootstrapButtonGroupForm', function(){

    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/bootstrap-validation/bootstrap-button-group-form.tpl.html',
        link: function(scope, form){
            form.bootstrapValidator({
                excluded : ':disabled',
                feedbackIcons : {
                    valid : 'glyphicon glyphicon-ok',
                    invalid : 'glyphicon glyphicon-remove',
                    validating : 'glyphicon glyphicon-refresh'
                },
                fields : {
                    gender : {
                        validators : {
                            notEmpty : {
                                message : 'The gender is required'
                            }
                        }
                    },
                    'languages[]' : {
                        validators : {
                            choice : {
                                min : 1,
                                max : 2,
                                message : 'Please choose 1 - 2 languages you can speak'
                            }
                        }
                    }
                }
            });


        }

    }
});
"use strict";


angular.module('SmartAdmin.Forms').directive('bootstrapContactForm', function(){

    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/bootstrap-validation/bootstrap-contact-form.tpl.html',
        link: function(scope, form){
            form.bootstrapValidator({
                container : '#messages',
                feedbackIcons : {
                    valid : 'glyphicon glyphicon-ok',
                    invalid : 'glyphicon glyphicon-remove',
                    validating : 'glyphicon glyphicon-refresh'
                },
                fields : {
                    fullName : {
                        validators : {
                            notEmpty : {
                                message : 'The full name is required and cannot be empty'
                            }
                        }
                    },
                    email : {
                        validators : {
                            notEmpty : {
                                message : 'The email address is required and cannot be empty'
                            },
                            emailAddress : {
                                message : 'The email address is not valid'
                            }
                        }
                    },
                    title : {
                        validators : {
                            notEmpty : {
                                message : 'The title is required and cannot be empty'
                            },
                            stringLength : {
                                max : 100,
                                message : 'The title must be less than 100 characters long'
                            }
                        }
                    },
                    content : {
                        validators : {
                            notEmpty : {
                                message : 'The content is required and cannot be empty'
                            },
                            stringLength : {
                                max : 500,
                                message : 'The content must be less than 500 characters long'
                            }
                        }
                    }
                }
            });

        }

    }

});
"use strict";


angular.module('SmartAdmin.Forms').directive('bootstrapMovieForm', function(){

    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/bootstrap-validation/bootstrap-movie-form.tpl.html',
        link: function(scope, form){
            form.bootstrapValidator({
                feedbackIcons : {
                    valid : 'glyphicon glyphicon-ok',
                    invalid : 'glyphicon glyphicon-remove',
                    validating : 'glyphicon glyphicon-refresh'
                },
                fields : {
                    title : {
                        group : '.col-md-8',
                        validators : {
                            notEmpty : {
                                message : 'The title is required'
                            },
                            stringLength : {
                                max : 200,
                                message : 'The title must be less than 200 characters long'
                            }
                        }
                    },
                    genre : {
                        group : '.col-md-4',
                        validators : {
                            notEmpty : {
                                message : 'The genre is required'
                            }
                        }
                    },
                    director : {
                        group : '.col-md-4',
                        validators : {
                            notEmpty : {
                                message : 'The director name is required'
                            },
                            stringLength : {
                                max : 80,
                                message : 'The director name must be less than 80 characters long'
                            }
                        }
                    },
                    writer : {
                        group : '.col-md-4',
                        validators : {
                            notEmpty : {
                                message : 'The writer name is required'
                            },
                            stringLength : {
                                max : 80,
                                message : 'The writer name must be less than 80 characters long'
                            }
                        }
                    },
                    producer : {
                        group : '.col-md-4',
                        validators : {
                            notEmpty : {
                                message : 'The producer name is required'
                            },
                            stringLength : {
                                max : 80,
                                message : 'The producer name must be less than 80 characters long'
                            }
                        }
                    },
                    website : {
                        group : '.col-md-6',
                        validators : {
                            notEmpty : {
                                message : 'The website address is required'
                            },
                            uri : {
                                message : 'The website address is not valid'
                            }
                        }
                    },
                    trailer : {
                        group : '.col-md-6',
                        validators : {
                            notEmpty : {
                                message : 'The trailer link is required'
                            },
                            uri : {
                                message : 'The trailer link is not valid'
                            }
                        }
                    },
                    review : {
                        // The group will be set as default (.form-group)
                        validators : {
                            stringLength : {
                                max : 500,
                                message : 'The review must be less than 500 characters long'
                            }
                        }
                    },
                    rating : {
                        // The group will be set as default (.form-group)
                        validators : {
                            notEmpty : {
                                message : 'The rating is required'
                            }
                        }
                    }
                }
            });

        }

    }

});
"use strict";


angular.module('SmartAdmin.Forms').directive('bootstrapProductForm', function(){

    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/bootstrap-validation/bootstrap-product-form.tpl.html',
        link: function(scope, form){
            form.bootstrapValidator({
                feedbackIcons : {
                    valid : 'glyphicon glyphicon-ok',
                    invalid : 'glyphicon glyphicon-remove',
                    validating : 'glyphicon glyphicon-refresh'
                },
                fields : {
                    price : {
                        validators : {
                            notEmpty : {
                                message : 'The price is required'
                            },
                            numeric : {
                                message : 'The price must be a number'
                            }
                        }
                    },
                    amount : {
                        validators : {
                            notEmpty : {
                                message : 'The amount is required'
                            },
                            numeric : {
                                message : 'The amount must be a number'
                            }
                        }
                    },
                    color : {
                        validators : {
                            notEmpty : {
                                message : 'The color is required'
                            }
                        }
                    },
                    size : {
                        validators : {
                            notEmpty : {
                                message : 'The size is required'
                            }
                        }
                    }
                }
            });
        }

    }
});
"use strict";


angular.module('SmartAdmin.Forms').directive('bootstrapProfileForm', function(){

    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/bootstrap-validation/bootstrap-profile-form.tpl.html',
        link: function(scope, form){
           form.bootstrapValidator({
                feedbackIcons : {
                    valid : 'glyphicon glyphicon-ok',
                    invalid : 'glyphicon glyphicon-remove',
                    validating : 'glyphicon glyphicon-refresh'
                },
                fields : {
                    email : {
                        validators : {
                            notEmpty : {
                                message : 'The email address is required'
                            },
                            emailAddress : {
                                message : 'The email address is not valid'
                            }
                        }
                    },
                    password : {
                        validators : {
                            notEmpty : {
                                message : 'The password is required'
                            }
                        }
                    }
                }
            });
        }

    }

});
"use strict";


angular.module('SmartAdmin.Forms').directive('bootstrapTogglingForm', function(){

    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/_common/forms/directives/bootstrap-validation/bootstrap-toggling-form.tpl.html',
        link: function(scope, form){
            form.bootstrapValidator({
                feedbackIcons : {
                    valid : 'glyphicon glyphicon-ok',
                    invalid : 'glyphicon glyphicon-remove',
                    validating : 'glyphicon glyphicon-refresh'
                },
                fields : {
                    firstName : {
                        validators : {
                            notEmpty : {
                                message : 'The first name is required'
                            }
                        }
                    },
                    lastName : {
                        validators : {
                            notEmpty : {
                                message : 'The last name is required'
                            }
                        }
                    },
                    company : {
                        validators : {
                            notEmpty : {
                                message : 'The company name is required'
                            }
                        }
                    },
                    // These fields will be validated when being visible
                    job : {
                        validators : {
                            notEmpty : {
                                message : 'The job title is required'
                            }
                        }
                    },
                    department : {
                        validators : {
                            notEmpty : {
                                message : 'The department name is required'
                            }
                        }
                    },
                    mobilePhone : {
                        validators : {
                            notEmpty : {
                                message : 'The mobile phone number is required'
                            },
                            digits : {
                                message : 'The mobile phone number is not valid'
                            }
                        }
                    },
                    // These fields will be validated when being visible
                    homePhone : {
                        validators : {
                            digits : {
                                message : 'The home phone number is not valid'
                            }
                        }
                    },
                    officePhone : {
                        validators : {
                            digits : {
                                message : 'The office phone number is not valid'
                            }
                        }
                    }
                }
            }).find('button[data-toggle]').on('click', function() {
                var $target = $($(this).attr('data-toggle'));
                // Show or hide the additional fields
                // They will or will not be validated based on their visibilities
                $target.toggle();
                if (!$target.is(':visible')) {
                    // Enable the submit buttons in case additional fields are not valid
                    form.data('bootstrapValidator').disableSubmitButtons(false);
                }
            });
        }

    }



});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartCkEditor', function () {
    return {
        restrict: 'A',
        compile: function ( tElement) {
            tElement.removeAttr('smart-ck-editor data-smart-ck-editor');
            //CKEDITOR.basePath = 'bower_components/ckeditor/';

            CKEDITOR.replace( tElement.attr('name'), { height: '380px', startupFocus : true} );
        }
    }
});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartDestroySummernote', function () {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('smart-destroy-summernote data-smart-destroy-summernote')
            tElement.on('click', function() {
                angular.element(tAttributes.smartDestroySummernote).destroy();
            })
        }
    }
});

'use strict';

angular.module('SmartAdmin.Forms').directive('smartEditSummernote', function () {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('smart-edit-summernote data-smart-edit-summernote');
            tElement.on('click', function(){
                angular.element(tAttributes.smartEditSummernote).summernote({
                    focus : true
                });  
            });
        }
    }
});

'use strict';

angular.module('SmartAdmin.Forms').directive('smartMarkdownEditor', function () {
    return {
        restrict: 'A',
        compile: function (element, attributes) {
            element.removeAttr('smart-markdown-editor data-smart-markdown-editor')

            var options = {
                autofocus:false,
                savable:true,
                fullscreen: {
                    enable: false
                }
            };

            if(attributes.height){
                options.height = parseInt(attributes.height);
            }

            element.markdown(options);
        }
    }
});

'use strict';

angular.module('SmartAdmin.Forms').directive('smartSummernoteEditor', function (lazyScript) {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('smart-summernote-editor data-smart-summernote-editor');

            var options = {
                focus : true,
                tabsize : 2
            };

            if(tAttributes.height){
                options.height = tAttributes.height;
            }

            lazyScript.register('build/vendor.ui.js').then(function(){
                tElement.summernote(options);                
            });
        }
    }
});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartCheckoutForm', function (formsCommon, lazyScript) {
    return {
        restrict: 'A',
        link: function (scope, form) {
           lazyScript.register('build/vendor.ui.js').then(function(){

               scope.countries = formsCommon.countries;

               form.validate(angular.extend({
                    // Rules for form validation
                    rules : {
                        fname : {
                            required : true
                        },
                        lname : {
                            required : true
                        },
                        email : {
                            required : true,
                            email : true
                        },
                        phone : {
                            required : true
                        },
                        country : {
                            required : true
                        },
                        city : {
                            required : true
                        },
                        code : {
                            required : true,
                            digits : true
                        },
                        address : {
                            required : true
                        },
                        name : {
                            required : true
                        },
                        card : {
                            required : true,
                            creditcard : true
                        },
                        cvv : {
                            required : true,
                            digits : true
                        },
                        month : {
                            required : true
                        },
                        year : {
                            required : true,
                            digits : true
                        }
                    },

                    // Messages for form validation
                    messages : {
                        fname : {
                            required : 'Please enter your first name'
                        },
                        lname : {
                            required : 'Please enter your last name'
                        },
                        email : {
                            required : 'Please enter your email address',
                            email : 'Please enter a VALID email address'
                        },
                        phone : {
                            required : 'Please enter your phone number'
                        },
                        country : {
                            required : 'Please select your country'
                        },
                        city : {
                            required : 'Please enter your city'
                        },
                        code : {
                            required : 'Please enter code',
                            digits : 'Digits only please'
                        },
                        address : {
                            required : 'Please enter your full address'
                        },
                        name : {
                            required : 'Please enter name on your card'
                        },
                        card : {
                            required : 'Please enter your card number'
                        },
                        cvv : {
                            required : 'Enter CVV2',
                            digits : 'Digits only'
                        },
                        month : {
                            required : 'Select month'
                        },
                        year : {
                            required : 'Enter year',
                            digits : 'Digits only please'
                        }
                    }
                }, formsCommon.validateOptions));
            });
        }
    }
});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartCommentForm', function (formsCommon, lazyScript) {
    return {
        restrict: 'A',
        link: function (scope, form) {
            lazyScript.register('build/vendor.ui.js').then(function(){
                form.validate(angular.extend({
                    // Rules for form validation
                    rules : {
                        name : {
                            required : true
                        },
                        email : {
                            required : true,
                            email : true
                        },
                        url : {
                            url : true
                        },
                        comment : {
                            required : true
                        }
                    },

                    // Messages for form validation
                    messages : {
                        name : {
                            required : 'Enter your name',
                        },
                        email : {
                            required : 'Enter your email address',
                            email : 'Enter a VALID email'
                        },
                        url : {
                            email : 'Enter a VALID url'
                        },
                        comment : {
                            required : 'Please enter your comment'
                        }
                    },

                    // Ajax form submition
                    submitHandler : function() {
                        form.ajaxSubmit({
                            success : function() {
                                form.addClass('submited');
                            }
                        });
                    }

                }, formsCommon.validateOptions));
            });

        }
    }
});

'use strict';

angular.module('SmartAdmin.Forms').directive('smartContactsForm', function (formsCommon, lazyScript) {
    return {
        restrict: 'A',
        link: function (scope, form) {
            lazyScript.register('build/vendor.ui.js').then(function(){
                form.validate(angular.extend({
                    // Rules for form validation
                    rules : {
                        name : {
                            required : true
                        },
                        email : {
                            required : true,
                            email : true
                        },
                        message : {
                            required : true,
                            minlength : 10
                        }
                    },

                    // Messages for form validation
                    messages : {
                        name : {
                            required : 'Please enter your name'
                        },
                        email : {
                            required : 'Please enter your email address',
                            email : 'Please enter a VALID email address'
                        },
                        message : {
                            required : 'Please enter your message'
                        }
                    },

                    // Ajax form submition
                    submitHandler : function() {
                        form.ajaxSubmit({
                            success : function() {
                                form.addClass('submited');
                            }
                        });
                    }
                }, formsCommon.validateOptions));
            });
        }
    }
});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartOrderForm', function (formsCommon, lazyScript) {
    return {
        restrict: 'E',
        link: function (scope, form) {
            lazyScript.register('build/vendor.ui.js').then(function(){
                form.validate(angular.extend({
                    // Rules for form validation
                    rules : {
                        name : {
                            required : true
                        },
                        email : {
                            required : true,
                            email : true
                        },
                        phone : {
                            required : true
                        },
                        interested : {
                            required : true
                        },
                        budget : {
                            required : true
                        }
                    },

                    // Messages for form validation
                    messages : {
                        name : {
                            required : 'Please enter your name'
                        },
                        email : {
                            required : 'Please enter your email address',
                            email : 'Please enter a VALID email address'
                        },
                        phone : {
                            required : 'Please enter your phone number'
                        },
                        interested : {
                            required : 'Please select interested service'
                        },
                        budget : {
                            required : 'Please select your budget'
                        }
                    },

                }, formsCommon.validateOptions));
            });

        }
    }
});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartRegistrationForm', function (formsCommon, lazyScript) {
    return {
        restrict: 'A',
        link: function (scope, form, attributes) {
            lazyScript.register('build/vendor.ui.js').then(function(){
                form.validate(angular.extend({

                    // Rules for form validation
                    rules: {
                        username: {
                            required: true
                        },
                        email: {
                            required: true,
                            email: true
                        },
                        password: {
                            required: true,
                            minlength: 3,
                            maxlength: 20
                        },
                        passwordConfirm: {
                            required: true,
                            minlength: 3,
                            maxlength: 20,
                            equalTo: '#password'
                        },
                        firstname: {
                            required: true
                        },
                        lastname: {
                            required: true
                        },
                        gender: {
                            required: true
                        },
                        terms: {
                            required: true
                        }
                    },

                    // Messages for form validation
                    messages: {
                        login: {
                            required: 'Please enter your login'
                        },
                        email: {
                            required: 'Please enter your email address',
                            email: 'Please enter a VALID email address'
                        },
                        password: {
                            required: 'Please enter your password'
                        },
                        passwordConfirm: {
                            required: 'Please enter your password one more time',
                            equalTo: 'Please enter the same password as above'
                        },
                        firstname: {
                            required: 'Please select your first name'
                        },
                        lastname: {
                            required: 'Please select your last name'
                        },
                        gender: {
                            required: 'Please select your gender'
                        },
                        terms: {
                            required: 'You must agree with Terms and Conditions'
                        }
                    }

                }, formsCommon.validateOptions));
            });
        }
    }
});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartReviewForm', function (formsCommon, lazyScript) {
    return {
        restrict: 'E',
        link: function (scope, form) {
            lazyScript.register('build/vendor.ui.js').then(function(){

                form.validate(angular.extend({
                    // Rules for form validation
                    rules : {
                        name : {
                            required : true
                        },
                        email : {
                            required : true,
                            email : true
                        },
                        review : {
                            required : true,
                            minlength : 20
                        },
                        quality : {
                            required : true
                        },
                        reliability : {
                            required : true
                        },
                        overall : {
                            required : true
                        }
                    },

                    // Messages for form validation
                    messages : {
                        name : {
                            required : 'Please enter your name'
                        },
                        email : {
                            required : 'Please enter your email address',
                            email : '<i class="fa fa-warning"></i><strong>Please enter a VALID email addres</strong>'
                        },
                        review : {
                            required : 'Please enter your review'
                        },
                        quality : {
                            required : 'Please rate quality of the product'
                        },
                        reliability : {
                            required : 'Please rate reliability of the product'
                        },
                        overall : {
                            required : 'Please rate the product'
                        }
                    }

                }, formsCommon.validateOptions));
            });
        }
    }
});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartJcrop', function ($q) {
    return {
        restrict: 'A',
        scope: {
            coords: '=',
            options: '=',
            selection: '='
        },
        link: function (scope, element, attributes) {
            var jcropApi, imageWidth, imageHeight, imageLoaded = $q.defer();

            var listeners = {
                onSelectHandlers: [],
                onChangeHandlers: [],
                onSelect: function (c) {
                    angular.forEach(listeners.onSelectHandlers, function (handler) {
                        handler.call(jcropApi, c)
                    })
                },
                onChange: function (c) {
                    angular.forEach(listeners.onChangeHandlers, function (handler) {
                        handler.call(jcropApi, c)
                    })
                }
            };

            if (attributes.coords) {
                var coordsUpdate = function (c) {
                    scope.$apply(function () {
                        scope.coords = c;
                    });
                };
                listeners.onSelectHandlers.push(coordsUpdate);
                listeners.onChangeHandlers.push(coordsUpdate);
            }

            var $previewPane = $(attributes.smartJcropPreview),
                $previewContainer = $previewPane.find('.preview-container'),
                $previewImg = $previewPane.find('img');

            if ($previewPane.length && $previewImg.length) {
                var previewUpdate = function (coords) {
                    if (parseInt(coords.w) > 0) {
                        var rx = $previewContainer.width() / coords.w;
                        var ry = $previewContainer.height() / coords.h;

                        $previewImg.css({
                            width: Math.round(rx * imageWidth) + 'px',
                            height: Math.round(ry * imageHeight) + 'px',
                            marginLeft: '-' + Math.round(rx * coords.x) + 'px',
                            marginTop: '-' + Math.round(ry * coords.y) + 'px'
                        });
                    }
                };
                listeners.onSelectHandlers.push(previewUpdate);
                listeners.onChangeHandlers.push(previewUpdate);
            }


            var options = {
                onSelect: listeners.onSelect,
                onChange: listeners.onChange
            };

            if ($previewContainer.length) {
                options.aspectRatio = $previewContainer.width() / $previewContainer.height()
            }

            if (attributes.selection) {
                scope.$watch('selection', function (newVal, oldVal) {
                    if (newVal != oldVal) {
                        var rectangle = newVal == 'release' ? [imageWidth / 2, imageHeight / 2, imageWidth / 2, imageHeight / 2] : newVal;

                        var callback = newVal == 'release' ? function () {
                            jcropApi.release();
                        } : angular.noop;

                        imageLoaded.promise.then(function () {
                            if (scope.options && scope.options.animate) {
                                jcropApi.animateTo(rectangle, callback);
                            } else {
                                jcropApi.setSelect(rectangle);
                            }
                        });
                    }
                });
            }

            if (attributes.options) {

                var optionNames = [
                    'bgOpacity', 'bgColor', 'bgFade', 'shade', 'outerImage',
                    'allowSelect', 'allowMove', 'allowResize',
                    'aspectRatio'
                ];

                angular.forEach(optionNames, function (name) {
                    if (scope.options[name])
                        options[name] = scope.options[name]

                    scope.$watch('options.' + name, function (newVal, oldVal) {
                        if (newVal != oldVal) {
                            imageLoaded.promise.then(function () {
                                var update = {};
                                update[name] = newVal;
                                jcropApi.setOptions(update);
                            });
                        }
                    });

                });


                scope.$watch('options.disabled', function (newVal, oldVal) {
                    if (newVal != oldVal) {
                        if (newVal) {
                            jcropApi.disable();
                        } else {
                            jcropApi.enable();
                        }
                    }
                });

                scope.$watch('options.destroyed', function (newVal, oldVal) {
                    if (newVal != oldVal) {
                        if (newVal) {
                            jcropApi.destroy();
                        } else {
                            _init();
                        }
                    }
                });

                scope.$watch('options.src', function (newVal, oldVal) {
                    imageLoaded = $q.defer();
                    if (newVal != oldVal) {
                        jcropApi.setImage(scope.options.src, function () {
                            imageLoaded.resolve();
                        });
                    }
                });

                var updateSize = function(){
                    jcropApi.setOptions({
                        minSize: [scope.options.minSizeWidth, scope.options.minSizeHeight],
                        maxSize: [scope.options.maxSizeWidth, scope.options.maxSizeHeight]
                    });
                };

                scope.$watch('options.minSizeWidth', function (newVal, oldVal) {
                    if (newVal != oldVal) updateSize();
                });
                scope.$watch('options.minSizeHeight', function (newVal, oldVal) {
                    if (newVal != oldVal) updateSize();
                });
                scope.$watch('options.maxSizeWidth', function (newVal, oldVal) {
                    if (newVal != oldVal) updateSize();
                });
                scope.$watch('options.maxSizeHeight', function (newVal, oldVal) {
                    if (newVal != oldVal) updateSize();
                });
            }

            var _init = function () {
                element.Jcrop(options, function () {
                    jcropApi = this;
                    // Use the API to get the real image size
                    var bounds = this.getBounds();
                    imageWidth = bounds[0];
                    imageHeight = bounds[1];

                    if (attributes.selection && angular.isArray(scope.selection)) {
                        if (scope.options && scope.options.animate) {
                            jcropApi.animateTo(scope.selection);
                        } else {
                            jcropApi.setSelect(scope.selection);
                        }
                    }
                    imageLoaded.resolve();
                });
            };

            _init()


        }
    }
});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartClockpicker', function () {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('smart-clockpicker data-smart-clockpicker');

            var options = {
                placement: 'top',
                donetext: 'Done'
            }

            tElement.clockpicker(options);
        }
    }
});

'use strict';

angular.module('SmartAdmin.Forms').directive('smartColorpicker', function () {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('smart-colorpicker data-smart-colorpicker');


            var aOptions = _.pick(tAttributes, ['']);

            var options = _.extend(aOptions, {});

            tElement.colorpicker(options);
        }
    }
});
"use strict";

angular.module('SmartAdmin.Forms').directive('smartDatepicker', function () {
    return {
        restrict: 'A',
        scope: {
            options: '='
        },
        link: function (scope, element, attributes) {

            var onSelectCallbacks = [];
            if (attributes.minRestrict) {
                onSelectCallbacks.push(function (selectedDate) {
                    $(attributes.minRestrict).datepicker('option', 'minDate', selectedDate);
                });
            }
            if (attributes.maxRestrict) {
                onSelectCallbacks.push(function (selectedDate) {
                    $(attributes.maxRestrict).datepicker('option', 'maxDate', selectedDate);
                });
            }

            //Let others know about changes to the data field
            onSelectCallbacks.push(function (selectedDate) {
                //CVB - 07/14/2015 - Update the scope with the selected value
                element.triggerHandler("change");

                //CVB - 07/17/2015 - Update Bootstrap Validator
                var form = element.closest('form');

                if(typeof form.bootstrapValidator == 'function')
                    form.bootstrapValidator('revalidateField', element.attr('name'));
            });

            var options = _.extend({
                prevText: '<i class="fa fa-chevron-left"></i>',
                nextText: '<i class="fa fa-chevron-right"></i>',
                onSelect: function (selectedDate) {
                    angular.forEach(onSelectCallbacks, function (callback) {
                        callback.call(this, selectedDate)
                    })
                }
            }, scope.options || {});


            if (attributes.numberOfMonths) options.numberOfMonths = parseInt(attributes.numberOfMonths);

            if (attributes.dateFormat) options.dateFormat = attributes.dateFormat;

            if (attributes.defaultDate) options.defaultDate = attributes.defaultDate;

            if (attributes.changeMonth) options.changeMonth = attributes.changeMonth == "true";


            element.datepicker(options)
        }
    }
});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartDuallistbox', function () {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('smart-duallistbox data-smart-duallistbox');


            var aOptions = _.pick(tAttributes, ['nonSelectedFilter']);

            var options = _.extend(aOptions, {
                nonSelectedListLabel: 'Non-selected',
                selectedListLabel: 'Selected',
                preserveSelectionOnMove: 'moved',
                moveOnSelect: false
            });

            tElement.bootstrapDualListbox(options);
        }
    }
});

'use strict';

angular.module('SmartAdmin.Forms').directive('smartIonslider', function (lazyScript) {
    return {
        restrict: 'A',
        compile: function (element, attributes) {
            element.removeAttr('smart-ionslider data-smart-ionslider');

        	lazyScript.register('build/vendor.ui.js').then(function(){
            	element.ionRangeSlider();
        	});
        }
    }
});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartKnob', function () {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('smart-knob data-smart-knob');

            tElement.knob();
        }
    }
});
"use strict";

angular.module('SmartAdmin.Forms').directive('smartMaskedInput', function(lazyScript){
    return {
        restrict: 'A',
        compile: function(tElement, tAttributes){
            tElement.removeAttr('smart-masked-input data-smart-masked-input');

        	lazyScript.register('build/vendor.ui.js').then(function(){

	            var options = {};
	            if(tAttributes.maskPlaceholder) options.placeholder =  tAttributes.maskPlaceholder;
	            tElement.mask(tAttributes.smartMaskedInput, options);
        	})	            
        }
    }
});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartNouislider', function ($parse, lazyScript) {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            lazyScript.register('build/vendor.ui.js').then(function(){
                tElement.removeAttr('smart-nouislider data-smart-nouislider');

                tElement.addClass('noUiSlider');

                var options = {
                    range: {
                        min: tAttributes.rangeMin ? parseInt(tAttributes.rangeMin) : 0,
                        max: tAttributes.rangeMax ? parseInt(tAttributes.rangeMax) : 1000
                    },
                    start: $parse(tAttributes.start)()
                };

                if (tAttributes.step) options.step =  parseInt(tAttributes.step);

                if(tAttributes.connect) options.connect = tAttributes.connect == 'true' ? true : tAttributes.connect;

                tElement.noUiSlider(options);

                if(tAttributes.update) tElement.on('slide', function(){
                    $(tAttributes.update).text(JSON.stringify(tElement.val()));
                });                
            })
        }
    }
});
'use strict'

angular.module('SmartAdmin.Forms').directive('smartSelect2', function (lazyScript) {
    return {
        restrict: 'A',
        compile: function (element, attributes) {
            element.hide().removeAttr('smart-select2 data-smart-select2');
        	lazyScript.register('build/vendor.ui.js').then(function(){
	            element.show().select2();
        	})
        }
    }
});
'use strict'

angular.module('SmartAdmin.Forms').directive('smartSpinner', function () {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('smart-spinner');

            var options = {};
            if(tAttributes.smartSpinner == 'deicimal'){
                options = {
                    step: 0.01,
                    numberFormat: "n"
                };
            }else if(tAttributes.smartSpinner == 'currency'){
                options = {
                    min: 5,
                    max: 2500,
                    step: 25,
                    start: 1000,
                    numberFormat: "C"
                };
            }

            tElement.spinner(options);
        }
    }
});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartTagsinput', function () {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('smart-tagsinput data-smart-tagsinput');
            tElement.tagsinput();
        }
    }
});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartTimepicker', function () {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            tElement.removeAttr('smart-timepicker data-smart-timepicker');
            tElement.timepicker();
        }
    }
});

'use strict';

angular.module('SmartAdmin.Forms').directive('smartUislider', function ($parse, lazyScript) {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {

            tElement.removeAttr('smart-uislider data-smart-uislider');

            lazyScript.register('build/vendor.ui.js').then(function(){
			    tElement.bootstrapSlider();

			    $(tElement.data('bootstrapSlider').sliderElem).prepend(tElement);      	
            })

        }
    }
});
"use strict";

angular.module('SmartAdmin.Forms').directive('smartXeditable', function($timeout, $log){

	function link (scope, element, attrs, ngModel) {

        var defaults = {
            // display: function(value, srcData) {
            //     ngModel.$setViewValue(value);
            //     // scope.$apply();
            // }
        };

        var inited = false;

        var initXeditable = function() {

            var options = scope.options || {};
    		var initOptions = angular.extend(defaults, options);

            // $log.log(initOptions);
            element.editable('destroy');
            element.editable(initOptions);
        }

        scope.$watch("options", function(newValue) {

            if(!newValue) {
                return false;
            }

            initXeditable();

            // $log.log("Options changed...");

        }, true);

    }

    return {
    	restrict: 'A',
    	require: "ngModel",
        scope: {
            options: "="
        },
    	link: link 

    }
});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartDropzone', function () {
    return function (scope, element, attrs) {
        var config, dropzone;

        config = scope[attrs.smartDropzone];

        // create a Dropzone for the element with the given options
        dropzone = new Dropzone(element[0], config.options);

        // bind the given event handlers
        angular.forEach(config.eventHandlers, function (handler, event) {
            dropzone.on(event, handler);
        });
    };
});

'use strict';

angular.module('SmartAdmin.Forms').directive('smartValidateForm', function (formsCommon) {
    return {
        restrict: 'A',
        link: function (scope, form, attributes) {

            var validateOptions = {
                rules: {},
                messages: {},
                highlight: function (element) {
                    $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
                },
                unhighlight: function (element) {
                    $(element).closest('.form-group').removeClass('has-error').addClass('has-success');
                },
                errorElement: 'span',
                errorClass: 'help-block',
                errorPlacement: function (error, element) {
                    if (element.parent('.input-group').length) {
                        error.insertAfter(element.parent());
                    } else {
                        error.insertAfter(element);
                    }
                }
            };
            form.find('[data-smart-validate-input], [smart-validate-input]').each(function () {
                var $input = $(this), fieldName = $input.attr('name');

                validateOptions.rules[fieldName] = {};

                if ($input.data('required') != undefined) {
                    validateOptions.rules[fieldName].required = true;
                }
                if ($input.data('email') != undefined) {
                    validateOptions.rules[fieldName].email = true;
                }

                if ($input.data('maxlength') != undefined) {
                    validateOptions.rules[fieldName].maxlength = $input.data('maxlength');
                }

                if ($input.data('minlength') != undefined) {
                    validateOptions.rules[fieldName].minlength = $input.data('minlength');
                }

                if($input.data('message')){
                    validateOptions.messages[fieldName] = $input.data('message');
                } else {
                    angular.forEach($input.data(), function(value, key){
                        if(key.search(/message/)== 0){
                            if(!validateOptions.messages[fieldName])
                                validateOptions.messages[fieldName] = {};

                            var messageKey = key.toLowerCase().replace(/^message/,'')
                            validateOptions.messages[fieldName][messageKey] = value;
                        }
                    });
                }
            });


            form.validate(validateOptions);

        }
    }
});

'use strict';

angular.module('SmartAdmin.Forms').directive('smartFueluxWizard', function () {
    return {
        restrict: 'A',
        scope: {
            smartWizardCallback: '&'
        },
        link: function (scope, element, attributes) {

            var wizard = element.wizard();

            var $form = element.find('form');

            wizard.on('actionclicked.fu.wizard', function(e, data){
                if ($form.data('validator')) {
                    if (!$form.valid()) {
                        $form.data('validator').focusInvalid();
                        e.preventDefault();
                    }
                }
            });

            wizard.on('finished.fu.wizard', function (e, data) {
                var formData = {};
                _.each($form.serializeArray(), function(field){
                    formData[field.name] = field.value
                });
                if(typeof scope.smartWizardCallback() === 'function'){
                    scope.smartWizardCallback()(formData)
                }
            });
        }
    }
});
'use strict';

angular.module('SmartAdmin.Forms').directive('smartWizard', function () {
    return {
        restrict: 'A',
        scope: {
            'smartWizardCallback': '&'
        },
        link: function (scope, element, attributes) {

            var stepsCount = $('[data-smart-wizard-tab]').length;

            var currentStep = 1;

            var validSteps = [];

            var $form = element.closest('form');

            var $prev = $('[data-smart-wizard-prev]', element);

            var $next = $('[data-smart-wizard-next]', element);

            function setStep(step) {
                currentStep = step;
                $('[data-smart-wizard-pane=' + step + ']', element).addClass('active').siblings('[data-smart-wizard-pane]').removeClass('active');
                $('[data-smart-wizard-tab=' + step + ']', element).addClass('active').siblings('[data-smart-wizard-tab]').removeClass('active');

                $prev.toggleClass('disabled', step == 1)
            }


            element.on('click', '[data-smart-wizard-tab]', function (e) {
                setStep(parseInt($(this).data('smartWizardTab')));
                e.preventDefault();
            });

            $next.on('click', function (e) {
                if ($form.data('validator')) {
                    if (!$form.valid()) {
                        validSteps = _.without(validSteps, currentStep);
                        $form.data('validator').focusInvalid();
                        return false;
                    } else {
                        validSteps = _.without(validSteps, currentStep);
                        validSteps.push(currentStep);
                        element.find('[data-smart-wizard-tab=' + currentStep + ']')
                            .addClass('complete')
                            .find('.step')
                            .html('<i class="fa fa-check"></i>');
                    }
                }
                if (currentStep < stepsCount) {
                    setStep(currentStep + 1);
                } else {
                    if (validSteps.length < stepsCount) {
                        var steps = _.range(1, stepsCount + 1)

                        _(steps).forEach(function (num) {
                            if (validSteps.indexOf(num) == -1) {
                                console.log(num);
                                setStep(num);
                                return false;
                            }
                        })
                    } else {
                        var data = {};
                        _.each($form.serializeArray(), function(field){
                            data[field.name] = field.value
                        });
                        if(typeof  scope.smartWizardCallback() === 'function'){
                            scope.smartWizardCallback()(data)
                        }
                    }
                }

                e.preventDefault();
            });

            $prev.on('click', function (e) {
                if (!$prev.hasClass('disabled') && currentStep > 0) {
                    setStep(currentStep - 1);
                }
                e.preventDefault();
            });


            setStep(currentStep);

        }
    }
});
'use strict';

angular.module('SmartAdmin.Layout').directive('demoStates', function ($rootScope) {
    return {
        restrict: 'EA',
        replace: true,
        templateUrl: 'app/_common/layout/directives/demo/demo-states.tpl.html',
        scope: true,
        link: function (scope, element, attributes) {
            element.parent().css({
                position: 'relative'
            });

            element.on('click', '#demo-setting', function () {
                element.toggleClass('activate')
            })
        },
        controller: function ($scope) {
            var $root = $('body');

            $scope.$watch('fixedHeader', function (fixedHeader) {
                localStorage.setItem('sm-fixed-header', fixedHeader);
                $root.toggleClass('fixed-header', fixedHeader);
                if (fixedHeader == false) {
                    $scope.fixedRibbon = false;
                    $scope.fixedNavigation = false;
                }
            });


            $scope.$watch('fixedNavigation', function (fixedNavigation) {
                localStorage.setItem('sm-fixed-navigation', fixedNavigation);
                $root.toggleClass('fixed-navigation', fixedNavigation);
                if (fixedNavigation) {
                    $scope.insideContainer = false;
                    $scope.fixedHeader = true;
                } else {
                    $scope.fixedRibbon = false;
                }
            });


            $scope.$watch('fixedRibbon', function (fixedRibbon) {
                localStorage.setItem('sm-fixed-ribbon', fixedRibbon);
                $root.toggleClass('fixed-ribbon', fixedRibbon);
                if (fixedRibbon) {
                    $scope.fixedHeader = true;
                    $scope.fixedNavigation = true;
                    $scope.insideContainer = false;
                }
            });

            $scope.$watch('fixedPageFooter', function (fixedPageFooter) {
                localStorage.setItem('sm-fixed-page-footer', fixedPageFooter);
                $root.toggleClass('fixed-page-footer', fixedPageFooter);
            });

            $scope.$watch('insideContainer', function (insideContainer) {
                localStorage.setItem('sm-inside-container', insideContainer);
                $root.toggleClass('container', insideContainer);
                if (insideContainer) {
                    $scope.fixedRibbon = false;
                    $scope.fixedNavigation = false;
                }
            });

            $scope.$watch('rtl', function (rtl) {
                localStorage.setItem('sm-rtl', rtl);
                $root.toggleClass('smart-rtl', rtl);
            });

            $scope.$watch('menuOnTop', function (menuOnTop) {
                $rootScope.$broadcast('$smartLayoutMenuOnTop', menuOnTop);
                localStorage.setItem('sm-menu-on-top', menuOnTop);
                $root.toggleClass('menu-on-top', menuOnTop);

                if(menuOnTop)$root.removeClass('minified');
            });

            $scope.$watch('colorblindFriendly', function (colorblindFriendly) {
                localStorage.setItem('sm-colorblind-friendly', colorblindFriendly);
                $root.toggleClass('colorblind-friendly', colorblindFriendly);
            });


            $scope.fixedHeader = localStorage.getItem('sm-fixed-header') == 'true';
            $scope.fixedNavigation = localStorage.getItem('sm-fixed-navigation') == 'true';
            $scope.fixedRibbon = localStorage.getItem('sm-fixed-ribbon') == 'true';
            $scope.fixedPageFooter = localStorage.getItem('sm-fixed-page-footer') == 'true';
            $scope.insideContainer = localStorage.getItem('sm-inside-container') == 'true';
            $scope.rtl = localStorage.getItem('sm-rtl') == 'true';
            $scope.menuOnTop = localStorage.getItem('sm-menu-on-top') == 'true' || $root.hasClass('menu-on-top');
            $scope.colorblindFriendly = localStorage.getItem('sm-colorblind-friendly') == 'true';


            $scope.skins = appConfig.skins;


            $scope.smartSkin = localStorage.getItem('sm-skin') ? localStorage.getItem('sm-skin') : appConfig.smartSkin;

            $scope.setSkin = function (skin) {
                $scope.smartSkin = skin.name;
                $root.removeClass(_.pluck($scope.skins, 'name').join(' '));
                $root.addClass(skin.name);
                localStorage.setItem('sm-skin', skin.name);
                $("#logo img").attr('src', skin.logo);
            };


            if($scope.smartSkin != "smart-style-0"){
                $scope.setSkin(_.find($scope.skins, {name: $scope.smartSkin}))
            }


            $scope.factoryReset = function () {
                $.SmartMessageBox({
                    title: "<i class='fa fa-refresh' style='color:green'></i> Clear Local Storage",
                    content: "Would you like to RESET all your saved widgets and clear LocalStorage?1",
                    buttons: '[No][Yes]'
                }, function (ButtonPressed) {
                    if (ButtonPressed == "Yes" && localStorage) {
                        localStorage.clear();
                        location.reload()
                    }
                });
            }
        }
    }
});
"use strict";

(function ($) {

    $.fn.smartCollapseToggle = function () {

        return this.each(function () {

            var $body = $('body');
            var $this = $(this);

            // only if not  'menu-on-top'
            if ($body.hasClass('menu-on-top')) {


            } else {

                $body.hasClass('mobile-view-activated')

                // toggle open
                $this.toggleClass('open');

                // for minified menu collapse only second level
                if ($body.hasClass('minified')) {
                    if ($this.closest('nav ul ul').length) {
                        $this.find('>a .collapse-sign .fa').toggleClass('fa-minus-square-o fa-plus-square-o');
                        $this.find('ul:first').slideToggle(appConfig.menu_speed || 200);
                    }
                } else {
                    // toggle expand item
                    $this.find('>a .collapse-sign .fa').toggleClass('fa-minus-square-o fa-plus-square-o');
                    $this.find('ul:first').slideToggle(appConfig.menu_speed || 200);
                }
            }
        });
    };
})(jQuery);

angular.module('SmartAdmin.Layout').directive('smartMenu', function ($state, $rootScope) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var $body = $('body');

            var $collapsible = element.find('li[data-menu-collapse]');

            var bindEvents = function(){
                $collapsible.each(function (idx, li) {
                    var $li = $(li);
                    $li
                        .on('click', '>a', function (e) {

                            // collapse all open siblings
                            $li.siblings('.open').smartCollapseToggle();

                            // toggle element
                            $li.smartCollapseToggle();

                            // add active marker to collapsed element if it has active childs
                            if (!$li.hasClass('open') && $li.find('li.active').length > 0) {
                                $li.addClass('active')
                            }

                            e.preventDefault();
                        })
                        .find('>a').append('<b class="collapse-sign"><em class="fa fa-plus-square-o"></em></b>');

                    // initialization toggle
                    if ($li.find('li.active').length) {
                        $li.smartCollapseToggle();
                        $li.find('li.active').parents('li').addClass('active');
                    }
                });
            }
            bindEvents();


            // click on route link
            element.on('click', 'a[data-ui-sref]', function (e) {
                // collapse all siblings to element parents and remove active markers
                $(this)
                    .parents('li').addClass('active')
                    .each(function () {
                        $(this).siblings('li.open').smartCollapseToggle();
                        $(this).siblings('li').removeClass('active')
                    });

                if ($body.hasClass('mobile-view-activated')) {
                    $rootScope.$broadcast('requestToggleMenu');
                }
            });


            scope.$on('$smartLayoutMenuOnTop', function (event, menuOnTop) {
                if (menuOnTop) {
                    $collapsible.filter('.open').smartCollapseToggle();
                }
            });
        }
    }
});
(function(){
    "use strict";

    angular.module('SmartAdmin.Layout').directive('smartMenuItems', function ($http, $rootScope, $compile) {
    return {
        restrict: 'A',
        compile: function (element, attrs) {
            

            function createItem(item, parent, level){
                var li = $('<li />' ,{'ui-sref-active': "active"})
                var a = $('<a />');
                var i = $('<i />');

                li.append(a);

                if(item.sref)
                    a.attr('ui-sref', item.sref);
                if(item.href)
                    a.attr('href', item.href);
                if(item.icon){
                    i.attr('class', 'fa fa-lg fa-fw fa-'+item.icon);
                    a.append(i);
                }
                if(item.title){
                    a.attr('title', item.title);
                    if(level == 1){ 
                        a.append(' <span class="menu-item-parent">' + item.title + '</span>');
                    } else {
                        a.append(' ' + item.title);

                    }
                }

                if(item.items){
                    var ul = $('<ul />');
                    li.append(ul);
                    li.attr('data-menu-collapse', '');
                    _.forEach(item.items, function(child) {
                        createItem(child, ul, level+1);
                    })
                } 

                parent.append(li); 
            }


            $http.get(attrs.smartMenuItems).then(function(res){
                var ul = $('<ul />', {
                    'smart-menu': ''
                })
                _.forEach(res.data.items, function(item) {
                    createItem(item, ul, 1);
                })
                
                var $scope = $rootScope.$new();
                var html = $('<div>').append(ul).html(); 
                var linkingFunction = $compile(html);
                
                var _element = linkingFunction($scope);

                element.replaceWith(_element);                
            })
        }
    }
});
})();
/**
 * Jarvis Widget Directive
 *
 *    colorbutton="false"
 *    editbutton="false"
      togglebutton="false"
       deletebutton="false"
        fullscreenbutton="false"
        custombutton="false"
        collapsed="true"
          sortable="false"
 *
 *
 */
"use strict";

angular.module('SmartAdmin.Layout').directive('jarvisWidget', function($rootScope){
    return {
        restrict: "A",
        compile: function(element, attributes){
            if(element.data('widget-color'))
                element.addClass('jarviswidget-color-' + element.data('widget-color'));


            element.find('.widget-body').prepend('<div class="jarviswidget-editbox"><input class="form-control" type="text"></div>');

            element.addClass('jarviswidget');
            $rootScope.$emit('jarvisWidgetAdded', element )

        }
    }
});
 "use strict";
 
 angular.module('SmartAdmin.Layout').directive('widgetGrid', function ($rootScope, $compile, $q, $state, $timeout) {

    var jarvisWidgetsDefaults = {
        grid: 'article',
        widgets: '.jarviswidget',
        localStorage: true,
        deleteSettingsKey: '#deletesettingskey-options',
        settingsKeyLabel: 'Reset settings?',
        deletePositionKey: '#deletepositionkey-options',
        positionKeyLabel: 'Reset position?',
        sortable: true,
        buttonsHidden: false,
        // toggle button
        toggleButton: true,
        toggleClass: 'fa fa-minus | fa fa-plus',
        toggleSpeed: 200,
        onToggle: function () {
        },
        // delete btn
        deleteButton: true,
        deleteMsg: 'Warning: This action cannot be undone!',
        deleteClass: 'fa fa-times',
        deleteSpeed: 200,
        onDelete: function () {
        },
        // edit btn
        editButton: true,
        editPlaceholder: '.jarviswidget-editbox',
        editClass: 'fa fa-cog | fa fa-save',
        editSpeed: 200,
        onEdit: function () {
        },
        // color button
        colorButton: true,
        // full screen
        fullscreenButton: true,
        fullscreenClass: 'fa fa-expand | fa fa-compress',
        fullscreenDiff: 3,
        onFullscreen: function () {
        },
        // custom btn
        customButton: false,
        customClass: 'folder-10 | next-10',
        customStart: function () {
            alert('Hello you, this is a custom button...');
        },
        customEnd: function () {
            alert('bye, till next time...');
        },
        // order
        buttonOrder: '%refresh% %custom% %edit% %toggle% %fullscreen% %delete%',
        opacity: 1.0,
        dragHandle: '> header',
        placeholderClass: 'jarviswidget-placeholder',
        indicator: true,
        indicatorTime: 600,
        ajax: true,
        timestampPlaceholder: '.jarviswidget-timestamp',
        timestampFormat: 'Last update: %m%/%d%/%y% %h%:%i%:%s%',
        refreshButton: true,
        refreshButtonClass: 'fa fa-refresh',
        labelError: 'Sorry but there was a error:',
        labelUpdated: 'Last Update:',
        labelRefresh: 'Refresh',
        labelDelete: 'Delete widget:',
        afterLoad: function () {
        },
        rtl: false, // best not to toggle this!
        onChange: function () {

        },
        onSave: function () {

        },
        ajaxnav: true

    }

    var dispatchedWidgetIds = [];
    var setupWaiting = false;

    var debug = 1;

    var setupWidgets = function (element, widgetIds) {

        if (!setupWaiting) {

            if(_.intersection(widgetIds, dispatchedWidgetIds).length != widgetIds.length){

                dispatchedWidgetIds = _.union(widgetIds, dispatchedWidgetIds);

//                    console.log('setupWidgets', debug++);

                element.data('jarvisWidgets') && element.data('jarvisWidgets').destroy();
                element.jarvisWidgets(jarvisWidgetsDefaults);
                initDropdowns(widgetIds);
            }

        } else {
            if (!setupWaiting) {
                setupWaiting = true;
                $timeout(function () {
                    setupWaiting = false;
                    setupWidgets(element, widgetIds)
                }, 200);
            }
        }

    };

    var destroyWidgets = function(element, widgetIds){
        element.data('jarvisWidgets') && element.data('jarvisWidgets').destroy();
        dispatchedWidgetIds = _.xor(dispatchedWidgetIds, widgetIds);
    };

    var initDropdowns = function (widgetIds) {
        angular.forEach(widgetIds, function (wid) {
            $('#' + wid + ' [data-toggle="dropdown"]').each(function () {
                var $parent = $(this).parent();
                // $(this).removeAttr('data-toggle');
                if (!$parent.attr('dropdown')) {
                    $(this).removeAttr('href');
                    $parent.attr('dropdown', '');
                    var compiled = $compile($parent)($parent.scope())
                    $parent.replaceWith(compiled);
                }
            })
        });
    };

    var jarvisWidgetAddedOff,
        $viewContentLoadedOff,
        $stateChangeStartOff;

    return {
        restrict: 'A',
        compile: function(element){

            element.removeAttr('widget-grid data-widget-grid');

            var widgetIds = [];

            $viewContentLoadedOff = $rootScope.$on('$viewContentLoaded', function (event, data) {
                $timeout(function () {
                    setupWidgets(element, widgetIds)
                }, 100);
            });


            $stateChangeStartOff = $rootScope.$on('$stateChangeStart',
                function(event, toState, toParams, fromState, fromParams){
                    jarvisWidgetAddedOff();
                    $viewContentLoadedOff();
                    $stateChangeStartOff();
                    destroyWidgets(element, widgetIds)
                });

            jarvisWidgetAddedOff = $rootScope.$on('jarvisWidgetAdded', function (event, widget) {
                if (widgetIds.indexOf(widget.attr('id')) == -1) {
                    widgetIds.push(widget.attr('id'));
                    $timeout(function () {
                        setupWidgets(element, widgetIds)
                    }, 100);
                }
//                    console.log('jarvisWidgetAdded', widget.attr('id'));
            });

        }
    }
});
