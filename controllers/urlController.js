
var Url = require('../models/urlModel');

var get = function (req,res) {   

    var insereURL = function ( req, res){
        var url = new Url(req.body);
        url.curl = encurtarURL();
        Url.save(function (err) {            
            res.status(200);
            res.send(url);    
                    
        })
    };

    var consultaURLPorId = function (req, res) {
        Url.findById(req.params.id, function (err, url) {           
            res.status(200);
            res.send(url);
        })
    };

    var listaUrlPorData = function(req, res){
        const conexao = await GerarConexao();
        const [rows] = await conexao.query('Select CURL From TABELA Where DATA = ?;');
        const valores = [data];
        return await conexao.query(sql, valores);
    };

    var listaUrl = function(req, res){
        const conexao = await GerarConexao();
        const [rows] = await conexao.query('Select CURL From TABELA Where URL = ?;');
        const valores = [url];	
        return await conexao.query(sql, valores);        
    };

    return {
        insereURL: insereURL,
        consultaURLPorId: consultaURLPorId,
        listaUrlPorData: listaUrlPorData,
        listaUrl: listaUrl
    }
};

module.exports = get;