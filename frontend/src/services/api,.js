const base_url = "https://shikimori.io/api"

export const getTopAnimes = async () => {
    const response = await fetch(`${base_url}/animes?order=popularity&limit=20`);
    const data = await response.json()
    return data;
}

export const searchAnimes = async (query) => {
    const response = await fetch(`${base_url}/animes?search=${encodeURIComponent(query)}&limit=50`);
    const data = await response.json()
    return data;
}



