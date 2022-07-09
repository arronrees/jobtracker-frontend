export default async function sendFetch(url = '', method, body = {}) {
  let data = null;
  let error = null;

  try {
    const res = await fetch(url, {
      method,
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const json = await res.json();

    if (!json.success) {
      data = null;
      error = json.error;
    } else {
      data = json;
      error = null;
    }
  } catch (err) {
    data = null;
    error = err.message;
  }

  return { data, error };
}
