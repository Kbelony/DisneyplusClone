import { useSelector } from "react-redux";
import { selectRecommend } from "../features/movie/movieSlice";
import { ReactElement, JSXElementConstructor, ReactNode, Key } from "react";
import { Link } from "react-router-dom";

const Recommendation = () => {
  const movies = useSelector(selectRecommend);
  return (
    <div className="recommendation-component">
      <h4>Recommandation pour vous</h4>
      <div className="container mt-8 grid gap-6">
        {Array.isArray(movies) &&
          movies.map(
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

export default Recommendation;
