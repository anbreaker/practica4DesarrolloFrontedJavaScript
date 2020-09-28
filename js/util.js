let sortAlphabet = [
  'Andalucía',
  'Aragón',
  'Principado de Asturias',
  'Illes Balears',
  'Canarias',
  'Cantabria',
  'Castilla y León',
  'Castilla-La Mancha',
  'Cataluña',
  'Comunitat Valenciana',
  'Extremadura',
  'Galicia',
  'Comunidad de Madrid',
  'Región de Murcia',
  'Comunidad Foral de Navarra',
  'País Vasco',
  'La Rioja',
  'Ciudad Autónoma de Ceuta',
  'Ciudad Autónoma de Melilla',
];

let prueba = sortAlphabet.sort((a, b) => a.localeCompare(b));

console.log(prueba);
