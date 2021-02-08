import {FC} from "react";

type MoviesDataTypes = {
    Poster: string;
    Title: string;
    Year: string;
    Key: string;
}

export const MoviesComponent: FC<MoviesDataTypes> = ({Title, Poster, Year, Key}: MoviesDataTypes) => {
    return (
        <div className="movie-block" key={Key}>
            <img
                src={Poster !== 'N/A' ? Poster : 'https://via.placeholder.com/200'}
                alt={Poster !== 'N/A' ? `Poster for ${Title}` : `Poster for ${Title} not available`}
            />
            <p>{Title}</p>
            <p>YEAR: {Year}</p>
        </div>
    )
}
