function getClima() {
    $.ajax({

        method: 'get',
        crossDomain: true,
        url: 'http://api.openweathermap.org/data/2.5/weather?id=3468879&appid=e9f225541da1948ff1dce70d9d0a3f45&lang=pt_br',
        dataType: 'json',

        success: function (data) {

            console.log(data.weather[0].deion);

            let converterCelsius = (data.main.temp - 273.15);
            celsius = (Math.round(converterCelsius) + "C°");
            $('#temperatura').html(celsius);

            $('#condicao').html(data.weather[0].description);
            
            $('#velocidade').html(data.wind.speed + "m/s");
            $('#umidade').html(data.main.humidity + "%");

            let icone = 'icons/' + data.weather[0].icon  + '.png';
            $('#condicao').attr('src',icone);

            $('#nascer').html(data.sys.sunrise);

            $('#por').html(data.sys.sunset);
        },


        error: function (argument) {
            alert('Falha ao obter dados!');
        }
    });
}

window.onload = function () {
    getClima();
};