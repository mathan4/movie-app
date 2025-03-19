import React from "react";

const MovieCardComponent = (movieDetails) => {
  const { title, poster_path, release_date, vote_average } = movieDetails.data;

  return (
    <div className="w-60 bg-gray-800 rounded-lg shadow-lg  hover:drop-shadow-2xl transition-shadow duration-300 relative overflow-hidden">
      <div className="relative">
        <img
          className="w-full h-80 object-cover rounded-t-lg"
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
        <div className="absolute top-0 left-0 bg-yellow-500 text-white p-1 rounded-br-lg text-xs font-bold">
          {Math.round(vote_average * 10)}%
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-white truncate">{title}</h3>
        <p className="text-sm text-gray-400">
          {new Date(release_date).toDateString()}
        </p>
      </div>
    </div>
  );
};

export default MovieCardComponent;