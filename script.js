(function(){
    var start = new Date(2017,9, 15, 22, 00);

    var timerHandler = function(){
        var target = document.querySelector(".well");
        var now = new Date(Date.now());

        var days = now.getDate() - start.getDate();
        days = (days >= 0) ? days : days + 30;

        var hours = now.getHours() - start.getHours();
        hours = (hours >= 0) ? hours : hours + 24;

        var minutes = now.getMinutes() - start.getMinutes();
        minutes = (minutes >= 0) ? minutes : minutes + 60;

        var seconds = now.getSeconds() - start.getSeconds();
        seconds = (seconds >= 0) ? seconds : seconds + 60;

        var daysSuffix = "дней";
        switch (days) {
            case 1:
                daysSuffix = "день";
                break;
            case 2:
            case 3:
            case 4:
                daysSuffix = "дня";
            default:
                break;
        }

        var hoursSuffix = "часов";
        switch (hours) {
            case 1:
            case 21:
                hoursSuffix = "час";
                break;
            case 2:
            case 3:
            case 4:
            case 22:
            case 23:
                hoursSuffix = "часа";
            default:
                break;
        }

        var minutesSuffix = "минут";
        switch (minutes) {
            case 1:
            case 21:
            case 31:
            case 41:
            case 51:
                minutesSuffix = "минуту";
                break;
            case 2:
            case 3:
            case 4:
            case 22:
            case 23:
            case 24:
            case 32:
            case 33:
            case 34:
            case 42:
            case 43:
            case 44:
            case 52:
            case 53:
            case 54:
            case 23:
                minutesSuffix = "минуты";
            default:
                break;
        }

        var secondsSuffix = "секунд";
        switch (seconds) {
            case 1:
            case 21:
            case 31:
            case 41:
            case 51:
                secondsSuffix = "секунду";
                break;
            case 2:
            case 3:
            case 4:
            case 22:
            case 23:
            case 24:
            case 32:
            case 33:
            case 34:
            case 42:
            case 43:
            case 44:
            case 52:
            case 53:
            case 54:
            case 23:
                secondsSuffix = "секунды";
            default:
                break;
        }

        target.innerHTML = days + " "+ daysSuffix + " " + hours + " " + hoursSuffix + " " + minutes + " " + minutesSuffix + " " + seconds + " " + secondsSuffix;
    };

    timerHandler();
    var timer = setInterval(timerHandler, 1000);
})();
