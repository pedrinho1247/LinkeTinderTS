"use strict";
var ListaCandidatos = [];
var ListaEmpresas = [];
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
            html += "\n            <table class=\"mt-5 ms-5\">\n                <tr>\n                    <th><span> Nome: </span></th>\n                    <td><span>" + listaCandidatos[i].nome + "</span></td>\n                </tr>\n                <tr>\n                    <th><span> Email: </span></th>\n                    <td><span>" + listaCandidatos[i].email + "</span></td>\n                </tr>\n                <tr>\n                    <th><span> CPF: </span></th>\n                    <td><span>" + listaCandidatos[i].cpf + "</span></td>\n                </tr>\n                <tr>\n                    <th><span> Idade: </span></th>\n                    <td><span>" + listaCandidatos[i].idade + "</span></td>\n                </tr>\n                <tr>\n                    <th><span> Estado: </span></th>\n                    <td><span>" + listaCandidatos[i].estado + "</span></td>\n                </tr>\n                <tr>\n                    <th><span> CEP: </span></th>\n                    <td><span>" + listaCandidatos[i].cep + "</span></td>\n                </tr>\n                <tr>\n                    <th><span> Descri\u00E7\u00E3o: </span></th>\n                    <td><span>" + listaCandidatos[i].descricao + "</span></td>\n                </tr>\n                <tr>\n                    <th><span> Compet\u00EAncias: </span></th>\n                    <td><span>" + listaCandidatos[i].competencias + "</span></td>\n                </tr>                                \n            </table>\n                 ";
        }
        document.getElementById('listagemCandidato').innerHTML += html;
    };
    return Candidato;
}());
//Botão
var btnEmpresa = document.getElementById('empresa');
var btnVgCandidato = document.getElementById('vgcandidatos');
var btnVgEmpresa = document.getElementById('vgempresas');
var btnCandidato = document.getElementById('candidato');
var formCandidato = document.getElementById('formscandidato');
var formEmpresa = document.getElementById('formsempresa');
var listEmp = document.getElementById('listagemEmpresa');
var listCa = document.getElementById('listagemCandidato');
//Esconder botões
window.onload = function () {
    btnCandidato.onclick = function () {
        btnEmpresa.style.display = 'none';
        btnCandidato.style.display = 'none';
        btnVgCandidato.style.display = 'none';
        btnVgEmpresa.style.display = 'none';
        listCa.style.display = 'none';
        FormsCandidato();
    };
    //Botão para mostrar formulário de cadastro de empresas
    btnEmpresa.onclick = function () {
        btnEmpresa.style.display = 'none';
        formCandidato.style.display = 'none';
        btnCandidato.style.display = 'none';
        btnVgCandidato.style.display = 'none';
        btnVgEmpresa.style.display = 'none';
        listCa.style.display = 'none';
        FormsEmpresa();
    };
};
//Formulário Candidato 
function FormsCandidato() {
    formCandidato.innerHTML = '\
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
        <button type="button" class="btn btn-primary" id="cadastrar" onclick="CadastrarCandidato()">Cadastrar</button>\
    </form>';
}
//Função Cadastrar 
function CadastrarCandidato() {
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
    formCandidato.style.display = 'none';
    btnEmpresa.style.display = '';
    btnVgCandidato.style.display = '';
    btnVgEmpresa.style.display = '';
    btnCandidato.style.display = '';
    console.log(ListaCandidatos);
}
//Listar
btnVgCandidato.onclick = function () {
    listEmp.style.display = 'none';
    listCa.style.display = 'initial';
    Candidato.listarCandidatos(ListaCandidatos);
};
var Empresa = /** @class */ (function () {
    function Empresa(nome, emailCorporativo, cnpj, pais, estado, cep, descricao) {
        this.nome = nome;
        this.emailCorporativo = emailCorporativo;
        this.cnpj = cnpj;
        this.pais = pais;
        this.estado = estado;
        this.cep = cep;
        this.descricao = descricao;
    }
    Empresa.listarEmpresas = function (listaEmpresas) {
        document.getElementById('listagemEmpresa').innerHTML = '';
        var html = '';
        for (var i = 0; i < listaEmpresas.length; i++) {
            html += "\n                <table class=\"mt-5 ms-5\">\n                    <tr>\n                        <th><span> Nome: </span></th>\n                        <td><span>" + listaEmpresas[i].nome + "</span></td>\n                    </tr>\n                    <tr>\n                        <th><span> Email Cooperativo:  </span></th>\n                        <td><span>" + listaEmpresas[i].emailCorporativo + "</span></td>\n                    </tr>\n                    <tr>\n                        <th><span> CNPJ ou CPF: </span></th>\n                        <td><span>" + listaEmpresas[i].cnpj + "</span></td>\n                    </tr>\n                    <tr>\n                        <th><span> Pa\u00EDs: </span></th>\n                        <td><span>" + listaEmpresas[i].pais + "</span></td>\n                    </tr>\n                    <tr>\n                        <th><span> Estado: </span></th>\n                        <td><span>" + listaEmpresas[i].estado + "</span></td>\n                    </tr>\n                    <tr>\n                        <th><span> CEP: </span></th>\n                        <td><span>" + listaEmpresas[i].cep + "</span></td>\n                    </tr>\n                    <tr>\n                        <th><span> Descri\u00E7\u00E3o: </span></th>\n                        <td><span>" + listaEmpresas[i].descricao + "</span></td>\n                    </tr>                             \n                </table>\n            ";
        }
        document.getElementById('listagemEmpresa').innerHTML += html;
    };
    return Empresa;
}());
// Formulário Empresa
function FormsEmpresa() {
    formEmpresa.innerHTML = "\n    <form class=\"ms-4 me-4\">\n        <div class=\"mb-3 col-sm-6\">\n            <label class=\"form-label\">Nome</label>\n            <input type=\"text\" class=\"form-control\" id=\"nomeE\">\n        </div>\n        <div class=\"mb-3 col-sm-6\">\n            <label class=\"form-label\">Email Corporativo</label>\n            <input type=\"email\" class=\"form-control\" id=\"emailCorporativo\">\n        </div>\n        <div class=\"mb-3 col-sm-6\">\n            <label class=\"form-label\">CNPJ ou CPF</label>\n            <input type=\"number\" class=\"form-control\" id=\"cnpj\">\n        </div>\n        <div class=\"mb-3 col-sm-6\">\n            <label class=\"form-label\">Pa\u00EDs</label>\n            <input type=\"text\" class=\"form-control\" id=\"paisE\">\n        </div>\n        <div class=\"mb-3 col-sm-6\">\n            <label class=\"form-label\">Estado</label>\n            <input type=\"text\" class=\"form-control\" id=\"estadoE\">\n        </div>\n        <div class=\"mb-3 col-sm-6\">\n            <label class=\"form-label\">CEP</label>\n            <input type=\"number\" class=\"form-control\" id=\"cepE\">\n        </div>\n        <div class=\"mb-3 col-sm-6\">\n            <label class=\"form-label\">Descri\u00E7\u00E3o</label>\n            <input type=\"text\" class=\"form-control\" id=\"descricaoE\">\n        </div>\n        <button type=\"button\" class=\"btn btn-primary\" id=\"cadastrarE\" onclick=\"CadastrarEmpresa()\">Cadastrar</button>\n    </form>";
}
// Função Cadastrar Empresa
function CadastrarEmpresa() {
    var nomeInput = document.getElementById('nomeE');
    var emailInput = document.getElementById('emailCorporativo');
    var cnpjInput = document.getElementById('cnpj');
    var paisInput = document.getElementById('paisE');
    var estadoInput = document.getElementById('estadoE');
    var cepInput = document.getElementById('cepE');
    var descricaoInput = document.getElementById('descricaoE');
    var empresa = new Empresa(nomeInput.value, emailInput.value, parseInt(cnpjInput.value), paisInput.value, estadoInput.value, parseInt(cepInput.value), descricaoInput.value);
    ListaEmpresas.push(empresa);
    alert('Empresa Cadastrada com Sucesso!');
    // Limpar campos do formulário
    nomeInput.value = '';
    emailInput.value = '';
    cnpjInput.value = '';
    paisInput.value = '';
    estadoInput.value = '';
    cepInput.value = '';
    descricaoInput.value = '';
    // Exibir botões novamente
    formEmpresa.style.display = 'none';
    formCandidato.style.display = 'none';
    btnEmpresa.style.display = '';
    btnVgCandidato.style.display = '';
    btnVgEmpresa.style.display = '';
    btnCandidato.style.display = '';
    console.log(ListaEmpresas);
}
// Listar Empresas
btnVgEmpresa.onclick = function () {
    listCa.style.display = 'none';
    listEmp.style.display = 'initial';
    Empresa.listarEmpresas(ListaEmpresas);
};
