export interface Movie {
  Title: string;
  Year: string;
  Poster: string;
  imdbID: string;
}

export interface ApiObject {
  Response: string;
  Search: Movie[];
  totalResults: string;
}
export interface MovieDetails {
  imdbRating: string;
}
