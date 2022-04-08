import axios from "axios";

class ChuckService {
  getRandomJoke = async () => {
    const { data } = await axios.get("https://api.chucknorris.io/jokes/random");
    console.log(data);
    return data.value;
  };
}
export default new ChuckService();
