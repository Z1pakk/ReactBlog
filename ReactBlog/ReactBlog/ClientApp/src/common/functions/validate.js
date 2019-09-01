export function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

export function hasAllValues(fields) {
  return Object.keys(fields).every(field => fields[field]);
}

export const checkNoSpaces=(rule, value , callback)=>{
  if(value.indexOf(' ') !== -1)
  {
    callback('Field shoudn\'t contains whitespaces!');
  }
  callback();
}