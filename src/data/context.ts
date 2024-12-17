'use client'

import { createContext } from "react";

type StateType = {
    goods: any[],
    notification: string,
} & any;

export const initialState: StateType = {
    goods: [],
    notification: '',
};

export const CartContext = createContext(initialState);

export const enum CartActionTypes {
    DEL = "DEL",
    ADD = "ADD",
    CLOSE_NOTIFY = "CLOSE_NOTIFY",
}

type CartAction = {
    type: CartActionTypes;
    payload?: any;
}

export const cartActionCreator = (type: CartActionTypes, payload?: any): CartAction => {
    return {
        type,
        payload
    }
};

function checkGoodAndIncrementOrDecrement (
    state: any,
    payload: any,
    operation: 'increment' | 'decrement'
): Array<any> {
    return state.goods.reduce((acc: any[], good: any) => {
        if (good.id === payload.id) {
            const filtredState = [...state.goods].filter((good: any) => {
                return good.id !== payload.id;
            });

            const goodWithCount = {...good};

            switch (operation) {
                case 'increment': {
                    goodWithCount.count++;
                    acc.push(...[goodWithCount, ...filtredState])
                    break;
                }
                case 'decrement': {
                    if (goodWithCount.count === 1) {
                        break;
                    }
                    goodWithCount.count--;
                    acc.push(...[goodWithCount, ...filtredState])
                    break;
                }
                default:
                    throw new Error('Unknown operation for when processing an action');
            }
        }
        return acc;
    }, []);
};

function updateGoodsAndNotify(
    array: any[], 
    type: Omit<CartActionTypes, CartActionTypes.CLOSE_NOTIFY>
): StateType {
    return {
        goods: array,
        notification: 
        type === CartActionTypes.ADD 
        ? 'Added to cart'
        : 'Deleted from cart',
    }
}

export const cartReducer = (state: StateType, action: CartAction) => {
    const { type, payload } = action;

    switch (type) {
        case CartActionTypes.DEL: {
            const updatedState = checkGoodAndIncrementOrDecrement(state, payload, 'decrement');

            if (updatedState.length > 0) {
                return updateGoodsAndNotify(
                    updatedState, 
                    CartActionTypes.DEL
                );
            } else {
                return updateGoodsAndNotify(
                    [...state.goods.filter((good: any) => {
                        return good.id !== payload.id;
                    })], 
                    CartActionTypes.DEL
                )
            };
        }
        case CartActionTypes.ADD: {
            const updatedState = checkGoodAndIncrementOrDecrement(state, payload, 'increment');

            if (updatedState.length > 0) {
                return updateGoodsAndNotify(
                    updatedState, 
                    CartActionTypes.ADD
                );
            } else {
                return updateGoodsAndNotify(
                    [{ count: 1, ...payload }, ...state.goods], 
                    CartActionTypes.ADD
                );
            };
        }
        case CartActionTypes.CLOSE_NOTIFY: {
            return {
                ...state,
                notification: '',
            }
        }
        default:
            return state;
    }
}
