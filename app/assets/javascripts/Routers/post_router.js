JO.Routers.PostsRouter = Backbone.Router.extend({
	initialize: function($rootEl, posts) {
		this.$rootEl = $rootEl;
		this.posts = posts;
	},

	routes: {
		"": "index",
		"posts/:id": "show"
	},

	index: function () {
		var thisRouter = this;

		var postsListsView = new JO.Views.PostsListView({
			collection: thisRouter.posts
		});
		thisRouter.$rootEl.html(postsListsView.render().$el);
	},
	show: function(id) {
		var thisRouter = this;
		var post = thisRouter.posts.get(id);
		var postView = new JO.Views.PostView({model: post});
		thisRouter.$rootEl.html(postView.render().$el);
	}
});