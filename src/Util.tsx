import { IPerson } from "./model/IPerson";

export const personAdd = ( item: IPerson ) => {

    const oldPersons = localStorage.getItem('persons')
    if ( oldPersons ) {
        const newArr:IPerson[] = JSON.parse(oldPersons)
        newArr.push( item )
        const stNewArr = JSON.stringify(newArr)
        localStorage.setItem('persons', stNewArr )
    }else {
      const arr = [item]
      const stItem = JSON.stringify(arr)
      localStorage.setItem('persons', stItem )
    }

}


export const personList = () => {
    let items:IPerson[] = []
    const stArr = localStorage.getItem('persons')
    if ( stArr ) {
        items = JSON.parse(stArr)
    }
    return items
}

export const personDelete = ( index:number ) => {
    const arr = personList()
    arr.splice(index, 1)
    localStorage.setItem('persons', JSON.stringify(arr))
    return arr
}