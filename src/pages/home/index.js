import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";

import RecipeList from "../../components/RecipeList";

function Home({ term }) {
  const { data, isPending, error } = useFetch("http://localhost:3000/recipes");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    console.log(term);
    if (term === "") {
      setFilteredData(data);
    } else {
      setFilteredData(
        data.filter((el) => {
          return el.title.toLowerCase().includes(term.toLowerCase());
        })
      );
    }
  }, [term, data]);

  return (
    <div>
      {error && <p>error</p>}
      {isPending && <p>loading</p>}
      {filteredData && <RecipeList recipes={filteredData} />}
    </div>
  );
}

export default Home;
