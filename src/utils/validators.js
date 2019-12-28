


const alertValidator = (condition, message) => {

  if(condition){
    alert(message);
    return true;
  }
  return false;
}

const alertListValidator = (conditions, messages) => {

  conditions.forEach((c, i) => {

    if (alertValidator(c, messages[i])) {
      return true;
    }
    
  })

  return false;
}

export {alertValidator, alertListValidator};