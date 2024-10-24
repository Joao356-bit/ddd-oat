document.getElementById('consultarBtn').addEventListener('click', function(){
    let ddd = document.getElementById('dddInput').value;
    if(ddd === '73'){
        fetch(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
        .then(response => response.json())
        .then(data =>{
            const cidadesOrdenadas = data.cities.sort();
            document.getElementById('resultado').innerHTML = `
                <div class="alert alert-success" role="alert">
                    Localidade(s) encontrada(s): ${cidadesOrdenadas.join(', ')}
                </div>
            `;
        })
        .catch(error =>{
            document.getElementById('resultado').innerHTML = `
                <div class="alert alert-danger" role="alert">
                    Ocorreu um erro ao buscar o DDD.
                </div>
            `;
        });
    }else{
        document.getElementById('resultado').innerHTML = `
            <div class="alert alert-warning" role="alert">
                Apenas o DDD 73 está disponível para consulta.
            </div>
        `;
    }
});
