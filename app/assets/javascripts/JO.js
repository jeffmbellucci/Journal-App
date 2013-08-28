window.JO = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},

	initialize: function($rootEl) {
		var posts = new JO.Collections.Posts();

		posts.fetch();

		var postsListView = new JO.Views.PostsListView({
			collection: posts
		});

		$rootEl.html(postsListView.render().$el);

		 new JO.Routers.PostsRouter($rootEl, posts);

		Backbone.history.start();

	}
}

$(document).ready(function() {
	window.JO.initialize($('body'));
})