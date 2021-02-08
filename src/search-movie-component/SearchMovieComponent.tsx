import {useEffect, useRef, useState} from "react";
import {MoviesComponent} from "../movies-component/MoviesComponent";
import axios from 'axios';

type MoviesDataTypes = {
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;
}

interface IApiResponseType extends MoviesDataTypes {
    Response: string;
    Search: Array<MoviesDataTypes>;
    totalResults: string;
    Error: string;
}

export const SearchMovieComponent = () => {
    const [submitSearch, setSubmitSearch] = useState<boolean>(false)
    const [moviesData, setMoviesData] = useState<IApiResponseType>();
    const searchValueRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (searchValueRef.current?.value) {
            axios.get(`https://www.omdbapi.com/?s=${searchValueRef.current?.value}&apikey=6185b8e5`)
                .then(response => setMoviesData(response.data)
                )
        }
    }, [submitSearch])

    return (
        <>
            <div className='search-component'>
                <input
                    type="text"
                    name="search_for"
                    ref={searchValueRef}
                />
                <button
                    className="button-margin"
                    onClick={() => setSubmitSearch(!submitSearch)}
                >Szukaj
                </button>
            </div>
            {moviesData?.Response === 'False' ?
                <div className='error_block'>
                    <p>{moviesData?.Error}</p>
                </div>
                :
                moviesData?.Search.map((element: MoviesDataTypes, index: number) => (
                    <div className="container-for-movies">
                        <MoviesComponent key={index}
                                         Key={element.imdbID}
                                         Title={element.Title}
                                         Poster={element.Poster}
                                         Year={element.Year}
                        />
                    </div>
                ))
            }
        </>
    )
}
