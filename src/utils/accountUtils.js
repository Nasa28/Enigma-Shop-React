import axios from 'axios';

export const deleteAccount = async (token) => {
  const url = `http://localhost:3000/api/v1/users/deleteMe`;
  axios.delete(url, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  });
};
