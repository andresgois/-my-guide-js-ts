/*
    fetch('pagina1.html')
    .then(res => {
      if(res.status !== 200)
        throw new Error('Error 404');
      return res.text();
    })
    .then(html => {
      console.log(html)
    })
    .catch(e => console.error(e));
  */
  
  document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();
  
    if (tag === 'a') {
      e.preventDefault();
      carregaPagina(el);
    }
  });
  
  async function carregaPagina(el) {
    try {
      const href = el.getAttribute('href');
      const response = await fetch(href);

      if(response.status !== 200)   throw new Error('Error 404');

      const html = await response.text();
      carregaResultado(html);
    } catch (error) {
      console.error(error);
    }
  }
  
  function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
  }
  