import {shallow, configure} from 'enzyme';
import {Suggestions} from '../Suggestions';
import {noop} from 'lodash';
import React from 'react';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

configure({
    adapter: new ReactSixteenAdapter()
});

describe('Suggestions component test', () => {
    test('should render container', () => {
        const component = shallow(
            <Suggestions
                suggestions={[]}
                suggestionsLoading={false}
                total={0}
                onSuggestionSelected={noop}
            />
        );
        expect(component.find('.suggestions').exists()).toBeTruthy();
        expect(component.find('.suggestionz').exists()).toBeFalsy();
    });

    test('should render nothing except container for empty entries', () => {
        const component = shallow(
            <Suggestions
                suggestions={[]}
                suggestionsLoading={false}
                total={0}
                onSuggestionSelected={noop}
            />
        );
        expect(component.find('.suggestions > div').exists()).toBeFalsy();
    });
});
