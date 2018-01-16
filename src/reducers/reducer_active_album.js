// If no album will initially be selected, initialise state to null to avoid throwing an error
export default (state = null, action) => {
  switch(action.type) {
    case 'ALBUM_SELECTED':
      return action.payload;
  }
  return state;
}
