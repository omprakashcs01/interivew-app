// Function to fetch data from the API
function fetchUsers() {
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}

// Using the fetchUsers function
fetchUsers()
  .then(users => {
    console.log('User Names:');
    users.forEach(user => console.log(user.name));
  })
  .catch(error => console.error('Error fetching users:', error));
