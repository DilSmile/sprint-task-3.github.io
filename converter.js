const RATES = {
    kzt_to_usd: 0.001902,
    kzt_to_eur: 0.001863,
    usd_to_kzt: 1 / 0.001902,
    eur_to_kzt: 1 / 0.001863,
    usd_to_eur: 0.9795, 
    eur_to_usd: 1.021
  };
  

  const kztInput = document.getElementById('kzt-input');
  const kztOutput = document.getElementById('kzt-output');
  const usdFromKzt = document.getElementById('usd-from-kzt');
  const eurFromKzt = document.getElementById('eur-from-kzt');
  kztInput.addEventListener('input', () => {
    const value = parseFloat(kztInput.value) || 0;
    kztOutput.value = value.toFixed(2);
    usdFromKzt.value = (value * RATES.kzt_to_usd).toFixed(2);
    eurFromKzt.value = (value * RATES.kzt_to_eur).toFixed(2);
  });
  
  const usdInput = document.getElementById('usd-input');
  const kztFromUsd = document.getElementById('kzt-from-usd');
  const usdOutput = document.getElementById('usd-output');
  const eurFromUsd = document.getElementById('eur-from-usd');
  usdInput.addEventListener('input', () => {
    const value = parseFloat(usdInput.value) || 0;
    usdOutput.value = value.toFixed(2);
    kztFromUsd.value = (value * RATES.usd_to_kzt).toFixed(2);
    eurFromUsd.value = (value * RATES.usd_to_eur).toFixed(2);
  });
  
  const eurInput = document.getElementById('eur-input');
  const kztFromEur = document.getElementById('kzt-from-eur');
  const usdFromEur = document.getElementById('usd-from-eur');
  const eurOutput = document.getElementById('eur-output');
  eurInput.addEventListener('input', () => {
    const value = parseFloat(eurInput.value) || 0;
    eurOutput.value = value.toFixed(2);
    kztFromEur.value = (value * RATES.eur_to_kzt).toFixed(2);
    usdFromEur.value = (value * RATES.eur_to_usd).toFixed(2);
  });
  