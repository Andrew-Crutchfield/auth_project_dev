const BASE_URL = 'http://localhost:3000'; 

async function apiService<T = any>(uri: string, method: string = 'GET', body?: any, requiresAuth: boolean = false): Promise<T> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    if (requiresAuth) {
        const token = localStorage.getItem('token');
        if (token) {
            headers.append('Authorization', `Bearer ${token}`);
        } else {
            throw new Error("No authentication token found.");
        }
    }

    const options: RequestInit = {
        method,
        headers,
        body: body ? JSON.stringify(body) : null,
    };

    const response = await fetch(`${BASE_URL}${uri}`, options);

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || 'An error occurred while making the request.');
    }

    return response.json();
}

export default apiService;