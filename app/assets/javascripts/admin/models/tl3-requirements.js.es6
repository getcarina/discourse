const TL3Requirements = Discourse.Model.extend({
  days_visited_percent: function() {
    return ((this.get('days_visited') * 100) / this.get('time_period'));
  }.property('days_visited', 'time_period'),

  min_days_visited_percent: function() {
    return ((this.get('min_days_visited') * 100) / this.get('time_period'));
  }.property('min_days_visited', 'time_period'),

  met: function() {
    return {
      days_visited: this.get('days_visited') >= this.get('min_days_visited'),
      topics_replied_to: this.get('num_topics_replied_to') >= this.get('min_topics_replied_to'),
      topics_viewed: this.get('topics_viewed') >= this.get('min_topics_viewed'),
      posts_read: this.get('posts_read') >= this.get('min_posts_read'),
      topics_viewed_all_time: this.get('topics_viewed_all_time') >= this.get('min_topics_viewed_all_time'),
      posts_read_all_time: this.get('posts_read_all_time') >= this.get('min_posts_read_all_time'),
      flagged_posts: this.get('num_flagged_posts') <= this.get('max_flagged_posts'),
      flagged_by_users: this.get('num_flagged_by_users') <= this.get('max_flagged_by_users'),
      likes_given: this.get('num_likes_given') >= this.get('min_likes_given'),
      likes_received: this.get('num_likes_received') >= this.get('min_likes_received'),
      likes_received_days: this.get('num_likes_received_days') >= this.get('min_likes_received_days'),
      likes_received_users: this.get('num_likes_received_users') >= this.get('min_likes_received_users'),
      level_locked: this.get('trust_level_locked')
    };
  }.property('days_visited', 'min_days_visited',
             'num_topics_replied_to', 'min_topics_replied_to',
             'topics_viewed', 'min_topics_viewed',
             'posts_read', 'min_posts_read',
             'num_flagged_posts', 'max_flagged_posts',
             'topics_viewed_all_time', 'min_topics_viewed_all_time',
             'posts_read_all_time', 'min_posts_read_all_time',
             'num_flagged_by_users', 'max_flagged_by_users',
             'num_likes_given', 'min_likes_given',
             'num_likes_received', 'min_likes_received',
             'num_likes_received', 'min_likes_received',
             'num_likes_received_days', 'min_likes_received_days',
             'num_likes_received_users', 'min_likes_received_users',
             'trust_level_locked')
});

export default TL3Requirements;
