import { HttpService } from "./HttpService"

async function get() {
    return await HttpService.get('/Natjecanje')
    .then((odgovor)=>{

        return odgovor.data
    })
    .catch((e)=>{})
}

async function getBySifra(sifra) {
    return await HttpService.get('/Natjecanje/' + sifra)
    .then((odgovor)=>{
        return odgovor.data
    })
    .catch((e)=>{})
}


async function dodaj(natjecanje) {
    return await HttpService.post('/Natjecanje',natjecanje)
    .then((odgovor)=>{return true})
    .catch((e)=>{return false})
}

async function obrisi(sifra) {
    return await HttpService.delete('/Natjecanje/'+sifra)
    .then((odgovor)=>{return true})
    .catch((e)=>{return false})
}

async function promjeni(sifra,natjecanje) {
    return await HttpService.put('/Natjecanje/'+sifra, natjecanje)
    .then((odgovor)=>{return true})
    .catch((e)=>{return false})
}

export default{
    get,
    getBySifra,
    dodaj,
    obrisi,
    promjeni
}