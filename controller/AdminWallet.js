const mongoose = require("mongoose");

// Get single user's Wallet
const AdminWallet = async (req, res) => {
  const { coin_name } = req.body;
  if (!coin_name) {
    res.status(501).json({ error: "Field is empty" });
  } else {
    const coinWallet = {
      BTC: {
        address: `128TUZbbpJ73zjEU1UUUJP2ftBYveTPXdC`,
      },
      USDT: {
        networks: {
          ERC20: {
            address: `0x60a3171d77c38c4BEB84c0102680d4F4dc75e3db`,
          },
          BEP20: {
            address: `0x121d60bd726b0f79ed9b94e607f2d2bf1d11133b`,
          },
        },
      },
      ETH: {
        address: `0x60a3171d77c38c4BEB84c0102680d4F4dc75e3db`,
      },
      SOL: {
        address: `3oN3ZxWVgMyZcw5qre1ty3bFokkmLPcVWkY94uKNXkYY`,
      },
      NEXO: {
        address: `0x121d60bd726b0f79ed9b94e607f2d2bf1d11133b`,
      },
      BNB: {
        address: `0x121d60bd726b0f79ed9b94e607f2d2bf1d11133b`,
      },
      BUSD: {
        address: `0x121d60bd726b0f79ed9b94e607f2d2bf1d11133b`,
      },
      USDC: {
        address: `0x121d60bd726b0f79ed9b94e607f2d2bf1d11133b`,
      },
    };
    try {
      if (coin_name === "BTC") {
        res.status(200).json(coinWallet.BTC);
      } else if (coin_name === "ETH") {
        res.status(200).json(coinWallet.ETH);
      } else if (coin_name === "BNB") {
        res.status(200).json(coinWallet.BNB);
      } else if (coin_name === "USDC") {
        res.status(200).json(coinWallet.USDC);
      } else if (coin_name === "NEXO") {
        res.status(200).json(coinWallet.NEXO);
      } else if (coin_name === "USDT") {
        res.status(200).json(coinWallet.USDT);
      } else if (coin_name === "SOL") {
        res.status(200).json(coinWallet.SOL);
      } else if (coin_name === " BUSD") {
        res.status(200).json(coinWallet.BUSD);
      }
    } catch (err) {
      res.status(501).json({ error: err.message });
    }
  }
};

const GetWallet = async (req, res) => {
  const coinWallet = {
    BTC: {
      address: `128TUZbbpJ73zjEU1UUUJP2ftBYveTPXdC`,
    },
    USDT: {
      networks: {
        ERC20: {
          address: `0x60a3171d77c38c4BEB84c0102680d4F4dc75e3db`,
        },
        BEP20: {
          address: `0x121d60bd726b0f79ed9b94e607f2d2bf1d11133b`,
        },
      },
    },
    ETH: {
      address: `0x60a3171d77c38c4BEB84c0102680d4F4dc75e3db`,
    },
    SOL: {
      address: `3oN3ZxWVgMyZcw5qre1ty3bFokkmLPcVWkY94uKNXkYY`,
    },
    NEXO: {
      address: `0x121d60bd726b0f79ed9b94e607f2d2bf1d11133b`,
    },
    BNB: {
      address: `0x121d60bd726b0f79ed9b94e607f2d2bf1d11133b`,
    },
    BUSD: {
      address: `0x121d60bd726b0f79ed9b94e607f2d2bf1d11133b`,
    },
    USDC: {
      address: `0x121d60bd726b0f79ed9b94e607f2d2bf1d11133b`,
    },
  };
  try {
    res.status(200).json(coinWallet);
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports = { AdminWallet, GetWallet };
