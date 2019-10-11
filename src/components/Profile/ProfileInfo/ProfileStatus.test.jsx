import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be displayed", () => {
        const component = create(<ProfileStatus status="Bla bla bla status"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("Bla bla bla status");
    });
    test("after creation span should be displayed", () => {
        const component = create(<ProfileStatus status="Bla bla bla status"/>);
        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBeNull();
    });
    test("after creation input shouldn't be displayed ", () => {
        const component = create(<ProfileStatus status="Bla bla bla status"/>);
        const root = component.root;
        expect(() => {
            let input = root.findByType("input");
        }).toThrow();
    });
    test("after creation span should be displayed with correct status ", () => {
        const component = create(<ProfileStatus status="Bla bla bla status"/>);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe("Bla bla bla status");
    });
    test("input should displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status="Bla bla bla status"/>);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");
        expect(input.props.value).toBe("Bla bla bla status");
    });
    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="Bla bla bla status" updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deActivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});