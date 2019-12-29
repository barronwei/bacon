


const alertValidator = (condition, message) => {

  if(condition){

    console.log(condition, message)
    alert(message);
    return true;
  }
  return false;
}

const alertListValidator = (conditions, messages) => {

  for (const i of conditions.keys()) {
    if (alertValidator(conditions[i], messages[i])) {
      return true;
    }
  }
  return false;
}

export {alertValidator, alertListValidator};