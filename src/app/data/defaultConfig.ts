
const defaultConfig = [
    {
      code: 'uf',
      name: 'Unidad de fomento (UF)',
      show: true,
      periodicity: 'day',
      calculator: true
    },
    {
      code: 'ivp',
      name: 'Indice de valor promedio (IVP)',
      show: true,
      periodicity: 'day',
      calculator: false
    },
    {
      code: 'dolar',
      name: 'Dólar observado',
      show: true,
      periodicity: 'day',
      calculator: true
    },
    // {
    //   // Descontinuado
    //   code: 'dolar_intercambio',
    //   name: 'Dólar acuerdo',
    //   show: false,
    // },
    {
      code: 'euro',
      name: 'Euro',
      show: true,
      periodicity: 'day',
      calculator: true
    },
    {
      code: 'ipc',
      name: 'Indice de Precios al Consumidor (IPC)',
      show: true,
      periodicity: 'month',
      calculator: false
    },
    {
      code: 'utm',
      name: 'Unidad Tributaria Mensual (UTM)',
      show: true,
      periodicity: 'month',
      calculator: true
    },
    {
      code: 'imacec',
      name: 'Imacec',
      show: true,
      periodicity: 'month',
      calculator: false
    },
    {
      code: 'tpm',
      name: 'Tasa Política Monetaria (TPM)',
      show: true,
      periodicity: 'day',
      calculator: false
    },
    {
      code: 'libra_cobre',
      name: 'Libra de Cobre',
      show: true,
      periodicity: 'day',
      calculator: false
    },
    {
      code: 'tasa_desempleo',
      name: 'Tasa de desempleo',
      show: true,
      periodicity: 'month',
      calculator: false
    },
    {
      code: 'bitcoin',
      name: 'Bitcoin',
      show: true,
      periodicity: '3day',
      calculator: true
    },
];

export default defaultConfig;