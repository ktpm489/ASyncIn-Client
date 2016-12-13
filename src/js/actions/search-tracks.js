import { createAction } from 'redux-actions';
import axios from 'axios';
import { hashHistory } from 'react-router';

export const youtubeSearchSuccess = createAction('LOGIN_SEARCH_SUCCESS');
export const youtubeSearchError = createAction('LOGIN_SEARCH_ERROR');

export const searchYoutube = (search) => dispatch => {
    return axios.POST('https://asyncin.herokuapp.com/api/youtube', {search: search})
        .then((response) => {
            dispatch(youtubeSearchSuccess(response));
            hashHistory.push('/search');
            return { response };
        })
        .catch(err => {
            dispatch(youtubeSearchError(err));
            return false;
        })
};