import React from "react";

const SkeletonCard = () => {
  return (
    <div className="skeleton-card w-[200px] md:w-[250px] h-[360px] bg-gray-200 rounded-lg overflow-hidden animate-pulse">
      {/* Badge Skeleton */}
      <div className="badge-skeleton absolute bg-gray-300 w-8 h-4 top-2 left-2 rounded-sm"></div>
      {/* Image Skeleton */}
      <div className="image-skeleton bg-gray-300 w-full h-[200px]"></div>
      {/* Title Skeleton */}
      <div className="text-skeleton mt-2 px-3">
        <div className="bg-gray-300 h-4 w-3/4 rounded-sm mb-2"></div>
        <div className="bg-gray-300 h-4 w-1/2 rounded-sm"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
