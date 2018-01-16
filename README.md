# redux-data-flow-demo
A quick and basic demo of the flow of data through redux and react

Action data flow:

1) A user event / interaction triggers an action creator, passing in any relevant information pertaining to the action occurring.

2) The action creator then creates an action object, with type key describing the type of action occurring, plus an optional payload providing further context.

3) The action object is dispatched to any middleware, plus all reducers.

4) Each reducer either responds to the action with an updated piece of state, or returns the current state unchanged, depending on whether that reducer cares about the state.

5) All state is merged into a new state object which is redistributed to all containers, causing them to re-render along with any child components to re-render also.
