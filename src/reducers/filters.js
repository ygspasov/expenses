import moment from 'moment'


//Filters reducer

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
}

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT':
            let text = action.text
            return {
                ...state,
                text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state      
    }
}