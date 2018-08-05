import {onSuggestionSelected} from "../Suggestions.actions";


describe("Actions test", () => {
    test("should call selectUser with provided userName", () => {
        const mockDispatch = jest.fn();
        const testUserName = 'test-user';
        onSuggestionSelected(testUserName)(mockDispatch);

        expect(mockDispatch).toHaveBeenCalledTimes(1);
        expect(mockDispatch).toHaveBeenCalledWith(expect.any(Function));
    });
});