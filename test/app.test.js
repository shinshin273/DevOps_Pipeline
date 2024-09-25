const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index'); // Adjust this path if necessary

chai.use(chaiHttp);
const expect = chai.expect;

describe('Ice Cream Website', () => {
    it('should return 200 for the homepage', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });

    it('should serve static files', (done) => {
        chai.request(app)
            .get('/some_static_file.png') // Adjust to match a real static file in your `public_html`
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });
});
