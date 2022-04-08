import axios from "axios";

class ChuckService {
  getRandomJoke = async () => {
    const { data } = await axios.get("https://api.chucknorris.io/jokes/random");
    return data.value;
  };
  getJoke = async (category) => {
    const { data } = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${category}`
    );
    return data.value;
  };
}
export default new ChuckService();
