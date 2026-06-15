function validarLogin(){
    let login = document.getElementById('login').value; 
    let senha = document.getElementById('senha').value; 

    if (login === 'admin' && senha === 'senha') {
        alert(`Oi, ${login}, sumido!`);
        window.location.href = 'produtos.html'
    } else {
        alert(`Usuário ou senha inválidos, tente novamente.`);
    }   

    login = document.getElementById('login').value = ''; 
    senha = document.getElementById('senha').value = ''; 
}