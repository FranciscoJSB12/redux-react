export const logger = (store) => (next) => (action) => {
    //store representa el store de nuestra app
    //next se llama cuando el middleware termina su trabajo y ella manda el action al reducer
    //action es la información de lo que está pasando
    console.log('Your middleware', action)
    next(action)
}

export const featuring = (store) => (next) => (actionInfo) => {
    const featured = [{name: 'eddie'}, ...actionInfo.action.payload]
    const updatedActionInfo = {
        ...actionInfo,
        action: { ...actionInfo.action, payload: featured}
    }
    next(updatedActionInfo)
}