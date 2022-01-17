import React from "react";
import { shallow, mount } from "enzyme";
import Question from "./Question";
import { CopyH1, CopyP } from "../../utility/ContentStyles";

describe("<Question />", () => {
    it("renders without crashing", () => {
        mount(<Question question="do I crash?" answer={"hopefully not"} />);
    });

    it("renders a question", () => {
        const wrapper = shallow(
            <Question question="do I work?" answer={"hopefully yes"} />
        );
        expect(
            wrapper.find(CopyH1).matchesElement(<CopyH1>Q: do I work?</CopyH1>)
        ).toBe(true);
        expect(
            wrapper.find(CopyP).matchesElement(<CopyP>hopefully yes</CopyP>)
        ).toBe(true);
    });

    it("renders a multiline q/a", () => {
        const wrapper = shallow(
            <Question
                question="do I work?"
                answer={"hopefully yes\n or else\n someone will be unhappy"}
            />
        );
        expect(
            wrapper.find(CopyH1).matchesElement(<CopyH1>Q: do I work?</CopyH1>)
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
