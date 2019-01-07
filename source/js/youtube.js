(function() {
  /* Light YouTube Embeds by @labnol */
  /* Web: http://labnol.org/?p=27941 */
  /* https://www.labnol.org/internet/light-youtube-embeds/27941/ */
  document.addEventListener("DOMContentLoaded", function() {
    var div, n,
      v = document.getElementsByClassName("youtube-player");
    for (n = 0; n < v.length; n++) {
      div = document.createElement("div");
      div.setAttribute("data-id", v[n].dataset.id);
      div.setAttribute("data-start", v[n].dataset.start);
      div.setAttribute("data-end", v[n].dataset.end);
      div.innerHTML = ytThumb(v[n].dataset.id);
      div.onclick = ytIframe;
      v[n].appendChild(div);
    }
  });

  function ytThumb(id) {
    var thumb = '<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg">',
      play = '<div class="play"></div>';
    return thumb.replace("ID", id) + play;
  }

  function ytIframe() {
    var iframe = document.createElement("iframe");
    var embed = "https://www.youtube.com/embed/ID?autoplay=1";
    if (this.dataset.start && this.dataset.end) {
      embed = embed.concat("&start=VID_START&end=VID_END")
        .replace("VID_START", this.dataset.start)
        .replace("VID_END", this.dataset.end)
    }
    iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "1");
    this.parentNode.replaceChild(iframe, this);
  }
})();