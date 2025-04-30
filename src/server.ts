import fastify from "fastify";
import { request } from "http";
import cors from '@fastify/cors';



const teams = [
    [
        { id: 1, name: 'Red Bull Racing' },
        { id: 2, name: 'Mercedes' },
        { id: 3, name: 'Ferrari' },
        { id: 4, name: 'McLaren' },
        { id: 5, name: 'Aston Martin' },
        { id: 6, name: 'Alpine' },
        { id: 7, name: 'Williams' },
        { id: 8, name: 'Haas' },
        { id: 9, name: 'Stake F1 Team' },
        { id: 10, name: 'Visa Cash App RB' } 
      ]
      
]

const drivers = [
    [
        { id: 1, name: 'Max Verstappen', team: 'Red Bull Racing', number: 1 },
        { id: 2, name: 'Liam Lawson', team: 'Red Bull Racing', number: 30 },
        { id: 3, name: 'George Russell', team: 'Mercedes', number: 63 },
        { id: 4, name: 'Andrea Kimi Antonelli', team: 'Mercedes', number: 12 },
        { id: 5, name: 'Charles Leclerc', team: 'Ferrari', number: 16 },
        { id: 6, name: 'Lewis Hamilton', team: 'Ferrari', number: 44 },
        { id: 7, name: 'Lando Norris', team: 'McLaren', number: 4 },
        { id: 8, name: 'Oscar Piastri', team: 'McLaren', number: 81 },
        { id: 9, name: 'Fernando Alonso', team: 'Aston Martin', number: 14 },
        { id: 10, name: 'Lance Stroll', team: 'Aston Martin', number: 18 },
        { id: 11, name: 'Pierre Gasly', team: 'Alpine', number: 10 },
        { id: 12, name: 'Jack Doohan', team: 'Alpine', number: 61 },
        { id: 13, name: 'Carlos Sainz Jr.', team: 'Williams', number: 55 },
        { id: 14, name: 'Alexander Albon', team: 'Williams', number: 23 },
        { id: 15, name: 'Esteban Ocon', team: 'Haas', number: 31 },
        { id: 16, name: 'Oliver Bearman', team: 'Haas', number: 87 },
        { id: 17, name: 'Nico Hülkenberg', team: 'Sauber', number: 27 },
        { id: 18, name: 'Gabriel Bortoleto', team: 'Sauber', number: 5 },
        { id: 19, name: 'Yuki Tsunoda', team: 'Visa Cash App RB', number: 22 },
        { id: 20, name: 'Isack Hadjar', team: 'Visa Cash App RB', number: 6 }
      ]
]

const server = fastify({logger: true});

server.get('/teams', async (request, response) => {
    response.type('aplication/json').code(200);

    return {teams}
})

server.register(require('@fastify/cors'), {
    origin: '*'
  });



server.get('/drivers', async (request, response) => {
    response.type('aplication/json').code(200);

    return {drivers}
})

interface driversParams {
    id : string;

}

server.get<{ Params: driversParams }>('/drivers/:id',  async (request, response) => {
  const id = parseInt(request.params.id)

  const driver = drivers[0].find(d => d.id === id);
  


  if(!driver){
    response.type('aplication/json').code(404);

    return { message: 'error driver not found '}
  }else{
    response.type('aplication/json').code(200);

    return {driver}
  }
})

interface teamParams {
    id : string;

}


server.get<{ Params: teamParams }>('/teams/:id',  async (request, response) => {
    const id = parseInt(request.params.id)
  
    const team = teams[0].find(t => t.id === id);
    
  
  
    if(!team){
      response.type('aplication/json').code(404);
  
      return { message: 'error team not found '}
    }else{
      response.type('aplication/json').code(200);
  
      return {team}
    }
  })



server.listen({port: 3000}, () => {
    console.log('sucesso o servidor está rodando na porta 3000');
})