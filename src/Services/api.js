

const baseUrlApi = "https://www.swapi.tech/api"

// service for data
export const getElementList = async (elemType) => {

    const response = await fetch(baseUrlApi + "/"  + elemType)
    const data = await response.json()
    console.log(data.results)
    return data.results // list
    
}

 //service for details

 export const getElement = async (elemType, elemId) => {
    const response = await fetch (baseUrlApi + "/" + elemType + "/" + elemId)
    const data = await response.json()
    return data.result // element
 }