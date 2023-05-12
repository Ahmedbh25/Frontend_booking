import { FETCH_ACTIONS } from "./FetchDataContext";
import { FILTER_ACTIONS, radiosCheked } from "./FilterContext";
import { REG_ACTIONS } from "./RegisterContext";
import { RES_ACTIONS } from "./RoomReservationContext";

const FetchReducer = (state, action) => {
    switch (action.type) {
        case FETCH_ACTIONS.START:
            return {
                data: null,
                loading: true,
                error: null
            }
        case FETCH_ACTIONS.SUCCESS:
            return {
                data: action.payload,
                loading: false,
                error: null
            }
        case FETCH_ACTIONS.ERROR:
            return {
                data: null,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

const reservationReducer = (state, action) => {
    switch (action.type) {
        case RES_ACTIONS.INIT_DESTINATION:
            return {
                ...state,
                inputs: { ...state.inputs, destination: action.payload }
            }
        case RES_ACTIONS.INIT_ARRIVAL_DATE:
            return {
                ...state,
                inputs: { ...state.inputs, arrival_date: action.payload }
            }
        case RES_ACTIONS.INIT_DEPARTURE_DATE:
            return {
                ...state,
                inputs: { ...state.inputs, departure_date: action.payload }
            }
        case RES_ACTIONS.START_SEARCH:
            return {
                ...state,
                search_result: {
                    data: null,
                    loading: true,
                    error: null,
                }
            }
        case RES_ACTIONS.SUCCESS_SEARCH:
            return {
                ...state,
                search_result: {
                    data: action.payload,
                    loading: false,
                    error: null,
                }
            }
        case RES_ACTIONS.FAIL_SEARCH:
            return {
                ...state,
                search_result: {
                    data: null,
                    loading: false,
                    error: action.payload,
                }
            }
        default:
            return state;
    }
}

const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                loading: true,
                error: null,
            };
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                loading: false,
                error: null,
            };
        case "LOGIN_FAILURE":
            return {
                user: null,
                loading: false,
                error: action.payload,
            };
        case "LOGOUT":
            return {
                user: null,
                loading: false,
                error: null,
            };
        default:
            return state;
    }
};

const RegisterReducer = (state, action) => {
    switch (action.type) {
        case REG_ACTIONS.UPDATING_INPUTS:
            return {
                ...state,
                USER_DATA: {
                    ...state.USER_DATA,
                    [action.payload.name]: action.payload.value,
                },
            };
        case REG_ACTIONS.START_REQ:
            return {
                ...state,
                FETCHING: {
                    user: null,
                    loading: true,
                    error: null,
                }
            };
        case REG_ACTIONS.SUCCESS_REQ:
            return {
                ...state,
                FETCHING: {
                    user: action.payload,
                    loading: false,
                    error: null,
                }
            };
        case REG_ACTIONS.FAIL_REQ:
            return {
                ...state,
                FETCHING: {
                    user: null,
                    loading: false,
                    error: action.payload,
                }
            };
        default:
            return state;
    }
}

const FilterReducer = (state, action) => {
    switch (action.type) {
        case FILTER_ACTIONS.INIT:
            return {
                ...state,
                hotels: action.payload,
                FiltredHotels: action.payload,
            }
        case FILTER_ACTIONS.STARS:
            const { value: star } = action.payload;
            const starNumber = Number(star.substring(5));

            const StarsFiltredHotels = state.hotels.filter(hotel => (hotel.rating?.number >= starNumber && hotel.rating?.number < starNumber + 1));

            return {
                ...state,
                FiltredHotels: StarsFiltredHotels,
                // this work for checkbox and radio you can change the code depending on your needs
                radiosCheked: {
                    ...state.radiosCheked,
                    radioStars: {
                        ...Object.keys(state.radiosCheked.radioStars).reduce((acc, key) => {
                            acc[key] = key === star ? !state.radiosCheked.radioStars[key] : false;
                            return acc;
                        }, {})
                    }
                }
            };

        case FILTER_ACTIONS.PRICE:
            const { value: price } = action.payload;
            let PriceFiltredHotels;
            switch (price) {
                case "ascending":
                    PriceFiltredHotels = state.FiltredHotels.sort((hotely, hotelz) => hotely.cheapestPrice - hotelz.cheapestPrice);
                    break;
                case "descending":
                    PriceFiltredHotels = state.FiltredHotels.sort((hotely, hotelz) => hotelz.cheapestPrice - hotely.cheapestPrice);
                    break;
                default:
                    PriceFiltredHotels = [];
            }

            return {
                ...state,
                FiltredHotels: PriceFiltredHotels,
                // this work for checkbox and radio you can change the code depending on your needs.
                radiosCheked: {
                    ...state.radiosCheked,
                    radioPrice: {
                        ...Object.keys(state.radiosCheked.radioPrice).reduce((acc, key) => {
                            acc[key] = key === price ? !state.radiosCheked.radioPrice[key] : false;
                            return acc;
                        }, {})
                    }
                },
            }
        case FILTER_ACTIONS.TYPE:
            let { value: type } = action.payload;
            const TypeFiltredHotels = state.hotels.filter(hotel => hotel.type.toLowerCase() === type.toLowerCase());
            if (type === "chain hotels") {
                type = "chain"
            }

            return {
                ...state,
                FiltredHotels: TypeFiltredHotels,
                // this work for both checkbox and radio you can change the code depending on your needs.
                radiosCheked: {
                    ...state.radiosCheked,
                    radioType: {
                        ...Object.keys(state.radiosCheked.radioType).reduce((acc, key) => {
                            acc[key] = key === type ? !state.radiosCheked.radioType[key] : false;
                            return acc;
                        }, {})
                    }
                },
            }
        case FILTER_ACTIONS.DELETE:
            return {
                ...state,
                FiltredHotels: state.hotels,
                radiosCheked: radiosCheked,
            }


        default:
            return state;
    }
}

export { FetchReducer, reservationReducer, AuthReducer, RegisterReducer, FilterReducer };