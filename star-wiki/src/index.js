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
