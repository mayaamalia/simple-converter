function convert() {
    let usd = document.getElementById('usd').value;
    let idr = (usd * 15004.55).toFixed(0);
    document.getElementById('idr').value = (idr + " " +'rupiah');
}