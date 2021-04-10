const getUsuarios = async () => {
  const tbody = document.querySelector('#tbody');
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
  console.log(data);
  data.forEach((user, i) => {
    tbody.innerHTML += `
      <tr>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.phone}</td>
        <td>${user.website}</td>
      </tr>
    `
  });

}

getUsuarios();
