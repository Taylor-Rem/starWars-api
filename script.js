document.querySelector('button').addEventListener('click', () => {
  axios.get('https://swapi.dev/api/planets/2').then((res) => {
    for (let i = 0; i < res.data.residents.length; i++) {
      axios.get(res.data.residents[i]).then((res) => {
        let p = document.createElement('p');
        p.textContent = res.data.name;
        document.querySelector('container').appendChild(p);
      });
    }
  });
});
