import pegaArquivo from "./index.js";
import chalk from "chalk";
import validaURL from "./http-validacao.js";

const caminho = process.argv;

async function processaTexto(caminhoDoArquivo){
    const resultado = await pegaArquivo(caminhoDoArquivo[2]);
    
    if(caminho[3] === "validar"){
        console.log(chalk.bgBlueBright("Lista de validados"), await validaURL(resultado));
    }else{
    console.log(chalk.yellow("Lista de links"), resultado);
};   }

processaTexto(caminho);
