import axios from "axios";

// NOTE: this test does NOT consitute a thorough test of the MailingList.
// It simply ensures that the proper environment variables are installed.
it("can issue a non-404-ing request to the backend", () => {
    let mh_backend = process.env.REACT_APP_MH_BACKEND_URL;
    let payload = {};
    // An empty payload is a confirmed noop on the Mailjet side.
    return axios({
        method: "post",
        headers: { "content-type": "application/json" },
        url: mh_backend + "/v1/email/add",
        data: JSON.stringify(payload)
    })
        .catch(error => {
            expect(error.response.status).toBeTruthy();
            expect(error.response.status).not.toEqual(404);
        });
});
