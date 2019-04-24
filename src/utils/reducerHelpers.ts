import React from "react"

interface ActionCreators {
    [fnName: string]: Function
}

export const bindActionCreators = (actionCreators: ActionCreators, dispatch: Function) => {
    for (const key of Object.keys(actionCreators))
        actionCreators[key].bind(null, [dispatch])

    return actionCreators;
}
