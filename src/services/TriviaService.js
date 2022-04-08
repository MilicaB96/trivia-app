import axios from "axios";

class TriviaService {
  getRandomTrivia = async () => {
    const { data } = await axios.get("https://jservice.io/api/random?count=30");
    return data;
  };
}
export default new TriviaService();
