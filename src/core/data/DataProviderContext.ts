/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/07/13
 */


import { createContext } from 'react';

import { DataProvider } from '../types';

// const DataProviderContext = createContext<DataProvider>(null);
const DataProviderContext = createContext<any>(null);

DataProviderContext.displayName = 'DataProviderContext';

export default DataProviderContext;
