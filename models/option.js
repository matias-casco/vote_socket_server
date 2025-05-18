import { v4 as uuidv4 } from 'uuid';


export class Option {

    constructor( name = 'no-name' ) {
        
        this.id = uuidv4(); // identificador único
        this.name  = name;
        this.votes = 0;
    }

}

