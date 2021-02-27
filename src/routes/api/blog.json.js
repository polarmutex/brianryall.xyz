import { allPosts as posts } from '../blog/_posts.js';
const contents = JSON.stringify(posts);

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  res.end(contents);
}
