import request from 'supertest-as-promised';
import httpStatus from 'http-status';
import chai, { expect } from 'chai';
import app from '../../index';

chai.config.includeStack = true;

describe('## Book Search APIs', () => {

  describe('# GET /api/search', () => {
    it('should find some books', (done) => {
      request(app)
        .get(`/api/search?q="cracking%20the%20coding%20interview&limit=5`)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.length).to.equal(5);
          done();
        })
        .catch(done);
    });
  });
});
