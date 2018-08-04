export interface UserInputProps {
    value: string;
    suggestions: string[];
    onUserNameTyped: (value: string) => void;
    onUserNameSubmit: () => void;
    blockUserInput: boolean;
    errorNoUser: boolean;
}
