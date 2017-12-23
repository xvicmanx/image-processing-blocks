export default {
  post: (url, payload = {}) => {
    return fetch(
      url,
      {
        method: 'post',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    );
  },
};
