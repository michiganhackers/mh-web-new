import React from "react";
import { mount } from "enzyme";
import Question from "./Question";
import { CopyP } from "../../utility/ContentStyles";

describe("<Question />", () => {
    it("renders without crashing", () => {
        mount(<Question question="do I crash?" answer={"hopefully not"} />);
    });

    it("renders a question", () => {
        const wrapper = mount(
            <Question question="do I work?" answer={"hopefully yes"} />
        );
        expect(
            wrapper.containsMatchingElement(<summary>do I work?</summary>)
        ).toBe(true);
        expect(
            wrapper.find(CopyP).matchesElement(<CopyP>hopefully yes</CopyP>)
        ).toBe(true);
    });

    it("renders a multiline q/a", () => {
        const wrapper = mount(
            <Question
                question="do I work?"
                answer={"hopefully yes\n or else\n someone will be unhappy"}
            />
        );
        expect(
            wrapper.containsMatchingElement(<summary>do I work?</summary>)
        ).toBe(true);
        expect(
            wrapper
                .find(CopyP)
                .at(0)
                .matchesElement(<CopyP>hopefully yes</CopyP>)
        ).toBe(true);
        expect(
            wrapper
                .find(CopyP)
                .at(1)
                .matchesElement(<CopyP>or else</CopyP>)
        ).toBe(true);
        expect(
            wrapper
                .find(CopyP)
                .at(2)
                .matchesElement(<CopyP>someone will be unhappy</CopyP>)
        ).toBe(true);
    });
});
