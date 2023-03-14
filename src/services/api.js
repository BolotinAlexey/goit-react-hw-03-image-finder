import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const KEY = '33299161-c9719a65dfe469cb85eb97047';

export async function readData(query) {
  const response = await axios.get(
    `?key=${KEY}&image_type=photo&orientation=horizontal&per_page=12&q=${query}`
  );
  console.log(response.data);
  return response.data.hits;
}

// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
