const form = document.getElementById('form');
        const weightInput = document.getElementById('weight');
        const heightInput = document.getElementById('height');
        const infos = document.getElementById('infos');

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const weight = parseFloat(weightInput.value);
            const height = parseFloat(heightInput.value);

            if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
                alert('Por favor, insira valores válidos para peso e altura.');
                return;
            }

            const bmi = (weight / (height * height)).toFixed(2);

            const value = document.getElementById('value');
            let description = '';

            value.classList.add('attention');
            infos.classList.remove('hidden');

            if (bmi < 18.5) {
                description = 'Cuidado! Você está abaixo do peso!';
            } else if (bmi >= 18.5 && bmi <= 25) {
                description = 'Você está no peso ideal!';
                value.classList.remove('attention');
                value.classList.add('normal');
            } else if (bmi > 25 && bmi <= 30) {
                description = 'Cuidado! Você está com sobrepeso!';
            } else if (bmi > 30 && bmi <= 35) {
                description = 'Cuidado! Você está com obesidade mórbida!';
            } else if (bmi > 35 && bmi <= 40) {
                description = 'Cuidado! Você está com obesidade severa!';
            } else {
                description = 'Cuidado! Você está com obesidade mórbida!';
            }

            value.textContent = bmi.replace('.', ',');
            document.getElementById('description').textContent = description;
        })