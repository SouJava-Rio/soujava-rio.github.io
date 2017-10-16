$(document).ready(function() {

		$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
          var e = a(this.hash);
          if ((e = e.length ? e : a("[name=" + this.hash.slice(1) + "]")).length)
              return a("html, body").animate({
                  scrollTop: e.offset().top - 48
              }, 1e3, "easeInOutExpo"), !1
      }
		});

    window.sr = ScrollReveal();
    sr.reveal('.section-scrollable');

});
