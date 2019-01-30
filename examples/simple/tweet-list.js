import {Core} from "../../src/core/core.js";

// tweet-list.js
Core.register('tweet-list', function(sandbox) {
    return {
      init: function() {
        this.$list = $('#tweet-list');

        this.listen();
      },

      listen: function() {
        sandbox.listen('new-tweet', this.newTweet, this);
      },

      newTweet: function(data) {
        var newTweetHtml = this.getHtml(data);

        this.$list.prepend(newTweetHtml);
      },

      getHtml: function(data) {
        var li = $(
        `<li class="tweetlist-item">
            ${data.author}<br>
            ${data.tweet}
        </li>`);
        li.append();

        return li;
      }
    }
});