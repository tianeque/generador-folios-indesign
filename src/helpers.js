export function crearFolios(desde, hasta, moldes) {
  desde = parseInt(desde);
  hasta = parseInt(hasta);
  moldes = parseInt(moldes);

  const cantidad = hasta - desde + 1;
  const paso = cantidad / moldes;

  // console.log(`paso: ${paso}`);

  let folios = [];

  for (let item = 1; item <= paso; item++) {
    let folio = {};
    for (let i = 1; i <= moldes; i++) {
      folio[i] = desde + item - 1 + paso * (i - 1);
    }
    folios.push(folio);
    // console.log(desde, item, paso, moldes);
  }
  console.log(folios);
}

export function validar(desde, hasta, moldes) {}
