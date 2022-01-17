import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

// This gets called before any tests run. Put any such setup tasks here.
configure({ adapter: new Adapter() });
