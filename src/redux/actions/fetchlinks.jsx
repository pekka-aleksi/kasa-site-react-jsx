export const REQUESTLINKS = 'REQUESTLINKS';
export const RECEIVELINKS = 'RECEIVELINKS';

function requestLinks() {
  return {
    type: REQUESTLINKS,
  }
}

function receiveLinks(json) {
  return {
    type: RECEIVELINKS,
    links: json
  }
}

function fetchLinks () {

  return dispatch => {
    dispatch(requestLinks());

    return fetch(`${process.env.REACT_APP_API_URL}links`)
      .then(response => response.json())
      .then(json => dispatch(receiveLinks(json)));
  }
}
