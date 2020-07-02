export const CHANGE_TAB = 'CHANGE_TAB';


function change_tab(newIndex) {

  return {
    type: CHANGE_TAB,
    payload: newIndex
  }

}


export default change_tab;
