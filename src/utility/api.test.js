import { Get } from "./api";
import Url from "./url";

const NONSENSE_URL = "asldfjaslkdfj.afi/asflasljlkjlijljmnxhauserhlidf";
const GOOD_URL = "google.com";

it("should return a rejected promise on a bad request", () => {
    expect(Get(new Url(NONSENSE_URL))).resolves.toThrow();
});

it("should return a promise on a good request", () => {
    expect(Get(new Url(GOOD_URL))).resolves.not.toThrow();
});
