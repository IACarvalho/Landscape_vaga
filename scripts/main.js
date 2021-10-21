function cepMask(cep){
  cep.value = cep.value.replace(/\D/g, "")
                  .replace(/^(\d{5})(\d{3})+?$/, "$1-$2");
}

function onlyNumber(field){
  field.value = field.value.replace(/\D/g, "")
}