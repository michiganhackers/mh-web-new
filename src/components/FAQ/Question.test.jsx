import React from "react";
import { mount } from "enzyme";
import Question from "./Question";
import { CopyP } from "utility/ContentStyles";
import { ThemeProvider } from "styled-components";

describe("<Question />", () => {
    it("renders without crashing", () => {
        mount(
            <ThemeProvider theme={{ svg: {} }}>
                <Question
                    question="do I crash?"
                    answer={"hopefully not"}
                    theme={{ svg: {} }}
                />
            </ThemeProvider>
        );
    });

    it("renders a question", () => {
        const wrapper = mount(
            <ThemeProvider theme={{ svg: {} }}>
                <Question question="do I work?" answer={"hopefully yes"} />
            </ThemeProvider>
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
            <ThemeProvider theme={{ svg: {} }}>
                <Question
                    question="do I work?"
                    answer={"hopefully yes\n or else\n someone will be unhappy"}
                />
            </ThemeProvider>
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
