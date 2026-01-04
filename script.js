async function loadUser(){
  const res = await fetch('https://randomuser.me/api/');
  const data = await res.json();
  const user = data.results[0];

  document.getElementById('user').innerHTML = `
    <img src="${user.picture.medium}">
    <p>${user.name.first} ${user.name.last}</p>
    <p>${user.email}</p>
  `;
}
