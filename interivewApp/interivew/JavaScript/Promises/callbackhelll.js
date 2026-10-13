// nested fun

function fetchData(callback) {
  setTimeout(() => {
    const data = 'Data fetched';
    callback(data);
  }, 1000);
}

function processData(data, callback) {
  setTimeout(() => {
    const processedData = data.toUpperCase();
    callback(processedData);
  }, 1000);
}

function displayData(processedData, callback) {
  setTimeout(() => {
    console.log(processedData);
    callback();
  }, 1000);
}

fetchData(data => {
  processData(data, processedData => {
    displayData(processedData, () => {
      console.log('Data displayed');
    });
  });
});

fetchData(data => {
  processData(data, processData => {
    displayData(processData, () => {
      console.log('Data displayed');
    });
  });
});
