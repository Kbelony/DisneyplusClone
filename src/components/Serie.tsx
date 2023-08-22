import { useSelector } from "react-redux";
import { selectSerie } from "../features/movie/movieSlice";
import { ReactElement, JSXElementConstructor, ReactNode, Key } from "react";
import { Link } from "react-router-dom";

const Serie = () => {
  const serie = useSelector(selectSerie);
  return (
    <div className="originals-component">
      <h4>Séries</h4>
      <div className="container mt-8 grid gap-6">
        {Array.isArray(serie) &&
          serie.map(
            (
              movie: {
                id:
                  | string
                  | number
                  | boolean
                  | ReactElement<
                      unknown,
                      string | JSXElementConstructor<unknown>
                    >
                  | Iterable<ReactNode>
                  | null
                  | undefined;
                cardImg: string | undefined;
                title: string | undefined;
              },
              key: Key | null | undefined
            ) => (
              <div className="wrap" key={key}>
                {movie.id}
                <Link to={`/DisneyplusClone/detail/` + movie.id}>
                  <img src={movie.cardImg} alt={movie.title} />
                </Link>
              </div>
            )
          )}
      </div>
    </div>
  );
};

export default Serie;
