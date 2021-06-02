 /*
 SWITCH STATEMENTS
 */

 let friend = 'Kyle';

 switch (friend){
    case 'Tom':
        console.log('Hey Tom, when will you bring sourdough bread for me?');
        break; // means we are breaking out of the condition...that's what the switch means
    case 'Kenn':
        console.log('Hey Kenn, do you own a wolf in your backyard?');
        break; 
    case 'Alecx':
        console.log('Hey Alecx, how many Magic cards do you own?');
        break;
    default: //keyword that means else
        console.log(`I'm sorry ${friend}, but do I know you?`);
 }

 let yep = true;
//an ifelse statement written differently
 switch(typeof yep == 'string' || typeof yep == 'boolean'){
     case true:
         console.log('yep is a string or boolean')
         break; //in some situations, we may want to omit 'break' because we want the code to keep running
    default:
        console.log('yep is not a string or number');
 } 