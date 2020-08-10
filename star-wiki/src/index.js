  async getResourse(url){
     const res = await fetch(`${this._apiBase}${url}`)
     if(!res.ok){
       throw new Error(`Could not fetch ${url}, resived ${res.status}`)
     }

     return await res.json()
  }
