import axios from "axios";

// gives the backend time to spin up in case it has been sleeping.
const MH_BACKEND_TIMEOUT_TIME = 15000;

// NOTE: this test does NOT consitute a thorough test of the MailingList.
// It simply ensures that the proper environment variables are installed.
it("can verify end-to-end networking with Mailjet", () => {
    let mh_backend = process.env.REACT_APP_MH_BACKEND_URL;
    return expect(axios.get(mh_backend + "/v1/email/health")).resolves.not.toThrow();
}, MH_BACKEND_TIMEOUT_TIME);
