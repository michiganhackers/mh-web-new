import styled from "styled-components";

const StaticP = styled.p`
  font-size: 1.2em;
  line-height: 1.4;
  margin: 1em 0;
  text-align: center;
`;

//mostly the same, just left-aligned text because it's easier to read a left-aligned wall of text
const CopyP = styled(StaticP)`
  text-align: left;
  color: ${(props) => props.theme.text};
`;

const StaticH1 = styled.h2`
  font-size: 2em;
  margin: 3em 0 1em 0;
  text-align: center;
`;

const CopyH1 = styled(StaticH1)`
  // again, left-aligned for readability
  text-align: left;
`;

export { StaticP, StaticH1, CopyP, CopyH1 };
