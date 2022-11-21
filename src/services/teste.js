export function ApiRequest({
    method = 'GET',
    url,
    token = false,
    body = false,
}) {
    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            redirect: 'follow',
        },
    };

    if (token) {
        options.headers.Authorization = `Bearer ${token}`;
    }

    if (body) {
        options.body = body;
    }

    return fetch(url, options);
}