document.getElementById('convert-btn').addEventListener('click', function() {
    const temp = parseFloat(document.getElementById('temperature').value);
    const scale = document.getElementById('scale').value;
    let convertedTemp = '';

    if (isNaN(temp)) {
        alert("Please enter a valid number for temperature.");
        return;
    }

    if (scale === 'Celsius') {
        convertedTemp = `${temp}°C is equal to ${(temp * 9/5 + 32).toFixed(2)}°F and ${(temp + 273.15).toFixed(2)}K`;
    } else if (scale === 'Fahrenheit') {
        convertedTemp = `${temp}°F is equal to ${((temp - 32) * 5/9).toFixed(2)}°C and ${(((temp - 32) * 5/9) + 273.15).toFixed(2)}K`;
    } else if (scale === 'Kelvin') {
        convertedTemp = `${temp}K is equal to ${(temp - 273.15).toFixed(2)}°C and ${((temp - 273.15) * 9/5 + 32).toFixed(2)}°F`;
    }

    document.getElementById('converted-temp').innerText = convertedTemp;
});
