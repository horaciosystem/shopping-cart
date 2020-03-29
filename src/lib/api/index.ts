const API_URL = process.env.REACT_APP_API_URL;

export async function makeRequest<T>(path): Promise<T> {
  const finalUrl = new URL(path, API_URL);
  const response = await fetch(finalUrl.toString());
  return await response.json();
}
