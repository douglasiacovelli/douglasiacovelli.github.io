

// Mautic Script
/** This section is only needed once per page if manually copying **/
if (typeof MauticSDKLoaded == 'undefined') {
    var MauticSDKLoaded = true;
    var head            = document.getElementsByTagName('head')[0];
    var script          = document.createElement('script');
    script.type         = 'text/javascript';
    script.src          = 'https://fotosvendedoras.mautic.net/mautic/media/js/mautic-form.js';
    script.onload       = function() {
        MauticSDK.onLoad();
    };
    head.appendChild(script);
    var MauticDomain = 'https://fotosvendedoras.mautic.net';
    var MauticLang   = {
        'submittingMessage': "Por favor aguarde..."
    }
}

$('#link-curso').click(function(e) {
  e.preventDefault();
  ga('send', {
    hitType: 'event',
    eventCategory: 'Link do curso',
    eventAction: 'clique',
    eventLabel: 'Footer'
  });
});
