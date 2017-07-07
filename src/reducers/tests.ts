import { expect } from 'chai'

import { filters, FilterAction } from './reducers'
import { FILTER } from '../actions/actions'

const testInit = () => {
    var testAction: FilterAction = {
        type: FILTER,
        filter: 'test',
        tag: 'test'
    }
    var oldTestState = undefined;
    var newTestState = [{ filter: 'test', tag: 'test' }]

    var retState = filters(oldTestState, testAction);

    expect(retState).to.eql(newTestState);
}

const testOverWrite = () => {
    var testAction: FilterAction = {
        type: FILTER,
        filter: 'isawesome',
        tag: 'mitchell'
    }
    var oldTestState = [
        {filter: 'test', tag: 'test'},
        {filter: 'abc', tag: 'mitchell'}
    ];
    var newTestState = [
        {filter: 'test', tag: 'test'},
        {filter: 'isawesome', tag: 'mitchell'}
    ]

    var retState = filters(oldTestState, testAction);

    expect(retState).to.eql(newTestState);
}

const testAddition = () => {
    var testAction: FilterAction = {
        type: FILTER,
        filter: '',
        tag: 'clinic'
    }
    var oldTestState = [
        {filter: 'test', tag: 'test'},
        {filter: 'abc', tag: 'mitchell'}
    ];
    var newTestState = [
        {filter: 'test', tag: 'test'},
        {filter: 'abc', tag: 'mitchell'},
        {filter: '', tag: 'clinic'}
    ]

    var retState = filters(oldTestState, testAction);

    expect(retState).to.eql(newTestState);
}

export const runTests = () => {
    testInit();
    testOverWrite();
    testAddition();
    console.log("tests completed");
}