// Tutaj zaimplementuj akcje do aplikacji bankApp


const WITHDRAW = 'WITHDRAW';
const DEPOSIT = 'DEPOSIT';

const withdrawMoney= (ammount)=> (
    {
        type: WITHDRAW,
        payload: ammount
    }
)

const depositMoney = (ammount) => (
    {
        type: DEPOSIT,
        payload: ammount
    }
)


export { WITHDRAW, DEPOSIT, withdrawMoney, depositMoney };


