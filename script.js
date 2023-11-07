 let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
 let api_key = '7fa0d88a7ee6b771fc023b883eab44e0'
 let difKelvin = 273.15

 
 document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value
    if(ciudad){
        fetchDatosClima(ciudad)
    }
 })

 function fetchDatosClima(ciudad){
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then(data => data.json())
    .then(data => mostrarDatosClima(data))
 }

 function mostrarDatosClima(data){
        const divDatosCLima = document.getElementById('datosClima')
        divDatosCLima.innerHTML=''

        const ciudadNombre = data.name
        const temperatura = data.main.temp
        const descripcion = data.weather[0].description
        const humedad = data.main.humidity
        const paisNombre = data.sys.country
        const sensacionTermica = data.main.feels_like
        const icono = data.weather[0].icon 

        const ciudadTitulo = document.createElement('h2')
        ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`

        const temperaturaInfo = document.createElement('p')
        temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura - difKelvin)}°C`

        const sensTermicaInfo = document.createElement('p')
        sensTermicaInfo.textContent = `La sensación térmica: ${Math.floor(sensacionTermica - difKelvin)}°C`

        const humedadInfo = document.createElement('p')
        humedadInfo.textContent = `La humedad es: ${humedad}%`

        const descripcionInfo = document.createElement('p')
        descripcionInfo.textContent = `La descripcion meteorologica es: ${descripcion}`

        const iconoInfo = document.createElement('img')
        iconoInfo.src = `https://openweathermap.org/img/wn/${icono}@2x.png`

        divDatosCLima.appendChild(ciudadTitulo)
        divDatosCLima.appendChild(temperaturaInfo)       
        divDatosCLima.appendChild(sensTermicaInfo)       
        divDatosCLima.appendChild(descripcionInfo)
        divDatosCLima.appendChild(iconoInfo)
        divDatosCLima.appendChild(humedadInfo)

 }




