import { RestCountry } from "../interfaces/restCountry.interface";
import { Country } from "../interfaces/country.interface";

export const restCountryArrayToCountryArray = (restCountry: RestCountry[]): Country[] => {
    return restCountry.map(country => ({
        cca2: country.cca2,
        flag: country.flag,
        flagSvg: country.flags.svg,
        name: country.name.common,
        capital: country.capital.join(', '),
        population: country.population,
    }));
}

export const restCountryToCountry = (restCountry: RestCountry): Country => {
    return {
        cca2: restCountry.cca2,
        flag: restCountry.flag,
        flagSvg: restCountry.flags.svg,
        name: restCountry.name.common,
        capital: restCountry.capital.join(', '),
        population: restCountry.population,
    }
}