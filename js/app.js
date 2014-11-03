/*
    app.js: main application script
    this is an Angular application
 */

"use strict";

// create new angular module, all controllers attach to a module; eliminates need for global variables
angular.module('MovieApp', [])
    // when angular sees a $ associated variable, it injects it to the controller
    // $scope = what your view will be able to see; connects view and controller to manipulate the specified variable
    .controller('MoviesController', function($scope) {
        $scope.movies = movies;
        $scope.searchString = '';
        $scope.sortCol = 'rank';
        $scope.sortReverse = false;

        $scope.sortBy = function(colName) {
            if ($scope.sortCol == colName) {
                $scope.sortReverse = !$scope.sortReverse;
            } else {
                $scope.sortReverse = false;
            }
            $scope.sortCol = colName;
        }
    });

