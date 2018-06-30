var request = require('request');

var headers;

var _transformacao;
var _repositorio;
var _urlCarte;
var _parametros;

function setParametros(parametros){
    this._parametros = parametros;
}


function setHeader(cabecalho){
    headers = cabecalho;
}

function setTransformacao(transformacao){
    this._transformacao = transformacao;
}

function setRepositorio(repositorio){
    this._repositorio = repositorio;
}

function setUrlCarte(urlCarte){
    this._urlCarte = urlCarte;
}

function chamaCarte() {

    var options = {
        url: this._urlCarte,
        method: 'GET',
        headers,
        qs: {
            'rep': this._repositorio,
            'trans': this._transformacao
        }
    }

    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            // Print out the response body
            console.log(body);
            return body;
        }
        else{
            console.log("Ocorreu algum erro");
            
        }
    })
}

exports.chamaCarte = chamaCarte;
exports.setHeader = setHeader;
exports.setTransformacao = setTransformacao;
exports.setRepositorio = setRepositorio;
exports.setUrlCarte = setUrlCarte;
