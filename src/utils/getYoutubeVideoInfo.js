import axios from 'axios';

/**
 * 유튜브 API로부터 동영상 정보를 조회한다.
 * 
 * @param {string} videoId 
 */
export default async function getYoutubeVideoInfo(videoId) {
  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
  const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet%2C+contentDetails&id=${videoId}&key=${apiKey}`;

  const res = await axios.get(apiUrl);
  const snippet = res.data.items[0].snippet;
  const details = res.data.items[0].contentDetails;

  return {
    ...snippet,
    duration: details.duration
  };
}
