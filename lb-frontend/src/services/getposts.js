export const getPosts = async () => {
    const res = await fetch(
        "https://www.mocky.io/v2/5d1ef97d310000552febe99d",
        {
            headers: {
                "Content-Type": "application/json",
            },
            method: "GET",
        }
    );
    const posts = await res.json();
    return posts
}