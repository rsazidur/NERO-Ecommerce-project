import { createApi } from '@reduxjs/toolkit/query';
import { getBaseURL } from '../../../utils/baseURL';
const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ 
    baseUrl: `${getBaseURL}/api/auth`,
    credentials: 'include',
    }),

});
