import request from 'supertest-as-promised';
import httpStatus from 'http-status';
import chai, { expect } from 'chai';
import app from '../../index';

chai.config.includeStack = true;

describe('## Search APIs', () => {

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

    it('should find a book by author', (done) => {
      request(app)
        .get(`/api/search?q=Gayle%20Laakmann%20McDowell&field=author`)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body[0].authors[0]).to.equal('Gayle Laakmann McDowell');
          done();
        })
        .catch(done);
    });
  });

  describe('# GET /api/search/:volumeId', () => {
    let volumeId = '9KJJYFIss_wC';
    it('should find a book by volumeId', (done) => {
      request(app)
        .get(`/api/search/${volumeId}`)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.volumeId).to.equal(volumeId);
          done();
        })
        .catch(done);
    });
  });

});
