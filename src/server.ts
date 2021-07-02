import { app } from './app';

const port = app.get('port');
const enviroment = app.get('env');

app.listen(port, () => {
  console.log(
    'Cyber Bank server is running at http://localhost:%d in %s mode', 
    port, 
    enviroment
  );
})
