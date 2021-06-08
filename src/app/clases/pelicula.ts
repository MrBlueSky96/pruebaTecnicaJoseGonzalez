export class Pelicula {

    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: Date;
    species: [];
    starships: [];
    vehicles: [];
    characters: [];
    planets: [];
    url: string;
    created: string;
    edited: string;


    constructor(title: string,
        episode_id: number,
        opening_crawl: string,
        director: string,
        producer: string,
        release_date: Date,
        species: [],
        starships: [],
        vehicles: [],
        characters: [],
        planets: [],
        url: string,
        created: string,
        edited: string) {

        this.title = title,
        this.episode_id = episode_id;
        this.opening_crawl = opening_crawl;
        this.director = director;
        this.producer = producer;
        this.release_date = release_date;
        this.species = species;
        this.starships = starships;
        this.vehicles = vehicles;
        this.characters = characters;
        this.planets = planets;
        this.url = url;
        this.created = created;
        this.edited = edited;

    }

}
