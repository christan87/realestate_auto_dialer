export const modelOutline = data =>{
    let dataSchema = '{'
    data.map(field =>{
        dataSchema += '\n'
        dataSchema += `${field.replace(/[^a-zA-Z0-9]/g, '')} : {`
        dataSchema +='\n'
        dataSchema += ` type: String,`
        dataSchema +='\n'
        dataSchema += ` trim: true`
        dataSchema +='\n'
        dataSchema += `},`
        dataSchema +='\n'
    })
    dataSchema +='}'
    return dataSchema
  }