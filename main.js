import './style.css'

// Simple client-side routing
const routes = {
  '/': () => renderGeneralBingo(),
  '/history': () => renderHistoryBingo()
}

function navigate(path) {
  history.pushState({}, '', path)
  router()
}

function router() {
  const path = window.location.pathname
  const route = routes[path] || routes['/']
  route()
}

function createNavBar() {
  return `
    <nav class="bg-white shadow-md mb-8">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between items-center py-4">
          <a href="/" class="text-xl font-bold text-indigo-600 hover:text-indigo-800" onclick="navigate('/'); return false;">
            Berlin Bingo
          </a>
          <div class="space-x-6">
            <a href="/" class="text-gray-700 hover:text-indigo-600 font-medium" onclick="navigate('/'); return false;">
              General
            </a>
            <a href="/history" class="text-gray-700 hover:text-indigo-600 font-medium" onclick="navigate('/history'); return false;">
              History
            </a>
          </div>
        </div>
      </div>
    </nav>
  `
}

function renderGeneralBingo() {
  const generalItems = [
    'Enjoy a beverage at <a href="https://goo.gl/maps/4SkyYsA5SCr3iBx76" target="_blank">Café Neunsee</a>',
    'Eat a döner or falefel or kofte',
    'Explore the <a href="https://www.berliner-unterwelten.de/en/index.html" target="_blank">underground of Berlin</a>',
    'Visit the <a href="https://g.page/juedischesmuseumberlin?share" target="_blank">Jewish Museum</a> or the <a href="https://www.topographie.de/en/topography-of-terror/" target="_blank">Topography of Terror museum</a>',
    'Attend a show at <a href="https://www.konzertfluegel.com" target="_blank">Piano Christophori salon</a>',
    'Eat a <a href="https://goo.gl/maps/ASqvmB4f6v7RSEdT8" target="_blank">Zimtschnecke</a>',
    'Eat a Bretzel',
    'Eat smoked fish',
    'Enjoy a scoop of <a href="https://g.page/duosicilianicecream?share" target="_blank">Duo Sicilian gelato</a>',
    'Partake in Kaffee und Kuchen',
    'Tour the <a href="https://www.bundestag.de/en/visittheBundestag/dome/registration-245686" target="_blank">Reichstag</a>',
    'Visit <a href="https://goo.gl/maps/nNAhxeEUtyy8JeN97" target="_blank">Schloß Charlottenburg</a>',
    'Take a picture of the tv tower',
    'Visit the <a href="https://goo.gl/maps/qZpf4gxMsTkvMkrV8" target="_blank">Memorial to Murdered Jews</a>',
    'Walk the <a href="https://goo.gl/maps/m5AX2EPvJCzkiMPE7" target="_blank">Berlin Wall Memorial park</a>',
    '<a href="https://goo.gl/maps/CJ6ivqe4ZjCWwR6Z6" target="_blank">Ride the S-Bahn ring</a>, either direction, all the way around the city',
    'Do a <a href="https://www.berlin.de/en/tourism/rivercruises-boattrips/" target="_blank">Boat tour</a>',
    'See the <a href="https://goo.gl/maps/W5TctXkBz63TrU2S7" target="_blank">Brandenburger Tor</a>',
    'Visit <a href="https://goo.gl/maps/NEEsCimSYajgbemSA" target="_blank">Sanssouci Park</a> in Potsdam',
    'Visit the Pergamon or any museum on <a href="https://goo.gl/maps/p9mL5eDHRfUPbSca9" target="_blank">museum island</a>',
    'Eat at <a href="https://goo.gl/maps/MxQpkHUToEbT97eb8" target="_blank">Thai Park</a> (only on weekends in the summer)',
    'Go to the market at <a href="https://goo.gl/maps/HMo8Jshb2SSspdHv9" target="_blank">Boxhagener Platz</a> (Saturday morning only)',
    'Get some bread from Domberger at <a href="https://goo.gl/maps/rydxhifHyRTU8N6U6" target="_blank">Markthalle Neun</a>',
    'Relax on the grass at <a href="https://goo.gl/maps/8KEUrfqJtEsQZQJ19" target="_blank">Tempelhoferfeld</a>',
    'Walk along the <a href="https://goo.gl/maps/JH7VpTKrJeq1GsecA" target="_blank">canal in Kreuzberg</a>'
  ]
  
  renderBingo('BERLIN BINGO', generalItems)
}

function renderHistoryBingo() {
  const historyItems = [
    'Visit <a href="https://goo.gl/maps/qZpf4gxMsTkvMkrV8" target="_blank">Memorial to Murdered Jews of Europe</a>',
    'Walk through <a href="https://goo.gl/maps/m5AX2EPvJCzkiMPE7" target="_blank">Berlin Wall Memorial</a>',
    'See <a href="https://www.topographie.de/en/" target="_blank">Topography of Terror</a> documentation center',
    'Tour the <a href="https://www.bundestag.de/en/visittheBundestag/dome/registration-245686" target="_blank">Reichstag dome</a>',
    'Visit <a href="https://g.page/juedischesmuseumberlin?share" target="_blank">Jewish Museum Berlin</a>',
    'Explore <a href="https://goo.gl/maps/nNAhxeEUtyy8JeN97" target="_blank">Charlottenburg Palace</a>',
    'See the <a href="https://goo.gl/maps/W5TctXkBz63TrU2S7" target="_blank">Brandenburg Gate</a>',
    'Visit <a href="https://goo.gl/maps/p9mL5eDHRfUPbSca9" target="_blank">Museum Island</a> (Pergamon Museum)',
    'Walk through <a href="https://www.berlin.de/en/museums/3109866-3104050-german-historical-museum.html" target="_blank">German Historical Museum</a>',
    'See remnants of the <a href="https://www.berlin.de/en/attractions-and-sights/3560266-3104052-east-side-gallery.html" target="_blank">Berlin Wall at East Side Gallery</a>',
    'Visit <a href="https://checkpoint-charlie.com/en/" target="_blank">Checkpoint Charlie</a>',
    'Explore the <a href="https://www.berliner-unterwelten.de/en/" target="_blank">Berlin underground bunkers</a>',
    'See the <a href="https://www.berlin.de/en/museums/3104985-3104050-stasi-museum.html" target="_blank">Stasi Museum</a>',
    'Visit <a href="https://goo.gl/maps/NEEsCimSYajgbemSA" target="_blank">Sanssouci Palace</a> in Potsdam',
    'Walk through <a href="https://www.berlin.de/en/museums/3109763-3104050-old-national-gallery.html" target="_blank">Alte Nationalgalerie</a>',
    'See the <a href="https://www.berlin.de/en/attractions-and-sights/3560308-3104052-kaiser-wilhelm-memorial-church.html" target="_blank">Kaiser Wilhelm Memorial Church</a>',
    'Visit <a href="https://www.berlin.de/en/museums/3104774-3104050-bode-museum.html" target="_blank">Bode Museum</a>',
    'Explore the <a href="https://www.berlin.de/en/museums/3104979-3104050-altes-museum.html" target="_blank">Altes Museum</a>',
    'Walk through <a href="https://www.visitberlin.de/en/bebelplatz" target="_blank">Bebelplatz</a> (book burning memorial)',
    'See the <a href="https://www.berlin.de/en/museums/3104982-3104050-neues-museum.html" target="_blank">Neues Museum</a> (Egyptian collection)',
    'Visit the <a href="https://www.dhm.de/en/" target="_blank">Zeughaus</a> (former arsenal)',
    'Walk along <a href="https://www.visitberlin.de/en/unter-den-linden" target="_blank">Unter den Linden</a> boulevard',
    'See the <a href="https://www.berlin.de/en/attractions-and-sights/3560429-3104052-gendarmenmarkt.html" target="_blank">Gendarmenmarkt</a>',
    'Visit <a href="https://www.cecilienhof.de/en/" target="_blank">Cecilienhof Palace</a> (Potsdam Conference site)',
    'Explore the <a href="https://www.spsg.de/en/palaces-gardens/object/nikolskoe/" target="_blank">Nikolskoe</a> Russian colony'
  ]
  
  renderBingo('BERLIN HISTORY BINGO', historyItems)
}

function renderBingo(title, items) {
  document.body.innerHTML = `
    ${createNavBar()}
    <div class="container mx-auto px-4">
      <h1 class="text-3xl text-center font-semibold mb-8">
        ${title}
      </h1>
      <div class="flex items-center justify-center">
        <div class="card">
          ${items.map(item => `
            <label class="tile">
              <div>${item}</div>
            </label>
          `).join('')}
        </div>
      </div>
    </div>
  `
}

window.navigate = navigate

window.addEventListener('popstate', router)

window.readURL = (input) => {
  console.log("readURL %o", input);
  if (input.files && input.files[0]) {
    console.log(input.files[0]);
    const reader = new FileReader();

    reader.onload = function (e) {
      console.log(e.target.result);
      localStorage.setItem("imgData", e.target.result);
    }

    reader.readAsDataURL(input.files[0]);
  }
}

router()
