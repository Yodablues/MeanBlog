'use strict';

angular.module('meanBlog')
  .controller('MainCtrl', function ($scope, $http, socket) {
    $scope.posts = [];

    $http.get('/api/posts').success(function(posts) {
      $scope.posts = posts;
      socket.syncUpdates('post', $scope.posts);
    });

    $scope.addEditPost = function() {
      if($scope.title === '') {
        return;
      }

      if ($scope.postId === '' || typeof $scope.postId === 'undefined'){
        $http.post('/api/posts', { title: $scope.title, body: $scope.body });
      }else{
        $http.put('/api/posts/'+$scope.postId, { title: $scope.title, body: $scope.body });
      }

      $scope.title = '';
      $scope.body = '';
      $scope.postId = '';
    };

    $scope.loadPost = function(post){
      $scope.postId = post._id;
      $scope.title = post.title;
      $scope.body = post.body;

    }

    $scope.deletePost = function(post) {
      $http.delete('/api/posts/' + post._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('post');
    });
  });
