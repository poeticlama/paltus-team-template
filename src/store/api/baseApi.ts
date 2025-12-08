import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";

const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL || 'api',
    credentials: "include",
    responseHandler: async response => {
        const contentType = response.headers.get('content-type');
        if (contentType === 'application/json') {
            return await response.json();
        }
        return await response.text();
    }
})

export const baseApi = createApi({
    baseQuery,
    reducerPath: 'api',
    tagTypes: [],
    endpoints: () => ({})
})