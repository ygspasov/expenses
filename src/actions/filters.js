
// set text filter
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT',
    text
})
// sort by amount
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
})
// sort by date
export const sortByDate = () => ({
    type: 'SORT_BY_DATE',
})
// set start date
export const setStartDate = (startDate)=>({
    type: 'SET_START_DATE',
    startDate
})
// set end date
export const setEndDate = (endDate)=>({
    type: 'SET_END_DATE',
    endDate
})