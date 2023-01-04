
##  **Adding MetaMask connect button to React app**

First we will create a basic react application, and then we will add a connect to metamask button. The application will also check if MetaMask extension is installed or not. If it is not installed, the application will display a message to download the extension.

Once the account is connected, we will display the connected account address.

----------------------------------------------------------------------------------------------------------------------------------------------
Code:
```

import logo from './logo.svg';
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
              <button onClick={connectWallet}>Connect Wallet</button>
            ) : (
              <p>Install Metamask wallet</p>
            )
          }
 
        </div>
      );
    }
      return (
        <div className="App"> 
          <p>Connected as: {account}</p>
        </div>
    ); 
  }
export default App;

```
----------------------------------------------------------------------------------------------------------------------------------------------

The basic code has been done. We can style with CSS to look however we want.

### Output

![my-app](https://user-images.githubusercontent.com/85743319/210497516-23ac3287-b133-42fd-8ef4-460b6bbd18bf.png)


