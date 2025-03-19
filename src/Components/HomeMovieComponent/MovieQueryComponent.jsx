import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import MovieFetchComponent from './MovieFetchComponent'

const HomeMovieQueryComponent = () => {
    const queryClient=new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
        <MovieFetchComponent/>
    </QueryClientProvider>
  )
}

export default HomeMovieQueryComponent
