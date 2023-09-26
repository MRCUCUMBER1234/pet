export const buildSearchRequest = (params: { [name: string]: string }) => {
    const queriesList: string[] = [];

    Object.keys(params).forEach((key) => {
        if (params[key]) {
            queriesList.push(`${key}=${params[key]}`);
        }
    });

    return `?${queriesList.join('&')}`;
};
