export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=Gy30sfYMcmczM0l6Dl4fIN8fIr9sFe1W&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.fixed_height.url,
  }));
  return gifs;
};

export default getGifs;
