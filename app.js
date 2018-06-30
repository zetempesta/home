var minhaRequisicao = require('./carte-middleware/requisicao');

minhaRequisicao.setHeader({
    'Authorization': 'Basic Y2x1c3RlcjpjbHVzdGVy',
    'Content-Type': 'application/x-www-form-urlencoded'
});

minhaRequisicao.setUrlCarte('http://172.20.21.28:8081/kettle/executeTrans/');
minhaRequisicao.setRepositorio('PDI');
minhaRequisicao.setTransformacao('/teste_pentaho');
minhaRequisicao.chamaCarte();

