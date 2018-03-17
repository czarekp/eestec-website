function initMap() {

    var map, cfg = {
        zoom: 3.9,
        lat: 52,
        lng: 12,
        streetViewControl: false,
        mapTypeControl: false,
        mapTypeId: window.google && google.maps.MapTypeId.ROADMAP
    };

    map = window.map = new google.maps.Map(document.getElementById("map"), cfg);
    map.setCenter(new google.maps.LatLng(cfg.lat, cfg.lng));

    var infowins = {},
        markers = {},
        latest = 0;

    markers["almeria"] = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(36.834047, -2.4637136),
        title: 'Almeria',
        icon: 'img/map_marker.png'
    });
    infowins["almeria"] = new google.maps.InfoWindow({
        content: '<h5>Almeria</h5>',
        maxWidth: 150
    });
    google.maps.event.addListener(
        markers["almeria"],
        "click",
        function () {
            if (latest == infowins["almeria"])
                if (latest)
                    latest.close();
            latest = infowins["almeria"];
            latest.open(map, markers["almeria"]);
        }
    );
    infowins["aachen"] = new google.maps.InfoWindow({
        content: '<h5 id="firstHeading" class="firstHeading">Akwizgran</h5>',
        maxWidth: 150
    });
    markers["aachen"] = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(50.7753455, 6.0838868),
        title: 'Akwizgran',
        icon: 'img/map_marker.png'
    });
    google.maps.event.addListener(
        markers["aachen"],
        "click",
        function () {
            if (latest == infowins["aachen"])
                if (latest)
                    latest.close();
            latest = infowins["aachen"];
            latest.open(map, markers["aachen"]);
        }
    );
    infowins["ankara"] = new google.maps.InfoWindow({
        content: '<h5 id="firstHeading" class="firstHeading">Ankara</h5>',



        maxWidth: 150
    });
    markers["ankara"] = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(39.9333635, 32.8597419),
        title: 'Ankara',
        icon: 'img/map_marker.png'
    });
    google.maps.event.addListener(
        markers["ankara"],
        "click",
        function () {
            if (latest == infowins["ankara"])
                if (latest)
                    latest.close();
            latest = infowins["ankara"];
            latest.open(map, markers["ankara"]);
        }
    );
    infowins["antwerp"] = new google.maps.InfoWindow({
        content: '<h5>Antwerpia</h5>',


        maxWidth: 150
    });
    markers["antwerp"] = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(51.2194475, 4.4024643),
        title: 'Antwerpia',
        icon: 'img/map_marker.png'
    });
    google.maps.event.addListener(
        markers["antwerp"],
        "click",
        function () {
            if (latest == infowins["antwerp"])
                if (latest)
                    latest.close();
            latest = infowins["antwerp"];
            latest.open(map, markers["antwerp"]);
        }
    );
    infowins["athens"] = new google.maps.InfoWindow({
        content: '<h5>Ateny</h5>',
        maxWidth: 150
    });
    markers["athens"] = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(37.9838096, 23.7275388),
        title: 'Ateny',
        icon: 'img/map_marker.png'
    });
    google.maps.event.addListener(
        markers["athens"],
        "click",
        function () {
            if (latest == infowins["athens"])
                if (latest)
                    latest.close();
            latest = infowins["athens"];
            latest.open(map, markers["athens"]);
        }
    );
    infowins["aveiro"] = new google.maps.InfoWindow({
        content: '<h5>Aveiro</h5>',
        maxWidth: 150
    });
    markers["aveiro"] = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(40.6405055, -8.6537539),
        title: 'Aveiro',
        icon: 'img/map_marker.png'
    });
    google.maps.event.addListener(
        markers["aveiro"],
        "click",
        function () {
            if (latest == infowins["aveiro"])
                if (latest)
                    latest.close();
            latest = infowins["aveiro"];
            latest.open(map, markers["aveiro"]);
        }
    );
    infowins["banja-luka"] = new google.maps.InfoWindow({
        content: '<h5>Banja Luka</h5>',
        maxWidth: 150
    });
    markers["banja-luka"] = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(44.7721811, 17.191),
        title: 'Banja Luka',
        icon: 'img/map_marker.png'
    });
    google.maps.event.addListener(
        markers["banja-luka"],
        "click",
        function () {
            if (latest == infowins["banja-luka"])
                if (latest)
                    latest.close();
            latest = infowins["banja-luka"];
            latest.open(map, markers["banja-luka"]);
        }
    );
    infowins["belgrade"] = new google.maps.InfoWindow({
        content: '<h5>Belgrad</h5>',
        maxWidth: 150
    });
    markers["belgrade"] = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(44.786568, 20.4489216),
        title: 'Belgrad',
        icon: 'img/map_marker.png'
    });
    google.maps.event.addListener(
        markers["belgrade"],
        "click",
        function () {
            if (latest == infowins["belgrade"])
                if (latest)
                    latest.close();
            latest = infowins["belgrade"];
            latest.open(map, markers["belgrade"]);
        }
    );
    infowins["bucharest"] = new google.maps.InfoWindow({
        content: '<h5>Bukareszt</h5>',
        maxWidth: 150
    });
    markers["bucharest"] = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(44.4267674, 26.1025384),
        title: 'Bukareszt',
        icon: 'img/map_marker.png'
    });
    google.maps.event.addListener(
        markers["bucharest"],
        "click",
        function () {
            if (latest == infowins["bucharest"])
                if (latest)
                    latest.close();
            latest = infowins["bucharest"];
            latest.open(map, markers["bucharest"]);
        }
    );
    infowins["budapest"] = new google.maps.InfoWindow({
        content: '<h5>Budapeszt</h5>',
        maxWidth: 150
    });
    markers["budapest"] = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(47.497912, 19.040235),
        title: 'Budapeszt',
        icon: 'img/map_marker.png'
    });
    google.maps.event.addListener(
        markers["budapest"],
        "click",
        function () {
            if (latest == infowins["budapest"])
                if (latest)
                    latest.close();
            latest = infowins["budapest"];
            latest.open(map, markers["budapest"]);
        }
    );
    infowins["bursa"] = new google.maps.InfoWindow({
        content: '<h5>Bursa</h5>',
        maxWidth: 150
    });
    markers["bursa"] = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(40.1885281, 29.0609636),
        title: 'Bursa',
        icon: 'img/map_marker.png'
    });
    google.maps.event.addListener(
        markers["bursa"],
        "click",
        function () {
            if (latest == infowins["bursa"])
                if (latest)
                    latest.close();
            latest = infowins["bursa"];
            latest.open(map, markers["bursa"]);
        }
    );
    infowins["catania"] = new google.maps.InfoWindow({
        content: '<h5>Katania</h5>',
        maxWidth: 150
    });
    markers["catania"] = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(37.5078772, 15.0830304),
        title: 'Katania',
        icon: 'img/map_marker.png'
    });
    google.maps.event.addListener(
        markers["catania"],
        "click",
        function () {
            if (latest == infowins["catania"])
                if (latest)
                    latest.close();
            latest = infowins["catania"];
            latest.open(map, markers["catania"]);
        }
    );
    infowins["chemnitz"] = new google.maps.InfoWindow({
        content: '<h5>Chemnitz</h5>',
        maxWidth: 150
    });
    markers["chemnitz"] = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(50.827845, 12.9213697),
        title: 'Chemnitz',
        icon: 'img/map_marker.png'
    });
    google.maps.event.addListener(
        markers["chemnitz"],
        "click",
        function () {
            if (latest == infowins["chemnitz"])
                if (latest)
                    latest.close();
            latest = infowins["chemnitz"];
            latest.open(map, markers["chemnitz"]);
        }
    );
    infowins["cosenza"] = new google.maps.InfoWindow({
        content: '<h5>Cosenza</h5>',
        maxWidth: 150
    });
    markers["cosenza"] = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(39.2982629, 16.2537357),
        title: 'Cosenza',
        icon: 'img/map_marker.png'
    });
    google.maps.event.addListener(
        markers["cosenza"],
        "click",
        function () {
            if (latest == infowins["cosenza"])
                if (latest)
                    latest.close();
            latest = infowins["cosenza"];
            latest.open(map, markers["cosenza"]);
        }
    );
    infowins["craiova"] = new google.maps.InfoWindow({
        content: '<h5>Krajowa</h5>',
        maxWidth: 150
    });
    markers["craiova"] = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(44.3301785, 23.7948807),
        title: 'Krajowa',
        icon: 'img/map_marker.png'
    });
    google.maps.event.addListener(
        markers["craiova"],
        "click",
        function () {
            if (latest == infowins["craiova"])
                if (latest)
                    latest.close();
            latest = infowins["craiova"];
            latest.open(map, markers["craiova"]);
        }
    );
    infowins["delft"] = new google.maps.InfoWindow({
        content: '<h5>Delft</h5>',
        maxWidth: 150
    });
    markers["delft"] = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(52.0115769, 4.3570677),
        title: 'Delft',
        icon: 'img/map_marker.png'
    });
    google.maps.event.addListener(
        markers["delft"],
        "click",
        function () {
            if (latest == infowins["delft"])
                if (latest)
                    latest.close();
            latest = infowins["delft"];
            latest.open(map, markers["delft"]);
        }
    );
    infowins["dublin"] = new google.maps.InfoWindow({
        content: '<h5>Dublin</h5>',
        maxWidth: 150
    });
    markers["dublin"] = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(53.3498053, -6.2603097),
        title: 'Dublin',
        icon: 'img/map_marker.png'
    });
    google.maps.event.addListener(
        markers["dublin"],
        "click",
        function () {
            if (latest == infowins["dublin"])
                if (latest)
                    latest.close();
            latest = infowins["dublin"];
            latest.open(map, markers["dublin"]);
        }
    );
    infowins["east-sarajevo"] = new google.maps.InfoWindow({
        content: '<h5>Sarajewo Wschodnie</h5>',
        maxWidth: 150
    });
    markers["east-sarajevo"] = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(43.8562586, 18.4130763),
        title: 'Sarajewo Wschodnie',
        icon: 'img/map_marker.png'
    });
    google.maps.event.addListener(
        markers["east-sarajevo"],
        "click",
        function () {
            if (latest == infowins["east-sarajevo"])
                if (latest)
                    latest.close();
            latest = infowins["east-sarajevo"];
            latest.open(map, markers["east-sarajevo"]);
        }
    );
    infowins["eskisehir"] = new google.maps.InfoWindow({
        content: '<h5>Eskisehir</h5>',
        maxWidth: 150
    });
    markers["eskisehir"] = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(39.7667061, 30.5256311),
        title: 'Eskisehir',
        icon: 'img/map_marker.png'
    });
    google.maps.event.addListener(
        markers["eskisehir"],
        "click",
        function () {
            if (latest == infowins["eskisehir"])
                if (latest)
                    latest.close();
            latest = infowins["eskisehir"];
            latest.open(map, markers["eskisehir"]);
        }
    );
    infowins["gdansk"] = new google.maps.InfoWindow({
        content: '<h5>Gdańsk</h5>',
        maxWidth: 150
    });
    markers["gdansk"] = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(54.3520252, 18.6466384),
        title: 'Gdańsk',
        icon: 'img/map_marker.png'
    });
    google.maps.event.addListener(
        markers["gdansk"],
        "click",
        function () {
            if (latest == infowins["gdansk"])
                if (latest)
                    latest.close();
            latest = infowins["gdansk"];
            latest.open(map, markers["gdansk"]);
        }
    );
    infowins["gliwice"] = new google.maps.InfoWindow({
        content: '<h5>Gliwice</h5>',
        maxWidth: 150
    });
    markers["gliwice"] = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(50.2944923, 18.6713802),
        title: 'Gliwice',
        icon: 'img/map_marker.png'
    });
    google.maps.event.addListener(
        markers["gliwice"],
        "click",
        function () {
            if (latest == infowins["gliwice"])
                if (latest)
                    latest.close();
            latest = infowins["gliwice"];
            latest.open(map, markers["gliwice"]);
        }
    );
    infowins["hamburg"] = new google.maps.InfoWindow({
        content: '<h5>Hamburg</h5>',
        maxWidth: 150
    });
    markers["hamburg"] = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(53.5510846, 9.9936819),
        title: 'Hamburg',
        icon: 'img/map_marker.png'
    });
    google.maps.event.addListener(
        markers["hamburg"],
        "click",
        function () {
            if (latest == infowins["hamburg"])
                if (latest)
                    latest.close();
            latest = infowins["hamburg"];
            latest.open(map, markers["hamburg"]);
        }
    );
    infowins["istanbul"] = new google.maps.InfoWindow({
        content: '<h5>Stambuł</h5>',
        maxWidth: 150
    });
    markers["istanbul"] = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(41.0082376, 28.9783589),
        title: 'Stambuł',
        icon: 'img/map_marker.png'
    });
    google.maps.event.addListener(
        markers["istanbul"],
        "click",
        function () {
            if (latest == infowins["istanbul"])
                if (latest)
                    latest.close();
            latest = infowins["istanbul"];
            latest.open(map, markers["istanbul"]);
        }
    );
    infowins["izmir"] = new google.maps.InfoWindow({
        content: '<h5>Izmir</h5>',
        maxWidth: 250
    });
    markers["izmir"] = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(38.423734, 27.142826),
        title: 'Izmir',
        icon: 'img/map_marker.png'
    });
    google.maps.event.addListener(
        markers["izmir"],
        "click",
        function () {
            if (latest == infowins["izmir"])
                if (latest)
                    latest.close();
            latest = infowins["izmir"];
            latest.open(map, markers["izmir"]);
        }
    );

    infowins["karlsruhe"] = new google.maps.InfoWindow({
        content: '<h5>Karlsruhe</h5>',
        maxWidth: 150
    });
    markers["karlsruhe"] = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(49.0068901, 8.4036527),
        title: 'Karlsruhe',
        icon: 'img/map_marker.png'
    });
    google.maps.event.addListener(
        markers["karlsruhe"],
        "click",
        function () {
            if (latest == infowins["karlsruhe"])
                if (latest)
                    latest.close();
            latest = infowins["karlsruhe"];
            latest.open(map, markers["karlsruhe"]);
        }
    );
    infowins["krakow"] = new google.maps.InfoWindow({
        content: '<h5>Kraków</h5>',
        maxWidth: 250
    });
    markers["krakow"] = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(50.0646501, 19.9449799),
        title: 'Kraków',
        icon: 'img/map_marker.png'
    });
    google.maps.event.addListener(
        markers["krakow"],
        "click",
        function () {
            if (latest == infowins["krakow"])
                if (latest)
                    latest.close();
            latest = infowins["krakow"];
            latest.open(map, markers["krakow"]);
        }
    );
    infowins["lille"] = new google.maps.InfoWindow({
        content: '<h5>Lille</h5>',
        maxWidth: 150
    });
    markers["lille"] = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(50.62925, 3.057256),
        title: 'Lille',
        icon: 'img/map_marker.png'
    });
    google.maps.event.addListener(
        markers["lille"],
        "click",
        function () {
            if (latest == infowins["lille"])
                if (latest)
                    latest.close();
            latest = infowins["lille"];
            latest.open(map, markers["lille"]);
        }
    );
    infowins["linkoping"] = new google.maps.InfoWindow({
        content: '<h5>Linköping</h5>',
        maxWidth: 150
    });
    markers["linkoping"] = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(58.410807, 15.6213727),
        title: 'Linköping',
        icon: 'img/map_marker.png'
    });
    google.maps.event.addListener(
        markers["linkoping"],
        "click",
        function () {
            if (latest == infowins["linkoping"])
                if (latest)
                    latest.close();
            latest = infowins["linkoping"];
            latest.open(map, markers["linkoping"]);
        }
    );
    infowins["lisbon"] = new google.maps.InfoWindow({
        content: '<h5>Lizbona</h5>',
        maxWidth: 150
    });
    markers["lisbon"] = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(38.7222524, -9.1393366),
        title: 'Lizbona',
        icon: 'img/map_marker.png'
    });
    google.maps.event.addListener(
        markers["lisbon"],
        "click",
        function () {
            if (latest == infowins["lisbon"])
                if (latest)
                    latest.close();
            latest = infowins["lisbon"];
            latest.open(map, markers["lisbon"]);
        }
    );
    infowins["ljubljana"] = new google.maps.InfoWindow({
        content: '<h5">Lublana</h5>',
        maxWidth: 150
    });
    markers["ljubljana"] = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(46.0569465, 14.5057515),
        title: 'Lublana',
        icon: 'img/map_marker.png'
    });
    google.maps.event.addListener(
        markers["ljubljana"],
        "click",
        function () {
            if (latest == infowins["ljubljana"])
                if (latest)
                    latest.close();
            latest = infowins["ljubljana"];
            latest.open(map, markers["ljubljana"]);
        }
    );
    infowins["madrid"] = new google.maps.InfoWindow({
        content: '<h5>Madryt</h5>',
        maxWidth: 150
    });
    markers["madrid"] = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(40.4167754, -3.7037902),
        title: 'Madryt',
        icon: 'img/map_marker.png'
    });
    google.maps.event.addListener(
        markers["madrid"],
        "click",
        function () {
            if (latest == infowins["madrid"])
                if (latest)
                    latest.close();
            latest = infowins["madrid"];
            latest.open(map, markers["madrid"]);
        }
    );
    infowins["milano"] = new google.maps.InfoWindow({
        content: '<h5>Mediolan</h5>',
        maxWidth: 150
    });
    markers["milano"] = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(45.46427, 9.18951),
        title: 'Mediolan',
        icon: 'img/map_marker.png'
    });
    google.maps.event.addListener(
        markers["milano"],
        "click",
        function () {
            if (latest == infowins["milano"])
                if (latest)
                    latest.close();
            latest = infowins["milano"];
            latest.open(map, markers["milano"]);
        }
    );
    infowins["munich"] = new google.maps.InfoWindow({
        content: '<h5>Monachium</h5>',
        maxWidth: 150
    });
    markers["munich"] = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(48.1351253, 11.5819806),
        title: 'Monachium',
        icon: 'img/map_marker.png'
    });
    google.maps.event.addListener(
        markers["munich"],
        "click",
        function () {
            if (latest == infowins["munich"])
                if (latest)
                    latest.close();
            latest = infowins["munich"];
            latest.open(map, markers["munich"]);
        }
    );
    infowins["nis"] = new google.maps.InfoWindow({
        content: '<h5>Nisz</h5>',
        maxWidth: 150
    });
    markers["nis"] = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(43.3209022, 21.8957589),
        title: 'Nisz',
        icon: 'img/map_marker.png'
    });
    google.maps.event.addListener(
        markers["nis"],
        "click",
        function () {
            if (latest == infowins["nis"]);
            if (latest)
                latest.close();
            latest = infowins["nis"];
            latest.open(map, markers["nis"]);
        }
    );
    infowins["novi-sad"] = new google.maps.InfoWindow({
        content: '<h5>Nowy Sad</h5>',
        maxWidth: 150
    });
    markers["novi-sad"] = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(45.2671352, 19.8335496),
        title: 'Nowy Sad',
        icon: 'img/map_marker.png'
    });
    google.maps.event.addListener(
        markers["novi-sad"],
        "click",
        function () {
            if (latest == infowins["novi-sad"])
                if (latest)
                    latest.close();
            latest = infowins["novi-sad"];
            latest.open(map, markers["novi-sad"]);
        }
    );
    infowins["patras"] = new google.maps.InfoWindow({
        content: '<h5>Patras</h5>',
        maxWidth: 150
    });
    markers["patras"] = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(38.2466395, 21.734574),
        title: 'Patras',
        icon: 'img/map_marker.png'
    });
    google.maps.event.addListener(
        markers["patras"],
        "click",
        function () {
            if (latest == infowins["patras"])
                if (latest)
                    latest.close();
            latest = infowins["patras"];
            latest.open(map, markers["patras"]);
        }
    );
    infowins["podgorica"] = new google.maps.InfoWindow({
        content: '<h5>Podgorica</h5>',
        maxWidth: 150
    });
    markers["podgorica"] = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(42.4304196, 19.2593642),
        title: 'Podgorica',
        icon: 'img/map_marker.png'
    });
    google.maps.event.addListener(
        markers["podgorica"],
        "click",
        function () {
            if (latest == infowins["podgorica"])
                if (latest)
                    latest.close();
            latest = infowins["podgorica"];
            latest.open(map, markers["podgorica"]);
        }
    );
    infowins["riga"] = new google.maps.InfoWindow({
        content: '<h5>Ryga</h5>',
        maxWidth: 150
    });
    markers["riga"] = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(56.9496487, 24.1051864),
        title: 'Ryga',
        icon: 'img/map_marker.png'
    });
    google.maps.event.addListener(
        markers["riga"],
        "click",
        function () {
            if (latest == infowins["riga"])
                if (latest)
                    latest.close();
            latest = infowins["riga"];
            latest.open(map, markers["riga"]);
        }
    );
    infowins["sarajevo"] = new google.maps.InfoWindow({
        content: '<h5>Sarajewo</h5>',
        maxWidth: 150
    });
    markers["sarajevo"] = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(43.8562586, 18.4130763),
        title: 'Sarajewo',
        icon: 'img/map_marker.png'
    });
    google.maps.event.addListener(
        markers["sarajevo"],
        "click",
        function () {
            if (latest == infowins["sarajevo"])
                if (latest)
                    latest.close();
            latest = infowins["sarajevo"];
            latest.open(map, markers["sarajevo"]);
        }
    );
    infowins["skopje"] = new google.maps.InfoWindow({
        content: '<h5>Skopje</h5>',
        maxWidth: 150
    });
    markers["skopje"] = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(41.9973462, 21.4279956),
        title: 'Skopje',
        icon: 'img/map_marker.png'
    });
    google.maps.event.addListener(
        markers["skopje"],
        "click",
        function () {
            if (latest == infowins["skopje"])
                if (latest)
                    latest.close();
            latest = infowins["skopje"];
            latest.open(map, markers["skopje"]);
        }
    );
    infowins["tampere"] = new google.maps.InfoWindow({
        content: '<h5>Tampere</h5>',
        maxWidth: 150
    });
    markers["tampere"] = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(61.4977524, 23.7609535),
        title: 'Tampere',
        icon: 'img/map_marker.png'
    });
    google.maps.event.addListener(
        markers["tampere"],
        "click",
        function () {
            if (latest == infowins["tampere"])
                if (latest)
                    latest.close();
            latest = infowins["tampere"];
            latest.open(map, markers["tampere"]);
        }
    );
    infowins["thessaloniki"] = new google.maps.InfoWindow({
        content: '<h5>Saloniki</h5>',
        maxWidth: 150
    });
    markers["thessaloniki"] = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(40.6400629, 22.9444191),
        title: 'Saloniki',
        icon: 'img/map_marker.png'
    });
    google.maps.event.addListener(
        markers["thessaloniki"],
        "click",
        function () {
            if (latest == infowins["thessaloniki"])
                if (latest)
                    latest.close();
            latest = infowins["thessaloniki"];
            latest.open(map, markers["thessaloniki"]);
        }
    );
    infowins["tirana"] = new google.maps.InfoWindow({
        content: '<h5>Tirana</h5>',
        maxWidth: 150
    });
    markers["tirana"] = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(41.3275459, 19.8186982),
        title: 'Tirana',
        icon: 'img/map_marker.png'
    });
    google.maps.event.addListener(
        markers["tirana"],
        "click",
        function () {
            if (latest == infowins["tirana"])
                if (latest)
                    latest.close();
            latest = infowins["tirana"];
            latest.open(map, markers["tirana"]);
        }
    );
    infowins["trieste"] = new google.maps.InfoWindow({
        content: '<h5>Triest</h5>',
        maxWidth: 150
    });
    markers["trieste"] = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(45.6495264, 13.7768182),
        title: 'Trieste',
        icon: 'img/map_marker.png'
    });
    google.maps.event.addListener(
        markers["trieste"],
        "click",
        function () {
            if (latest == infowins["trieste"])
                if (latest)
                    latest.close();
            latest = infowins["trieste"];
            latest.open(map, markers["trieste"]);
        }
    );
    infowins["tuzla"] = new google.maps.InfoWindow({
        content: '<h5>Tuzla</h5>',
        maxWidth: 150
    });
    markers["tuzla"] = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(44.5374611, 18.6734688),
        title: 'Tuzla',
        icon: 'img/map_marker.png'
    });
    google.maps.event.addListener(
        markers["tuzla"],
        "click",
        function () {
            if (latest == infowins["tuzla"])
                if (latest)
                    latest.close();
            latest = infowins["tuzla"];
            latest.open(map, markers["tuzla"]);
        }
    );
    infowins["valencia"] = new google.maps.InfoWindow({
        content: '<h5>Walencja</h5>',
        maxWidth: 150
    });
    markers["valencia"] = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(39.46975, -0.37739),
        title: 'Walencja',
        icon: 'img/map_marker.png'
    });
    google.maps.event.addListener(
        markers["valencia"],
        "click",
        function () {
            if (latest == infowins["valencia"])
                if (latest)
                    latest.close();
            latest = infowins["valencia"];
            latest.open(map, markers["valencia"]);
        }
    );
    infowins["vienna"] = new google.maps.InfoWindow({
        content: '<h5>Wiedeń</h5>',
        maxWidth: 150
    });
    markers["vienna"] = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(48.2081743, 16.3738189),
        title: 'Wiedeń',
        icon: 'img/map_marker.png'
    });
    google.maps.event.addListener(
        markers["vienna"],
        "click",
        function () {
            if (latest == infowins["vienna"])
                if (latest)
                    latest.close();
            latest = infowins["vienna"];
            latest.open(map, markers["vienna"]);
        }
    );
    infowins["xanthi"] = new google.maps.InfoWindow({
        content: '<h5>Ksanti</h5>',
        maxWidth: 150
    });
    markers["xanthi"] = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(41.1300361, 24.8864902),
        title: 'Ksanti',
        icon: 'img/map_marker.png'
    });
    google.maps.event.addListener(
        markers["xanthi"],
        "click",
        function () {
            if (latest == infowins["xanthi"])
                if (latest)
                    latest.close();
            latest = infowins["xanthi"];
            latest.open(map, markers["xanthi"]);
        }
    );
    infowins["zagreb"] = new google.maps.InfoWindow({
        content: '<h5>Zagrzeb</h5>',
        maxWidth: 150
    });
    markers["zagreb"] = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(45.8150108, 15.9819189),
        title: 'Zagrzeb',
        icon: 'img/map_marker.png'
    });
    google.maps.event.addListener(
        markers["zagreb"],
        "click",
        function () {
            if (latest == infowins["zagreb"])
                if (latest)
                    latest.close();
            latest = infowins["zagreb"];
            latest.open(map, markers["zagreb"]);
        }
    );
}
