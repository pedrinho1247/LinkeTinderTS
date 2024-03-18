var ListaCandidatos: Candidato[] = [];

class Candidato{
    constructor(public  nome: string, 
        public email: string, 
        public cpf: number,
        public idade: number,
        public estado: string,
        public cep: number,
        public descricao: string,
        public competencias: string
        )
        {}
    
    static listarCandidatos(listaCandidatos: Candidato[]): void {
        document.getElementById('listagemCandidato').innerHTML = '';
        
        var html = '';
        
        for(var i = 0; i < listaCandidatos.length; i++) { // Mudança aqui
            html += `
                <p>Nome: <span class="nome">${listaCandidatos[i].nome}</span></p>
                <p>Email: <span class="email">${listaCandidatos[i].email}</span></p>
                <p>CPF: <span class="cpf">${listaCandidatos[i].cpf}</span></p>
                <p>Idade: <span class="idade">${listaCandidatos[i].idade}</span></p>
                <p>Estado: <span class="estado">${listaCandidatos[i].estado}</span></p>
                <p>CEP: <span class="cep">${listaCandidatos[i].cep}</span></p>
                <p>Descrição: <span class="descricao">${listaCandidatos[i].descricao}</span></p>
                <p>Competências: <span class="competencias">${listaCandidatos[i].competencias}</span></p>
                 `;
        }
        
        document.getElementById('listagemCandidato').innerHTML += html;
    }
}

//Botão
var btnempresa = document.getElementById('empresa');
var btnvgcandidato = document.getElementById('vgcandidatos')
var btnvgempresa = document.getElementById('vgempresas')
var btcandidato = document.getElementById('candidato') 
var formscandidato = document.getElementById('formscandidato');
var VagasCandidatos = document.getElementById('vgcandidatos');

//Esconder botões
window.onload = function() {
    btcandidato.onclick = function () {
        formscandidato.style.display = 'initial';
        btnempresa.style.display = 'none';
        btnvgcandidato.style.display = 'none';
        btnvgempresa.style.display = 'none';
        btcandidato.style.display = 'none';
        FormsCandidato();
    }
}

//Formulário Candidato 

function FormsCandidato() {
    formscandidato.innerHTML = '\
    <form class="ms-4 me-4">\
        <div class="mb-3 col-sm-6">\
            <label class="form-label">Nome</label>\
            <input type="text" class="form-control" id="nome">\
        </div>\
        <div class="mb-3 col-sm-6">\
            <label class="form-label">Email</label>\
            <input type="email" class="form-control" id="email">\
        </div>\
        <div class="mb-3 col-sm-6">\
            <label class="form-label">CPF</label>\
            <input type="text" class="form-control" id="cpf">\
        </div>\
        <div class="mb-3 col-sm-6">\
            <label class="form-label">Idade</label>\
            <input type="number" class="form-control" id="idade">\
        </div>\
        <div class="mb-3 col-sm-6">\
            <label class="form-label">Estado</label>\
            <input type="text" class="form-control" id="estado">\
        </div>\
        <div class="mb-3 col-sm-6">\
            <label class="form-label">CEP</label>\
            <input type="text" class="form-control" id="cep">\
        </div>\
        <div class="mb-3 col-sm-6">\
            <label class="form-label">Descrição</label>\
            <input type="text" class="form-control" id="descricao">\
        </div>\
        <div class="mb-3 col-sm-6">\
            <label class="form-label">Competências</label>\
            <input type="text" class="form-control" id="competencias">\
        </div>\
        <button type="button" class="btn btn-primary" id="cadastrar" onclick="Cadastrar()">Cadastrar</button>\
    </form>';
}

//Função Cadastrar 

//Função Cadastrar 
function Cadastrar() {
    const nomeInput = document.getElementById('nome') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const cpfInput = document.getElementById('cpf') as HTMLInputElement;
    const idadeInput = document.getElementById('idade') as HTMLInputElement;
    const estadoInput = document.getElementById('estado') as HTMLInputElement;
    const cepInput = document.getElementById('cep') as HTMLInputElement;
    const descricaoInput = document.getElementById('descricao') as HTMLInputElement;
    const competenciasInput = document.getElementById('competencias') as HTMLInputElement;

    const candidato = new Candidato(
        nomeInput.value,
        emailInput.value,
        parseInt(cpfInput.value),
        parseInt(idadeInput.value),
        estadoInput.value,
        parseInt(cepInput.value),
        descricaoInput.value,
        competenciasInput.value
    );
   
    ListaCandidatos.push(candidato);
    alert('Candidato Cadastrado com Sucesso!');

    // Limpar campos do formulário
    nomeInput.value = '';
    emailInput.value = '';
    cpfInput.value = '';
    idadeInput.value = '';
    estadoInput.value = '';
    cepInput.value = '';
    descricaoInput.value = '';
    competenciasInput.value = '';
    
    // Exibir botões novamente
    formscandidato.style.display = 'none';
    btnempresa.style.display = '';
    btnvgcandidato.style.display = '';
    btnvgempresa.style.display = '';
    btcandidato.style.display = '';

    console.log(ListaCandidatos)
}

//Listar
VagasCandidatos.onclick = function() {
    Candidato.listarCandidatos(ListaCandidatos);
};

