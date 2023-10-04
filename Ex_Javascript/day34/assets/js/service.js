const apiUrl = `https://r43p4k-8080.csb.app/courses/`;

export const get = async () => {
    const response = await fetch(apiUrl);
    console.log(response);
    const users = await response.json();
    return users;
}

export async function post(data) {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const responseData = await response.json();
        // console.log("Response Data:", responseData);

        return responseData;
    } catch (error) {
        console.error("Error:", error);
        return null;
    }
}

export const remove = async (id) => {
    const response = await fetch(apiUrl + `/${id}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (response.ok) {
        console.log('Xoa thanh cong');
    }
}

export const updatePost = async (id, data) => {
    try {
        const response = await fetch(`${apiUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Có lỗi xảy ra khi cập nhật công việc.');
        }

        const updatedPost = await response.json();
        return updatedPost;
    } catch (error) {
        console.error("Error:", error);
        return null;
    }
}
