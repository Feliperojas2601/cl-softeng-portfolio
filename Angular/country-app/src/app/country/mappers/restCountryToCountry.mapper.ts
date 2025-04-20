import { RestCountry } from "../interfaces/restCountry.interface";
import { Country } from "../interfaces/country.interface";

export const restCountryArrayToCountryArray = (restCountry: RestCountry[]): Country[] => {
    return restCountry.map(restCountryToCountry);
}

export const restCountryToCountry = (restCountry: RestCountry): Country => {
    return {
        cca2: restCountry.cca2,
        flag: restCountry.flag,
        flagSvg: restCountry.flags.svg,
        name: restCountry.name.common,
        capital: restCountry.capital.join(', '),
        population: restCountry.population,
        region: restCountry.region,
        subRegion: restCountry.subregion,
    }
}