```javascript
// In a React Native component

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to load data. Please check your network connection.'); //Improved error handling
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <Text>{error}</Text>;
  }
  if (data === null) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      {/* ... render data ... */}
    </View>
  );
};
```