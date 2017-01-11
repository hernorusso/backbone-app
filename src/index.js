import Backbone from 'backbone';

const Blog = Backbone.Model.extend({
  defaults: {
    author: '',
    title: '',
    url: '',
  },
});

// backbone Collection

const Blogs = Backbone.Collection.extend({});

// instantiate two Blogs

const blog1 = new Blog({
  author: 'herno',
  title: 'herno\'s blog',
  url: 'http://hernoblog.com',
});

const blog2 = new Blog({
  author: 'peter',
  title: 'peter\'s blog',
  url: 'http://peterblog.com',
});

// instatiate a Collection

const blogs = new Blogs([
  blog1,
  blog2,
]);

export default blogs;
