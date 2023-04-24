const dataFunc = {

    addDays(date: Date, days: number) {
        date.setDate(date.getDate() + days);
        return date;
    },

    removeDays(date: Date, days: number) {
        date.setDate(date.getDate() - days);
        return date;
    },

    sliceDate(date: Date) {
        return date.toISOString().slice(0, 10);
    }
}

export default dataFunc;

// ref https://horadecodar.com.br/2021/05/20/adicionar-dias-a-uma-date-de-javascript/