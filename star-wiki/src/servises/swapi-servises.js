export default class  SwapiServise {

    _apiBase = 'https://swapi.dev/api'
  
    async getResourse(url){
       const res = await fetch(`${this._apiBase}${url}`)
       if(!res.ok){
         throw new Error(`Could not fetch ${url}, resived ${res.status}`)
       }
  
       return await res.json()
    }
  
   async getAllPeople(){
      const resp = await this.getResourse(`/people/`)
      return  resp.results.map(this._peopleInfoTransform)
    }
  
    async getPersone(id){
      const people = await this.getResourse(`/people/${id}`)
      return this._peopleInfoTransform(people)
    }

  
    async getAllPlanets(){
      const resp = await this.getResourse(`/planets/`)
      return  resp.results.map(this._planetInfo)
    }
  
    async getPlanet(id){
      const planet = await this.getResourse(`/planets/${id}`)
      return this._planetInfoTransorm(planet)
    }
  

    async getAllStarships(){
      const resp = await this.getResourse(`/starships/`)
      return  resp.results.map(this._starshipInfoTransform)
    }
  
    async getStarship(id){
      const starship = await this.getResourse(`/starships/${id}`)
      return this._starshipInfoTransform(starship)
    }


    extractId(item){
      const idRegExp = /\/([0-9]*)\/$/
      const id = item.url.match(idRegExp)[1]

      return id
    }

    _planetInfoTransorm = (planet) => {
      return {
        id: this.extractId(planet),
        name: planet.name,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
        diametr: planet.diameter
      }
    }

    _peopleInfoTransform = (people) => {
      return {
        id: this.extractId(people),
        name: people.name,
        birthYear: people.birthYear,
        eyeColor: people.eyeColor

      }
    }

    _starshipInfoTransform = (starship) => {
      return {
        id: this.extractId(starship),
        name: starship.name,
        model: starship.model,
        manufacturer: starship.manufacturer,
        costInCredits: starship.costInCredits,
        length: starship.length,
        crew: starship.crew,
        passengers: starship.passengers,
        cargoCapacity: starship.cargoCapacity
      }
    }
  
  }