import axios from "axios";

// NOTE: this test does NOT consitute a thorough test of the MailingList.
// It simply ensures that the proper environment variables are installed.
it("can verify end-to-end networking with Mailjet", () => {
    let mh_backend = process.env.REACT_APP_MH_BACKEND_URL;
    expect(mh_backend.length > 4).toEqual(true);
    return expect(axios.get(mh_backend + "/v1/email/health")).resolves.not.toThrow();
});
