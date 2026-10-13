function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = 'Data fetched';
        resolve(data);
      }, 1000);
    });
  }
  
  function processData(data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const processedData = data.toUpperCase();
        resolve(processedData);
      }, 1000);
    });
  }
  
  function displayData(processedData) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(processedData);
        resolve();
      }, 1000);
    });
  }
  
  fetchData()
    .then(processData)
    .then(displayData)
    .then(() => {
      console.log('Data displayed');
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  