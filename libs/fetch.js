import fetch from 'isomorphic-unfetch'

export  async function fetchJSON(...args) {
  const res = await fetch(...args);

  if (res.status >= 400 && res.status <= 499) {
    throw new Error('API Client Error', await res.json());
  }

  return res.json()
}
