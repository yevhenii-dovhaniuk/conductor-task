import {configure, shallow} from "enzyme";
import ReactSixteenAdapter from "enzyme-adapter-react-16";
import React from "react";
import {Repo} from "../Repo";
import {noop} from 'lodash';

configure({
    adapter: new ReactSixteenAdapter()
});

describe('Repo component test', () => {
    test('should render container', () => {
        const component = shallow(
            <Repo fetchRepoData={noop} data={{
                isFork: false,
                name: 'test-name',
                owner: {
                    login: 'test-login'
                },
                stargazers: {
                    totalCount: 0
                }
            }}/>
        );
        expect(component.find('.repo').exists()).toBeTruthy();
        expect(component.find('.repoz').exists()).toBeFalsy();
    });

    test('should render owner login', () => {
        const component = shallow(
            <Repo fetchRepoData={noop} data={{
                isFork: false,
                name: 'test-name',
                owner: {
                    login: 'test-login'
                },
                stargazers: {
                    totalCount: 0
                }
            }}/>
        );
        expect(component.find('.repo__owner').text()).toEqual(' test-login')
    });
});