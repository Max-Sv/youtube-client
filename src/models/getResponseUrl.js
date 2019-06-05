export default function getResponseUrl(value, token) {
  const key = 'AIzaSyDDOiiewv2iadjJnU6dioJUXFW27uqVTKM';
  let url;
  if (token) url = `https://www.googleapis.com/youtube/v3/search?key=${key}&type=video&part=snippet&maxResults=15&q=${value}&pageToken=${token}`;
  else url = `https://www.googleapis.com/youtube/v3/search?key=${key}&type=video&part=snippet&maxResults=15&q=${value}`;
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      const arr = [];
      getResponseUrl.token = data.nextPageToken;
      data.items.forEach(elem => arr.push(elem.id.videoId));
      const staticUrl = `https://www.googleapis.com/youtube/v3/videos?key=${key}&id=${arr.join(',')}&part=snippet,statistics`;
      return fetch(staticUrl).then(res => res.json());
    });
}
