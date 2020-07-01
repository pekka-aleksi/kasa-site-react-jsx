export const FETCHLINKS = 'FETCHLINKS';


const do_fetch = (state, action) => {

  let dispatch = action.payload;

  fetch("http://127.0.0.1:8000/api/links")
    .then(response => response.json())
    .then(x => dispatch({type: 'ADDLINKS', payload: x}))
}

export default do_fetch;
