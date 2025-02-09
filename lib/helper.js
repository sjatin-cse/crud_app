const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
// all user
export const getUsers = async () => {
    try {
        const response = await fetch(`${BASE_URL}api/users`);
        const json = await response.json();

        return json;
    } catch (error) {
        return error;
    }
};

// single user
export const getUser = async (userId) => {
    try {
        const response = await fetch(`${BASE_URL}api/users/${userId}`);
        const json = await response.json();

        if (json) return json;
        return {};
    } catch (error) {
        return error;
    }
};

// posting a new user
export async function addUser(formData) {
    try {
        const Options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        };

        const response = await fetch(`${BASE_URL}api/users`, Options);
        const json = await response.json();

        return json;
    } catch (error) {
        return error;
    }
}

// Update a new user
export async function updateUser(userId, formData) {
    const Options = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
    };

    const response = await fetch(`${BASE_URL}api/users/${userId}`, Options);
    const json = await response.json();
    return json;
}

// Delete a new user
export async function deleteUser(userId) {
    const Options = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
    };

    const response = await fetch(`${BASE_URL}api/users/${userId}`, Options);
    const json = await response.json();
    return json;
}
