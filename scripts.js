// backbone Model

var Blog = Backbone.Model.extend({
  defaults: {
    author: '',
    title: '',
    url: ''
  }
});

// backbone Collection

var Blogs = Backbone.Collection.extend({});

// instantiate two Blogs

var blog1 = new Blog({
  author: 'herno',
  title: 'herno\'s blog',
  url: 'http://hernoblog.com'
});

var blog2 = new Blog({
  author: 'peter',
  title: 'peter\'s blog',
  url: 'http://peterblog.com'
});

// instatiate a Collection

var blogs = new Blogs([
  blog1,
  blog2
]);
