import './App.css';
import { useEffect, useState } from "react";
import { Contract, providers } from "ethers";

function App() {
  const [isWalletInstalled, setIsWalletInstalled] = useState(false);
// state for keeping track of current connected account.
const [account, setAccount] = useState(null);
useEffect(() => {
    if (window.ethereum) {
        setIsWalletInstalled(true);
    }
}, []);
async function connectWallet() {
    window.ethereum
        .request({
            method: "eth_requestAccounts",
        })
        .then((accounts) => {
            setAccount(accounts[0]);
        })
        .catch((error) => {
            alert("Something went wrong");
        });
}
if (account === null) {
  return (
        <div className="App"> 
          { 
              isWalletInstalled ? (
                <div className = "App">
                  <button className="button-27" 
                  onClick={connectWallet}>Connect Wallet</button> 
                 </div>

              ) : (
                  <p className='install'>Install Metamask wallet</p>
              )
          }
      </div>
  );
}
  return (
          <p className="connected">Connected as: {account}</p>

  );
}

export default App;