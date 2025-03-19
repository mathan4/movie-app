import axios from "axios";
import React, { useState } from "react";
import MovieCardComponent from "../MovieCardComponent/MovieCardComponent";
import { useQuery } from "@tanstack/react-query";
import MovieSkeletonComponent from "../MovieSkeletonComponent/MovieSkeletonComponent";
import NavBarComponent from "../NavBarComponent/NavBarComponent";

const MovieFetchComponent = () => {
  const [searchKey, setSearchKey] = useState("");
  const [search, setSearch] = useState(false);
  const [page, setPage] = useState(1);
  const [sortKey, setSortKey] = useState("title");

  const fetchMovies = async ({ queryKey }) => {
    const page = queryKey;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=3ac2d81be19d600a98fc3bc4ca389f6e&page=${page}`
    );
    return response.data;
  };

  const searchBarHandler = (event) => {
    setSearchKey(event.target.value);
    setSearch(searchKey.length > 1);
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: [page],
    queryFn: fetchMovies,
    keepPreviousData: true,
  });

  const nextPage = () => {
    if (data && page < data.total_pages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const sortOptions = [
    { key: "title", label: "Title" },
    { key: "release_date", label: "Release Date" },
    { key: "vote_average", label: "Rating" },
  ];

  const sortMovies = (movies) => {
    if (!movies || movies.length === 0) return [];
    const sortedMovies = [...movies];
    switch (sortKey) {
      case "title":
        return sortedMovies.sort((a, b) => a.title.localeCompare(b.title));
      case "release_date":
        return sortedMovies.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
      case "vote_average":
        return sortedMovies.sort((a, b) => b.vote_average - a.vote_average);
      default:
        return sortedMovies;
    }
  };

  if (isLoading) {
    return <MovieSkeletonComponent />;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const movies = sortMovies(data.results || []);

  return (
    <React.Fragment>
      <NavBarComponent
        searchKey={searchKey}
        searchBarHandler={searchBarHandler}
        setSortKey={setSortKey}
        sortKey={sortKey}
      />
      <main className="bg-gray-800 text-white">
        <div className="flex justify-center py-10 pt-34 md:pt-24">
          {sortOptions.map((option) => (
            <button
              key={option.key}
              className={`px-4 py-1 mx-2 rounded-3xl ${
                sortKey === option.key
                  ? "bg-yellow-500 border text-white"
                  : "bg-gray-800 border text-gray-300 hover:bg-gray-700"
              }`}
              onClick={() => setSortKey(option.key)}
            >
              {option.label}
            </button>
          ))}
        </div>
        <div className="flex w-full flex-wrap gap-10 justify-evenly pt-5 px-12 sm:px-0">
          {movies.map((movie, index) => (
            <div key={index}>
              <MovieCardComponent data={movie} />
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center py-10">
          <button
            className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded mr-4"
            onClick={prevPage}
            disabled={page === 1}
          >
            Previous
          </button>
          <span className="px-4 py-2">Page {page}</span>
          <button
            className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded ml-4"
            onClick={nextPage}
            disabled={data && page === data.total_pages}
          >
            Next
          </button>
        </div>
      </main>
    </React.Fragment>
  );
};

export default MovieFetchComponent;