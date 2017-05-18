/**
 * action 创建函数
 * @param type
 * @param argNames
 * @returns {function(...[*])}
 */
export function actionCreator (type, ...argNames) {
    "use strict";
    return (...args) =>　{
        let action = { type };
        argNames.forEach((item ,index) => {
            action[argNames[index]] = args[index]
        })
        return action
    }
}