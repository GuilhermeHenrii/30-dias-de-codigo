function openSite(site){
  const url = `https://www.${site}.com.br`;
  window.open(url, '_self');
}

openSite('google');
