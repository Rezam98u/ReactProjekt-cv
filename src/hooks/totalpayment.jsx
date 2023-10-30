import { useMemo } from 'react';

const TotalPayment = ({ sum }) => {
    const total_payment = useMemo(() => {
        return sum.map(item => item.quantity * item.price).reduce((acc, value) => acc + value, 0);
    }, [sum]);

    return total_payment
}

export default TotalPayment;
