import ReactGA from 'react-ga';

// TODO: refactor initialization
const Analytics = {
  initialize: () =>
    ReactGA.initialize('UA-171584531-1', {
      debug: true,
      siteSpeedSampleRate: 100,
    }),
  pageview: (path) => ReactGA.pageview(path), // window.location.pathname
  modalview: (modalName) => ReactGA.modalview(modalName),
  event: (category, action) => ReactGA.event({ category, action }),
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
