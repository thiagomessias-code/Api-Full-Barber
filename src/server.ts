import  express from 'express';
import routes from './routes';



const app = express();


// middlewares
app.use(express.json());
app.use(express());
//Entrar sempre
app.use(routes);


app.get( '/', (req, res) => {
return res.json({message: "Rodando"})
})




app.listen(8080, () => {
    console.log('Server started on port 8080')
});
