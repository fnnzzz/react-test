import dispatcher from '../dispatcher';

export function addOrdered(id) {
    dispatcher.dispatch({
        type: "BUY_ITEM",
        id,
    });
}