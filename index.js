
const server = require('./src/app');
const sequelize = require('./src/db.js');


async function main(){
  try{
    
    
    sequelize.sync({ force: false }).then(() => {
      server.listen( process.env.PORT || 3001 , () => {
        // console.log(sequelize.models);
        // sequelize.sync({force:false}).then(() => {
        //   console.log('db conected');
        // }).catch(error => {
        //   console.log('NO DB CONECTED',error);
        // });
        console.log(process.env.PORT); // eslint-disable-line no-console
      });
      });
  } catch(error){
    console.log(error);
  }
  };

  main();
