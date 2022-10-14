import {createServer} from "miragejs/server";


export function makeServer({environment="test"} = {}){
    let server = createServer({
        environment,
        models:{
            user:models,
        },
        seeds(server){
            server.create("user" , {name:"Abbas"});
            server.create("user" , {name:"Ali"});
        },
        routes(){
            this.namespace(api);

            this.get("/home" , (schema) =>{
                return schema.user.all;
            })
        }
    })
    return server
}