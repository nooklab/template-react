

/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/09/20
 */


import _ from "lodash";

function getValues(values, record) {
    if (typeof values === 'object') {
        return values;
    }

    if (typeof values === 'function') {
        return values(record);
    }

    return {};
}

export function getFormInitialValues(
    initialValues,
    defaultValue,
    record
) {
    if (typeof defaultValue !== 'undefined') {
        console.warn(
            '"defaultValue" is deprecated, please use "initialValues" instead'
        );
    }

    const finalInitialValues = _.merge(
        {},
        getValues(defaultValue, record),
        getValues(initialValues, record),
        record
    );

    console.log('getFormInitialValues', finalInitialValues)


    return finalInitialValues;
}
