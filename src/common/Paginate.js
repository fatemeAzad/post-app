import _ from 'lodash'
export const paginate = (posts, currentPage, perPage) => {
    const startIndex = (currentPage - 1) * perPage;
    return _(posts).slice(startIndex).take(perPage).value();


}