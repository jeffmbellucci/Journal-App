JO.Views.PostsListView = Backbone.View.extend({
	initialize: function () {
		var thisView = this;

		var renderCallback = thisView.render.bind(thisView);
		thisView.collection.on("add", renderCallback);
		thisView.collection.on("remove", renderCallback);
	},
	render: function () {
		var thisView = this;

		var renderedContent = JST["posts/list"]({
			posts: thisView.collection
		});

		thisView.$el.html(renderedContent);
		return thisView;
	}
});