// service.js
const apiUrl = 'https://r43p4k-8080.csb.app/courses/';

export const get = async () => {
    const response = await fetch(apiUrl);
    const todos = await response.json();
    return todos;
};

export const post = async (data) => {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
};

export const remove = async (id) => {
    const response = await fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        console.log('Xóa thành công');
    }
};

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
        console.error('Error:', error);
        return null;
    }
};
