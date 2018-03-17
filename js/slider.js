//Code responsible for slider animations
window.onload = function () {
    //event objects
    var checkThisOut2015 = {
        eventDate: 'Październik, 2015',
        eventName: 'Check This Out!',
        eventDescription: 'Przy wsparciu trójmiejskich firm, zorganizowaliśmy tygodniowy, międzynarodowy  warsztat dotyczący testowania oprogramowania. Poznaliśmy najbardziej popularne metody wyszukiwania i&nbsp;eliminowania błędów w&nbsp;kodzie.  Wykłady i&nbsp;warsztaty dostarczyły nam solidnych podstaw w&nbsp;tematyce testowania. Po wytężonym wysiłku odpoczywaliśmy, zwiedzając Trójmiasto oraz integrując się podczas wspólnych imprez.',
        eventImage: 'img/events/check_this_out.jpg'
    };

    var softSkills2017 = {
        eventDate: 'Maj - Czerwiec, 2017',
        eventName: 'Find A Job. But first... Soft Skills!',
        eventDescription: 'W&nbsp;ramach tego wydarzenia odbyło się pięć warsztatów poświęconych umiejętnościom przydatnym w&nbsp;czasie rekrutacji do pracy. Oprócz omówienia podstawowych kwestii jak tworzenie profesjonalnego CV i&nbsp;listu motywacyjnego, zdobyliśmy cenną wiedzę o&nbsp;autoprezentacji i&nbsp;zarządzaniu swoim czasem.',
        eventImage: 'img/events/soft_skills.jpg'
    };

    var sopotlica2017 = {
        eventDate: 'Listopad, 2017',
        eventName: 'Sopotlica',
        eventDescription: 'Był to weekend niesamowitej zabawy w&nbsp;międzynarodowym gronie. Gościliśmy 10 osób z&nbsp;różnych oddziałów EESTEC. Tradycyjnie, oprócz zwiedzania naszego miasta, zabraliśmy naszych gości nad morze. Natomiast wieczorem, integrowaliśmy się w&nbsp;polskiej stolicy imprez&nbsp;–&nbsp;Sopocie, zażywając prawdziwie studenckiego życia.',
        eventImage: 'img/events/sopotlica.jpg'
    };

    //array with all events
    var events = [
        checkThisOut2015,
        softSkills2017,
        sopotlica2017
    ];

    var eventImg = document.getElementById('event-img');
    var eventDate = document.getElementById('event-date');
    var eventName = document.getElementById('event-name');
    var eventDesc = document.getElementById('event-description');

    function setEventInfo() {
        eventImg.setAttribute('src', events[events.length - 1].eventImage);
        eventDate.innerHTML = events[events.length - 1].eventDate;
        eventName.innerHTML = events[events.length - 1].eventName;
        eventDesc.innerHTML = events[events.length - 1].eventDescription;
    }

    setEventInfo();

    var prevButton = document.getElementById('prev-btn');
    var nextButton = document.getElementById('next-btn');

    //changing events when clicking on buttons
    prevButton.addEventListener('click', function () {
        events.unshift(events[events.length - 1]);
        events.pop();
        setEventInfo();
    });

    nextButton.addEventListener('click', function () {
        events.push(events[0]);
        events.shift();
        setEventInfo();
    });
}
