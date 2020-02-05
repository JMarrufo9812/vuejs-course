module.exports = {
  users: [
    {
      id: 1,
      email: "zedgi9812@gmail.com",
      name: "eliot",
      lastName: "Marrufo",
      password: "admin",
      phones: "9991048070",
      jobTittle: "desarrollador",
      country: "mexico"
    },
    {
      id: 2,
      email: "neutro9812@gmail.com",
      name: "josias",
      lastName: "Marrufo",
      password: "admin9812",
      phones: "9992734683",
      jobTittle: "desarrollador",
      country: "mexico"
    }
  ],
  contacts: [
    {
      id: 1,
      name: "daniel",
      lastName: "campos",
      email: "campitos@hotmail.com",
      phone: "9996142522",
      jobTitle: "desarrollador",
      company: "cervus",
      birthday: "2019-12-10",
      facebook: "https://www.facebook.com/CucurumbeTours/",
      linkedin: "https://linkedin.com/ELIOT",
      twitter: "https://twitter.com/selvaticacancun",
      whatsapp: "9996142522",
      labels: "Contactado",
      owner: "bernardo",
      manager: "jose",
      user_id: 1,
      date: new Date("2017-07-03")
    },
    {
      id: 2,
      name: "eduardo",
      lastName: "pech",
      email: "neutro9812@hotmail.com",
      phone: "9996142522",
      jobTitle: "desarrollador",
      company: "zedgi",
      birthday: "2019-12-10",
      facebook: "https://www.facebook.com/CucurumbeTours/",
      linkedin: "https://linkedin.com/ELIOT",
      twitter: "https://twitter.com/selvaticacancun",
      whatsapp: "9996142522",
      labels: "Contactado",
      owner: "bernardo",
      manager: "jose",
      user_id: 2,
      date: new Date("2020-01-01")
    },
    {
      id: 3,
      name: "franko",
      lastName: "campos",
      email: "fcampos@hotmail.com",
      phone: "9996134522",
      jobTitle: "desarrollador",
      company: "zedgi",
      birthday: "2019-12-10",
      facebook: "https://www.facebook.com/CucurumbeTours/",
      linkedin: "https://linkedin.com/ELIOT",
      twitter: "https://twitter.com/selvaticacancun",
      whatsapp: "9996142522",
      labels: "Contactado",
      owner: "bernardo",
      manager: "jose",
      user_id: 2,
      date: new Date("2020-01-01")
    }
  ],
  activity_stream: [
    {
      id: 1,
      data: 
        {
          actor: {
            type: "user",
            name: "eduardo",
            url: "/users/eduardo"
          },
          type: "add",
          object: {
            type: "contact",
            name: "frnko",
            url: "/contacts/franko"
          }
        }
      },
    {
      id: 2,
      data: 
        {
          actor: {
            type: "user",
            name: "Joe",
            url: "/users/:id"
          },
          type: "asigned",
          object: {
            type: "activity",
            name: "llamada de prueba",
            url: "/activities/:id"
          },
          target: {
            type: "contact",
            name: "franko",
            url: "/activities/:id"
          }
        }
    },
    {
      id: 3,
      data: 
        {
          actor: {
            type: "user",
            name: "Joe",
            url: "/users/:id"
          },
          type: "complete",
          object: {
            type: "activity",
            name: "reunion",
            url: "/activity/:id"
          },
          target: {
            type: "deal",
            name: "deal de prueba"
          },
          participants: {
            type: "contact",
            name: "raul mendoza",
            url: "/contacts/:id"
          }
        }
      
    },
    {
      id: 4,
      data: 
        {
          actor: {
            type: "user",
            name: "Joe",
            url: "/users/:id"
          },
          type: "update",
          object: {
            type: "deal",
            name: "deal de prueba",
            url: "/deals/:id"
          },
          item: "estado",
          itemBefore: "abierto",
          ItemAfter: "ganado"
        }
      
    },
    {
      id: 5,
      data: 
        {
          actor: {
            type: "user",
            name: "Joe",
            url: "/users/:id"
          },
          type: "update",
          object: {
            type: "contact",
            name: "franko",
            url: "/contacts/:id"
          },
          target: {
            type: "deal",
            name: "deal de prueba",
            url: "deals/:id"
          },
          item: "name",
          itemBefore: "franko",
          ItemAfter: "francisco"
        }
      
    }
  ]
};
