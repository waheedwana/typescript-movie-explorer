export async function searchMovie(name) {
    const url = `http://www.omdbapi.com/?apikey=91386b87&s=${name}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to fetch movies");
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error("Failed to search movies:", error);
        throw error;
    }
}
export async function getMovieById(imdbID) {
    const url = `http://www.omdbapi.com/?apikey=91386b87&i=${imdbID}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to fetch movies");
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error("Failed to search movies:", error);
        throw error;
    }
}
