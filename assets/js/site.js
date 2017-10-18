$(document).ready(function() {
		//Aplicando evento no onclick dos itens do menu do topo
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

		// Inicializando integração com o Google Firebase
    var config = {
      apiKey: "AIzaSyDd4_2LQis6drcZ_M940W_aHXlSkH5R4TA",
      authDomain: "soujava-rio.firebaseapp.com",
      databaseURL: "https://soujava-rio.firebaseio.com",
      projectId: "soujava-rio",
      storageBucket: "soujava-rio.appspot.com",
      messagingSenderId: "143824838241"
    };
		
    firebase.initializeApp(config);
});
