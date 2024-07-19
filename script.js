document.getElementById('temp-form').addEventListener('submit', function(e) {
  e.preventDefault();

  let temp = parseFloat(document.getElementById('temp-input').value);
  let unit = document.getElementById('unit').value;
  let celsius, fahrenheit, kelvin;

  if (unit === 'celsius') {
    celsius = temp;
    fahrenheit = (temp * 9/5) + 32;
    kelvin = temp + 273.15;
  } else if (unit === 'fahrenheit') {
    celsius = (temp - 32) * 5/9;
    fahrenheit = temp;
    kelvin = (temp - 32) * 5/9 + 273.15;
  } else if (unit === 'kelvin') {
    celsius = temp - 273.15;
    fahrenheit = (temp - 273.15) * 9/5 + 32;
    kelvin = temp;
  }

  document.getElementById('celsius-result').textContent = `Celsius: ${celsius.toFixed(2)} °C`;
  document.getElementById('fahrenheit-result').textContent = `Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
  document.getElementById('kelvin-result').textContent = `Kelvin: ${kelvin.toFixed(2)} K`;

  document.getElementById('results').classList.remove('hidden');
});
