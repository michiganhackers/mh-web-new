import { configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

// This gets called before any tests run. Put any such setup tasks here.
configure({ adapter: new Adapter() });
