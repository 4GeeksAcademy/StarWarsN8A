export const initialStore=()=>{
  return{
    people: [],
    planets: [],
    vehicles: [],
    favorites: [],
    description: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'get_people':
      return {
        ...store,
        people: action.payload    
        };
        case 'get_planets':
      return {
        ...store,
        planets: action.payload    
        };
        case 'get_vehicles':
      return {
        ...store,
        vehicles: action.payload    
        };
        case 'get_favorites':
        return {
        ...store,
        favorites: action.payload    
        };
         case 'get_description':
        return {
        ...store,
        description: action.payload    
        };
    default:
      return store
  }    
}
