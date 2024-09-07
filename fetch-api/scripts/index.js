async function getProducts(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
