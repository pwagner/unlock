const paywallConfig = {
  network: 1,
  locks: {
    '0xB0114bbDCe17e0AF91b2Be32916a1e236cf6034F': {
      name: 'Unlock Community',
      network: 1,
    },
    '0xac1fceC2e4064CCd83ac8C9B0c9B8d944AB0D246': {
      name: 'Unlock Community',
      network: 100,
    },
  },
  icon: 'https://raw.githubusercontent.com/unlock-protocol/unlock/master/design/brand/1808-Unlock-Identity_Unlock-WordMark.svg',
  callToAction: {
    default:
      'Get the Unlock membership to get you access to our Discord, blog comments and more!',
  },
}

module.exports = paywallConfig
