import {suggestions} from "../Suggestions.reducer";
import {SUGGESTIONS_RECEIVED} from "../Suggestions.actions";

describe("Suggestions reducer test", () => {
    test("Should reduce initialState correctly", () => {
        const initialState = undefined;
        const expectedStateAfterReduce = {
            total: 0,
            values: []
        };
        const reduced = suggestions(initialState, {type: "NONE"});
        expect(reduced).toEqual(expectedStateAfterReduce);
    });

    test("Should return new state with added values and total", () => {
        const initialState = {
            total: 0,
            values: []
        };

        const action = {
            payload: {items: ["One", "Two"], total_count: 100},
            type: SUGGESTIONS_RECEIVED
        };
        const reducedState = suggestions(initialState, action);

        expect(reducedState).toHaveProperty('total', 100);
        expect(reducedState).toHaveProperty('values', action.payload.items);
    });
});