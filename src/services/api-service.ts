export const getData = async <T>(endpoint: string):Promise<T> => {
    return await
        fetch(import.meta.env.VITE_BASE_URL + "/" + endpoint).
        then(response => response.json());

}