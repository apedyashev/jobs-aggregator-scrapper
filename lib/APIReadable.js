const {Readable} = require('stream');
const request = require('request-promise');
const cheerio = require('cheerio');
const config = require('../config');

class APIReadable extends Readable {
  constructor() {
    super({objectMode: true});
  }

  _read() {
    if (this.isPending) {
      return;
    }

    const options = {
      uri: config.scrapTargets.jobscout.url,
      transform: (body) => {
        return cheerio.load(body);
      },
    };
    this.isPending = true;
    request(options)
      .then(($) => {
        this.push($);
        this.push(null);
      })
      .catch((e) => {
        console.log('read error', e);
        this.emit('end');
      });
  }
}

module.exports = APIReadable;
