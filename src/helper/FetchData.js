import axios from 'axios';

export const fetchData = async (path) => {
    try {
        const response = await axios.get(`${path}`)
        return response;
    } catch (err) {
        console.log(err)
    }
};

// ?.data?.products

export const privateFetchData = async (path) => {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${path}`, {
      headers: {
        token,
      },
    });
    return response?.data;
  };