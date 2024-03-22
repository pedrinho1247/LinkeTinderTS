var ListaCandidatos: Candidato[] = [];
var ListaEmpresas: Empresa[] = [];

class Candidato{
    constructor(public  nome: string, 
        public email: string, 
        public cpf: string,
        public idade: number,
        public estado: string,
        public cep: number,
        public descricao: string,
        public competencias: string[]
        )
        {}
    
    static listarCandidatos(listaCandidatos: Candidato[]): void {
        document.getElementById('listagemCandidato').innerHTML = '';
       
        var html = '';
            
        for(var j = 0; j < listaCandidatos.length; j++) {

            const competencias = ListaCandidatos[j].competencias.map(competencia =>
                `<li>${competencia}</li>`
            ).join('');

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
var grafico = document.getElementById('myChart');

//Esconder botões
window.onload = function() {

    btnCandidato.onclick = function () {
        formEmpresa.style.display = 'none'
        formCandidato.style.display = 'initial'
        btnEmpresa.style.display = 'none'
        btnCandidato.style.display = 'none';
        btnVgCandidato.style.display = 'none';
        btnVgEmpresa.style.display = 'none';
        listCa.style.display = 'none';
        listEmp.style.display = 'none';
        grafico.style.display = 'none'
        FormsCandidato(); 
    }

    //Botão para mostrar formulário de cadastro de empresas
    btnEmpresa.onclick = function () {
        formCandidato.style.display = 'none'
        formEmpresa.style.display = 'initial'
        btnEmpresa.style.display = 'none'
        formCandidato.style.display = 'none';
        btnCandidato.style.display = 'none';
        btnVgCandidato.style.display = 'none';
        btnVgEmpresa.style.display = 'none';
        listCa.style.display = 'none';
        listEmp.style.display = 'none';
        grafico.style.display = 'none'
        FormsEmpresa(); 
    }
}

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
    const nomeInput = document.getElementById('nome') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const cpfInput = document.getElementById('cpf') as HTMLInputElement;
    const idadeInput = document.getElementById('idade') as HTMLInputElement;
    const estadoInput = document.getElementById('estado') as HTMLInputElement;
    const cepInput = document.getElementById('cep') as HTMLInputElement;
    const descricaoInput = document.getElementById('descricao') as HTMLInputElement;
    const competenciasSelect = document.getElementById('competencias') as HTMLSelectElement;

    const competenciasSelecionadas: string[] = [];
    for (let i = 0; i < competenciasSelect.options.length; i++) {
        const option = competenciasSelect.options[i];
        if (option.selected) {
            competenciasSelecionadas.push(option.value);
        }
    }

    const regexNome = /[a-zA-Z\u00C0-\u00FF ]+/g
    const regexeEmail = /[\w.]+@\w+\.\w{2,4}(\.\w{2})?/g
    const regexCPF = /\d{3}\.\d{3}\.\d{3}-?\d{2}/g
    const regexIdade = /\d{2}/g
    const regexEstado = /[a-zA-Z\u00C0-\u00FF ]+/g
    const regexCEP = /\d{5}(-|.)?\d{3}/g
    const regexDescricao = /[a-zA-Z\u00C0-\u00FF ]+/g


    // Switch para validar cada campo
    switch (true) {
        case !regexNome.test(nomeInput.value):
            alert("Erro: Nome inválido");
            break;
        case !regexeEmail.test(emailInput.value):
            alert("Erro: E-mail inválido");
            break;
        case !regexCPF.test(cpfInput.value):
            alert("Erro: CPF inválido");
            break;
        case !regexIdade.test(idadeInput.value):
            alert("Erro: Idade inválida");
            break;
        case !regexEstado.test(estadoInput.value):
            alert("Erro: Estado inválido");
            break;
        case !regexCEP.test(cepInput.value):
            alert("Erro: CEP inválido");
            break;
        case !regexDescricao.test(descricaoInput.value):
            alert("Erro: Descrição inválida");
            break;
    }

    if (nomeInput.value && emailInput.value && cpfInput.value &&  idadeInput.value && estadoInput.value && cepInput.value && descricaoInput.value) {
        const candidato: Candidato = new Candidato(
            nomeInput.value,
            emailInput.value,
            cpfInput.value,
            Number(idadeInput.value),
            estadoInput.value,
            Number(cepInput.value),
            descricaoInput.value,
            competenciasSelecionadas
        );      
        
        ListaCandidatos.push(candidato);
        alert('Candidato Cadastrado com Sucesso!');
    }

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
    formCandidato.style.display = 'none'
    btnEmpresa.style.display = '';
    btnVgCandidato.style.display = '';
    btnVgEmpresa.style.display = '';
    btnCandidato.style.display = '';

    console.log(ListaCandidatos)
}

//Listar
btnVgCandidato.onclick = function() {
    updateChart();
    listEmp.style.display = 'none';
    listCa.style.display = 'initial';
    grafico.style.display = 'initial';
    Candidato.listarCandidatos(ListaCandidatos);
    
};


class Empresa {
    constructor(
        public nome: string,
        public emailCorporativo: string,
        public cnpj: string,
        public pais: string,
        public estado: string,
        public cep: number,
        public descricao: string
    ) {}

    static listarEmpresas(listaEmpresas: Empresa[]): void {
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
            <input type="text" class="form-control" id="cnpj">
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
    const nomeInput = document.getElementById('nomeE') as HTMLInputElement;
    const emailInput = document.getElementById('emailCorporativo') as HTMLInputElement;
    const cnpjInput = document.getElementById('cnpj') as HTMLInputElement;
    const paisInput = document.getElementById('paisE') as HTMLInputElement;
    const estadoInput = document.getElementById('estadoE') as HTMLInputElement;
    const cepInput = document.getElementById('cepE') as HTMLInputElement;
    const descricaoInput = document.getElementById('descricaoE') as HTMLInputElement;

    const regexNomeE = /[a-zA-Z\u00C0-\u00FF ]+/g
    const regexeEmailCoorp = /[\w.]+@\w+\.\w{2,4}(\.\w{2})?/g
    const regexCNPJ = /(\d{3}\.\d{3}\.\d{3}-\d{2})|(\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2})/;
    const regexPaisE = /[a-zA-Z\u00C0-\u00FF ]+/g
    const regexEstadoE = /[a-zA-Z\u00C0-\u00FF ]+/g
    const regexCEPE = /\d{5}(-|.)?\d{3}/g
    const regexDescricaoE = /[a-zA-Z\u00C0-\u00FF ]+/g


    // Switch para validar cada campo
    switch (true) {
        case !regexNomeE.test(nomeInput.value):
            alert("Erro: Nome inválido");
            break;
        case !regexeEmailCoorp.test(emailInput.value):
            alert("Erro: E-mail inválido");
            break;
        case !regexCNPJ.test(cnpjInput.value):
            alert("Erro: CPNJ inválido");
            break;
        case !regexPaisE.test(paisInput.value):
            alert("Erro: Pais inválido");
            break;    
        case !regexEstadoE.test(estadoInput.value):
            alert("Erro: Estado inválido");
            break;
        case !regexCEPE.test(cepInput.value):
            alert("Erro: CEP inválido");
            break;
        case !regexDescricaoE.test(descricaoInput.value):
            alert("Erro: Descrição inválida");
            break;
    }
    
    if (nomeInput.value && emailInput.value && cnpjInput.value &&  paisInput.value && estadoInput.value && cepInput.value && descricaoInput.value) {
        const empresa: Empresa = new Empresa(
            nomeInput.value,
            emailInput.value,
            cnpjInput.value,
            paisInput.value,
            estadoInput.value,
            Number(cepInput),
            descricaoInput.value
        );       
        
        ListaEmpresas.push(empresa);
         alert('Empresa Cadastrado com Sucesso!');
    }


    // Limpar campos do formulário
    nomeInput.value = '';
    emailInput.value = '';
    cnpjInput.value = '';
    paisInput.value = '';
    estadoInput.value = '';
    cepInput.value = '';
    descricaoInput.value = '';

    // Exibir botões novamente
    formEmpresa.style.display = 'none'
    btnEmpresa.style.display = '';
    btnVgCandidato.style.display = '';
    btnVgEmpresa.style.display = '';
    btnCandidato.style.display = '';

    console.log(ListaEmpresas)
}

// Listar Empresas
btnVgEmpresa.onclick = function () {
    grafico.style.display = 'none'
    listCa.style.display = 'none'
    listEmp.style.display = 'initial'
    Empresa.listarEmpresas(ListaEmpresas);
};


function updateChart() {
    const labels: string[] = [];
    const datasets: ({ label: string; backgroundColor: string; data: number[]; } | { data: number[]; })[] = [];

    ListaCandidatos.forEach((candidato, index) => {
        const competenciasDoCandidato = candidato.competencias;
        labels.push(`Candidato ${index + 1}`);
        competenciasDoCandidato.forEach(competencia => {
            const existingDatasetIndex = datasets.findIndex(dataset => 'label' in dataset && dataset.label === competencia);

            if (existingDatasetIndex !== -1) {
                datasets[existingDatasetIndex].data[index]++;
            } else {
                const newData = Array(ListaCandidatos.length).fill(0);
                newData[index] = 1;

                datasets.push({
                    label: competencia,
                    backgroundColor: `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},0.5)`,
                    data: newData
                });
            }
        });
    });


    const chartData = {
        labels: labels,
        datasets: datasets
    };

    const chartOptions = {};

    const myChart = new Chart('myChart', {
        type: 'bar',
        data: chartData,
        options: chartOptions
    });
}



