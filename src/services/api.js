import axios from 'axios';
import { PER_PAGE, KEY } from 'services/constants';

axios.defaults.baseURL = 'https://pixabay.com/api';

export async function readData(query, page) {
  const response = await axios.get(
    `?key=${KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}&q=${query}&page=${page}`
  );
  console.log(response.data);
  return response.data;
}
