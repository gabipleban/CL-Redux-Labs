// Miejsce na selektory:
// selectProducts - do wybierania/filtrownia produktów
// sum - do obliczania sumy
export const selectProducts = (state, price) => {
    if(price && Number(price)){
        return state.filter(product => {
            return product.price <= Number(price);
        })
    }else{
        return state;
    }
}
export const sum = (state, price) => selectProducts(state, price).reduce((acc, prev)=> Number(acc) + Number(prev.price), 0);