import { FlexColumn, InnerSection } from "../../Global.Styles";
import { useEffect, useState, useCallback } from "react";
import { SpinnerContainer } from "../../Global.Styles"
import {
    CardsContainer,
    Description,
    HeroSection,
    InnerHeroSection,
    LoadMore,
    MoviesTitle,
    Title,
} from "./HomeScreen.Styles";
import Card from "../../Components/Card/Card";
import CRUDRequests from "../../api/Data"
// import { useParams, useLocation } from 'react-router'

function HomeScreen(props) {
    const [moviesList, setMoviesList] = useState([]);
    const [isLoading, setIsLoading] = useState([true]);
    const [pageNumber, setPageNumber] = useState(1);


    const fetchData = useCallback(async() => {
        setIsLoading(true);
        const response = await CRUDRequests.get(`/movie/popular?api_key=dcf2d1463b5703e25fc8d86eb0fce187&page=${pageNumber}`)
        console.log(response)
        setMoviesList(prevState => [...prevState, ...response.data.results])
        setIsLoading(false);

    }, [pageNumber])

    const handleLoadMore = () => {
        setPageNumber(prevState => prevState + 1)
    }
    useEffect(() => {
        fetchData()
    }, [fetchData, pageNumber])
    return (
            isLoading ? < SpinnerContainer / > :
            <
            FlexColumn >
            <
            HeroSection img = { "https://image.tmdb.org/t/p/w500" + moviesList[0].backdrop_path } >
            <
            InnerHeroSection >
            <
            Title > { moviesList[0].title } < /Title> <
            Description > { moviesList[0].overview } <
            /Description> < /
            InnerHeroSection > <
            /HeroSection> <
            InnerSection >
            <
            MoviesTitle > Popular Movies < /MoviesTitle> <
            CardsContainer > {
                moviesList.map(item => <
                    Card key = { item.id }
                    id = { item.id }
                    name = { item.title }
                    img = {
                        "https://image.tmdb.org/t/p/w500" + item.poster_path
                    }
                    />)} < /
                    CardsContainer >
                    <
                    LoadMore isLoading = { isLoading }
                    onClick = { handleLoadMore } > Load more... < /LoadMore> < /
                    InnerSection > < /
                    FlexColumn >

                );
            }

            export default HomeScreen;