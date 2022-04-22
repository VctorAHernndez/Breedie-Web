import { initialize, pageview, modalview, event } from 'react-ga';

// TODO: refactor initialization
const Analytics = {
  initialize: () =>
    initialize('UA-171584531-1', {
      debug: true,
      siteSpeedSampleRate: 100,
    }),
  pageview: (path) => pageview(path), // window.location.pathname
  modalview: (modalName) => modalview(modalName),
  event: (category, action) => event({ category, action }),
};

/* ModalView */
// /login
// /register
// /new
// /post/:id

/* Event */
// Post, Created a Post
// Post, Liked a Post
// Post, Unliked a Post
// Post, Commented on a Post

export default Analytics;
