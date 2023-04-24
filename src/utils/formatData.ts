// Retorna a data atual, com dia, mês e ano no padrões
// brasileiro e americano

const  dateFormats = {

    dateBr: () => {
        let date = new Date();
        let dateFormat =  date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();  
        
        return dateFormat;
    },
    dateUs: () => {
        let date = new Date();
        let dateFormat =  date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();  
        
        return dateFormat;
    }
};

export default dateFormats;