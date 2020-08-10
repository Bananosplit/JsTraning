class SwapiServise {

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
    return  resp.results
  }

  getPersone(id){
    return this.getResourse(`/people/${id}`)
  }

  async getAllPlanets(){
    const resp = await this.getResourse(`/planets/`)
    return  resp.results
  }

  getPlanet(id){
    return this.getResourse(`/planets/${id}`)
  }

  async getAllPStarships(){
    const resp = await this.getResourse(`/starships/`)
    return  resp.results
  }

  getPlanet(id){
    return this.getResourse(`/starships/${id}`)
  }

}



const servise = new SwapiServise
servise.getPersone(3)
  .then(people => console.log(people.name))


  servise.getAllPlanets()
      .then(ships => {
        ships.forEach(ship => {
          console.log(ship.name)
        });
      })
