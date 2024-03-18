"use strict";
var ListaCandidatos = [];
var Candidato = /** @class */ (function () {
    function Candidato(nome, email, cpf, idade, estado, cep, descricao, competencias) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.idade = idade;
        this.estado = estado;
        this.cep = cep;
        this.descricao = descricao;
        this.competencias = competencias;
    }
    Candidato.listarCandidatos = function (listaCandidatos) {
        document.getElementById('listagemCandidato').innerHTML = '';
        var html = '';
        for (var i = 0; i < listaCandidatos.length; i++) { // Mudança aqui
            html += "\n                <p>Nome: <span class=\"nome\">" + listaCandidatos[i].nome + "</span></p>\n                <p>Email: <span class=\"email\">" + listaCandidatos[i].email + "</span></p>\n                <p>CPF: <span class=\"cpf\">" + listaCandidatos[i].cpf + "</span></p>\n                <p>Idade: <span class=\"idade\">" + listaCandidatos[i].idade + "</span></p>\n                <p>Estado: <span class=\"estado\">" + listaCandidatos[i].estado + "</span></p>\n                <p>CEP: <span class=\"cep\">" + listaCandidatos[i].cep + "</span></p>\n                <p>Descri\u00E7\u00E3o: <span class=\"descricao\">" + listaCandidatos[i].descricao + "</span></p>\n                <p>Compet\u00EAncias: <span class=\"competencias\">" + listaCandidatos[i].competencias + "</span></p>\n                 ";
        }
        document.getElementById('listagemCandidato').innerHTML += html;
    };
    return Candidato;
}());
//Botão
var btnempresa = document.getElementById('empresa');
var btnvgcandidato = document.getElementById('vgcandidatos');
var btnvgempresa = document.getElementById('vgempresas');
var btcandidato = document.getElementById('candidato');
var formscandidato = document.getElementById('formscandidato');
var VagasCandidatos = document.getElementById('vgcandidatos');
//Esconder botões
window.onload = function () {
    btcandidato.onclick = function () {
        formscandidato.style.display = 'initial';
        btnempresa.style.display = 'none';
        btnvgcandidato.style.display = 'none';
        btnvgempresa.style.display = 'none';
        btcandidato.style.display = 'none';
        FormsCandidato();
    };
};
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
    var nomeInput = document.getElementById('nome');
    var emailInput = document.getElementById('email');
    var cpfInput = document.getElementById('cpf');
    var idadeInput = document.getElementById('idade');
    var estadoInput = document.getElementById('estado');
    var cepInput = document.getElementById('cep');
    var descricaoInput = document.getElementById('descricao');
    var competenciasInput = document.getElementById('competencias');
    var candidato = new Candidato(nomeInput.value, emailInput.value, parseInt(cpfInput.value), parseInt(idadeInput.value), estadoInput.value, parseInt(cepInput.value), descricaoInput.value, competenciasInput.value);
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
    console.log(ListaCandidatos);
}
//Listar
VagasCandidatos.onclick = function () {
    Candidato.listarCandidatos(ListaCandidatos);
};
