import { httpRequest } from '~/utils';

const path = 'users/suggested';

export const getSuggestedAccount = async (perPage, page = Math.floor(Math.random() * 10) + 1) => {
    const dataResponse = await httpRequest.get(path, {
        params: {
            page,
            per_page: perPage,
        },
    });
    return dataResponse.data;
};