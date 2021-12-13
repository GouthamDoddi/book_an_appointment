export const patientName = Name => ({
    type: 'name',
    data: Name,
});

export const drK = data => ({
    type: 'dr.K',
    data: data,
});

export const drArunabGoswami = data => ({
    type: 'dr.Arunab Goswami',
    data: data
});

export const drGouthamDoddi = data => ({
    type: 'dr.Goutham Doddi',
    data: data
});

export const selectedDoctor = data => ({
    type: 'selectedDoctor',
    data: data
});

export const bookingData = data => ({
    type: 'bookingData',
    data : data ,
});