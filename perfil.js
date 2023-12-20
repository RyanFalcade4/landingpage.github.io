function calcularprojeto(){
    var tipoProj = document.getElementById('tipoprojeto').value;
    var horasProj = document.getElementById('horasprojeto').value;

    var precoHora;
    switch(tipoProj){
        case 'Website':
            precoHora = 50
            break
        case 'LandingPage':
            precoHora = 40;
            break
        case 'WebApp':
            precoHora = 60;
            break
        default:
            precoHora = 25;
    }
    var precoTotal = precoHora * horasProj;
    document.getElementById('preco').innerHTML = 'Preço do Projeto: R$ ' + precoTotal;
}