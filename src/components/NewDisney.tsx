import { useSelector } from "react-redux";
import { selectNewDisney } from "../features/movie/movieSlice";
import { ReactElement, JSXElementConstructor, ReactNode, Key } from "react";
import { Link } from "react-router-dom";

const NewDisney = () => {
  const newDisney = useSelector(selectNewDisney);
  console.log(newDisney, ":🛢️");
  return (
    <div className="newDisney-component">
      <h4>Nouveau à Disney+</h4>
      <div className="container mt-8 grid gap-6">
        {Array.isArray(newDisney) &&
          newDisney.map(
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
                <Link to={`/detail/` + movie.id}>
                  <img src={movie.cardImg} alt={movie.title} />
                </Link>
              </div>
            )
          )}
      </div>
    </div>
  );
};

export default NewDisney;
