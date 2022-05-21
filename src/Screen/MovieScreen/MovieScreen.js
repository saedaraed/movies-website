import { FlexColumn, InnerSection, FlexRow } from "../../Global.Styles";
import {
    CardsContainer,
    HeroSection,
    InnerHeroSection,
    MoviesTitle,
} from "../HomeScreen/HomeScreen.Styles";
import {
    InfoText,
    MovieDetailsBox,
    MovieImage,
    MovieInfoBox,
    NavigatorContainer,
    NavigatorInnerContainer,
    NavigatorSpan,
    ProgressBar,
    ProgressBarContainer,
    ProgressBarPercentage,
} from "./MovieScreen.Styles";

import ActorCard from "../../Components/ActorCard/ActorCard";
import { useParams, useLocation } from "react-router";
import { useEffect, useState, useCallback } from "react";
import useSearchQuery from "../../Utils/querySearch";
import CRUDRequests from "../../api/Data";
import { SpinnerContainer } from "../../Global.Styles";
import { useNavigate } from "react-router-dom";

function MovieScreen(props) {
    const params = useParams();
    const location = useLocation();
    const query = useSearchQuery(location.search);
    console.log(params, query.get("pageNumber"), query.get("board"));
    console.log(params);
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState([true]);

    const fetchData = useCallback(async() => {
        setIsLoading(true);
        const response = await CRUDRequests.get(
            `/movie/${params.id}?api_key=dcf2d1463b5703e25fc8d86eb0fce187`
        );
        console.log(response);
        setMovie((prevState) => response.data);
        setIsLoading(false);
    }, [params.id]);
    console.log(movie);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const navigate = useNavigate();

    return isLoading ? ( <
        SpinnerContainer / >
    ) : ( <
        FlexColumn >
        <
        NavigatorContainer >
        <
        NavigatorInnerContainer >
        <
        NavigatorSpan onClick = {
            () => navigate(-1) } > Back < /NavigatorSpan>{" "} <
        NavigatorSpan > /{movie.title} </NavigatorSpan > { " " } <
        /NavigatorInnerContainer>{" "} <
        /NavigatorContainer>{" "} <
        HeroSection img = { "https://image.tmdb.org/t/p/w500" + movie.backdrop_path } >
        <
        InnerHeroSection >
        <
        MovieInfoBox >
        <
        MovieImage src = { "http://image.tmdb.org/t/p/w1280/" + movie.poster_path }
        alt = { "movie name" }
        />{" "} <
        MovieDetailsBox >
        <
        InfoText margin = { "0 0 25px" }
        fontSize = { 30 }
        fontWeight = { 700 } >
        Movie Name { " " } <
        /InfoText>{" "} <
        InfoText margin = { "0 0 20px" }
        fontSize = { 16 }
        fontWeight = { 700 } > { " " } { movie.title } { " " } <
        /InfoText>{" "} <
        InfoText margin = { "0 0 20px" }
        fontSize = { 16 }
        fontWeight = { 500 } > { " " } { movie.overview } { " " } <
        /InfoText>{" "} <
        InfoText margin = { "0 0 20px" }
        fontSize = { 16 }
        fontWeight = { 700 } >
        IMDB RATING { " " } <
        /InfoText>{" "} <
        ProgressBarContainer >
        <
        ProgressBar >
        <
        ProgressBarPercentage width = { movie.vote_average * 10 }
        />{" "} <
        /ProgressBar>{" "} <
        InfoText margin = { "0 20px" }
        fontSize = { 16 }
        fontWeight = { 500 } > { " " } { movie.vote_average } { " " } <
        /InfoText>{" "} <
        /ProgressBarContainer>{" "} <
        InfoText margin = { "0 0 20px" }
        fontSize = { 16 }
        fontWeight = { 700 } >
        Tags { " " } <
        /InfoText>{" "} <
        FlexRow > { " " } {
            movie.genres.map((item) => ( <
                InfoText key = { item.id }
                margin = { "0 0 20px" }
                fontSize = { 16 }
                fontWeight = { 500 } >
                { " " } { item.name } { " " } <
                /InfoText>
            ))
        } { " " } <
        /FlexRow>{" "} <
        /MovieDetailsBox>{" "} <
        /MovieInfoBox>{" "} <
        /InnerHeroSection>{" "} <
        /HeroSection>{" "} <
        InnerSection >
        <
        MoviesTitle > Production Companies < /MoviesTitle>{" "} <
        CardsContainer > { " " } {
            movie.production_companies.map((company) => ( <
                ActorCard key = { company.id }
                id = { company.id }
                name = { company.name }
                img = { "https://image.tmdb.org/t/p/w500" + company.logo_path }
                />
            ))
        } { " " } <
        /CardsContainer>{" "} <
        /InnerSection>{" "} <
        /FlexColumn>
    );
}

export default MovieScreen;
