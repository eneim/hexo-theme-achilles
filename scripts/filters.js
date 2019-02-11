const qr = require('qr-image');
const svg2Uri = require('mini-svg-data-uri');

hexo.extend.filter.register('after_post_render', function(data) {
  if (data.layout === 'post') {
    var svg = qr.imageSync(data.permalink, { type: 'svg', size: 256, parse_url: true })
    var image = svg2Uri(svg);
    data.content += `<div class="qrcode"><img id="post-qrcode" src="${image}" style="width: 128px; height: 128px;"/>`
    data.content += `<p class="notice">Scan the QR code to share this article</p></div>`
  }
  return data;
});