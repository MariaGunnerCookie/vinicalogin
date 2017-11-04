const templateDetalle = (persona) => {
	return `
      <div class="row">
        <div class="col s12 m6">
          <div class="card">
            <div class="card-content">
              <span class="card-title">${listap.sabor}</span>
              ${
                listap.p1
                ?
                ` 
                  <figure>
                    <img src=${listap.p1}/>
                  </figure>`
                : ''
              }
              
              <p><strong>Id:</strong> ${listap.id}</p>
              <p><strong>Nombre del sabor:</strong> ${listap.sabor} ${listap.precio}</p>
              <p><strong>cantidad:</strong> ${listap.cantidad}</p>
            </div>
          </div>
        </div>
      </div>
	`
}

module.exports = templateDetalle