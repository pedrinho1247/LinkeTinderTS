"use strict";
var ListaCandidatos = [];
var ListaEmpresas = [];
class Candidato {
    constructor(nome, email, cpf, idade, estado, cep, descricao, competencias) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.idade = idade;
        this.estado = estado;
        this.cep = cep;
        this.descricao = descricao;
        this.competencias = competencias;
    }
    static listarCandidatos(listaCandidatos) {
        document.getElementById('listagemCandidato').innerHTML = '';
        var html = '';
        for (var j = 0; j < listaCandidatos.length; j++) {
            const competencias = ListaCandidatos[j].competencias.map(competencia => `<li>${competencia}</li>`).join('');
            html += `
            <table class="mt-5 ms-5">
                <tr>
                    <th><span> Nome: </span></th>
                    <td><span>${'Candidato ' + [j + 1]}</span></td>
                </tr>
                <tr style="display:none;">
                    <th><span> Nome: </span></th>
                    <td><span>${listaCandidatos[j].nome}</span></td>
                </tr>
                <tr style="display:none;">
                    <th><span> Email: </span></th>
                    <td><span>${listaCandidatos[j].email}</span></td>
                </tr>
                <tr style="display:none;">
                    <th><span> CPF: </span></th>
                    <td><span>${listaCandidatos[j].cpf}</span></td>
                </tr>
                <tr style="display:none;">
                    <th><span> Idade: </span></th>
                    <td><span>${listaCandidatos[j].idade}</span></td>
                </tr>
                <tr>
                    <th><span> Estado: </span></th>
                    <td><span>${listaCandidatos[j].estado}</span></td>
                </tr>
                <tr>
                    <th><span> CEP: </span></th>
                    <td><span>${listaCandidatos[j].cep}</span></td>
                </tr>
                <tr>
                    <th><span> Descrição: </span></th>
                    <td><span>${listaCandidatos[j].descricao}</span></td>
                </tr>
                <tr>
                    <th><span> Competências: </span></th>
                    <td>
                    <ul>
                        ${competencias}
                    </ul>
                    </td>
                </tr>                         
            </table>
                `;
        }
        document.getElementById('listagemCandidato').innerHTML += html;
    }
}
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
        formEmpresa.style.display = 'none';
        formCandidato.style.display = 'initial';
        btnEmpresa.style.display = 'none';
        btnCandidato.style.display = 'none';
        btnVgCandidato.style.display = 'none';
        btnVgEmpresa.style.display = 'none';
        listCa.style.display = 'none';
        listEmp.style.display = 'none';
        FormsCandidato();
    };
    //Botão para mostrar formulário de cadastro de empresas
    btnEmpresa.onclick = function () {
        formCandidato.style.display = 'none';
        formEmpresa.style.display = 'initial';
        btnEmpresa.style.display = 'none';
        formCandidato.style.display = 'none';
        btnCandidato.style.display = 'none';
        btnVgCandidato.style.display = 'none';
        btnVgEmpresa.style.display = 'none';
        listCa.style.display = 'none';
        listEmp.style.display = 'none';
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
            <select id="competencias" class="form-select" multiple>\
                <option value="Java">Java</option>\
                <option value="JavaScript">JavaScript</option>\
                <option value="Python">Python</option>\
                <option value="TypeScript">TypeScript</option>\
                <option value="Ruby">Ruby</option>\
                <option value="Groovy">Groovy</option>\
            </select>\
        </div>\
        <button type="button" class="btn btn-primary" id="cadastrar" onclick="CadastrarCandidato()">Cadastrar</button>\
    </form>';
}
//Função Cadastrar 
function CadastrarCandidato() {
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const cpfInput = document.getElementById('cpf');
    const idadeInput = document.getElementById('idade');
    const estadoInput = document.getElementById('estado');
    const cepInput = document.getElementById('cep');
    const descricaoInput = document.getElementById('descricao');
    const competenciasSelect = document.getElementById('competencias');
    const competenciasSelecionadas = [];
    for (let i = 0; i < competenciasSelect.options.length; i++) {
        const option = competenciasSelect.options[i];
        if (option.selected) {
            competenciasSelecionadas.push(option.value);
        }
    }
    const candidato = new Candidato(nomeInput.value, emailInput.value, parseInt(cpfInput.value), parseInt(idadeInput.value), estadoInput.value, parseInt(cepInput.value), descricaoInput.value, competenciasSelecionadas);
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
    competenciasSelect.selectedIndex = -1;
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
class Empresa {
    constructor(nome, emailCorporativo, cnpj, pais, estado, cep, descricao) {
        this.nome = nome;
        this.emailCorporativo = emailCorporativo;
        this.cnpj = cnpj;
        this.pais = pais;
        this.estado = estado;
        this.cep = cep;
        this.descricao = descricao;
    }
    static listarEmpresas(listaEmpresas) {
        document.getElementById('listagemEmpresa').innerHTML = '';
        var html = '';
        for (var i = 0; i < listaEmpresas.length; i++) {
            html += `
                <table class="mt-5 ms-5">
                    <tr>
                        <th><span> Nome: </span></th>
                        <td><span>${'Empresa ' + [i + 1]}</span></td>
                    </tr>
                    <tr style="display:none;">
                        <th><span> Nome: </span></th>
                        <td><span>${listaEmpresas[i].nome}</span></td>
                    </tr>
                    <tr style="display:none;">
                        <th><span> Email Cooperativo:  </span></th>
                        <td><span>${listaEmpresas[i].emailCorporativo}</span></td>
                    </tr>
                    <tr style="display:none;">
                        <th><span> CNPJ ou CPF: </span></th>
                        <td><span>${listaEmpresas[i].cnpj}</span></td>
                    </tr>
                    <tr>
                        <th><span> País: </span></th>
                        <td><span>${listaEmpresas[i].pais}</span></td>
                    </tr>
                    <tr>
                        <th><span> Estado: </span></th>
                        <td><span>${listaEmpresas[i].estado}</span></td>
                    </tr>
                    <tr>
                        <th><span> CEP: </span></th>
                        <td><span>${listaEmpresas[i].cep}</span></td>
                    </tr>
                    <tr>
                        <th><span> Descrição: </span></th>
                        <td><span>${listaEmpresas[i].descricao}</span></td>
                    </tr>                             
                </table>
            `;
        }
        document.getElementById('listagemEmpresa').innerHTML += html;
    }
}
// Formulário Empresa
function FormsEmpresa() {
    formEmpresa.innerHTML = `
    <form class="ms-4 me-4">
        <div class="mb-3 col-sm-6">
            <label class="form-label">Nome</label>
            <input type="text" class="form-control" id="nomeE">
        </div>
        <div class="mb-3 col-sm-6">
            <label class="form-label">Email Corporativo</label>
            <input type="email" class="form-control" id="emailCorporativo">
        </div>
        <div class="mb-3 col-sm-6">
            <label class="form-label">CNPJ ou CPF</label>
            <input type="number" class="form-control" id="cnpj">
        </div>
        <div class="mb-3 col-sm-6">
            <label class="form-label">País</label>
            <input type="text" class="form-control" id="paisE">
        </div>
        <div class="mb-3 col-sm-6">
            <label class="form-label">Estado</label>
            <input type="text" class="form-control" id="estadoE">
        </div>
        <div class="mb-3 col-sm-6">
            <label class="form-label">CEP</label>
            <input type="number" class="form-control" id="cepE">
        </div>
        <div class="mb-3 col-sm-6">
            <label class="form-label">Descrição</label>
            <input type="text" class="form-control" id="descricaoE">
        </div>
        <button type="button" class="btn btn-primary" id="cadastrarE" onclick="CadastrarEmpresa()">Cadastrar</button>
    </form>`;
}
// Função Cadastrar Empresa
function CadastrarEmpresa() {
    const nomeInput = document.getElementById('nomeE');
    const emailInput = document.getElementById('emailCorporativo');
    const cnpjInput = document.getElementById('cnpj');
    const paisInput = document.getElementById('paisE');
    const estadoInput = document.getElementById('estadoE');
    const cepInput = document.getElementById('cepE');
    const descricaoInput = document.getElementById('descricaoE');
    const empresa = new Empresa(nomeInput.value, emailInput.value, parseInt(cnpjInput.value), paisInput.value, estadoInput.value, parseInt(cepInput.value), descricaoInput.value);
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
