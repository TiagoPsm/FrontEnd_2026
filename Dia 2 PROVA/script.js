function add(){
    const ele = document.getElementById("novo");

    ele.innerHTML = `
        <div class="card" style="width: 22rem;">
            <img src="Lucas_Paqueta.webp" class="card-img-top" alt="Lucas Paquetá">
            
            <div class="card-body"> 
                <h5 class="card-title">
                    Lucas Tolentino Coelho de Lima
                    <span class="badge text-bg-secondary">8,8</span>
                </h5>

                <p class="card-text">
                    Data de Nascimento: 27/08/1997 (28 anos)<br>
                    Altura: 1,80 m<br>
                    Posição: Meio-campista
                </p>
            </div>
        </div>
    `;
}