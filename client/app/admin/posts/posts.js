'use strict';

angular.module('meanBlog')
  .config(function ($stateProvider) {
    $stateProvider
      .state('posts', {
        url: '/admin/posts',
        templateUrl: 'app/admin/posts/posts.html',
        controller: 'PostsCtrl'
      });
  });