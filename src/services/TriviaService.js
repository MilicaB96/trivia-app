import axios from "axios";

class TriviaService {
  getRandomTrivia = async () => {
    const { data } = await axios.get("https://jservice.io/api/random?count=30");
    return data;
  };
  getCategorites = async () => {
    const { data } = await axios.get(
      "https://jservice.io/api/categories?count=10"
    );
    return data;
  };
  getClues = async (category) => {
    const { data } = await axios.get(
      `https://jservice.io/api/clues?category=${category}`
    );
    return data;
  };
}
export default new TriviaService();
