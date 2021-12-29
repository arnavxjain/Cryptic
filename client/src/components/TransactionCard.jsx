import useFetch from "../hooks/useFetch";
import { shortener } from "../utils/shortener";

const TransactionCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {

    const gifUrl = useFetch({ keyword });

    return (
        <div className="trans-card">
            <a href={`https://ropsten.etherscan.io/address/${addressFrom}`} target="_blank" rel="noopener norefferer">
                <p>
                    From: {shortener(addressFrom)}
                </p>
            </a>
            <a href={`https://ropsten.etherscan.io/address/${addressTo}`} target="_blank" rel="noopener norefferer">
                <p>
                    To: {shortener(addressTo)}
                </p>
            </a>
            <p>
                Amount: {amount} ETH
            </p>
            <p>
                Messagge: {message}
            </p>
            <img src={gifUrl || url} alt="img" />
            <span>{timestamp}</span>
        </div>
    )
}

export default TransactionCard;