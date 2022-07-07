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

    if (!res.ok) {
      throw Error('Failed to send data');
    }

    const json = await res.json();

    if (json.error) {
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
