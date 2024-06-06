
function Validation(values) {
    let errors={}
  if(values.name===""){
    errors.name= "The name is empty"
  }
  else{
    errors.name=""
  }
  if(values.email===""){
    errors.email= "The email is empty"
  }
  else{
    errors.email=""
  }
  if(values.message===""){
    errors.message= "no message"
  }
  else{
    errors.message=""
  }
  return errors
}

export default Validation