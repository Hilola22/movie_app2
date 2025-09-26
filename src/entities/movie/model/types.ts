export interface IGenre {
  id: number;
  name: string;
}

export interface IMovie {
  id: number;
  page?: number;
  adult: boolean;
  backdrop_path: string;
  genre_ids?: number[]; 
  genres?: IGenre[]; 
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IMovieParams {
  page: string;
  sort_by: string;
  start_year?: string; 
  end_year?: string;
}
