'use strict';

angular.module('meanBlog')
  .factory('Post', function ($resource) {
    return $resource('/api/posts/:id/:controller', {
      id: '@_id'
    },
    {
      update: {
        method: 'put'
      }
      // get: {
      //   method: 'GET',
      //   params: {
      //     id:'me'
      //   }
      // },
      // // query: {
      // //   method: 'GET'
      // // },
      // save: {
      //   method: 'POST',
      //     params:{
      //       _id: '@id',
      //       title: 'title',
      //       body: 'body',
      //       activeDate: 'activeDate'
      //     }
      // }
	  });
  });
