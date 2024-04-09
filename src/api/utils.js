import axios from 'axios';

const domain = 'http://localhost:8000';

export const getChatInfo = async (filePath) => {
    try {
        const response = await axios.get(`${domain}/chat/info`, {
            params: { file_path: filePath }
        });
        console.log('Chat Info Response:', response.data); // Log the response data
        return response.data;
    } catch (error) {
        console.error('Error fetching chat info:', error);
        return { message: 'Failed to fetch chat info' };
    }
};
