import axios from 'axios';

const testBackend = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/test');
    console.log('Backend response:', response.data);
    alert("Frontend is connected to backend!");
  } catch (error) {
    console.error('Frontend failed to connect to backend:', error);
  }
};

useEffect(() => {
  testBackend();
}, []);
